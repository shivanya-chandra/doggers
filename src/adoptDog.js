import React, { useState, useEffect } from 'react';
import DogsList from './DogsList'
import FilteredList from './filteredList';
import './adoptDog.css';
const url = 'https://cors-anywhere.herokuapp.com/https://mysterious-depths-29675.herokuapp.com/';


export default function AdoptDog() {
    const [dogs, setDogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [breeds, setBreed] = useState('')

    const fetchDogs = async () => {
        const response = await fetch(url);
        const newDogs = await response.json();
        setDogs(newDogs);
        setLoading(false)
    }
    useEffect(() => {
        fetchDogs()
    }, [])

    

    const search = (dogs) => {
        
        return dogs.filter((dog) => dog.breed.toLowerCase().indexOf(breeds.toLowerCase()) > -1);
        //indexOf will try to match the index of the breeds in the API with the breed that is passed in by the user
    }
    
    const results = search(dogs);

    
    const handleChange = (e) => {
        setBreed(e.target.value)

   }

    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className='main-adopt'>
            <h1>Seach for the breed you would like to adopt</h1>
            <section id="adopt">
        <div className='form-box'>
                <input className='search-form' type="text" value={breeds} onChange={handleChange}/>
                    
                    <button className='search-btn'>Search</button>
                    
           </div>
            </section>
            {!results.length && !loading ? <div className='no-match' ><h4>No match found, try something else</h4></div> : <DogsList dogs={results} breeds={breeds} />}
        </div>
    )    
}
