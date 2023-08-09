import { cards } from "./cards/data.js";
import Timer from "./Timer.js";
import { config } from "./config.js";

const timerEL = document.getElementById("roundTimer");

function getRecordKey() {
    // return cards.subject + "_" + cards.data.length + "_" + cards.keys.sort().join("_")
    return cards.subject + cards.keys.sort().join("_")
}

function getRoundKey() {
    return getDateString() + "_" + config.subject + "_" + config.mode + "_round";
}

function getDateString() {
    const date = new Date();
    return date.getFullYear() + "-" + (date.getMonth()+1).toString().padStart(2, "0") + "-" + (date.getDate()+1).toString().padStart(2, "0");
}

document.querySelector(".remove-record").addEventListener("click", () => {
    const key = getRecordKey();
    localStorage.removeItem( key );
    document.getElementById("recordTimer").textContent = Timer.Format(0);
});

export default class Round {
    constructor( info ) {
        const todayRound = localStorage.getItem(getRoundKey()) || 0;
        this.round = isNaN(todayRound) ? 0 : parseInt(todayRound);
        info.roundCounterEL.textContent = this.round;
        this.pointer = 0;
        this.answer = false;
        this.info = info;
        this.answerIndex = 0;

        this.confetti = new JSConfetti();
        this.timer = new Timer(() => {
            timerEL.textContent = Timer.Format( this.timer.seconds );
        });
    }

    start() {
        // Store
        const keys_local = getRecordKey();
        const record = localStorage.getItem(keys_local );
        this.info.recordEL.textContent = Timer.Format(record);

        // Set Total Card Number
        this.info.totalNumberEL.textContent = cards.data.length.toString();

        this.timer.start();
        this.update();
    }

    update() {
        const card = cards.data[ this.pointer ];
        if( ! card ) return;
        const content = this.answer ? card[1 + this.answerIndex ] : card[0];

        this.answer
            ? this.info.cardEL.classList.add("answer")
            : this.info.cardEL.classList.remove("answer");

        let ansNum = Math.max(0, Math.max(0, card.length - 1));
        console.log( ansNum );
        this.info.cardEL.style.setProperty("--total", ansNum);
        this.info.cardEL.style.setProperty("--current", this.answerIndex + 1);

        this.info.currentNumberEL.textContent = (this.pointer + 1).toString();
        // Render LaTeX
        this.render( content );
    }

    render( content ) {
        this.info.cardEL.innerHTML = "";
        this.info.cardEL.classList.remove("too-long");
        this.info.cardEL.classList.remove("render-text");
        this.info.cardEL.classList.remove("render-latex");
        this.info.cardEL.classList.remove("render-image");

        if( ["network", "algo", "phl"].includes(config.subject) ) {
            if( ! content.startsWith("image") ) {
                content = "text:" + content;
            }
        }

        if( content.startsWith("image:") ) {
            // Render Image
            this.info.cardEL.classList.add("render-image");
            const url = content.slice(6);
            this.renderImage( url );
        } else if ( content.startsWith("text:") ) {
            this.info.cardEL.classList.add("render-text");
            this.renderText( content.slice(5) );
        } else {
            this.info.cardEL.classList.add("render-latex");
            this.renderLatex(`\\displaylines{${content}}`);
        }
    }

    renderImage( fname ) {
        const image = document.createElement("img");
        image.src = "./images/" + fname;

        this.info.cardEL.appendChild( image );
    }


    renderText( text ) {

        const info = this.info;

        if( /\$(.*)\$/.test(text) ) {
            text = text.replaceAll("\n", "<br>");

            let list = text.match(/\$(.*?)\$/g)
                .map(str => str.slice(1, -1))
                .map(latex => MathJax.tex2svgPromise(latex, {}));

            Promise.all(list).then((nodeList) => {
                text = text.replaceAll(/\$(.*?)\$/g, _ => {
                    const node = nodeList.shift();
                    const div = document.createElement("div");
                    div.append( node );
                    div.appendChild( node );
                    return div.firstElementChild.innerHTML;
                });

                const wrap = document.createElement("p");
                wrap.classList.add("text-wrap");
                wrap.innerHTML = text;
                info.cardEL.appendChild( wrap );
            });
        } else {
            const wrap = document.createElement("p");
            wrap.classList.add("text-wrap");
            wrap.innerText = text;
            info.cardEL.appendChild( wrap );
        }

        // new Promise((resolve) => {
        //     text.replace(/\$(.*)\$/g, (_, latex ) => {
        //     });
        // }).then(() => {
        //     console.log( text );
        // });
    }

    renderLatex( content ) {
        const cardEL = this.info.cardEL;
        const info = this.info;
        const test = this.info.roundCounterEL;

        MathJax.texReset();
        var options = MathJax.getMetricsFor(cardEL);
        MathJax.tex2svgPromise(content, options).then(function (node) {
            //
            //  The promise returns the typeset node, which we add to the output
            //  Then update the document to include the adjusted CSS for the
            //    content of the new equation.
            //
            cardEL.appendChild(node);

            // 918 means width is out-of bound
            // test.innerText = node.getBoundingClientRect().width;
            // info.totalNumberEL.innerText = 123;
            // info.recordEL.innerText = window.innerWidth;

            const svg = node.firstElementChild;
            const width = svg.getBoundingClientRect().width;
            if( config.mode.ADD_NEW && width > 918 ) {
                console.log( width, svg );
                cardEL.classList.add("too-long");
            }

            MathJax.startup.document.clear();
            MathJax.startup.document.updateDocument();
        }).catch(function (err) {
            //
            //  If there was an error, put the message into the output instead
            //
            cardEL.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
        }).then(function () {
        });
    }

    prev() {
        if( this.answer ) {
            if( this.answerIndex > 0 ) {
                this.answerIndex--;
                this.update();
            } else {
                this.flip();
            }
        } else {
            this.answer = true;
            this.pointer --;
            if( this.pointer < 0 ) this.pointer = cards.data.length - 1;
            let card = cards.data[ this.pointer ];
            this.answerIndex = card.length - 2;
            this.update();
        }
    }

    restart() {
        this.round ++;
        this.pointer = 0;

        cards.data = shuffle( cards.data );

        // Play Confetti Animation Per Round
        this.confetti.addConfetti();

        // Record & Restart Timer
        let store_seconds = this.timer.seconds;
        const timer_key = getRecordKey();
        const old = localStorage.getItem( timer_key ) || null;

        let old_num = parseInt( old );
        if( ! isNaN(old_num) ) {
            store_seconds = Math.min( old_num, store_seconds );
        }
        localStorage.setItem( timer_key, store_seconds.toString() );
        this.info.recordEL.textContent = Timer.Format( store_seconds );

        console.log( this.round );
        this.timer.restart();
        this.info.roundCounterEL.textContent = this.round;
        // Store today-round
        const round_key = getRoundKey();
        localStorage.setItem( round_key, this.round );
    }

    flip() {
        this.answer = !this.answer;
        this.update();
    }

    next() {
        this.answer = false;
        this.pointer ++;
        if( this.pointer >= cards.data.length ) this.restart();
        this.update();
    }

    nextAnswer() {
        this.answerIndex ++;
        this.update();
    }

    go() {
        if( this.answer ) {
            const card = cards.data[ this.pointer ];
            const ansNum = Math.max(0, card.length - 1);

            if( this.answerIndex < ansNum - 1 ) {
                this.nextAnswer();
            } else {
                this.answerIndex = 0;
                this.next();
            }
        } else {
            this.flip();
        }
    }

}
