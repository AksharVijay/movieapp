import React, { Component } from 'react';
import './Home.css';
import kgf from '../kgf.jpg';
import Title from '../Title/Title';
import { Link } from 'react-router-dom';

 class Home extends Component {
    render() {
        return (
            <div>
                <Title/>
                <div className="container-fluid movie-app">
                    <div className =" row d-flex align-items-center mt-4 mb-4">
                        <div className ="image-container d-flex justify-content-start m-3">
                            <Link to="/details">
                                <img src={kgf} alt='movie' className="imgpos"></img>
                            </Link>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                        <div className ="image-container d-flex justify-content-start m-3">
                	        <img src={kgf} alt='movie' className="imgpos"></img>
                        </div>
                    </div>
                </div>

                    

            </div>

        )
    }
}

export default Home;