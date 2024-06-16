import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-neutral-950">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
