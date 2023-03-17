import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Booking = () => {
    const place = useLoaderData()
    console.log(place);
    return (
        <div>
            <h2 >This is Booking Page</h2>
        </div>
    );
};

export default Booking;