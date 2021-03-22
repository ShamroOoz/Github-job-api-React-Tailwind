import React from "react";

const Job = (props) => {
  return (
    <div className="flex shadow-lg ring-2 ring-blue-500 mx-8 my-3 rounded">
      <div className="w-full flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="bg-gray-200 text-gray-700 text-lg px-6 py-4 font-bold">
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
          <div className="border rounded-lg p-4 bg-gray-200 truncate ">
            <span>
              "*This is a long term full-time position* We are an online lead
              generation and marketing company looking for a top-notch back-end
              engineer to create and maintain websites and applications. You
              must be highly experienced in database management and PHP/Laravel.
              We are a young group of highly motivated, fast-paced business
              owners that will expect you to hold yourself to the highest
              standards of code quality and work ethic. You MUST have high
              standards with code quality, and be more concerned with building
              things CORRECTLY, than building them QUICKLY. Explicit
              Requirements → MySQL 5.7, PHP 7.4 → Laravel → API development and
              integration → Proper indexing and query strategies → Bugsnag → C1
              level of English (Fluent) → Git source control Example Tasks →
              Build/manage Marketing API's between 3rd party Advertising
              Platforms → Build/manage Data API's between internal systems and
              various SAAS platforms → Build/manage custom data storing logic
              and developing relationships between data → Build/manage
              performance reports to provide marketing/operations with better
              insights on customer/data monetization → Database Management,
              Storage and Security → Work with 3rd party lead providers on API
              integrations → Management of server & website performance → Write
              documentation for backend logic to help improve visibility for
              operations → Integrate various marketing pixels/webhook URL’s →
              Adding / Altering complex chain of events on lead (data) submit →
              Reviewing daily Bugsnag/Telescope/server errors and properly
              prioritizing and fixing Unhandled exceptions"
            </span>
          </div>
        </div>

        <div className="bg-gray-200 px-6 py-4 flex">
          <div>
            <div className="uppercase text-xs text-gray-600 font-bold">
              Company
            </div>
            <div className="flex items-center pt-3">
              <img
                src={`"https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBbUNkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--9f231bb6ce6ab74ff6733a699af7ad6affdfd9d6/Yields_logo_bichrome.jpg"`}
                alt=""
                className="bg-blue-700 w-12 h-12 flex justify-center items-center rounded-full uppercase font-bold text-white"
              />

              <div className="ml-4">
                <p className="font-bold">Quote Velocity</p>
                <a
                  href={`http://www.yields.io`}
                  className="text-sm text-blue-700 mt-1"
                >
                  Visit Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
