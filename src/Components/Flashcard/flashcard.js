import React from 'react';


const Flashcard = (props) =>{
    console.log('flashcard',props)

    return (
            <h1>{props.flashcard.title}</h1>    
    );
    
}

export default Flashcard;