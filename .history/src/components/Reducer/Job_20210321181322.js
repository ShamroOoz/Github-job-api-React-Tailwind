import React from "react";

const Job = (props) => {
  return (
    <div className="flex shadow-lg ring-2 ring-blue-500 mx-8 my-3 rounded">
      <div className="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 font-bold">
          The title of the card here
        </div>

        <div className="flex justify-between items-center px-6 py-4">
          <div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
            Full Time
          </div>
          <div className="text-sm">May 14, 1988</div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className="border rounded-lg p-4 bg-gray-200">
            Here is a short comment about this employee.
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4">
          <div className="uppercase text-xs text-gray-600 font-bold">
            Employee
          </div>

          <div className="flex items-center pt-3">
            <div className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white">
              TN
            </div>
            <div className="ml-4">
              <p className="font-bold">Tony Nguyen</p>
              <p className="text-sm text-gray-700 mt-1">Instructor</p>
           </div>
            <div>
            <p className="font-bold">Button</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
