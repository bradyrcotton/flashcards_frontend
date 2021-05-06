import React from 'react';
import CardFilter from './CardFilter'


const CardTable = (props) => {
    <CardFilter card={props.card}/>
    console.log('table',props)
    return (
        props.mapCollections()  
        );
        
    }

export default CardTable;