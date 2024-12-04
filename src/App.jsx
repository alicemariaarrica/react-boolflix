
import { GlobalContextProvider, } from "./context/GlobalContext"


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