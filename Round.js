import { cards } from "./cards/data.js";
import Timer from "./Timer.js";

const timerEL = document.getElementById("roundTimer");

function getRecordKey() {
    return cards.subject + "_" + cards.data.length + "_" + cards.keys.sort().join("_")
}

export default class Round {
    constructor( info ) {
        this.round = 0;
        this.pointer = 0;
        this.answer = false;
        this.info = info;

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
        const content = this.answer ? card[1] : card[0];

        this.answer
            ? this.info.cardEL.classList.add("answer")
            : this.info.cardEL.classList.remove("answer");

        this.info.currentNumberEL.textContent = (this.pointer + 1).toString();
        // Render LaTeX
        this.render( content );
    }

    render( content ) {
        this.info.cardEL.innerHTML = "";
        if( content.startsWith("image:") ) {
            // Render Image
            this.info.cardEL.classList.remove("render-latex");
            this.info.cardEL.classList.remove("render-text");
            this.info.cardEL.classList.add("render-image");
            this.renderImage( content.slice(6) );
        } else if ( content.startsWith("text:") ) {
            this.info.cardEL.classList.remove("render-latex");
            this.info.cardEL.classList.remove("render-image");
            this.info.cardEL.classList.add("render-text");

            this.renderText( content.slice(5) );
        } else {
            this.info.cardEL.classList.remove("render-text");
            this.info.cardEL.classList.remove("render-image");
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
        this.info.cardEL.innerText = text;
    }

    renderLatex( content ) {
        const cardEL = this.info.cardEL;

        MathJax.texReset();
        var options = MathJax.getMetricsFor(cardEL);
        MathJax.tex2svgPromise(content, options).then(function (node) {
            //
            //  The promise returns the typeset node, which we add to the output
            //  Then update the document to include the adjusted CSS for the
            //    content of the new equation.
            //
            cardEL.appendChild(node);
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
        this.answer = false;
        this.pointer --;
        if( this.pointer <= 0 ) this.pointer = cards.data.length - 1;
        this.update();
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

        this.timer.restart();
        this.info.roundCounterEL.textContent = this.round;
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

    go() {
        this.answer ? this.next() : this.flip();
    }

}