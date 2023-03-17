import React from 'react';
import { Card } from 'react-bootstrap';
import './PlacesCard.css'
const PlacesCard = ({ place, handleDescription }) => {
    return (
        <Card id={place.id} onClick={() => {
            handleDescription(place.id)
        }} className="text-white places-card">
            <Card.Img className='position-relative card-img' src={place?.thumbnail} alt="Card image" />
            <Card.Title className='text-uppercase img-title'>{place?.name}</Card.Title>
        </Card>
    );
};

export default PlacesCard;