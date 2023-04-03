import Navbar from "./Navbar"
import Welcome from "./Pages/Welcome"
import Info from "./Pages/Info"
import Catalog from "./Pages/Catalog"



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Welcome />
      break
    case "/catalog":
      component = <Catalog />
      break
    case "/info":
      component = <Info />
      break  
  }
  return  (
    <>
       <Navbar />
       {component}  
    </>
  )
}

export default App