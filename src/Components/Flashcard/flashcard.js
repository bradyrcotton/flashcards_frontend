import React from 'react';

import './flashcard.css'

const Flashcard = (props) =>{
    
    return (
              
            <h1>{props.flashcard.title}</h1>
    );
    
}

export default Flashcard;