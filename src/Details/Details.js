import React, { Component } from 'react';
import Title from '../Title/Title';
import './Details.css';
import axios from 'axios';
import Notfound from "../Notfound/Notfound";

class Details extends Component {

    state = {
        movie : []
    }
     componentDidMount (){
         const  { match } = this.props;

         const slug = match.params.slug;

        const token = 'Bearer Wookie2019';
         axios.get(`https://wookie.codesubmit.io/movies/${slug}`,{
            headers: {
              'Authorization': token
            }
          }).then(response => {
            this.setState({
                movies: response.data.movies
            })
            console.log(match.params);
         });


     }

    render () {

        const  { movie } = this.state;

        if (!movie) {
            <Notfound/>
        }
       

        return (

            <div>
                <Title/>
                <div className="container">
                    <div className="row">
                        <div className ="col-md-4">
                            <img src={movie.poster} alt='movie' className="detimg"/>
                        </div>
                        <div className="col-md-8">
                            <div className="detailsTitle">
                                <strong>Title: </strong>{`${movie.title} (${movie.imdb_rating})`}
                            </div>
                            <div className="detailsInfo">
                                
                            </div>
                            <div className="detailsCast">
                                <strong>
                                    Cast:
                                </strong>
                               
                            </div>
                            <p className="detailsDesc">
                             <strong> Movie Description: </strong>
                             {movie.overview}
                            </p>
                        </div>
                    </div>

                </div>
            
            </div>
        )

    }
}

export default Details;
