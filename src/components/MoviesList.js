import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const deleteMovieHandler = async (id) => {
  // console.log(`https://store-movie-data-react-js-default-rtdb.firebaseio.com/movies/${id}.json`);
  try {
    const response = await fetch(`https://store-movie-data-react-js-default-rtdb.firebaseio.com/movies/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      // if sucess do something
    } else {
      throw new Error('could not delete data');
    }

  }
  catch (error) {
    console.log(error.message);
  }
}

const MovieList = (props) => {

  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          id={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
          onDeleteMovie={deleteMovieHandler}
        />
      ))}
    </ul>
  );
};

export default MovieList;
