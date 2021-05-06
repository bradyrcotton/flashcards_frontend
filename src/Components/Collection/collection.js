import React from 'react';
import SelectCollection from '../Button/button';
import './collection.css'


const Collection = (props) =>{
    console.log('collection',props)
    
    return (
            <h1>{props.collection.title}<h5><SelectCollection collection={props.collection.id}/>{console.log('button',props.collection.id)} </h5></h1> 
            
            
               
    );
    
}

export default Collection;