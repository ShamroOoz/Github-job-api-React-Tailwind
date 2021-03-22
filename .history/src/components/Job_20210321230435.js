import React, { useState } from "react";

const Job = ({ result }) => {
  const {
    company,
    company_logo,
    company_url,
    created_at,
    description,
    how_to_apply,
    location,
    title,
    type,
    url,
  } = result;
  const [Seemore, setSeemore] = useState(true);
  let truncate = Seemore ? "truncate" : null;
  return (
    <div className="flex shadow-lg ring-2 ring-blue-500 mx-8 my-3 rounded">
      <div className="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200  text-lg px-6 py-4 font-bold">{title}</div>

        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex space-x-3">
            <div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
              {type}
            </div>
            <div className="bg-green-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">
              {location}
            </div>
          </div>
          <div className="text-sm"> {created_at}</div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200">
          <div className={` ${truncate}  border rounded-lg p-4 bg-gray-200`}>
            <h2 className=" text-lg p-2 font-bold">Description:</h2>
            <span>{description}</span>
          </div>
          <button
            onClick={() => setSeemore((prevSeemore) => !prevSeemore)}
            className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-blue-700 underline uppercase transition bg-transparent rounded ripple hover:text-blue-900 focus:outline-none"
          >
            {Seemore ? `Read More` : "Read Less"}
          </button>
        </div>
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="border rounded-lg p-4 bg-gray-200">
            <h2 className=" text-lg p-2 font-bold">How to apply:</h2>
            <span>{how_to_apply}</span>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-3 flex justify-between">
          <div>
            <div className="text-lg font-bold">Company Info</div>
            <div className="flex items-center  mt-2">
              <img
                src={company_logo}
                width="80px"
                className="rounded-full border-solid border-white border-2"
                alt=""
              />

              <div className="ml-4">
                <h2 className=" text-sm font-bold"> {company} </h2>
                <a
                  href={company_url}
                  target={`_blank`}
                  className="text-sm text-blue-700 mt-1"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>

          <div className="inline-block mt-8 order-last">
            <a
              type="button"
              href={url}
              target={`_blank`}
              className="focus:outline-none text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-blue-400 to-blue-600 transform hover:scale-110"
            >
              Apply
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
