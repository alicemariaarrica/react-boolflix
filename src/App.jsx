
import { GlobalContextProvider, } from "./contexts/GlobalContext"

function App() {



  return (
    <>

      <GlobalContextProvider>

        <AppHeader />

        <main>


        </main>

      </GlobalContextProvider>


    </>
  )
}

export default App