import React from "react";

const Job = (props) => {
  return (
    <div className="flex shadow-lg ring-2 ring-blue-500 mx-8 my-3 rounded">
      <div className="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200  text-lg px-6 py-4 font-bold">
          PHP/MySQL Expert Engineer Wanted
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex space-x-3">
            <div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
              Full Time
            </div>
            <div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
              remote
            </div>
          </div>
          <div className="text-sm">May 14, 1988</div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="border rounded-lg p-4 bg-gray-200">
            <h2 className=" text-lg p-2 font-bold">Description:</h2>
            <span>
              This is a long term full-time position* We are an online lead
              generation and marketing company looking for a top-notch back-end
            </span>
          </div>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="border rounded-lg p-4 bg-gray-200">
            <h2 className=" text-lg p-2 font-bold">How to apply:</h2>
            <span>Email your resume to: partners@quotevelocity.com</span>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4 flex justify-between">
          <div>
            <div className="uppercase text-xs text-gray-600 font-bold">
              Company
            </div>
            <div className="flex items-center pt-3">
              <img
                src="https://i.imgur.com/8Km9tLL.jpg"
                class="rounded-full border-solid border-white border-2 -mt-3"
                alt=""
              />

              <div className="ml-4">
                <h2 className=" text-lg font-bold">Quote Velocity</h2>
                <a
                  href={`http://www.yields.io`}
                  className="text-sm text-blue-700 mt-1"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>

          <div class="inline-block mt-8 order-last">
            <button
              type="button"
              class="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-110"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
