import React from 'react';

import './card.style.css';

//this is a class components i.e it accesses things from the main class in App.js
//create and export the function
export const Card =(props) =>(
    <div className='card-container'>
        <img src={`https://robohash.org/${props.celebs.id}kT?set=set2`} alt="celebs"/>
        <h1>{props.celebs.name}</h1>
        <p>{props.celebs.email}</p>
    </div>
);
