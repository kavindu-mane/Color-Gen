import {useEffect, useState} from "react";
import {Navbar} from "../components/layouts/Navbar.jsx";
import Footer from "../components/layouts/Footer.jsx";
import {Cookie} from "../components/cards/Cookie.jsx";
import chroma from "chroma-js";
import {SignOut} from "../components/cards/SignOut.jsx";
import {ForgotPassword} from "../components/cards/ForgotPassword.jsx";
import {SwitchNotification} from "../components/cards/SwitchNotification.jsx";
import {Stats} from "../components/cards/Stats.jsx";
import {Pricing} from "../components/cards/Pricing.jsx";

export const Home = () => {
  const [color, setColor] = useState("#3b82f6");
  const [inputColor, setInputColor] = useState("#3b82f6");
  const [tooltip, setTooltip] = useState({});

  const handleColorClick = (shade) => {
    navigator.clipboard.writeText(palette[shade].toUpperCase());
    setTooltip((prevTooltip) => ({
      ...prevTooltip,
      [shade]: true,
    }));
    setTimeout(() => {
      setTooltip((prevTooltip) => ({
        ...prevTooltip,
        [shade]: false,
      }));
    }, 2000);
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setInputColor(newColor);
    if (chroma.valid(newColor)) {
      setColor(newColor);
    }
  };

  const handleTextInputChange = (event) => {
    let newColor = event.target.value.trim().toLowerCase();

    if (!newColor.startsWith('#')) {
      newColor = `#${newColor}`;
    }

    if (newColor.length > 7) {
      return;
    }

    setInputColor(newColor);

    if (chroma.valid(newColor)) {
      setColor(newColor);
    }
  };

  const generatePalette = (baseColor) => {
    const darkerShade = chroma(baseColor).darken(2).hex();
    const lighterShade = chroma(baseColor).brighten(2).hex();
    const scale = chroma
      .scale([darkerShade, baseColor, lighterShade])
      .mode("lab")
      .colors(11)
      .reverse();

    const palette = {};
    const values = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

    values.forEach((value, index) => {
      palette[value] = scale[index];
    });

    return palette;
  };

  const palette = generatePalette(color);

  const generateNewColor = () => {
    const newColor = chroma.random().hex();
    setColor(newColor);
    setInputColor(newColor);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.keyCode === 32) {
        generateNewColor();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Navbar/>
        <section className="pt-16 px-6">
          <h1 className="text-4xl font-bold text-black dark:text-white text-center mt-12">
            Tailwind CSS Color Generator
          </h1>
          <h3 className="text-lg text-gray-500 dark:text-gray-400 text-center mt-2">
            Press space bar to generate a custom color scale
          </h3>
        </section>

        <section className="flex flex-grow items-center justify-center w-full py-10">
          <div className="flex items-center justify-center max-w-xl w-full">
            <div className="flex items-center justify-center mx-6 w-full">
              <input
                type="color"
                value={inputColor}
                onChange={handleColorChange}
                className="w-12 h-[2.88rem] p-1.5 border rounded-bl-lg rounded-tl-lg border-neutral-200 bg-white dark:border-neutral-700 dark:bg-neutral-900"
              />
              <input
                type="text"
                value={inputColor.toUpperCase()}
                onChange={handleTextInputChange}
                placeholder="#FFFFFF"
                className="block w-full rounded-l-none rtl:rounded-l-lg rtl:rounded-r-none placeholder-neutral-400/70 dark:placeholder-neutral-500 rounded-lg border border-neutral-200 bg-white px-5 py-2.5 text-neutral-700 focus:border-neutral-400 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center justify-center w-full pb-10 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-11 gap-y-2 lg:gap-x-8 w-full max-w-3xl">
            {Object.entries(palette).map(([shade, colorValue]) => (
              <div key={shade} className="flex flex-col items-center">
                <div
                  className="w-full sm:w-14 lg:w-16 h-16 rounded-lg relative"
                  style={{backgroundColor: colorValue}}
                  onClick={() => handleColorClick(shade)}
                >
                  {tooltip[shade] && (
                    <div className="absolute top-0 left-0 bg-black text-white text-xs p-1 rounded">
                      Copied
                    </div>
                  )}
                </div>
                <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
                  {shade}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {colorValue.toUpperCase()}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="container px-6 pb-8 m-auto">
            <div className="grid grid-cols-4 gap-6 lg:grid-cols-12">
              <div className="col-span-4 lg:col-span-3">
                <SignOut color={color}/>
              </div>
              <div className="col-span-4 lg:col-span-6">
                <ForgotPassword color={color}/>
              </div>
              <div className="col-span-4 lg:col-span-3">
                <Cookie color={color}/>
              </div>
            </div>
          </div>

          <div className="container px-6 pb-8 m-auto">
            <div className="grid grid-cols-4 gap-6 lg:grid-cols-12">
              <div className="col-span-4 lg:col-span-7">
                <Pricing color={color}/>
              </div>
              <div className="col-span-4 lg:col-span-5">
                <SwitchNotification color={color}/>
              </div>
            </div>
          </div>

          <div className="container px-6 pb-8 m-auto">
            <Stats color={color}/>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
};
