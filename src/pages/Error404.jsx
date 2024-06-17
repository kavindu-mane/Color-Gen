import {Link} from "react-router-dom";
import Footer from "../components/layouts/Footer.jsx";
import {MdKeyboardArrowLeft} from "react-icons/md";

export const Error404 = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <main className="flex flex-grow items-center justify-center w-full">
          <div className="text-center py-10 px-4 sm:px-6 lg:px-8">
            <h1 className="block text-7xl font-bold text-black sm:text-9xl dark:text-white">
              404
            </h1>
            <p className="mt-3 text-gray-600 dark:text-neutral-400">
              Oops, something went wrong.
            </p>
            <p className="text-gray-600 dark:text-neutral-400">
              Sorry, we couldn&apos;t find your page.
            </p>
            <div className="mt-5 flex flex-col justify-center items-center gap-2 sm:flex-row sm:gap-3">
              <Link
                className="relative py-2.5 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-neutral-950 hover:bg-neutral-800 dark:bg-white dark:hover:bg-gray-300 text-white dark:text-black disabled:opacity-50 disabled:pointer-events-none active:scale-95 transition-transform duration-150"
                to="/"
              >
                <MdKeyboardArrowLeft className="size-6"/>
                Back to Home
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};
