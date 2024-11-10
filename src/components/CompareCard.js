import React, { useState }from 'react';
import { CompareCardBody } from './CompareCardBody.js';
import { CompareFilter } from './CompareFilter.js';
import { CompareSelectBar } from './CompareSelectBar.js';


export function CompareCard(props) {
    const cardNumber = "Car " + props.car;
    const cardSearchNumber = "Car #" + props.car;
    const cardVehicleNumber = "Search Vehicle " + props.car;

    const [car, setCar] = useState('');
    const [searchOrNot, setSearchOrNot] = useState(false);
    const [carCategory, setCarCategory] = useState("Unfiltered"); 
    
    let searchedCar = {};
    props.props.filter((searchCar) => {
        searchCar.filter((eachCar, index) => {
            if(eachCar.car_name === car){
                searchedCar = eachCar;
            }
        });
    });

  
    function applyFilter(carType){
        setCarCategory(carType)
    }


    function applyCar(carName){
        setCar(carName)
    }

   
    function applySearch(search){
        setSearchOrNot(search)
    }

  
    return(
        <div className="comparison-cardMargin d-flex flex-column">
       
            <form className="comparison-searchPosition d-flex flex-column">
                <h2 className="comparison-searchCarTitle">{cardNumber}</h2>

                <CompareFilter props={props.props} applyFilterCallback={applyFilter}/>

                <div className="text-left comparison-searchBar">
                    
                    
                    <div className="form-group mb-3 comparison-col-3">
                        <CompareSelectBar carCategory={carCategory} props={props.props} cardVehicleNumber={cardVehicleNumber} cardSearchNumber={cardSearchNumber} car={car} applyCarCallBack={applyCar} applySearchCallBack={applySearch}/>
                        
                        <div className="card border-secondary">
                            <CompareCardBody props={searchedCar} searched={searchOrNot}/>
                        </div>

                    </div>

                </div>
            </form>
        </div>
    )   
}