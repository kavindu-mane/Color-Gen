import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
        <Navbar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
