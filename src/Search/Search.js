import React  from 'react';
import './Search.css';

const Search = () => {

    return (
        <div className="search" >
                <input className = "form-control" type="text" />                
                {/* <i className="fas fa-search"></i> */}
                <button className ="btn btn-info">Search</button>
                <div className ="searchres">
                </div>
        </div>
    )
}

export default Search;
