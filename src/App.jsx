import { useState } from "react";

const movies = [
    {
        title: "The Godfather",
        year: "1972",
        author: "Francis Ford Coppola",
    },
    {
        title: "The Shawshank Redemption",
        year: "1994",
        author: "Frank Darabont",
    },
    {
        title: "The Dark Knight",
        year: "2008",
        author: "Christopher Nolan",
    },
];

function App() {
    const [currentMovie, setCurrentMovie] = useState(null);

    return (
        <>
            <ul>
                {movies.map((movie) => (
                    <li
                        key={movie.title}
                        onClick={() => setCurrentMovie(movie)}
                    >
                        {movie.title}
                    </li>
                ))}
            </ul>

            {currentMovie && (
                <div className="movie-details">
                    <h2>{currentMovie.title}</h2>
                    <p>Year: {currentMovie.year}</p>
                    <p>Author: {currentMovie.author}</p>
                    <button onClick={() => setCurrentMovie(null)}>Close</button>
                </div>
            )}
        </>
    );
}

export default App;
