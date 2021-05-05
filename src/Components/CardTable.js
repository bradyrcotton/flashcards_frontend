import React from 'react';


const CardTable = (props) => {
    console.log('props',props)
    return (
        <card className="card">
            <chead>
                <cr>
                    
                </cr>
            </chead>
            {props.mapCollections()}
        </card>
            
    );
}

export default CardTable;