import storage from "./libs/storage.js";

const config = {
    random: true,
    newMode: false,
    subject: storage.get("subject", "network"),

    cat: "new",
    mode: storage.get("mode", "ADD_NEW"),
    timezone: ""
}

config.cat = storage.get(config.subject + "_cat", "new");

export { config };
