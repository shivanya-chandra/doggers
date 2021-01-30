import React from 'react'

export default function FilteredList({ filterList }) {

    return (
        <div className='flex'>
            <div className="child">
                <div className="btn">
                    <a className="btn-breed" onClick={() => filterList('German Spitz')}>German Spitz</a>
                </div>
                <div className="btn">
                    <a className="btn-breed" onClick={() => filterList('Chihuahua')}>Chihuahua</a>
                </div>
                <div className="btn">
                    <a className="btn-breed" onClick={() => filterList('Pitbull')}>Pitbull</a>
                </div>
                {/* {dogs.map((dog) => {
                    const { id, breed } = dog;
                    return <div className='btn'>
                        <a className='btn-breed' key={id} onClick={() =>{filterList(breed)}}>{breed}</a>
                    </div>
                })} */}

        </div>
                <div className="vertical-line"></div>
     </div>
    )
};
