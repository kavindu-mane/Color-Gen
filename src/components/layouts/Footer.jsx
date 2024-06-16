import {useContext} from "react";
import {ThemeContext} from "../../providers/ThemeProvider.jsx";
import {Link} from "react-router-dom";

const Footer = () => {
  const {currentTheme} = useContext(ThemeContext);

  return (
    <>
      <footer className="mt-auto">
        <div className="w-full mx-auto max-w-screen-xl p-4 items-center flex justify-center">
          <span className="text-sm text-black text-center dark:text-white">
            Made with {currentTheme === "dark" ? "🤍" : "🖤"} by
          </span>
          <Link
            to="https://github.com/nureka-rodrigo"
            target="_blank"
          >
            &nbsp;
            <span className="text-sm text-black font-extrabold text-center dark:text-white hover:underline">
              Nureka Rodrigo
            </span>
          </Link>
        </div>
      </footer>
    </>
  );
};

export default Footer;
