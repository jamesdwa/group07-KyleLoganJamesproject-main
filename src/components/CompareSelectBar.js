import React, { useState }from 'react';

export function CompareSelectBar(props) {
    const [car, setCar] = useState("")
    const [searchOrNot, setSearchOrNot] = useState(true);

    const optionElems = props.props.map((cars) => {
        const innerLoop = cars.map((car, index) => {
            if(props.carCategory == "Unfiltered") {
                return <option key={index} value={car.car_name}>{car.car_name}</option>
            } else {
                if(car.type.toLowerCase() === props.carCategory.toLowerCase()){
                    return <option key={index} value={car.car_name}>{car.car_name}</option>
                }
            }
        });
        return innerLoop;
    });

    const handleCarInput = (event) => {
        const input = event.target.value;
        console.log("input in handleCarInput: ", input);
        setCar(input);


        const newSearchOrNot = input !== "";

        setSearchOrNot(newSearchOrNot);
        props.applyCarCallBack(input);
        props.applySearchCallBack(searchOrNot);
    }

    return(
        <select id="teamSelect" className="comparison-carSearchBar form-control text-left p-3" aria-describedby="Form to enter car name" placeholder={props.cardVehicleNumber} onChange={handleCarInput} value={car}>
            <option value="">Select {props.cardSearchNumber} </option>
            {optionElems}
        </select>
    )   
}