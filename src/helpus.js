import React, {useState} from 'react';
import './helpus.css';
import list from './list-helpus';
import feed from './images/feed-dog-photo.jpg'

export default function Help() {
    const [help, setHelp] = useState(list);
    return (
        <div className="help-container">
            <h1>You can also help by</h1>
        <div className='flex-container2'>
            {list.map((card) => {
                const { id, image, title, content } = card;
                return (   
            <div className="box">
                        <img src={image} alt={id}/>
                <div className="title">
                            <h2>{title}</h2>
                </div>
                <p className="para">
                            {content}
                </p>
            </div>
                )
            })}
            
        </div>
        </div>
    )
}
