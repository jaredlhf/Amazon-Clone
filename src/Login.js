import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                //successfully created new user with email and pw
                console.log(auth);
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img 
                    className="login__logo"
                    src='https://lh3.googleusercontent.com/proxy/TkbEbzZbGSf1HJMzCID9CEU7cqJHmHMJ8aFdbwRk5iUmhRP8d0YCIZY8EBKbzIAgWt0iW4REvld4NBc5G3aWv1xCuRW4eohguMg6X7zNKIy71yxsbbn-eQn6TUYHfyCNKFG0Z6bqxDgfO7Li7A' 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to Jared's Conditions
                    of Use & Sale. 
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>

            </div>
        </div>
    )
}

export default Login
