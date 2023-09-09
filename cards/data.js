import { config } from "../config.js";
import { import_map } from "./import_map.js";

let card_packs = import_map[ config.subject ];

// Subject does not exists
if( ! card_packs ) {
    card_packs = import_map[ Object.keys(import_map)[0] ];
}

config.random = true;
config.reverse = false;

if( config.mode === "ADD_NEW" ) {
    config.cat = "new";
    config.random = false;
} else if( config.mode === "RECITE_NEW" ) {
    config.cat = "new";
} else if( config.mode === "DEV" ) {
    config.random = false;
} else if (config.mode === "TRAIN" ) {
    config.random = false;
    config.reverse = true;
}

card_packs = card_packs.filter(pack => pack.name === config.cat);

const cards = {
    subject: config.subject,
    data: [],
    keys: card_packs.map( pack => pack.name )
};

card_packs.forEach(card_pack => {
    cards.data.push( ...card_pack.cards );
});

/** Shuffle **/
if( config.random ) {
    cards.data = shuffle( shuffle(cards.data) );
    shuffleArray( cards.data );
}

if( config.reverse ) {
    cards.data.reverse();
}

const subjects = Object.keys( import_map );

subjects.forEach(subject => {
    const current = subject === config.subject;
    $("#subjectPicker").append(`<option ${current ? 'selected' : '' }>${ subject }</option>`);
});

const subjectContent = import_map[config.subject] || [];
const catList = subjectContent.map(item => item.name);

catList.forEach( cat => {
    const current = cat === config.cat;
    $("#catPicker").append(`<option ${current ? 'selected' : '' }>${ cat }</option>`);
});

$("#subjectPicker").on("change", function(e){
    // this.value
    localStorage.setItem("subject", this.value);
    localStorage.removeItem("dev_id");
    localStorage.removeItem("dev_answer_index");
    location.reload();
});

$("#catPicker").on("change", function(e){
    localStorage.setItem(config.subject + "_cat", this.value);
    localStorage.removeItem("dev_id");
    localStorage.removeItem("dev_answer_index");
    location.reload();
});

export { cards, subjects };
