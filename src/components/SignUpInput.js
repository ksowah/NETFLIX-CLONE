import React, { useState } from 'react'
import './signUpInput.css'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getFirestore } from "firebase/firestore"; 
import app from '../firbase';
import { useHistory } from 'react-router-dom'
import Fade from 'react-reveal/Fade';

function SignUpInput() {

    const [show, setShow] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)

    const checkShow = () => {
        setShow(true)
    }

    const history = useHistory()

    const auth = getAuth(app);
    const db = getFirestore()

    async function test(user) {

        try {
            const docRef = await addDoc(collection(db, "users"), {
              email: user.email,
              date: new Date(),
              time : new Date().getHours() + ":" + new Date().getMinutes(),
              userId : user.uid
            });
          } catch (e) {
              console.log(e)
          }
       
    }
  

    const getEmailValue = (e) => {
         setEmail(e.target.value)
    }

    const getPasswordValue = (e) => {
         setPassword(e.target.value)
    }

    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            history.push('/home')
            test(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            setShow(false)
            setError(true)
            setErrorMessage(errorCode + '!')
            // ..
        });


    
    }

    return (
        <>
        <div className='container'>
            {/* email input */}
                    <input type='email' placeholder='Email address' className={`input__email ${show && 'input__hideEmail'} ${error && 'input__error'}`} onChange={getEmailValue}/>
                    <button className={`input__btn ${show && 'input__hideEmail'}`} onClick={checkShow}>Get Started</button>

            {/* password input */}
            <Fade bottom>
                <input type='password' placeholder='Password' className={`input__email ${!show && 'input__hideEmail'}`} onChange={getPasswordValue}/>
                <button className={`input__btn ${!show && 'input__hideEmail'}`} onClick={signUp}>Submit</button>
            </Fade>
        </div>
        <div className='error__wrap'>
            <p className='error__message'>{errorMessage}</p>
        </div>
        </>
    )
}

export default SignUpInput
