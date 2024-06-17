import PropTypes from "prop-types";
import {IoIosWarning} from "react-icons/io";

export const SignOut = ({ color }) => {
  return (
    <>
      <div className="size-full overflow-x-hidden overflow-y-auto">
        <div className="w-full sm:mx-auto">
          <div className="relative flex flex-col bg-transparent border border-gray-200 rounded-xl shadow-sm dark:border-neutral-800">
            <div className="p-4 sm:p-5 text-center overflow-y-auto">
              <span className="mb-4 inline-flex justify-center items-center size-[62px] lg:size-[38px] xl:size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500 dark:bg-yellow-700 dark:border-yellow-600 dark:text-yellow-100">
                <IoIosWarning className="size-7" />
              </span>

              <h3 className="mb-2 text-2xl font-bold text-gray-800 dark:text-neutral-200">
                Sign out
              </h3>
              <p className="text-gray-500 dark:text-neutral-500">
                Are you sure you would like to sign out of your account?
              </p>

              <div className="mt-7 flex justify-center gap-x-4">
                <button className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800">
                  Sign out
                </button>
                <button
                  type="button"
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                  style={{ backgroundColor: color }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SignOut.propTypes = {
  color: PropTypes.string.isRequired,
};
