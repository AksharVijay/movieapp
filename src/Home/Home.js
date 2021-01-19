import React, { Component } from 'react';
import './Home.css';
import Title from '../Title/Title';
import MovieList from '../MovieList/MovieList';
import axios from 'axios';

 class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            allMovies : [],
            crimeMovies : [],
            dramaMovies : [],
            actionMovies : []
        }
    }
     componentDidMount (){
        const token = 'Bearer Wookie2019';
         axios.get('https://wookie.codesubmit.io/movies',{
            headers: {
              'Authorization': token
            }
          }).then(response => {
            const { data: {movies} } = response;
            this.setState({
              allMovies: movies,
              crimeMovies: movies.filter(movies => movies.genres === 'Crime'),
              dramaMovies: movies.filter(movies => movies.genres === 'Drama'),
              actionMovies: movies.filter(movies => movies.genres === 'Action'),
          });
         console.log(response);
       });


     }

    render() {

        const movies = this.state.allMovies.map(movie => {
            return <MovieList key = {movie.id} title = {movie.title} poster = {movie.poster} genres = { movie.genres} slug ={movie.slug}/>
        })
        const criMovies = this.state.crimeMovies.map(movie => {
            return <MovieList key = {movie.id} title = {movie.title} poster = {movie.poster} genres = { movie.genres} />
        })

        return (
            <div>
                <Title/>
                {movies}
                {criMovies}
            </div>

        )
    }
}

export default Home;
