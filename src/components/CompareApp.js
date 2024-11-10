import React from 'react';
import { CompareImage } from './CompareImage.js'; 
import { CompareCard } from './CompareCard.js'; 

export function CompareApp(props) {
    return (
        <div className="comparison-cardFlex d-lg-flex">
                
            <CompareCard props={props.props} car={1}/>

            <CompareImage />

            <CompareCard props={props.props} car={2}/>
        </div> 
    )
}
