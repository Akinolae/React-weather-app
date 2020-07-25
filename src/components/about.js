import React from 'react';

const About = () => {
    return ( 
    <div>
        <div className="container">
            <p>This website was built by <a href="https://github.com/Akinolae">Akinola Makinde Emmanuel</a></p>
        </div>
        <div className="socials">
            <span><a href="https://twitter.com">twitter<i class="fa fa-twitter-square" aria-hidden="true"></i></a></span>
            <span><a href="https://facebook.com">facebook<i class="fa fa-facebook-official" aria-hidden="true"></i></a></span>
            <span><a href="https://github.com/Akinolae" color='red'>github<i class="fa fa-git-square" aria-hidden="true"></i></a></span>
            <span>instagram<i class="fa fa-instagram" aria-hidden="true"></i></span>
        </div>
     </div>
     );
}


export default About;