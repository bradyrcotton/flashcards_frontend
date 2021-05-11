import './filter.css'
import React from 'react';




const FilteredCards= (props) => {
    console.log("card filter props", props)
    
        return(
        props.filteredCards.map((cards) => {
            console.log('cardscards',cards)
            // debugger;
            if( props.answer === true){
                return(
                    
                    <div>
                        
                        <element class = 'word'> {cards.word} </element>
                        <button class='lip' onClick = {() => props.lip(false)}>Answer</button>
                            
                        
                    </div>
            )}
            else {
                // debugger;
                return(
                
                    <div>
                        <element class = 'word'> {cards.definition} </element>
                        <button class='flip' onClick = {() => props.flip(true)}>Question</button> 
                    </div>
                )}
            }
        ))}
        
    


      
        
        

    
    
    



export default FilteredCards;