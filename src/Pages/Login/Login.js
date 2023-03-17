import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithubAlt, FaGoogle } from "react-icons/fa";

const Login = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [isAgree, setIsAgree] = useState(false)
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password, isAgree);
    }
    const handleGoogleSignIn = (e) => {

    }
    const handleGithubSignIn = (e) => {

    }
    return (
        <div className='w-25 mx-auto'>
            <h2>Please Login</h2>
            <Form onSubmit={handleLogin}>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onChange={(e) => {
                        !isAgree ?
                            setIsAgree(true)
                            : setIsAgree(false);
                        !isAgree ? document.getElementById('login-btn').removeAttribute('disabled') :
                            document.getElementById('login-btn').setAttribute('disabled', 'disabled')

                    }} type="checkbox" label="Check me out" />
                </Form.Group>
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

export default Login;