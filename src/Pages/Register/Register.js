import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Register = () => {
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const photoUrlRef = useRef()
    const handleRegister = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const photoUrl = photoUrlRef.current.value;
        const name = nameRef.current.value;
        console.log(email, password);
    }
    const handleGoogleSignIn = (e) => {

    }
    const handleGithubSignIn = (e) => {

    }
    return (
        <div className='w-50 container-lg mx-auto'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="email" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Photo Url</Form.Label>
                    <Form.Control ref={photoUrlRef} type="url" placeholder="Enter photo url" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                </Form.Group>
                <p>Already have an account? <Link to='/login'>Login</Link></p>
                <Button variant="primary" className='login-btn' disabled='disabled' type="submit">
                    Login
                </Button><br />
            </Form>
            <div className='text-center'>
                <p>-------- or --------</p>
                <Button className='my-2 btn-light shadow-lg login-btn' onClick={handleGoogleSignIn}><FaGoogle /> Continue With Google</Button>
                <Button className='btn-light shadow-lg login-btn' onClick={handleGithubSignIn}><FaGithubAlt /> Continue With Github</Button>
            </div>
        </div>
    );
};

export default Register;