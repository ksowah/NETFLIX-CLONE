import React from 'react'
import './components/signUp.css'
import SignUpInput from './components/SignUpInput'
import { useHistory } from 'react-router-dom'
import AnimationCard from './components/AnimationCard'

function SignUp() {


    const history = useHistory()
    const changePage = () => {
        history.push('/')
    }

    return (
        <>
        <div className='signUp__wrap'>
        <div className='signUp'>
            <div className='signUp__cover'>
                <div className='signUp__nav'>
                    <img className='signUp__navlogo'
                        src={`https://www.freepnglogos.com/uploads/netflix-tv-logo-png-9.png`}
                        alt='Netflix Logo'
                    />
                    <button className='sign-up__btn' onClick={changePage}>Sign In</button>
                </div>
                <div className='signUp__container'>
                    <div className='signUp__title'>
                        <h1>Unlimited movies, TV shows, and more.</h1>
                    </div>
                    <div className='signUp__subTitle'>
                        <h2>Watch anywhere. Cancel anytime.</h2>
                    </div>
                    <div className='signUp__secontSubTitle'>
                        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                    </div>
                    <SignUpInput />
                </div>
            </div>
        </div>
        <AnimationCard
            img ='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
            video = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
            head = 'Enjoy on your TV.'
            subHeading = 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.'
            
        />
        <AnimationCard
            change = {true}
            img ='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
            head = 'Download your shows to watch offline.'
            subHeading = 'Save your favorites easily and always have something to watch.'
            
        />
         <AnimationCard
            img ='https://occ-0-3680-360.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd'
            head = 'Create profiles for kids.'
            subHeading = 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
            
        />

        <div style = {{ height: '100px', width: '100%'}}>

        </div>
    </div>
    </>
    )
}

export default SignUp
