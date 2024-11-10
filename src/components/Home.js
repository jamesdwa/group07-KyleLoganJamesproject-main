import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardInformation(props) {
    const displayCardArray = props.carData.map((individualCardObject) => {
        let colorButton = "";  
        if (individualCardObject.type === "Economy") {
            colorButton = "economyButtonColor rounded-pill";
        } else if (individualCardObject.type === "Sport") {
            colorButton = "sportButtonColor rounded-pill";
        } else if (individualCardObject.type === "SUV") {
            colorButton = "suvButtonColor rounded-pill";
        } else {
            colorButton = "truckButtonColor rounded-pill";
        }
        //conditional if it is one of the implementors favorite car.
        let personFavoriteCar = ""
        if (individualCardObject.car_name === "2024 Volkswagen Jetta") {
            personFavoriteCar = <div>
                <b>James's dream car! </b>
                {"An affordable economy vehicle that offers both practicality with slight German luxury."}
            </div>
        } else if (individualCardObject.car_name === "2024 Chevy Corvette ZO6 RWD") {
            personFavoriteCar = 
            <div>
                <b>Logan's dream car! </b>
             {" An extremely fast and sexy sports car engineered for the track creating an eye watering 670 beautiful American Horsepower."}
            </div>
        } else if (individualCardObject.car_name === "2024 Toyota Highlander AWD") {
            personFavoriteCar = 
            <div>
                <b>Kyle's dream car! </b>
             {"A great soccer mom vehicle meant to transport you and 6 other passangers from point A to B reliably. It is a great vehicle when it comes to value also."}
            </div>
        } else {
            personFavoriteCar = individualCardObject.description;
        }

        let cardElement = 
            //unique key will be the car name 
            <div key={individualCardObject.car_name} className="containerHoldCardsColumn">
                <div className="card" style={{ width: '18rem'}} aria-label={individualCardObject.description} >
                    <img src={individualCardObject.image} className="card-img-top increaseCarHeight" alt={individualCardObject.car_name}></img>
                    <div className="card-body">
                        <h1 className="card-title display-6" aria-label={individualCardObject.car_name}>{individualCardObject.car_name}</h1>
                        <div className="card-text text-black">{personFavoriteCar}</div>
                        <button className={colorButton} aria-label={individualCardObject.type}>{individualCardObject.type}</button>
                        <button className="badge badge-pill badge-dark rounded-pill m-2 w-4 p-2">
                            <Link className='w-3 p-2 text-lg-center' to='Moreinformation' state={{ carData: individualCardObject }}>More info!</Link>
                        </button>
                        <a target="_blank" href={individualCardObject.link} className="btn btn-primary">Official Webpage</a>
                    </div>
                </div>
            </div>
        return cardElement;
    })
    return displayCardArray
}

function FilteredCars(props) {
    //method if user were to enter a car name in the search bar. ignores if user types upper or lowercase
    //words as it will return that car object specified by user. 
    const filteredCardArrayWithUndefined = props.carData.map((carObject) => {
        const innerLoop = carObject.map((car) => {
            if (car.car_name.toLowerCase().includes(props.userCarNameSearch.toLowerCase()) === true){
                return car;
            }   
        });
        return innerLoop;
    });
    let newFilteredCardArrayRemovedUndefined = [];
    for (let outer2dObject in filteredCardArrayWithUndefined) {
        for (let individualCarCard in filteredCardArrayWithUndefined[outer2dObject]) {
            newFilteredCardArrayRemovedUndefined[outer2dObject] = newFilteredCardArrayRemovedUndefined.push(filteredCardArrayWithUndefined[outer2dObject][individualCarCard]);
        }
    }
    //now it is a 1D array, we need to remove the first element from firebase because it does not have any valuable content.
    newFilteredCardArrayRemovedUndefined.shift(); 
    //now we have all card values we want, we can just push that car card so we have a final filtered car array that is based on user input.
    let eliminateUnrefinedArray = [];
    for (let individualCar in newFilteredCardArrayRemovedUndefined) {
        if (newFilteredCardArrayRemovedUndefined[individualCar] !== undefined) {
            eliminateUnrefinedArray.push(newFilteredCardArrayRemovedUndefined[individualCar]);
        }
    }
    //now you have 1D array with card objects, just pass to card information with its key being the car name and display to user.
    return (
        <div className="containerHoldCardsColumn">
            <CardInformation carData={eliminateUnrefinedArray} key={eliminateUnrefinedArray.car_name} />
        </div>
    )
}

export default function Home(props) {
    const [userCarNameSearch, setUserCarnameSearch] = useState('');
    const handleChange =  (event) => {
        const value = event.target.value;
        setUserCarnameSearch(value); 
    };
    //lecture said to keep event in case future you need to use it 
    const handleClearButtonClick = (event) => {
        setUserCarnameSearch('');
    }
    return (
        <main>
            {/* <!-- getting the user input for specific car name to filter based on their needs.--> */}
            <form >
                <div className="form-group text-center p-3 textBox">
                    <label>Search Vehicle Name </label>
                    <input type="text" id="carName" className="form-control text-center p-3" aria-describedby="carFilter" value={userCarNameSearch} onChange={handleChange}>
                    </input>
                    <small className="form-text text-muted">We will use this information to filter based on your input.</small>
                    {/* added this when user clear the filter we will clear the text box */}
                    <p></p>
                    <button type="button" className="changeButtonColor text-white text-center" onClick={handleClearButtonClick}>CLEAR</button>
                </div>
            </form>
            <FilteredCars userCarNameSearch={userCarNameSearch} carData={props.carData}/>
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
        </main>
    )
}