import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import  './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navcss navbar-dark px-sm-5">
                    <Link to="/" >
                        <img src={logo} className= "logo" alt="logo"/>
                    </Link>
                </nav>
            </div>
        )
    }
}

export default Navbar;