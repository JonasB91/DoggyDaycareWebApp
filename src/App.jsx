import Navbar from "./Navbar"
import Welcome from "./Pages/Welcome"
import Info from "./Pages/Info"
import Catalog from "./Pages/Catalog"
import SingleDog from "./Pages/SingleDog"
import {Route, Routes} from "react-router-dom"


function App() {
    return (
      <>
        <Navbar />
          <div>
              <Routes>
              <Route path="/" element={<Welcome />}></Route>
              <Route path="catalog" element={<Catalog />}></Route>
              <Route path="/Dogs/Info/:index" element={<SingleDog />}></Route>
              </Routes>
          </div>
      </>
    )
}

export default App