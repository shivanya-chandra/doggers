import React from 'react';
import './modal.css'

export default function Modal({open, closeModal}) {
    if (!open) {
      return null  
    }
    return ( 
        <div>
        <div className="overlay" />
            <div className='modal'>
                <ion-icon name="close-circle" className='close-circle' size='large' onClick={closeModal}></ion-icon>
                <h1>Donate</h1>
                <form action="">
                    <p>Name</p>
                    <input type="text" />
                    <p>Email</p>
                    <input type="text"/>
                    <p>Amount</p>
                    <input type="text"  />
                    <button className='button-3'>Pay with PayPal</button>
                </form>
        </div>
        </div>
    )
};

