import {Navbar} from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export const Home = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-white dark:bg-black">
        <Navbar/>
        <section>
          {/* Content */}
        </section>
        <Footer/>
      </div>
    </>
  )
}
