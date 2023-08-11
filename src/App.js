import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  const fetchMovieHandler = async () => {
    console.log("fetch movie")
    try {

      setIsLoading(true);
      const response = await fetch('https://swapi.dev/api/films/');

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
      setIsLoading(false);
    }
    catch {
      //
      //setIsLoading(true);
    }

  }

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

  return (
    <React.Fragment>
      {isLoading && <section>
        <h2>Please Wait while data is Loading ...</h2>
      </section>}
      <section>
        <button onClick={fetchMovieHandler}>Fetch Movies</button>
      </section>
      {!isLoading && <section>
        <MoviesList movies={movies} />
      </section>}
    </React.Fragment>
  );
}

export default App;
