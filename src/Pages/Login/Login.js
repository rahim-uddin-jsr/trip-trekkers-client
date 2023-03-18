import React, { useContext, useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaGithubAlt, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Login = () => {
    const { handleGoogleSignIn, loginWithEmailPassword, gitHubLogin } = useContext(AuthContext)
    const emailRef = useRef()
    const passwordRef = useRef()
    const [isAgree, setIsAgree] = useState(false)
    const navigate = useNavigate()
    const handleLogin = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password, isAgree);
        loginWithEmailPassword(email, password)
            .then(result => {
                toast.success('login success')
                console.log(result);
                navigate('/');
            }).catch(err => {
                toast(err.massage);
            })
    }
    const handleGoogleLogin = (e) => {
        console.log('g');
        handleGoogleSignIn().then(result => {
            toast.success('login success')
            console.log(result);
        }).catch(err => {
            toast(err.massage);
        })
    }
    const handleGithubSignIn = (e) => {
        gitHubLogin().then(result => {
            toast.success('Login success!')
            console.log(result);
        }).catch(err => {
            console.log(err);
            toast(err.massage)
        })
    }
    return (
        <div className='w-50 container-lg mx-auto'>

            <h2 className='text-center'>Please Login</h2>
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
                <p>Don't Have an account? <Link to='/register'>Register</Link></p>
                <Button variant="primary" id='login-btn' disabled='disabled' type="submit">
                    Login
                </Button><br />
                <p>Forgat Password? <Link>reset</Link></p>
            </Form>
            <div className='text-center'>
                <p>-------- or --------</p>
                <Button className='my-2 btn-light shadow-lg' onClick={handleGoogleLogin}><FaGoogle /> Continue With Google</Button>
                <Button className='btn-light shadow-lg' onClick={handleGithubSignIn}><FaGithubAlt /> Continue With Github</Button>
            </div>
        </div>
    );
};

export default Login;