import {ThemeContext} from "../../providers/ThemeProvider.jsx";
import {useContext} from "react";
import {Link} from "react-router-dom";
import {FaMoon, FaSun} from "react-icons/fa";

export const Header = () => {
  const { currentTheme, changeCurrentTheme } = useContext(ThemeContext);

  return (
    <div
      className={`${currentTheme === "light" ? "bg-gray-50" : ""} ${currentTheme === "dark" ? "bg-neutral-950" : ""} flex w-full flex-col items-center justify-center p-5`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center justify-center gap-x-8">
          <Link to="/">
            <img
              src="/logo-text.svg"
              alt="logo"
              className="h-6 w-auto dark:invert"
            />
          </Link>
        </div>

        <div className="flex items-center">
          {/* Theme button */}
          <button
            className="h-6 w-6"
            onClick={() =>
              changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
            }
          >
            {currentTheme === "light" ? (
              <FaSun className="h-5 w-5" />
            ) : (
              <FaMoon className="text-white h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
