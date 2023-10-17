import React from "react";

const Dashboard = () => {
  return (
    <>
      {/* Statistics: Simple with Action */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
        {/* Card */}
        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
          {/* Body */}
          <div className="p-5 grow flex justify-between items-center">
            <dl className="space-y-1">
              <dt className="text-2xl font-bold">146</dt>
              <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                Sales
              </dd>
            </dl>
            <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-800 bg-emerald-200">
              <svg
                className="hi-solid hi-arrow-circle-up inline-block w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>7.9%</span>
            </div>
          </div>
          {/* END Body */}

          {/* Action Link */}
          <a
            href="#"
            className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:bg-gray-900/50 dark:hover:text-blue-300 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50"
          >
            View All Sales
          </a>
          {/* END Action Link */}
        </div>
        {/* END Card */}

        {/* Card */}
        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
          {/* Body */}
          <div className="p-5 grow flex justify-between items-center">
            <dl className="space-y-1">
              <dt className="text-2xl font-bold">$5,128</dt>
              <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                Earnings
              </dd>
            </dl>
            <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-rose-800 bg-rose-200">
              <svg
                className="hi-solid hi-arrow-circle-down inline-block w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                  clipRule="evenodd"
                />
              </svg>
              <span>6.9%</span>
            </div>
          </div>
          {/* END Body */}

          {/* Action Link */}
          <a
            href="#"
            className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:bg-gray-900/50 dark:hover:text-blue-300 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50"
          >
            View all Earnings
          </a>
          {/* END Action Link */}
        </div>
        {/* END Card */}

        {/* Card */}
        <div className="flex flex-col rounded-lg shadow-sm bg-white overflow-hidden dark:text-gray-100 dark:bg-gray-800">
          {/* Body */}
          <div className="p-5 grow flex justify-between items-center">
            <dl className="space-y-1">
              <dt className="text-2xl font-bold">$2,670</dt>
              <dd className="uppercase font-semibold text-sm text-gray-500 tracking-wider dark:text-gray-400">
                Wallet
              </dd>
            </dl>
            <div className="font-semibold inline-flex px-2 py-1 leading-4 items-center space-x-1 text-sm rounded-full text-emerald-800 bg-emerald-200">
              <svg
                className="hi-solid hi-arrow-circle-up inline-block w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span>5.6%</span>
            </div>
          </div>
          {/* END Body */}

          {/* Action Link */}
          <a
            href="#"
            className="block p-3 font-medium text-sm text-center bg-gray-50 hover:bg-gray-100 hover:bg-opacity-75 active:bg-gray-50 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:bg-gray-900/50 dark:hover:text-blue-300 dark:hover:bg-gray-900/75 dark:active:bg-gray-900/50"
          >
            Check your Balance
          </a>
          {/* END Action Link */}
        </div>
        {/* END Card */}
      </div>
      {/* END Statistics: Simple with Action */}
    </>
  );
};

export default Dashboard;
