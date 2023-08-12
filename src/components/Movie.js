import React from 'react';

import classes from './Movie.module.css';

const Movie = ({ id, title, releaseDate, openingText, onDeleteMovie }) => {
  console.log(id)
  // console.log(typeof (props.movies[0].id))
  return (
    <li className={classes.movie} key={id} id={id}>
      <h2>{title}</h2>
      <h3>{releaseDate}</h3>
      <p>{openingText}</p>
      <button onClick={() => onDeleteMovie(id)}>Delete Movie</button>
    </li>
  );
};

export default Movie;
