import React, { Component } from "react";
import {  Link } from 'react-router-dom';
class Nav extends Component {
    render(){
        const style = {
            navigation: {
                color: '#5a5353',
                    listStyle: 'none',
                    textDecoration: 'none',
                    padding: '15px'
            }
        }
        const { navigation } = style;
        return(
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light bg-red">
                    <ul>
                        {/* <li>version</li> */}
                        <Link to='/Version' style={navigation}><li>version</li></Link>
                        <Link to='/about' style={navigation}><li>about</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;