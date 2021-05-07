import React from 'react';



const FilteredCards= (props) => {
    console.log("card filter props", props);
    
        return(
            <div>
               {props.word}   
               <h1>Test</h1>  
            </div>

        )
    }
    



export default FilteredCards;