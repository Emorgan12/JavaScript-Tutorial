import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import person from './person';

const myFirstElement = <h1>My name is {person.name} </h1>

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(myFirstElement);


