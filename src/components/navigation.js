import React, { Component, setState } from "react";

class Nav extends Component {
    render(){
        console.log(setState);
        
        return(
            <div className="navigation">
                <nav>
                    <ul>
                        <li>version</li>
                        <li>About</li>
                        <li>search</li>
                        <li>weather</li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Nav;