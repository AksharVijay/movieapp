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

    // componentDidMount () {
    //     const token = 'Bearer Wookie2019';
    //     axios.get('https://wookie.codesubmit.io/movies?q=<search_term>',{
    //        headers: {
    //          'Authorization': token
    //        }
    //      }).then(response => {
    //        this.setState({movies : response.data.movies});
    //     console.log(response);
    //   });
    // }

    // searchHandler = (event) => {
    //     this.setState({
    //         searchResults : event.target.value
    //     })
    //     console.log(this.searchResults);
    // }

    searchHandler = (event) => {
        event.preventDefault();
        const searchTerm = event.target.searchTerm.value
        const token = 'Bearer Wookie2019';
        axios.get(`https://wookie.codesubmit.io/movies?q=${searchTerm}`,{
          headers: {
            'Authorization': token
          }
        }).then(response => {
          this.setState({ movies: response.data.movies });
          console.log(response);
        });
      };
    render(){
        return (
            // <div>
            //     <form>
            //         <input className = "form-control" placeholder = "Search Movies" ref = { input => this.search = input} onChange = {this.searchHandler}/>
            //     </form>
            //     <div className = "searchresults">
            //         { this.state.searchResults.map(SearchResult => <SearchResult movie={this.state.searchResults}>{SearchResult.title}</SearchResult>)}
            //     </div>
            // </div>

            <div>
        <form onSubmit={this.searchHandler}>
          <input
            id="searchTerm"
            className="form-control"
            placeholder="Search Movies"
          />
          <button type="submit">Search</button>
        </form>
        <div className="searchresults">
          {this.state.searchResults.map(searchResult => <searchResult movie={this.state.searchResults}>{searchResult.title}</searchResult>)}
        </div>
      </div>
        )
    }
}

export default Search;
