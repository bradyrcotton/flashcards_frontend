import React from 'react';
import CardTable from './CardTable';


function CardFilter(props){
    console.log('filter',props)
    console.log('card',props.card)
   
    let collection = [
        {
            id: props.collection
        }
    ];
    let cards = [
        {
            id: props.card.id,
            word: props.card.word,
            definition: props.card.definition,
            collection: props.card.collection
        }
    ];

}

export default CardFilter;