import { BrowserRouter, Route, Routes } from 'react-router-dom'
import GlobalContext from "./Context/GlobalContext"
import DefaultLayout from "./Layout/DefaultLayout"

function App() {


  return (
    //<GlobalContext.Provider value={{}}>
    <>
      <DefaultLayout></DefaultLayout>
    </>
    //</GlobalContext.Provider>
  )
}

export default App
