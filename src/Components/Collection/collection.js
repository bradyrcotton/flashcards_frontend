import React from 'react';
import SelectCollection from '../Button/button';
import './collection.css'


const Collection = (props) =>{
    console.log('COLLECTION PROPS',props)
    
    return (
        <div>
            <h1>{props.collection.title}</h1>
            <SelectCollection 
                collection={props.collection.id} 
                cards={props.card} 
                filterCollectionById={props.filterCollectionById}
            />
        </div>
            
            
            
            
               
    );
    
}

export default Collection;