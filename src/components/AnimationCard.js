import React from 'react'
import { animation } from 'react-reveal/globals'
import './animationCard.css'

function AnimationCard({img, head, video, subHeading, change}) {
    
    return (
        <div className='animation'>
            <div className={`animation__wrap ${change && 'animation__change'}`}>
                <div className='animation__text'>
                    <h1>{head}</h1>
                    <h2>{subHeading}</h2>

                </div>
                <div className='animation__media' >
                    <video autoPlay loop muted className='video' src={video} type='video/mp4'/>
                    <img src={img}/>

                </div>
            </div>
            
        </div>
    )
}

export default AnimationCard
