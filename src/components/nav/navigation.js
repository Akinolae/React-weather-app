import React from "react";
import {  Link } from 'react-router-dom';
import useStyles from "./style";

const Nav = () => {
        const classes = useStyles();

        return(
            <div className={classes.div}>
                <nav className={classes.nav}>
                    <ul>
                        <Link to='/'><li>weather search</li></Link>
                        <Link to='/news'><li>news</li></Link>
                        <Link to='/Version' ><li>version</li></Link>
                        <Link to='/about' ><li>about</li></Link>
                    </ul>
                </nav>
            </div>
        )
}

export default Nav;