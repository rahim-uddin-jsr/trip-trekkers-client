import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import PlaceShortDescription from '../Home/PlaceShortDescription/PlaceShortDescription';
import './Booking.css'
const Booking = () => {
    const place = useLoaderData()
    console.log(place);
    const bgUrl = `url(${place.bacground}),linear-gradient(to bottom, rgba(0,0,0,0.26) 0%,rgba(0,0,0,0.34) 100%)`;
    console.log(bgUrl);
    useEffect(() => {
        document.getElementById('booking').style.background = bgUrl;
        document.getElementById('booking').style.backgroundPosition = 'center';
        document.getElementById('booking').style.backgroundRepeat = 'no-repeat';
        document.getElementById('booking').style.backgroundBlendMode = 'overlay';
        // document.getElementById('booking').style.backfaceVisibility = '0.1';
    }, [bgUrl])
    return (
        <div id='booking' className='text-white d-grid row-cols-2  justify-content-around  align-items-center w-100 vh-100'>
            <div className='d-flex col-6 flex-column text-center justify-content-center align-items-center vh-100 w-50'>
                <h1 className='text-uppercase'>{place.name}</h1>
                <p>{place.description}</p>
            </div>

            <Form className='col-6'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default Booking;