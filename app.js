const dApp = document.getElementById("app");
const dCard = document.getElementById("card");
const dRoundCounter = document.querySelector(".round-counter");
const currentNumber = document.querySelector(".current-card-number");
const totalNumber = document.querySelector(".total-card-number");

/**
 * dev 指在添加新的卡片内容，为了方便测试，不要随机打乱
 */
let cards = data.dev
    ? data.slice()
    : shuffle( shuffle( data.slice() ) );

let round = 0;
let pointer = 0;
let answer = false;

const timer = {
    seconds: 0,
    started: false,
    el: document.getElementById("roundTimer"),
};

// Confetti Animation
const confetti = new JSConfetti();

// Set Total Card Number
totalNumber.textContent = cards.length.toString();

const recordTimer = document.getElementById("recordTimer");

function update() {
    if( pointer === 0 ) {
        const keys_local = keys.sort().join("_");
        const record = localStorage.getItem(keys_local );
        recordTimer.textContent = formatTimeString(record);
    }

    const card = cards[pointer];
    const content = answer ? card[1] : card[0];
    answer ? dCard.classList.add("answer") : dCard.classList.remove("answer");

    currentNumber.textContent = (pointer + 1).toString();
    // Render LaTeX
    render( content );
}

function render( content ) {
    dCard.innerHTML = "";
    if( content.startsWith("image:") ) {
        // Render Image
        renderImage( content.slice(6) );
    } else if ( content.startsWith("text:") ) {
        renderText( content.slice(5) );
    } else {
        renderLatex( content );
    }
}

function renderImage( fname ) {
    const image = document.createElement("img");
    image.src = "./images/" + fname;

    dCard.appendChild( image );
}


function renderText( text ) {
    dCard.innerText = text;
}

function renderLatex( content ) {
    MathJax.texReset();
    var options = MathJax.getMetricsFor(dCard);
    MathJax.tex2svgPromise(content, options).then(function (node) {
        //
        //  The promise returns the typeset node, which we add to the output
        //  Then update the document to include the adjusted CSS for the
        //    content of the new equation.
        //
        dCard.appendChild(node);
        MathJax.startup.document.clear();
        MathJax.startup.document.updateDocument();
    }).catch(function (err) {
        //
        //  If there was an error, put the message into the output instead
        //
        dCard.appendChild(document.createElement('pre')).appendChild(document.createTextNode(err.message));
    }).then(function () {
    });
}

function flip() {
    answer = !answer;
    update();
}

function restart() {
    round ++;
    pointer = 0;

    cards = shuffle( cards );

    // Play Confetti Animation Per Round
    confetti.addConfetti();

    // Record & Restart Timer
    let store_seconds = timer.seconds;
    const timer_key = keys.sort().join("_");
    const old = localStorage.getItem( timer_key ) || null;

    let old_num = parseInt( old );
    if( ! isNaN(old_num) ) {
        store_seconds = Math.min( old_num, store_seconds );
    }
    localStorage.setItem( timer_key, store_seconds.toString() );

    timer.seconds = 0;
    updateTimer();

    dRoundCounter.textContent = round;
    setTimeout(() => {
        dApp.classList.remove("done");
    }, 500 );
}

function prev() {
    answer = false;
    pointer --;
    if( pointer <= 0 ) pointer = cards.length - 1;
    update();
}

function formatTimeString( seconds ) {
    let overflow = false;
    let minutes = Math.floor( seconds / 60 );

    if( minutes > 99 ) {
        minutes = 99;
        overflow = true;
    }

    let sec = overflow ? 59 : seconds % 60;

    return minutes.toString().padStart(2, "0")
        + ":"
        + sec.toString().padStart(2, "0");
}

function updateTimer() {
    timer.el.textContent = formatTimeString( timer.seconds );
}

function next() {
     answer = false;
     pointer ++;
     if( pointer >= cards.length ) restart();
     update();
}

function go() {
    answer ? next() : flip();
}

function event() {
    dCard.addEventListener("click", e => {
        go();
    });

    document.addEventListener("keydown", e => {
        if( e.key === " " ) {
            go();
        }

        if( e.key === "ArrowRight" ) {
            go();
        }

        if( e.key === "ArrowLeft" ) {
            prev();
        }
    });
}

event();
update();

timer.started = true;
timer.tid = setInterval(() => {
    timer.seconds ++;
    updateTimer();
}, 1000 );
