import { config } from "../config.js";
import { import_map } from "./import_map.js";

let card_packs = import_map[ config.subject ];

if( config.mode.ADD_NEW ) {
    config.random = false;
    config.new = true;
} else if( config.mode.RECITE_NEW ) {
    config.random = true;
    config.new = true;
} else if( config.mode.RECITE_ALL ) {
    config.random = true;
    config.new = false;
}

if( config.new ) {
    card_packs = card_packs.filter(pack => pack.name === "new" );
} else {
    card_packs = card_packs.filter(pack => pack.name !== "new" );
}

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

export { cards };