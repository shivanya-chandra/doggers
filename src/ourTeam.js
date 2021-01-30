import React, { useState } from "react";
import './ourTeam.css';
import team from './Team';
import ourTeam6 from './images/ourTeam6.jpg';


function OurTeam() { 
    const [people, setPeople] = useState(team);
    return (
        <div className='ourTeam'>
            <h4>Meet the Team</h4>
            {/* <hr /> */}
            <section>
                {/* <div className="container"> */}
                    <div className="sub-container">
                        {people.map((person) => {
                            const { id, image, name, content } = person;
                            return (
                                <div className="team">
                                    <img src={image} alt={id} />
                                    <div className="name">{name}</div>
                                    <div className="about">{content}</div>
                                    <div className="social-media">
                                        <a href="#"><i className='fa fa-facebook'></i></a>
                                        <a href="#"><i className='fa fa-instagram'></i></a>
                                        <a href="#"><i className='fa fa-twitter'></i></a>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                {/* </div> */}
           </section>
          
        </div>


      
    )
}
export default OurTeam