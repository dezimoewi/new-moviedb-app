import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Search from "../components/Search.jsx";
import Spinner from "../components/Spinner.jsx";
import Card from "../components/Card.jsx";
import {useDebounce} from "react-use";
import {Link} from "react-router-dom";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const API_BASE_URL = 'https://api.themoviedb.org/3'
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
    const [movieList, setMovieList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [debounceSearchTerm, setDebounceSearchTerm] = useState('');

    useDebounce(() => setDebounceSearchTerm(searchTerm), 500, [searchTerm]);

    const API_OPTIONS = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${API_KEY}`,
        }
    };

    const [errorMassage, setErrorMassage] = useState('')

    const fetchData = async (query = '') => {

        setIsLoading(true);
        setErrorMassage('')

        try {
            const endpoint = query ?
                `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` :
                `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`
            const response = await fetch(endpoint, API_OPTIONS)

            if (!response.ok) {
                throw new Error('Failed to fetch movies' )
            }
            const data = await response.json()
            console.log(data)

            if (data.Response === 'false') {
             setErrorMassage(data.Error || 'fail to fetch movies')
                setMovieList([])
                return
            }
            setMovieList(data.results )

        }catch(error) {
            console.log(`Error fetching data from ${error}`)
            setErrorMassage('Error fetching movies, Please try again')
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
      fetchData(debounceSearchTerm)
    }, [debounceSearchTerm])


  return (
    <div>
        <Header/>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="main-section">
            <h1> All Movies</h1>
            {isLoading ? (<Spinner/>): errorMassage ? (<p className='err'>{errorMassage}</p>):
                (
                    <ul>
                        {movieList.map((movie) => (
                            <Link to = {`/movie/${movie.id}`} ><Card key={movie.id} movie={movie}/></Link>
                        ))}
                    </ul>
                )
            }
        </div>
    </div>
  )
}

export default Home