
import { useGlobalContext } from "../context/GlobalContext";
import Rating from "./Rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";

export default function MediaCard({ title, original, vote, overview, poster, lang }) {
    const imageURL = `https://image.tmdb.org/t/p/w342/${poster}`;


    const getFlagURL = (language) => {
        const flagBaseURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/";
        const langToFlag = {
            "it": "4/42/Flag_of_Italy.svg/120px-Flag_of_Italy.svg.png",
            "en": "1/1f/Flag_of_the_United_States.svg/120px-Flag_of_the_United_States.svg.png",
            "fr": "c/c3/Flag_of_France.svg/120px-Flag_of_France.svg.png",

        };

        return langToFlag[language] || "default-flag.png";
    };

    return (
        <div className="media-card">
            <img src={imageURL} alt={title} className="poster-img" />
            <div className="media-card-details">
                <h3>{title}</h3>
                <p>{original}</p>
                <div className="flag">
                    <img src={getFlagURL(lang)} alt={`Flag of ${lang}`} />
                </div>
                <Rating vote={vote} />
                <p>{overview}</p>
            </div>
        </div>
    );
}
