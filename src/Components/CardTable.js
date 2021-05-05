import React from 'react';


const CardTable = (props) => {
    console.log('props',props)
    return (
        <table className="table">
            <thead>
                <tr>
                    
                </tr>
            </thead>
            {props.mapCollections()}
        </table>
            
    );
}

export default CardTable;