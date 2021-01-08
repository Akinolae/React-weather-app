import React from 'react';
import { Link } from 'react-router-dom';
import {Container, Socials} from "../style"

const About = () => {
    return ( 
    <Container>
        <div className="container">
            <p>This website was built by <a href="https://github.com/Akinolae">Akinola Makinde Emmanuel</a></p>
        </div>
        <Socials>
            <Link to="https://twitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
            <Link to="https://facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
            <Link to="https://github.com/Akinolae" color='red'><i className="fa fa-git-square" aria-hidden="true"></i></Link>
            <Link to="https://instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
        </Socials>
     </Container>
     );
}


export default About;