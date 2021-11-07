import React, { useEffect, useState } from 'react'
import './Hero.css'

function Hero({img}) {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        setMovie(
            img[ Math.floor(Math.random() * img.length - 1 )]
             )
    }, [ img[ Math.floor(Math.random() * img.length - 1 )]])
        
    function truncate(str, n) {
        return str?.length > n? str.substr(0, n - 1) + '...': str
    }
    
    return (
        <>
        <header className = 'hero'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(
                    'https://image.tmdb.org/t/p/original/${movie?.backdrop_path}'
                )`,
                backgroundPosition: 'center center',
            }}
        >
            <div className = 'hero__content'>
                <h1 className='hero__title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='hero__buttons'>
                    <button className='hero__button'>
                        Play
                    </button>
                    <button className='hero__button'>
                        My List
                    </button>
                </div>
                <h2 className='hero__description'>
                   {truncate(movie?.overview, 150)}
                </h2>
            </div>
             
        <div className='hero__fadeBottom'>
            
         </div>
        </header>
       
        </>
    )
}

export default Hero
