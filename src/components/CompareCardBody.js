import React from 'react';

export function CompareCardBody(props) {
    let carName = "Pick a car to compare!";
    let carImage ="page_images/unknownCar.png"
    let altTag = "A placeholder vehicle until a user searches for a vehicle";
    let link = "./CompareApp.js";

    
    let carDetailsArray = [
        "?", 
        "?", 
        "?",
        "?",
        "?",
    ];

    if(props.searched) {
        const keys = Object.keys(props.props);
        carName = props.props.car_name;
        carImage = props.props.image;
        altTag = props.props.description;
        link =  props.props.link;

        carDetailsArray = keys.map((key, index) => {
            let text = "";


            if(key === "type") { 
                text = "Car Category: " + props.props[key];
            } else if (key === "price") { 
                text = "Price: $" + props.props[key];
            } else if (key === "MPG") { 
                text = "Miles Per Gallon: " + props.props[key];
            } else if (key === "luxury_scale") { 
                text = "Luxury Scale (1-10): " + props.props[key];
            }  else if (key === "saftey_rating") { 
                text = "Saftey Rating (1-5): " + props.props[key];
            }
            
            if(text !== "") {
                return <li key={index}>{text}</li>
            }

            
        });

    } else {

        carDetailsArray = carDetailsArray.map((key, index) => {
            let text = "";
            if(index === 0) {
                text = "Car Category: ?";
            } else if (index === 1) {
                text = "Price: ?";
            } else if (index === 2) { 
                text = "Miles Per Gallon: ?";
            } else if (index === 3) { 
                text = "Luxury Scale (1-10): ?";
            }  else if (index === 4) { 
                text = "Saftey Rating (1-5): ?";
            }

            if(text !== "") {
                return <li key={index}>{text}</li>
            }

        });
    }

    return (
        <div className="card-body">
            <img src={carImage} className="comparison-increaseCarHeight" alt={altTag}></img>
            
            <h5 className="card-title">{carName}</h5>

            {/* <!-- List for car elements --> */}
            <ul className="card-text text-black">
                {carDetailsArray}
            </ul>

            <a href={link} alt="link to car website" className="btn btn-primary">Official Webpage</a>
        </div>
    )   
}