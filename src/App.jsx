import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalContext from "./Context/GlobalContext"
import DefaultLayout from "./Layout/DefaultLayout"

function App() {


  return (
    //<GlobalContext.Provider value={{}}>
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
        </Route>
      </Routes>
    </BrowserRouter>
    //</GlobalContext.Provider>
  )
}

export default App
