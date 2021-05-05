import React from 'react';


const Flashcard = (props) =>{
    console.log('flashcard',props)

    return (
        <card>
            
                {props.flashcard.title} 
                
            
        </card>
    );
    
}

export default Flashcard;