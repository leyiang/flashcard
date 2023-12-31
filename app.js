import Round from "./Round.js";
import storage from "./libs/storage.js";
import { config } from "./config.js";

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
        if( e.target.tagName === "A" ) {
            // Current Nothing To Do, Just Empty
        } else {
            round.go();
        }
    });

    document.addEventListener("keydown", e => {
        if( e.key === "Home" ) {
            if( config.mode == "DEV" || config.mode == "TRAIN" ) {
                storage.remove("dev_id");
                storage.remove("dev_answer_index");
                location.reload();
            }
        }

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

function setMode( mode ) {
    localStorage.setItem("mode", mode );
    location.reload();
}

const oldMode = localStorage.getItem("mode");
document.querySelectorAll(".radio-group input").forEach( radio => {
    if( radio.id === oldMode ) radio.checked = true;

    radio.addEventListener("input", e => {
        setMode(radio.id);
    });
});


const command = new Command(
    document.querySelector(".web-cli")
);

function setSubject(subject) {
    localStorage.setItem("subject", subject);
    localStorage.removeItem("dev_id");
    localStorage.removeItem("dev_answer_index");
    location.reload();
}

command.on("all", () => {
    setMode("RECITE_ALL");
});

command.on("new", () => {
    setMode("RECITE_NEW")
});

command.on("dev", () => {
    setMode("DEV")
});

command.on("add", () => {
    setMode("ADD_NEW")
});

command.on("subject", subject => {
    setSubject(subject);
});
