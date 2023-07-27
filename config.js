const config = {
    random: true,
    newMode: false,
    subject: "math",
    // subject: "network",
    mode: {
        ADD_NEW: false,
        RECITE_NEW: false,
        RECITE_ALL: false,
    }
}

const mode = localStorage.getItem("mode");
config.mode[ mode ] = true;

config.random = false;
config.newMode = true

export { config };
