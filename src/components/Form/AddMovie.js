import React, { useState } from 'react'

const initialMovie = {
    title: '',
    openingText: '',
    releaseDate: '',
}

const AddMovie = (props) => {
    const [movie, setMovie] = useState(initialMovie)
    // const [allMovies, setAllMovies] = useState([])

    // console.log(movie)
    // console.log(allMovies)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setMovie((prevMovie) => {
            return { ...prevMovie, [name]: value }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onAddMovie(movie);
        setMovie(initialMovie)
    }
    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setAllMovies((prevMovies) => {
    //         return [...prevMovies, movie]
    //     })
    //     setMovie(initialMovie)
    // }

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit} >
                <div className="inputDiv">
                    <label className='title'>
                        Title :
                        &nbsp;<input type="text" name="title" value={movie.title} onChange={handleChange} placeholder="Enter Movie Title" required />
                    </label>
                </div>
                <div className="inputDiv">
                    <label className="inputTextArea">
                        Opening Text :
                        &nbsp;<textarea type="text" rows='5' name="openingText" value={movie.openingText} onChange={handleChange} placeholder="Enter Opening Text" required />
                    </label>
                </div>
                <div className="inputDiv">
                    <label>
                        Release Date :
                        &nbsp;<input type="date" name="releaseDate" value={movie.releaseDate} onChange={handleChange} placeholder="Enter Product Name" required />
                    </label>
                </div>
                <div>
                    <button type='submit'>Add Movie</button>
                </div>
            </form >
        </div>

    )
}

export default AddMovie;