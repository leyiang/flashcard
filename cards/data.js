import { config } from "../config.js";
import { import_map } from "./import_map.js";

let card_packs = import_map[ config.subject ];

// config.mode.RECITE_THOUGHT = true;

if( config.mode.ADD_NEW ) {
    config.random = false;
    config.new = true;
} else if( config.mode.RECITE_NEW ) {
    config.random = true;
    config.new = true;
} else if( config.mode.RECITE_ALL ) {
    config.random = true;
    config.new = false;
} else if( config.mode.RECITE_THOUGHT ) {
    config.random = true;
    config.new = false;
}

if( config.new ) {
    card_packs = card_packs.filter(pack => pack.name === "new" );
} else if ( config.mode.RECITE_THOUGHT ) {
    card_packs = card_packs.filter(pack => pack.name !== "new" );
    card_packs = card_packs.filter(pack => pack.name === "thought");
} else {
    card_packs = card_packs.filter(pack => pack.name !== "new" );
    card_packs = card_packs.filter(pack => pack.name !== "thought" );
}

// config.random = false;

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

const subjects = Object.keys( import_map );

subjects.forEach(subject => {
    const current = subject === config.subject;
    $(".selectpicker").append(`<option ${current ? 'selected' : '' }>${ subject }</option>`);
});

$(".selectpicker").on("change", function(e){
    // this.value
    localStorage.setItem("subject", this.value);
    location.reload();
});

export { cards, subjects };