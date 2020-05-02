import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawToggle/DrawerToggle';

const toolbar = (props) => {
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.clicked} />
            <div className={classes.Logo}>
                <Logo />
            </div>
            
            <nav className={classes.DeskTopOnly}>
                <NavigationItems />
            </nav>
        </header>
    );
};

export default toolbar;