import React from 'react';
import CardFilter from '../CardFilter'
import './button.css';


function SelectCollection(props){
    console.log('select',props.collection)
    console.log('card',props.card)
    return(
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={() => CardFilter(props.collection)}>Choose This Collection</button>
                {/* <CardFilter collection={props.collection} cards={props.card}/> */}
            </div>
        </div>
    )
}

export default SelectCollection;