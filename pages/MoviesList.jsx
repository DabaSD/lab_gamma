import { useState, useEffect } from "react";

function MoviesList(){
    const [movies, setMovies] = useState([]);
    useEffect(async() => {
        const response = await fetch("api/movies");
        const movies = await response.json();
        setMovies(movies);
}, []);

return(
    <div>
        <h1  className="font-bold text-2xl py-5 text-blue-700" >Movie list</h1>
        <table className="border-collapse border border-slate-400">
            <thead>
                <tr>
                    <th className="border border-slate-400">Title</th>     
                    <th className="border border-slate-400">Release Year</th>
                </tr>
            </thead>
            <tbody>
                {movies.map(movie => {
                    return (
                        <tr key={movie.id}>
                            <td className="border border-slate-400">{movie.title}</td>
                            <td className="border border-slate-400">{movie.releaseYear}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    </div>
);

}

export default MoviesList;