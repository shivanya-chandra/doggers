import React from 'react';
import Navbar from './navbar';
// import './index.css';
import './about.css';
import OurTeam from "./ourTeam";
import aboutdog from './images/aboutdog.png';

function About() {
    return (
        <div>
        <body className='header-about'>
                <Navbar />
                {/* <hr className='hr-about' /> */}
                <div className="flex-container">
                    <div className="box1">
                        <h4>Know what <br />we do. </h4>
                        <h5>Distribution of letters, as opposed to using 'Content here,
                         of letters, as opposed to using 'Content here, content making it look like readable English. Many desktop publishing packages
                        content making it look like readable English.
                        
                             </h5> 
                        <button className='button'>Know more </button>
                    </div>
                    <div className="box2">
                        <img src={aboutdog} alt='dog'/>
                    </div>
                </div>
            </body>
                <OurTeam />
            
        </div>
    )
}

export default About