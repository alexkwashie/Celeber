import React from 'react';
import './card-list.style.css';
import {Card} from '../card/card.component';

//create and export the function
export const CardList = props => (
<div className = 'card-list'>
    {props.celebs.map( indv => (
        <Card key={indv.id} celebs = {indv} /> //this mean pass a celebs as a props which is equal to the an individual mapped celebs
    ))}
</div>
);
