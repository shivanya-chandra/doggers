import React, { useState } from 'react';
import Typist from 'react-typist';
import { Link } from 'react-router-dom'
import './index.css';

// const img = 'https://c4.wallpaperflare.com/wallpaper/913/609/236/dogs-look-pose-the-dark-background-portrait-hd-wallpaper-thumb.jpg'
function Design() {
    const [open, setOpen] = useState(false);
    const burgerOpen = () => {
        setOpen(!open);
    }
    return (
       <div>
            <header>
                <div className="main">
                    <nav className='navbar-2'>
                        <div className='doggers'>
                            <h2>doggers</h2>
                        </div>
                        <input type="checkbox" id='check' />
                        <label for='check' className='checkbtn'>
                            <i class="fas fa-bars burger" ></i>
                        </label>
                        {/* <i class="fas fa-bars burger" onClick={burgerOpen}></i> */}

                        <ul className='nav-bar'>
                            <a className='link' href='/'><li>Home</li></a>
                            <a className='link' href='/funds'><li>Funds</li></a>
                            <a className='link' href='/adopt'><li>Adopt</li></a>
                            <a className='link' href='/about'><li>About</li></a>
                            {/* <a className='link' href='#'><li>Contact</li></a> */}
                        </ul>
                        
                    </nav>
                        
                </div>
                <hr />
                
                <div className='headings'>
                <Typist>
                        <h1>WE PRESENT DOGGERS</h1>
                    </Typist>
                    <Typist>
                      <Typist.Delay ms={1500} />
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        <br /><span className='differentText'> Inventore </span> nobis, et cumque, enim itaque aperiam ab cum, <br />dolores impedit architecto <span className='differentText'>necessitatibus</span> autem quam illum  <br/>Beatae impedit molestiae sed?</h3>
                    </Typist>
                </div>
            </header>
        <body>
                {/* <div className="grid">
                    <div><img src={img} alt='dog' /></div>
                    <div>1
                    </div>
          </div> */}
       </body>
       </div>
     
    )
}

export default Design