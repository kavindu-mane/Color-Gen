import './App.css'
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home.jsx";
import {Error404} from "./pages/Error404.jsx";

function App() {
  return (
    <>
      <div className="bg-gray-50 dark:bg-neutral-950">
        <Routes>
          <Route path={"/"} element={<Home/>}/>
          <Route path={"*"} element={<Error404/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
