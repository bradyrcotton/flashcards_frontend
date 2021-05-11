import './filter.css'
import React from 'react';




const FilteredCards= (props) => {
    console.log("card filter props", props)
    let i = 0
    let j=0
        return(
            
        props.filteredCards.map((cards) => {
            j = props.filteredCards.length
            i++
            console.log('count', i)
            console.log('cardscards',cards)
            if( props.answer === true){
                
                return(
                    
                    <div>
                        
                        <element class = 'word'> {cards.word}  </element>
                        <element class = 'num'> {'Card'+i+'of' +j}</element>
                        <button class='lip' onClick = {() => props.lip()}>Answer</button>
                        <button class='update' onclick = {() => props.updateCard(cards.id)}>Edit</button>
                        
                    </div>
            )}
            else {
                return(
                
                    <div>
                        <element class = 'word'> {cards.definition} </element>
                        <element class = 'num'> {'Card'+i+'of' +j}</element>
                        <button class='flip' onClick = {() => props.flip()}>Question</button>
                        <button class='update' onclick = {() => props.updateCard(cards.id)}>Edit</button> 
                    </div>
                )}
            }
        ))}
        
    


      
        
        

    
    
    



export default FilteredCards;