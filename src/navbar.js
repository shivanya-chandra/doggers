import React from 'react';
import './nav-bar.css';

function Navbar() {
    return (
        
    <div className="main2">
        {/* <nav className = 'navbar'>
                <div className='doggers'>
                    <h2>doggers</h2>
                </div>
                <i class="fas fa-bars burger" ></i>
                <a href="#" className="burger-button">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </a>
                <div className="navbar-links">        
            <ul>
                <a className='link' href='/'><li>Home</li></a>
                <a className='link' href='/funds'><li>Funds</li></a>
                <a className='link' href='/adopt'><li>Adopt</li></a>
                <a className='link' href='/about'><li>About</li></a>
                <a className='link' href='#'><li>Contact</li></a>
            </ul>
          </div>

        </nav> */}
            
            <nav className="navbar">
                <div className="doggers">doggers</div>
                <input type="checkbox" id='check' />
                <label for='check' className='checkbtn'>
                    <i class="fas fa-bars burger" ></i>
                </label>
                <ul>
                    <a className='link' href='/'><li>Home</li></a>
                    <a className='link' href='/funds'><li>Funds</li></a>
                    <a className='link' href='/adopt'><li>Adopt</li></a>
                    <a className='link' href='/about'><li>About</li></a>
                    {/* <a className='link' href='#'><li>Contact</li></a> */}
                </ul>
            </nav>

    </div>)
}

export default Navbar;