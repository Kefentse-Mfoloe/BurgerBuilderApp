import React from 'react';
import burgerLogo from '../../assets/Image/burger.png';
import classes from './Logo.module.css';

const logo = (props) => {
    return(
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger logo" />
        </div>
    );
};

export default logo;
