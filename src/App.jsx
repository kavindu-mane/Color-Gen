import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Navbar/>
        <Footer/>
      </div>
    </>
  )
}

export default App
