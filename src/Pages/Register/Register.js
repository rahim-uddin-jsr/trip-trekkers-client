import React, { useContext, useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { FaGithubAlt, FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Register = () => {
    const { registerWithEmailPass, updateUserProfile, sendVerificationEmail } = useContext(AuthContext)
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const photoUrlRef = useRef()
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const photoUrl = photoUrlRef.current.value;
        const name = nameRef.current.value;
        console.log(email, password);
        const updateInfo = { displayName: name, photoURL: photoUrl }
        registerWithEmailPass(email, password).then((result) => {
            updateUserProfile(updateInfo).then(result => {
                console.log(result);
                toast.success('updated successFully')
                sendVerificationEmail().then(() => {
                    toast.success('verify your Email Address link sent')
                }).catch(e => { toast.error(e.message) })
                navigate('/')
            }).catch((e) => {
                toast.error(e.message)

            })
            console.log(result.user);
            toast.success('User created success')
        }).catch((e) => {
            toast.error(e.message)
        })
    }
    const handleGoogleSignIn = (e) => {

    }
    const handleGithubSignIn = (e) => {

    }
    return (
        <div className='w-50 container-lg mx-auto'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Enter Full Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicUrl">
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
                <Button variant="primary" className='login-btn' type="submit">
                    Register
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