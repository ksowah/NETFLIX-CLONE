import React, { useState } from 'react'
import './components/login.css'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from './firbase';

function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)
    
    const history = useHistory()
    const changePage = () => {
        history.push('/sign-up')
    }

    const getEmailValue = (e) => {
        setEmail(e.target.value)
    }

    const getPasswordValue = (e) => {
        setPassword(e.target.value)
    }

    const auth = getAuth(app)

    const SignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    history.push('/home')
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    setError(true)
    setErrorMessage(errorCode)
  });

    }

    return (
    <>
        <div className='login'>
            <div className='login__cover'>
                <div className='login__nav'>
                <img className='login__navlogo'
                        src={`https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png`}
                        alt='Netflix Logo'
                    />
                </div>
            <div className='login__container'>
                <div className='login__content'>
                    <div className='login__head'><h1>Sign In</h1></div>
                    <div className='login__inputs'>
                        <input type='email' className='login__email' placeholder='Email' onChange={getEmailValue}/>
                        <input type='password' className={`login__password ${error && 'login__err'}`} 
                        placeholder='Password' onChange={getPasswordValue}/>
                            <p className='login__errorMessage'>{errorMessage}</p>
                        
                        <button className='login__button' onClick={SignIn}>Sign In</button>
                        <div className='login__child'>
                           <label>
                               <input type='checkbox' className='login__checkbox'/>
                               Remember me
                           </label>
                           <div><a className='login__need-help'>Need help?</a></div>
                        </div>
                    </div>
                </div>
                <div className='login__footer'>
                    <div className='login__facebook'>
                        login with facebook
                    </div>
                    <div className='login__signup'>
                        New to Netflix? <a onClick={changePage}>Sign up now.</a>
                    </div>
                    <div className='login__final'>
                    This page is protected by Google reCAPTCHA to 
                    ensure you're not a bot. <a className='login__learnmore'>Learn more.</a>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
    )
}

export default Login
