import React, { useEffect, useState, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/Form/AddMovie';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);


  const fetchMovieHandler = useCallback(async () => {
    console.log("fetch movie")
    try {

      setIsLoading(true);
      setIsError(null);
      const response = await fetch('https://swapi.dev/api/films/');

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
    }
    catch (error) {
      setIsError(error.message);
      setTimeout(() => {
        setIsError('Something went wrong ....Retrying');
      }, 5000)
    }
    setIsLoading(false);

  }, [])

  useEffect(() => {
    fetchMovieHandler();
  }, [fetchMovieHandler])

  let content = <h3>Found No Movies</h3>
  if (movies.length > 0) {
    content = <MoviesList movies={movies} />
  }
  if (isError) {
    content = <><h3>{isError}</h3>
      <button onClick={() => setIsError(false)}>Cancle</button>
    </>
  }
  if (isLoading) {
    content = <h3>Please Wait while data is Loading ...</h3>
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie />
      </section>
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment >
  );
}

export default App;



/*
//Fetch movies data when page is reload using useEffect
  // useEffect(() => {
  //   console.log("movie is fetched")
  //   fetchMovieHandler();
  // }, []);

  //By fetch method
  // const fetchMovieHandler = () => {
  //   fetch('https://swapi.dev/api/films/').then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     const transformedMovies = data.results.map((movieData) => {
  //       return {
  //         id: movieData.episode_id,
  //         title: movieData.title,
  //         openingText: movieData.opening_crawl,
  //         releaseDate: movieData.release_date
  //       };
  //     });
  //     setMovies(transformedMovies);
  //   });
  // }

  */