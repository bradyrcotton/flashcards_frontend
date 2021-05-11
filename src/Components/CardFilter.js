import './filter.css'
import React from 'react';




const FilteredCards= (props) => {
    console.log("card filter props", props)
    let i = 0
    let j=0
    let id = 0
        return(
            
        props.filteredCards.map((cards) => {
            j = props.filteredCards.length
            i++
            id = cards.id
            console.log ('ID', id)
            console.log('count', i)
            console.log('cardscards',cards)
            if( props.answer === true){
                
                return(
                    
                    <div>
                        
                        <element class = 'word'> {cards.word}  </element>
                        <element class = 'num'> {'Card'+i+'of' +j}</element>
                        <element class = 'id'> {'ID'+id}</element>
                        <button class='lip' onClick = {() => props.lip()}>Answer</button>
                        
                        
                    </div>
            )}
            else {
                return(
                
                    <div>
                        <element class = 'word'> {cards.definition} </element>
                        <element class = 'num'> {'Card'+i+'of' +j}</element>
                        <element class = 'id'> {'ID'+id}</element>
                        <button class='flip' onClick = {() => props.flip()}>Question</button>
                        
                    </div>
                )}
            }
        ))}
        
    


      
        
        

    
    
    



export default FilteredCards;