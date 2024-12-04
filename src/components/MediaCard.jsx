import React from 'react';
import { useGlobalContext } from "../contexts/GlobalContext";
import MediaCard from "./MediaCard";
import WorldFlag from 'react-world-flags';

export default function MovieList() {
    const { movies, serchText } = useGlobalContext();

    return (
        <section className="movie-list">
            <div className="p-3 bg-dark mb-4">
                <h2>{!serchText ? 'Popular movies' : 'Movies'}</h2>
            </div>

            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                    {movies && movies.map((movie) => (
                        <div key={movie.id} className="col">
                            <MediaCard
                                title={movie.title}
                                original={movie.original_title}
                                vote={movie.vote_average}
                                overview={movie.overview}
                                poster={movie.poster_path}
                                lang={movie.original_language}
                            />

                            <WorldFlag code={movie.original_language.toUpperCase()} style={{ width: '30px', height: '20px' }} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
