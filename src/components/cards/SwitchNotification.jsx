import {IoClose} from "react-icons/io5";
import PropTypes from "prop-types";
import {useState} from "react";
import {FaRegBell} from "react-icons/fa";
import {GoPeople} from "react-icons/go";

export const SwitchNotification = ({ color }) => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="overflow-x-hidden overflow-y-auto">
        <div className="w-full mx-auto">
          <div className="relative flex flex-col bg-transparent border shadow-sm rounded-xl overflow-hidden dark:border-neutral-800">
            <div className="absolute top-2 end-2">
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
              >
                <span className="sr-only">Close</span>
                <IoClose />
              </button>
            </div>

            <div className="p-8 overflow-y-auto">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                  Notifications
                </h3>
                <p className="text-gray-500 dark:text-neutral-500">
                  Get notified of activity that matters to you
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                  <label
                    htmlFor="hs-account-activity"
                    className="flex p-4"
                  >
                    <span className="flex me-5">
                      <FaRegBell className="hidden sm:block size-8 text-gray-500 dark:text-neutral-500"/>

                      <span className="ms-5">
                        <span className="block font-medium text-gray-800 dark:text-neutral-200">
                          Account Activity
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-neutral-500">
                          Get important notifications about you or activity
                          you&apos;ve missed
                        </span>
                      </span>
                    </span>

                    <input
                      type="checkbox"
                      style={{backgroundColor: color}}
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-neutral-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:size-6 before:bg-gray-100 checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
                      defaultChecked={true}
                      disabled={true}
                    />
                  </label>
                </div>

                <div
                  className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                  <label
                    htmlFor="hs-meetups-near-you"
                    className="flex p-4"
                  >
                    <span className="flex me-5">
                      <GoPeople className="hidden sm:block size-8 text-gray-500 dark:text-neutral-500"/>

                      <span className="ms-5">
                        <span className="block font-medium text-gray-800 dark:text-neutral-200">
                          Meetups Near You
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-neutral-500">
                          Get an email when a Meetup is posted close to my
                          current location
                        </span>
                      </span>
                    </span>

                    <input
                      type="checkbox"
                      style={{backgroundColor: isChecked ? color : 'initial'}}
                      className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-neutral-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800 before:inline-block before:size-6 before:bg-gray-100 checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <div className="flex justify-end items-center pb-4 gap-x-2 px-4">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800"
              >
                Cancel
              </button>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
                style={{ backgroundColor: color }}
              >
                Update notifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SwitchNotification.propTypes = {
  color: PropTypes.string.isRequired,
};
