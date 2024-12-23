import { useGlobalContext } from "../context/GlobalContext"
import NetflixLogo from "/logo.png";

export default function AppHeader() {
    const { searchText, setSearchText, base_movies_api_url, HandleSearchTextSubmit } = useGlobalContext()
    console.log(base_movies_api_url);


    return (
        <header>

            <div className="logo">
                <img src={NetflixLogo} alt="" />
            </div>
            <form onSubmit={HandleSearchTextSubmit}>
                <input className="form-control" type="search" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} value={searchText} />

            </form>
        </header>

    )

}