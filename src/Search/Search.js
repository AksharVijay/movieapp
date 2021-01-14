import React, { useState} from 'react';
import './Search.css';

const Search = () => {

    const [ searchRes, setSearchRes ] = useState([]);

    return (
        <div className="search" >
                <input type="text" />                
                <i class="fas fa-search"></i>
                <div className ="searchres">
                </div>
        </div>
    )
}

export default Search;
