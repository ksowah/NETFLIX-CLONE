import {useState, useEffect} from 'react'
import axios from 'axios'


function useFetch(url) {
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get(url)
        .then((response) => {
            setMovies(response.data.results); 
        })
        .catch((err) => {
            setError(err)
            console.log(error)
        })
    }, [url])    
    
    return movies
}

export default useFetch
