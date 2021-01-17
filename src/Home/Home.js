import React, { Component } from 'react';
import './Home.css';
import Title from '../Title/Title';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

 class Home extends Component {

    state = {
        movies : [],
        genres : {}
    }
     componentDidMount (){
        const token = 'Bearer Wookie2019';
         axios.get('https://wookie.codesubmit.io/movies',{
            headers: {
              'Authorization': token
            }
          }).then(response => {
              let movies = this.setState({movies: response.data.movies})
             console.log(response);
         });


     }

    render() {

        const {genres} = this.state;

        let genreCat = () => {
            this.setState({movies : this.state.genres})
        }

        let filterCrime = () => {
            const crimeMovie = genres.filter( (genre) => genre.genres.includes("Crime"));
    
            this.setState({ filterCrime : crimeMovie});
        }

        const movies = this.state.movies.map(movie => {
            return <MovieList key = {movie.id} title = {movie.title} poster = {movie.poster} genres = { movie.genres} />
        })


        return (
            <div>
                <Title/>
                {movies}
            </div>

        )
    }
}

export default Home;
