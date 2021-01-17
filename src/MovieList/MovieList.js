import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';

class MovieList extends Component {
    handleClick = () => {
        // const { history: { push } } = this.props;
        // push('/Details/movie.slug');
        // // this.props.history.push('/Details/movie.slug')
        const { history, movie } = this.props;
        if(history) history.push({
            pathname : `/${this.props.slug}`,
            state : movie
        });
    }
        render () {
            const {  history } = this.props;
            //const { movie } = this.props;
            return (

                <div onClick = { this.handleClick}>
                    <div className="container-fluid movie-app">
                    <h5>{this.props.genres}</h5>
                        <div className =" row d-flex align-items-center mt-4 mb-4">

                            <div className ="image-container d-flex justify-content-start m-3">
                                 {/* <Link  to={`/Details/:${this.props.movie.slug}`}> */}
                                 {/* <Link to="/Details"> */}
                                    <img src={this.props.poster} alt='movie' className="imgpos"></img>
                                {/* </Link>   */}
                            </div>
                        </div>
                    </div>            
                </div>
            )
        }
    }

export default withRouter(MovieList);