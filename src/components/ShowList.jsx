
import { useGlobalContext } from "../context/GlobalContext";
import MediaCard from "./MediaCard";

export default function ShowList() {
    const { shows } = useGlobalContext();

    return (
        <section className="show-list">
            <div className="p-3 bg-dark mb-4">
                <h2>TV Series</h2>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xxl-4">
                    {shows && shows.map((show) => (
                        <MediaCard
                            key={show.id}
                            title={show.name}
                            original={show.original_name}
                            vote={show.vote_average}
                            overview={show.overview}
                            poster={show.poster_path}
                            lang={show.original_language}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
