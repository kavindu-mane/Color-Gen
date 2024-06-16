import {IoClose} from "react-icons/io5";
import PropTypes from "prop-types";

export const CookieCard = ({color}) => {
  return (
    <>
      <div className="sm:max-w-sm w-full mx-auto p-6">
        <div
          className="p-4 bg-white/60 backdrop-blur-lg rounded-xl shadow-2xl dark:bg-neutral-900/60 dark:shadow-black/70">
          <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Cookie Settings
            </h2>
            <button type="button"
                    className="inline-flex rounded-full p-2 text-gray-500 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-gray-600 dark:hover:bg-neutral-800 dark:text-neutral-300">
              <IoClose />
            </button>
          </div>
          <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
            We use cookies to improve your experience and for marketing. Visit our <a
            className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
            href="#">Cookies Policy</a> to learn more.
          </p>
          <div className="mt-5 mb-2 w-full flex gap-x-2">
            <div className="grid w-full">
              <button type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Allow all
              </button>
            </div>
            <div className="grid w-full">
              <button type="button"
                      className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                Reject all
              </button>
            </div>
          </div>
          <div className="grid w-full">
            <button type="button"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
              Manage cookies
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

CookieCard.propTypes = {
  color: PropTypes.string
}