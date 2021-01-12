import React from 'react';
import {Container, Socials, Link} from "../style"

const About = () => {
    return ( 
    <Container>
        <div className="container">
            <p>This website was built by <a href="https://github.com/Akinolae">Akinola Makinde Emmanuel</a></p>
        </div>
        <Socials>
            <Link href="https://twitter.com"><i className="fa fa-twitter-square" aria-hidden="true"></i></Link>
            <Link href="https://facebook.com"><i className="fa fa-facebook-official" aria-hidden="true"></i></Link>
            <Link href="https://github.com/Akinolae"><i className="fa fa-git-square" aria-hidden="true"></i></Link>
            <Link href="https://instagram.com"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
        </Socials>
     </Container>
     );
}


export default About;