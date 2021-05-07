import { Card } from '@material-ui/core';
import React from 'react';



const FilteredCards= (props) => {
    console.log("card filter props", props);
    
        return(
        props.filteredCards.map((cards) => {
            return(
                <div>
                    {cards.word}
                </div>
            )
        }))
        
        }
      
        
        

    
    
    



export default FilteredCards;