import Round from "./Round.js";

const cardEL = document.getElementById("card");

const round = new Round({
    cardEL,
    currentNumberEL: document.querySelector(".current-card-number"),
    totalNumberEL: document.querySelector(".total-card-number"),
    roundCounterEL: document.querySelector(".round-counter"),
    recordEL: document.getElementById("recordTimer")
});


function event() {
    cardEL.addEventListener("click", e => {
        round.go();
    });

    document.addEventListener("keydown", e => {
        if( e.key === " " ) {
            round.go();
        }

        if( e.key === "ArrowRight" ) {
            round.go();
        }

        if( e.key === "ArrowLeft" ) {
            round.prev();
        }
    });
}

event();
round.start();