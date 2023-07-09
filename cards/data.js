import pack_arc from "./pack_arc.js"
import pack_basic from "./pack_basic.js"
import pack_thought from "./pack_thought.js"
import pack_calc from "./pack_calc.js"
import pack_integral from "./pack_integral.js"
import pack_log from "./pack_log.js"
import pack_new from "./pack_new.js"
import pack_series from "./pack_series.js"
import pack_trig from "./pack_trig.js"

const card_packs = [
    pack_arc,
    // pack_basic,
    // pack_thought,
    // pack_calc,
    // pack_integral,
    // pack_log,
    // pack_new,
    // pack_series,
    // pack_trig,
];

const cards = {
    dev: false,
    data: [],
    keys: card_packs.map( pack => pack.name )
};

card_packs.forEach(card_pack => {
    cards.data.push( ...card_pack.cards );
});

/** Shuffle **/
if( ! cards.dev ) {
    cards.data = shuffle( shuffle(cards.data) );
}

export { cards };