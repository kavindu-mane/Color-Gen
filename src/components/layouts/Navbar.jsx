import {ThemeContext} from "../../providers/ThemeProvider.jsx";
import {useContext, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {IoMdMenu} from "react-icons/io";
import {FaMoon, FaSun} from "react-icons/fa";

const navItems = [
  {name: 'Home', path: '/'},
];

export const Navbar = () => {
  const {currentTheme, changeCurrentTheme} = useContext(ThemeContext);
  const [opened, setOpened] = useState(false);
  const location = useLocation();
  const {pathname} = location;

  return (
    <div
      className={`${currentTheme === "light" && opened ? "bg-white" : ""} ${currentTheme === "dark" && opened ? "bg-black" : ""} flex w-full flex-col items-center justify-center p-5`}
    >
      <div className="flex w-full max-w-7xl items-center justify-between">
        <div className="flex items-center justify-center gap-x-8">
          <Link to="/">
            <img src="/vite.svg" alt="logo" className="h-8 w-10"/>
          </Link>
        </div>

        <div className="hidden gap-x-5 lg:flex items-center justify-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`rounded-md ${pathname === item.path ? "bg-black dark:bg-white text-white dark:text-black" : "text-black dark:text-white"} px-3 py-0.5`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-x-4">
          {/* Menu button */}
          <button
            onClick={() => setOpened(!opened)}
            className={`menu ${opened ? "opened" : ""} flex h-7 w-fit flex-col items-center justify-center gap-y-1 rounded-lg lg:hidden`}
          >
            <IoMdMenu className="h-5 w-8 text-black dark:text-white"/>
          </button>

          {/* Theme button */}
          <button
            className="h-6 w-6"
            onClick={() =>
              changeCurrentTheme(currentTheme === "light" ? "dark" : "light")
            }
          >
            {currentTheme === "light" ? (
              <FaSun className="h-6 w-6"/>
            ) : (
              <FaMoon className="text-white h-5 w-5"/>
            )}
          </button>
        </div>
      </div>

      {/* Menu for small devices */}
      {opened && (
        <div className="flex h-screen w-full flex-col items-center gap-y-6 py-8 dark:text-white lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`w-full rounded-md px-3 py-2 font-medium ${pathname === item.path ? "bg-black dark:bg-white text-white dark:text-black" : "text-black dark:text-white"}`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};