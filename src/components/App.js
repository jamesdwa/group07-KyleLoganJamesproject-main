import React, { useState, useEffect }from 'react'; //import React library
import { Header } from './Header'; //import Header from Header.js
import Home from './Home';
import MoreInformation from './Moreinformation.js';

import { CompareApp } from './CompareApp.js';
import { Footer } from './Footer.js'; 
import { CarUpload } from './CarUpload.js';
import { Routes, Route } from "react-router-dom";
import { getDatabase, ref, onValue } from 'firebase/database';

function App(props) {

  const [data, setData] = useState([]);

  const db = getDatabase();
  const carRef = ref(db, "Cars");
  
  useEffect(() => {
    const offFunction = onValue(carRef, (snapshot) =>{

      const allCars = snapshot.val();
      const allKeys = Object.keys(allCars);

      const carArray = allKeys.map((key) => {
        const singleCar = {...allCars[key]}
        singleCar.key = key;
        return singleCar;
      });


     const updateCars = [...data, carArray];
     setData(updateCars);
    
     function cleanup() {
      offFunction();
     }
     return cleanup;
    })
  }, []);


  return (
    <div className='container-fluid p-0'>
      

      <Header />
      <main>
      <Routes>
        <Route index element={<Home carData={data}/>} />
        <Route path="Compare" element={<CompareApp props={data} />}/>
        <Route path="Upload" element={<CarUpload props={data} />}/>
        <Route path="Moreinformation" element={<MoreInformation carData={data}/>}/>
        <Route path="*" element={<Home carData={data}/>} />
      </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App;