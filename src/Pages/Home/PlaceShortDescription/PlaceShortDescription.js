import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';
const PlaceShortDescription = ({ place }) => {
    return (
        <div className='text-white'>
            <h2 className='text-uppercase'>{place.name}</h2>
            <p>{place.description.slice(0, 120)}</p>
            <Link to={`/booking/${place.id}`} className='btn btn-warning fw-bold text-white'>Booking <FaArrowRight /></Link>
        </div>
    );
};

export default PlaceShortDescription;