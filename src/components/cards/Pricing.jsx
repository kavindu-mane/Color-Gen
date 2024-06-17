import {IoClose} from "react-icons/io5";
import {IoMdCheckmark} from "react-icons/io";
import PropTypes from "prop-types";

export const Pricing = ({ color }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="relative">
          <div className="grid grid-cols-1 gap-6 lg:gap-8">
            <div>
              <div className="p-4 relative z-10 bg-transparent border rounded-xl md:p-10 dark:border-neutral-800">
                <h3 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
                  Professional
                </h3>
                <div className="text-sm text-gray-500 dark:text-neutral-500">
                  Everything a small team needs.
                </div>

                <div className="mt-5">
                  <span
                    className="text-6xl font-bold text-gray-800 dark:text-neutral-200 transition-colors duration-300 ease-in-out"
                    style={{ color: color }}
                  >
                    $18
                  </span>
                  <span
                    className="text-lg font-bold text-gray-800 dark:text-neutral-200 transition-colors duration-300 ease-in-out"
                    style={{ color: color }}
                  >
                    .00
                  </span>
                  <span className="ms-3 text-gray-500 dark:text-neutral-500">
                    USD / monthly
                  </span>
                </div>

                <div className="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <span
                        className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500 transition-colors duration-300 ease-in-out"
                        style={{ backgroundColor: color }}
                      >
                        <IoMdCheckmark />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Up to 10 people
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span
                        className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500 transition-colors duration-300 ease-in-out"
                        style={{ backgroundColor: color }}
                      >
                        <IoMdCheckmark />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Collect data
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span
                        className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500 transition-colors duration-300 ease-in-out"
                        style={{ backgroundColor: color }}
                      >
                        <IoMdCheckmark />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Code extensibility
                      </span>
                    </li>

                    <div className="hidden lg:block xl:hidden">
                      <li className="flex space-x-3">
                        <span
                          className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500 transition-colors duration-300 ease-in-out"
                          style={{ backgroundColor: color }}
                        >
                          <IoMdCheckmark />
                        </span>
                        <span className="text-gray-800 dark:text-neutral-200">
                          Data export
                        </span>
                      </li>
                    </div>
                  </ul>

                  <ul className="space-y-2 text-sm sm:text-base">
                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <IoClose />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Custom reports
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <IoClose />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Product support
                      </span>
                    </li>

                    <li className="flex space-x-3">
                      <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                        <IoClose />
                      </span>
                      <span className="text-gray-800 dark:text-neutral-200">
                        Activity reporting
                      </span>
                    </li>

                    <div className="hidden lg:block xl:hidden">
                      <li className="flex space-x-3">
                        <span className="size-5 flex justify-center items-center rounded-full bg-gray-50 text-gray-500 dark:bg-neutral-800 dark:text-neutral-500">
                          <IoClose />
                        </span>
                        <span className="text-gray-800 dark:text-neutral-200">
                          API access
                        </span>
                      </li>
                    </div>
                  </ul>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      Cancel anytime.
                    </p>
                    <p className="text-sm text-gray-500 dark:text-neutral-500">
                      No card required.
                    </p>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
                    >
                      Start free trial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Pricing.propTypes = {
  color: PropTypes.string.isRequired,
};
