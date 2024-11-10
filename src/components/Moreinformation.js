import { useLocation } from "react-router-dom";
export default function MoreInformation(props) {
    //grab the current individual car information and access its values 
    const location = useLocation();
    const { carData } = location.state;
    const topButtonString = " d-flex justify-content-center mx-auto badge badge-pill badge-dark rounded-pill m-5 w-4 p-2 col-md-4 p-3 ";
    const startingCarPrice = "Starting estimated price: $" + carData.price;
    const safetyRating = "Safety Rating: " + carData.saftey_rating + "/5";
    const luxery_scale = "Luxury rating based on 0-10 scale: " + carData.luxury_scale;
    const MPG = "MPG (combination freeway and city driving): " + carData.MPG;
    return (
        <main>
            {/* Creating the pill above with the car name with a color of red */}
            <button className={topButtonString} style={{fontSize: '1.5em', color: 'black', backgroundColor: 'rgb(249, 85, 115)'}}>{carData.car_name}</button>
            {/* Creation of the car image photo div code */}
            <div key={carData.car_name} className="containerHoldCardsColumn " >
                <div className="card " style={{ width: '18em', border: 'none'}} aria-label={carData.description}>
                <img src={carData.image} className="card-img-top increaseCarHeight" alt={carData.car_name}></img>
                </div>
            </div>
            {/* Creation of the bottom two cards with the Left being the description of the car and the right being the fun facts of the car  */}
            <div className="containerHoldCardsColumn ">
                <div className="card border-dark" style={{ width: '18em', height: '18em'}} aria-label={carData.description}>
                    <h1 style={{fontSize: '1.5em', textAlign: 'center'}}>Description</h1>
                    <p className="card-text text-black " ><b>{carData.description}</b></p>
                </div>    
                <div className="card border-dark" style={{ width: '18em', height: '18em'}} aria-label={carData.description}>
                    <h1 style={{fontSize: '1.5em', textAlign: 'center'}}>Fun Facts</h1>
                    <p className="card-text text-black " ><b>{startingCarPrice}</b></p>
                    <p className="card-text text-black " ><b>{safetyRating}</b></p>
                    <p className="card-text text-black " ><b>{luxery_scale}</b></p>
                    <p className="card-text text-black " ><b>{MPG}</b></p>
                </div>
            </div>
        </main>
    )
}