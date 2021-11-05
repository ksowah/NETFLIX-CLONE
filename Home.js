
import React from 'react';
import './App.css';
import Hero from './components/Hero';
import Nav from './components/Nav';
import Row from './components/Row';
import requests from './requests';
import useFetch from './useFetch';


function Home() {
    return (
      
        <div className='app'>
      <Nav />

      <Hero img={useFetch(requests.fetchNetflixOriginal)}/>

      <Row title='NETFLIX ORIGINAL' movies={useFetch(requests.fetchNetflixOriginal)} isLarge = {true} />
      <Row title='Trending Now' movies={useFetch(requests.fetchTrending)} />
      <Row title='Top Rated' movies={useFetch(requests.fetchTopRated)} />
      <Row title='Action Movies' movies={useFetch(requests.fetchActionMovies)} />
      <Row title='Comedy Movies' movies={useFetch(requests.fetchComedyMovies)} />
      <Row title='Horror Movies' movies={useFetch(requests.fetchHorrorMovies)} />
      <Row title='Romance Movies' movies={useFetch(requests.fetchRomanceMovies)} />
      <Row title='Documentaries' movies={useFetch(requests.fetchDocumentries)} />
    </div>
    )
}

export default Home
