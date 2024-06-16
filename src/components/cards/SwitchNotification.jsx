import {IoClose} from "react-icons/io5";
import PropTypes from "prop-types";

export const SwitchNotification = ({color}) => {
  return (
    <>
      <div
        className="size-full overflow-x-hidden overflow-y-auto">
        <div
          className="w-full sm:mx-auto">
          <div
            className="relative flex flex-col bg-transparent border shadow-sm rounded-xl overflow-hidden dark:border-neutral-800">
            <div className="absolute top-2 end-2">
              <button type="button"
                      className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-neutral-700"
                      data-hs-overlay="#hs-notifications">
                <span className="sr-only">Close</span>
                <IoClose/>
              </button>
            </div>

            <div className="p-4 sm:p-10 overflow-y-auto">
              <div className="mb-6 text-center">
                <h3 className="mb-2 text-xl font-bold text-gray-800 dark:text-neutral-200">
                  Notifications
                </h3>
                <p className="text-gray-500 dark:text-neutral-500">
                  Get notified of activity that matters to you
                </p>
              </div>

              <div className="space-y-4">
                <div
                  className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                  <label htmlFor="hs-account-activity" className="flex p-4 md:p-5">
              <span className="flex me-5">
                <svg className="flex-shrink-0 mt-1 size-5 text-gray-500 dark:text-neutral-500"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path
                  d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>

                <span className="ms-5">
                  <span className="block font-medium text-gray-800 dark:text-neutral-200">Account Activity</span>
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Get important notifications about you or activity you've missed</span>
                </span>
              </span>

                    <input type="checkbox" style={{backgroundColor: color}} className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-neutral-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800
              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"
                           checked/>
                  </label>
                </div>

                <div
                  className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-800">
                  <label htmlFor="hs-meetups-near-you" className="flex p-4 md:p-5">
              <span className="flex me-5">
                <svg className="flex-shrink-0 mt-1 size-5 text-gray-500 dark:text-neutral-500"
                     xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path
                  d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path
                  d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>

                <span className="ms-5">
                  <span className="block font-medium text-gray-800 dark:text-neutral-200">Meetups Near You</span>
                  <span className="block text-sm text-gray-500 dark:text-neutral-500">Get an email when a Meetup is posted close to my current location</span>
                </span>
              </span>

                    <input type="checkbox" style={{backgroundColor: color}} className="relative w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none  dark:bg-neutral-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

              before:inline-block before:size-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-neutral-400 dark:checked:before:bg-blue-200"/>
                  </label>
                </div>
              </div>
            </div>

            <div
              className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-800">
              <button type="button"
                      className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-800 dark:text-white dark:hover:bg-neutral-800">
                Cancel
              </button>
              <a
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
                style={{backgroundColor: color}}>
                Update notifications
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

SwitchNotification.propTypes = {
  color: PropTypes.string.isRequired
}