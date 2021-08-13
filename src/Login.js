import React from 'react';
import './Login.css';
import {Button} from '@material-ui/core';
import {auth,  provider } from './firebase';
import {useDispatch} from 'react-redux';
import {login} from './features/userSlice';

function Login() {
    const dispatch = useDispatch()
    const signIn = () => {
        auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoUrl: user.photoURL
            }));
        })
        .catch( error => alert(error.message));
    }
    return (
        <div className="login">
            <div className="login-container">
                <img src="https://bit.ly/3ApdbQB" alt="gmail-logo"/>
            </div>
            <Button color='primary' variant='contained' className='login-button' onClick={signIn}>Login</Button>
        </div>
    )
}

export default Login;