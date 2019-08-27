import React from 'react';
import './search-box.style.css';


//this is a functional component
    export const SearchBox = ({placeholder,handleChange}) =>(
    <input
        className = 'search'
        type='search'
        placeholder= {placeholder} //make the placeholder dynamic with a prop
        onChange = {
            handleChange //use a callback function after to access searchField value
        }
        />
    )