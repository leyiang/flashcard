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

let cli_showing = false;
const cli = document.querySelector(".web-cli");
const command = cli.querySelector("#command");

function setSubject(subject) {
    localStorage.setItem("subject", subject);
    location.reload();
}

cli.addEventListener("submit", e => {
    e.preventDefault();
    const line = command.value.trim();
    command.value = "";

    let fn = {
        all:() => {
            setMode("RECITE_ALL");
        },
        "new": () => {
            setMode("RECITE_NEW")
        },
        add: () => {
            setMode("ADD_NEW")
        }
    }[line];

    if( line[0] === ":" ) {
        fn = () => {
            setSubject( line.slice(1) );
        };
    }

    fn?.();
});

function showCli() {
    cli.style.visibility = "visible";
    command.focus();
    cli_showing = true;
}

function hideCli() {
    cli.style.visibility = "hidden";
    cli_showing = false;
}

// let justClickedESC = false;
//
// command.addEventListener("keydown", e => {
//     console.log( 11 );
//     if( e.key === "Escape" ) {
//         justClickedESC = true;
//         setTimeout(() => {
//             justClickedESC = false;
//             console.log("clear out");
//         }, 50 );
//     }
// });

command.addEventListener("blur", e => {
    hideCli();
});

document.addEventListener("keydown", e => {
    // if( e.key.toLowerCase() === "w" && e.altKey ) {

    if( e.key.toLowerCase() === "/" ) {
        e.preventDefault();
        if( cli_showing ) {
            hideCli();
        } else {
            showCli();
        }
    }
});
