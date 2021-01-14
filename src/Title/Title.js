import React, { Fragment } from 'react';
import Search from '../Search/Search';
import CssClasses  from './Title.module.css';


const Title = (props) => {
    return (
        <Fragment>
            <div className ={CssClasses.titlehead } >
                <h3 className = { CssClasses.title }>WOOKIE <br/> MOVIES</h3>
                <Search {...props} />
            </div>
        </Fragment>
    )
}

export default Title
