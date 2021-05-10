import './filter.css'
import React from 'react';




const FilteredCards= (props) => {
    console.log("card filter props", props);
    
        return(
        props.filteredCards.map((cards) => {
            console.log('cardscards',cards)
            if( props.answer == false){
            return(
                
                <div>
                    
                    <element class = 'word'> {cards.word} </element>
                    
                        <button class='flip' onClick = {props.flip(true)}>Answer</button>
                        
                     
                </div>
            )}
            else {
                return(
                
                    <div>
                        <element class = 'word'> {cards.definition} </element>
                        <button class='flip' onClick = {props.flip(false)}>Question</button> 
                    </div>
                )}
            }
        ))}
        
    


      
        
        

    
    
    



export default FilteredCards;