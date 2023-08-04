const config = {
    random: true,
    newMode: false,
    subject: "network",
    mode: {
        ADD_NEW: false,
        RECITE_NEW: false,
        RECITE_ALL: false,
    },
}

const mode = localStorage.getItem("mode");
config.mode[ mode ] = true;

const subject = localStorage.getItem("subject");
if( subject ) config.subject = subject;

config.random = false;
config.newMode = true

export { config };
