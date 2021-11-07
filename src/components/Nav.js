import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { getAuth, signOut } from "firebase/auth";
import app from '../firbase';
import './nav.css'

function Nav() {

    const [handleShow, setHandleShow] = useState(true)
    const auth = getAuth(app);
    const history = useHistory()

    const logOut = () => {
        signOut(auth).then(() => {
            history.push('/')
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
    });

    }
 

    useEffect(() =>{
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 100){
                setHandleShow(true)
            }else setHandleShow(false)
        })

        return ()=>{
            window.removeEventListener('scroll', ()=>{
                if(window.scrollY > 100){
                    setHandleShow(true)
                }else setHandleShow(false)
            })
        }
    }, [])

    return (
        <div className={`nav ${!handleShow && 'nav__blank'}`}>
            <img className='nav__logo'
                src={`https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png`}
                alt='Netflix Logo'
            />
            <img className='nav__avatar'
                title='Sign Out'
                onClick={logOut}
                src={`https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png`}
                alt='nav-avatar'
            />
        </div>
    )
}

export default Nav


