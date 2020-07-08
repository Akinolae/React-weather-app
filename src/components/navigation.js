import React, { Component } from "react";
import {  Link } from 'react-router-dom';
class Nav extends Component {
    render(){
        const style = {
            color: '#5a5353',
            listStyle: 'none',
            textDecoration: 'none',
            padding: '15px'
        }
        return(
            <div className="navigation">
                <nav>
                    <ul>
                        {/* <li>version</li> */}
                        <Link to='/Version' style={style}><li>version</li></Link>
                        <Link to='/about' style={style}><li>about</li></Link>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;