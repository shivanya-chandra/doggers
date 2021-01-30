import React, { useState } from 'react';
import Navbar from './navbar';
import './funds.css';
import funds from './images/funds.png';
import Modal from './Modal';
import Help from './helpus'


function Funds() {
    const [openModal, setOpenModal] = useState(false)
    return (
        <div>
        <div className='main-div'>
            <Navbar />
            <div className="funds-flex">
            <div className="funds-container">
                    <img src={funds} alt='funds'/>
                </div>
                <div className="content-funds">
                    <h6>Help us, <br />By Donating.</h6>
                    <h3>The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using
 distribution of letters, as opposed to u</h3>
                    <button className='button-2' onClick={() => setOpenModal(!openModal)}>Donate</button>
                    <Modal open={openModal} closeModal={() => setOpenModal(false)}/>
                </div>    
            </div>
        </div>
            <Help/>
        </div>

            
    )
}
export default Funds;