import React from 'react';
import Navbar from './navbar';
import './Adopt.css';
import AdoptDog from './adoptDog';


export default function Adopt() {
    return (
        <div>
            <div className='dog-container-2'>
                <Navbar />
                <div className="content-header">
                    <h6>don't shop,</h6>
                    <h1>Adopt.</h1>
                    <p> There are a million of stray d
                          of stray dogs longing for shelter and food, you would be aogs longing for shelter and food, you fe would be a</p>
                    <a href='#adopt' className="adopt-button">Adopt</a>
                </div>
            </div>
            <AdoptDog />
        </div>
    )
}
