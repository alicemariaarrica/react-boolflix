
import { useGlobalContext } from "../context/GlobalContext";
import MediaCard from "./MediaCard";

export default function MovieList() {
    const { movies, searchText } = useGlobalContext();

    return (
        <section className="movie-list">
            <div className="p-3 bg-dark mb-4">
                <h2>{!searchText ? 'Popular Movies' : 'Movies'}</h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                    {movies && movies.map((movie) => (
                        <MediaCard
                            key={movie.id}
                            title={movie.title}
                            original={movie.original_title}
                            vote={movie.vote_average}
                            overview={movie.overview}
                            poster={movie.poster_path}
                            lang={movie.original_language}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
