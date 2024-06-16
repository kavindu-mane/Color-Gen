import {useContext} from "react";
import {ThemeContext} from "../providers/ThemeProvider.jsx";

const Footer = () => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <>
      <footer className="mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center flex justify-center">
          <span className="text-sm text-black text-center dark:text-white">
            Made with {currentTheme === "dark" ? "🤍" : "🖤"} by
          </span>
          <span className="text-sm text-black font-extrabold text-center dark:text-white">
            &nbsp;Nureka Rodrigo
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
