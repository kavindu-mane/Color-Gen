import PropTypes from "prop-types";

export const Cookie = ({ color }) => {
  return (
    <>
      <div className="w-full mx-auto">
        <div className="p-6 border border-gray-200 rounded-xl shadow-sm dark:border-neutral-800">
          <div className="flex justify-between items-center gap-x-5 sm:gap-x-10">
            <h2 className="font-semibold text-gray-800 dark:text-white">
              Cookie Settings
            </h2>
          </div>
          <p className="mt-2 text-sm text-gray-800 dark:text-neutral-200">
            We use cookies to improve your experience. Visit
            our{" "}
            <a
              className="inline-flex items-center gap-x-1.5 decoration-2 hover:underline font-medium"
              style={{ color: color }}
              href="#"
            >
              Cookies Policy
            </a>{" "}
            to learn more. By clicking &quot;Allow all&quot; you agree to our use of cookies.
          </p>
          <div className="mt-5 mb-2 w-full flex gap-x-2">
            <div className="grid w-full">
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-opacity-90 disabled:opacity-50 disabled:pointer-events-none"
                style={{ backgroundColor: color }}
              >
                Allow all
              </button>
            </div>
            <div className="grid w-full">
              <button
                type="button"
                className="py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-opacity-90 disabled:opacity-50 disabled:pointer-events-none"
                style={{ backgroundColor: color }}
              >
                Reject all
              </button>
            </div>
          </div>
          <div className="grid w-full">
            <button
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
            >
              Manage cookies
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

Cookie.propTypes = {
  color: PropTypes.string.isRequired,
};
