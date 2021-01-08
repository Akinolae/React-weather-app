import React from "react";
import {  Link } from 'react-router-dom';
import {Navigation,} from "./style";

const style = {
    textDecoration: 'none'
}
const Nav = () => {
        return(
            <Navigation>
                    <Link style={style} to='/'>search</Link>
                    <Link style={style} to='/news'>news</Link>
                    <Link style={style} to='/Version'>version</Link>
                    <Link style={style} to='/about' >about</Link>
            </Navigation>
        )
}

export default Nav;