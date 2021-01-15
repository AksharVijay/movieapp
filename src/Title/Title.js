import React, { Fragment } from 'react';
import Search from '../Search/Search';
import './Title.css';


const Title = (props) => {
    return (
        <Fragment>
            <div className ="conatiner">
                <div className ="row titlehead">
                    <div className="col-6">
                        <h3 className = "title">WOOKIE <br/> MOVIES</h3>
                    </div>
                    <div className = "col-6 searchMovie">
                        <Search {...props} />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Title
