import React from 'react'

export default function Dogslist({ dogs, breed}) {
    
    return (
        <div className='flex'>
            <div className="child2">
                {dogs.map((dog) => {
                
                const { id, name, image, age, breed } = dog;
                return (
                    <div key={id}>
                        <div className="dog-list">
                            <img src={image} alt={name} />
                            <div className="base">
                            <h3> Name: {name} </h3>
                            <h4>Age: {age}</h4>
                                <h5>Breed: {breed}</h5>
                            </div>
                        </div>
                        
                    </div>
                    
                )
            })}
            </div>
        </div>
    )
}
