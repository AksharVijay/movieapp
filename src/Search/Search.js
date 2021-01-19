import React, { Component }  from 'react';
import './Search.css';
import axios from 'axios';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchResults : []
        }
    }

    componentDidMount () {
        const token = 'Bearer Wookie2019';
        axios.get('https://wookie.codesubmit.io/movies?q=<search_term>',{
           headers: {
             'Authorization': token
           }
         }).then(response => {
           this.setState({movies : response.data.movies});
        console.log(response);
      });
    }

    searchResults = (event) => {
        this.setState({
            searchResults : event.target.value
        })
    }
    render(){
        return (
            // <div className="search" >
            //         <input className = "form-control" type="text" avlue="inputVal" onChange = {this.searchHandler}/>                
            //         {/* <i className="fas fa-search"></i> */}
            //         <button className ="btn btn-info">Search</button>
            //         <div className ="searchres">
            //         </div>
            // </div>
            <div>
                <form>
                    <input className = "form-control" placeholder = "Search Movies" ref = { input => this.search = input} onChange = {this.searchHandler}/>
                </form>
            </div>
        )
    }
}

export default Search;
