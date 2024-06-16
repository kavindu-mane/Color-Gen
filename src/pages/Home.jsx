import {useState} from "react";
import {Navbar} from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export const Home = () => {
  const [color, setColor] = useState("#FFFFFF");

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  const handleTextInputChange = (event) => {
    const newColor = event.target.value.startsWith("#") ? event.target.value : `#${event.target.value}`;
    if (/^#[0-9A-F]{0,6}$/i.test(newColor)) {
      setColor(newColor);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar />
        <section className="flex flex-grow items-center justify-center w-full">
          {/* Content */}
          <div className="flex items-center justify-center max-w-5xl w-full">
            <div className="flex items-center justify-center mt-2 mx-6 w-full">
              <input
                type="color"
                value={color}
                onChange={handleColorChange}
                className="w-12 h-[2.88rem] mt-[0.05rem] p-1 border rounded-bl-lg rounded-tl-lg border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
              />
              <input
                type="text"
                value={color}
                onChange={handleTextInputChange}
                placeholder="#FFFFFF"
                className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-neutral-400/70 dark:placeholder-neutral-500 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-neutral-700 focus:border-neutral-400 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
              />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
