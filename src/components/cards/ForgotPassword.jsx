import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export const ForgotPassword = ({ color }) => {
  return (
    <>
      <div className="size-full overflow-x-hidden overflow-y-auto">
        <div className="w-full sm:mx-auto">
          <div className="border border-gray-200 rounded-xl shadow-sm bg-transparent dark:border-neutral-800">
            <div className="p-4 sm:p-7">
              <div className="text-center">
                <h2 className="block text-2xl font-bold text-gray-800 dark:text-neutral-200">
                  Forgot password?
                </h2>
                <p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
                  Remember your password?&nbsp;
                  <Link
                    className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500 transition-colors duration-300 ease-in-out"
                    to="#"
                    style={{ color: color }}
                  >
                    Sign in here
                  </Link>
                </p>
              </div>

              <div className="mt-5">
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        placeholder="example@gmail.com"
                        className="px-4 block w-full placeholder-neutral-400/70 dark:placeholder-neutral-500 rounded-lg border border-neutral-200 bg-white py-2.5 text-neutral-700 focus:border-neutral-400 focus:outline-none dark:border-neutral-600 dark:bg-neutral-900 dark:text-neutral-300"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none transition-colors duration-300 ease-in-out"
                    style={{ backgroundColor: color }}
                  >
                    Reset password
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

ForgotPassword.propTypes = {
  color: PropTypes.string.isRequired,
};
