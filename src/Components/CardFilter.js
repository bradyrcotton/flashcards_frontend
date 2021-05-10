import './filter.css'
import React from 'react';



const FilteredCards= (props) => {
    console.log("card filter props", props);
    
        return(
        props.filteredCards.map((cards) => {
            return(
                <div>
                    <element class = 'word'> {cards.word}</element> 
                </div>
            )
        }))
        
        }
      
        
        

    
    
    



export default FilteredCards;