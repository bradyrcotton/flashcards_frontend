import './filter.css'
import React from 'react';



const FilteredCards= (props) => {
    console.log("card filter props", props);
    
        return(
        props.filteredCards.map((cards) => {
            return(
                <div>
                   <h1> {cards.word} </h1>
                </div>
            )
        }))
        
        }
      
        
        

    
    
    



export default FilteredCards;