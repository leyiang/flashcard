const config = {
    random: true,
    newMode: false,
    subject: "network",

    mode: "ADD_NEW",
}

config.mode = localStorage.getItem("mode") || "ADD_NEW";

const subject = localStorage.getItem("subject");
if( subject ) config.subject = subject;

export { config };
