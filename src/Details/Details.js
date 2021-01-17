import React, { Component } from 'react';
import Title from '../Title/Title';
import './Details.css';
import axios from 'axios';

class Details extends Component {

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

    render () {
        return (

            <div>
                <Title/>
                <div className="container">
                    <div className="row">
                        <div className ="col-md-4">
                            <img src={this.props.poster} alt='movie' className="detimg"/>
                        </div>
                        <div className="col-md-8">
                            <div className="detailsTitle">
                                <strong>Title: </strong> {this.props.title}
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
                             {this.props.overview}
                            </p>
                        </div>
                    </div>

                </div>
            
            </div>
        )

    }
}

export default Details;
