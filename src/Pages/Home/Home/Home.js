import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PlacesCard from '../ImgCard/PlacesCard';
import PlaceShortDescription from '../PlaceShortDescription/PlaceShortDescription';
import './Home.css'

const Home = () => {
    const places = useLoaderData()
    const [count, setCount] = useState(1)
    const [bgUrl, setBgUrl] = useState(places[0].bacground)
    const handleDescription = (id) => {
        setCount(id)
        setBgUrl(places[id - 1].bacground)
    }
    useEffect(() => {
        const homePage = document.getElementById('home');
        homePage.style.backgroundImage = `url(${bgUrl})`
        
    }, [bgUrl])

    return (
        <div id='home' className='d-flex justify-content-between align-middle vh-100 gap-2'>
            <div className='w-50 h-100 d-flex flex-column justify-content-center'>
                <PlaceShortDescription place={places[count - 1]} />
            </div>
            <div id='place-card-container' className='d-flex justify-content-between align-items-center gap-2'>
                {
                    places.map(place => <PlacesCard key={place.id} place={place} handleDescription={handleDescription}></PlacesCard>)
                }
            </div>
        </div>
    );
};

export default Home;