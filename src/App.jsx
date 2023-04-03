import Navbar from "./Navbar"
import Welcome from "./Pages/Welcome"
import Info from "./Pages/Info"
import Catalog from "./Pages/Catalog"
import { Route, Routes } from "react-router-dom"



function App() {
  return  (
    <>
       <Navbar />
        <Routes>
          <Route path="/" element={<Welcome/>} />
          <Route path="catalog" element={<Catalog/>} />
          <Route path="info" element={<Info/>} />
        </Routes>
    </>
  )
}


export default App


