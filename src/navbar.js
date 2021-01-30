import React from 'react';
import './nav-bar.css';

function Navbar() {
    return (
        
    <div className="main2">
            
            <nav className="navbar">
                <div className="doggers">doggers</div>
                <input type="checkbox" id='check' />
                <label for='check' className='checkbtn'>
                    <i class="fas fa-bars burger" ></i>
                </label>
                <ul>
                    <a className='link' href='/'><li>Home</li></a>
                    <a className='link' href='/funds'><li>Donate</li></a>
                    <a className='link' href='/adopt'><li>Adopt</li></a>
                    <a className='link' href='/about'><li>About</li></a>
                   
                </ul>
            </nav>

    </div>)
}

export default Navbar;