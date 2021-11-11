import React, { useState, useRef, useEffect } from 'react'
import './row.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'


function Row({ title, movies, isLarge }) {
    const [trailerUrl, setTrailerUrl] = useState('')

const base_url = 'https://image.tmdb.org/t/p/original'

const ref = useRef(null)


const opts = {
    height: '390',
    width: '100%',
    playerVars: {
        autoplay: 1,
    },
  };

  const handleClick = (movie) => {
      if(trailerUrl){
          setTrailerUrl('')
        }
      else{
          movieTrailer(movie?.original_name, {id: true, multi: true} || '')
          .then(url => {
              console.log(url)
                setTrailerUrl(url[url.length - 1])
            })
           .catch((error) => console.log(error))
      }
  }

    return (
        <>
        <div className='row'>
            <h2>{title}</h2>
            
            <div className='row__posters'>
                
           
                {movies.map(movie => (
                    <img 
                        key = {movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row__poster ${isLarge && 'row__poster-large'}`}
                        src={`${base_url}${
                            isLarge ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                     
                ))}
                
            </div>
           
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
        </>
    )
}

export default Row
