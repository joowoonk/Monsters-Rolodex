import React from 'react';

import './search-box.styles.css'

const SearchBox = ({placeholder, handlechange}) => (
    <input 
        className='search'
        type='serach' 
        placeholder= {placeholder}
        onChange= {handlechange}
     />

);

export default SearchBox  