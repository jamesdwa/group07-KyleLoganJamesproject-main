import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import carList from './data/cars.json';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import 'whatwg-fetch';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

// ADD JSON OBJECT IMPORT AND PASS INTO APP as a prop

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPD1st5zgjrpmHQrNjFAR8hz72t9WpRo4",
  authDomain: "group07-kyleloganjamesproject.firebaseapp.com",
  projectId: "group07-kyleloganjamesproject",
  storageBucket: "group07-kyleloganjamesproject.appspot.com",
  messagingSenderId: "847745187133",
  appId: "1:847745187133:web:f75842448840e08b20d954"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App props={carList} />
    </BrowserRouter>
  </React.StrictMode>
);

