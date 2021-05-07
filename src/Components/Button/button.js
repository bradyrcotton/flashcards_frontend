import React from 'react';
import './button.css';


function SelectCollection(props){
    console.log('BUTTON PROPS', props);
    
    return(
        <div className="row row-spacer">
            <div className="col-md-4">
                <button onClick={() => props.filterCollectionById(props.collection)}>Choose This Collection</button>
            </div>
        </div>
    )
}


export default SelectCollection;