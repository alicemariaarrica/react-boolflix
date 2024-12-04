
import { GlobalContextProvider, } from "./context/GlobalContext"
import MediaCard from "./components/MediaCard"
import AppHeader from "./components/AppHeader"
import MovieList from "./components/MovieList"
import ShowList from "./components/ShowList"

function App() {



  return (
    <>

      <GlobalContextProvider>

        <AppHeader />

        <main>

          <MovieList />
          <ShowList />

        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App