import { useState } from "react";

const movies = [
    {
        title: "Ojciec Chrzestny",
        year: "1972",
        author: "Francis Ford Coppola",
    },
    {
        title: "Skazani na Shawshank",
        year: "1994",
        author: "Frank Darabont",
    },
    {
        title: "Mroczny rycerz",
        year: "2008",
        author: "Christopher Nolan",
    },
];

function App() {
    const [currentMovie, setCurrentMovie] = useState(null);

    return (
        <>
            <meta name="description" content="Lista popularnych filmów" />
            <meta
                name="keywords"
                content={`film, kino, lista filmów ${
                    currentMovie ? ", " + currentMovie.author : ""
                }`}
            />
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
