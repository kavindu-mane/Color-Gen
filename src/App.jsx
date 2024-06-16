import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";

function App() {
  return (
    <>
      <div className="bg-white dark:bg-black">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
