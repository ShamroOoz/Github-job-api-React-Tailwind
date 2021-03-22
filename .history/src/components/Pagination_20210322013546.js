import React, { Fragment, useEffect, useState } from "react";

const Pagination = ({ page, setPage, hasNextPage }) => {
  const [pagesArray, setpagesArray] = useState([]);

  //
  useEffect(() => {
    for (let i = 1; i <= page; i++) {
      setpagesArray([...pagesArray, (pagesArray[i] = i + 1)]);
    }
    console.log(pagesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const adjustPage = (amount) => {
    setPage((prevPage) => prevPage + amount);
  };

  return (
    <nav className="block py-2 flex justify-center ">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        <li>
          <button
            onClick={() => adjustPage(-1)}
            className={` first: ml-0 listStyle`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
              />
            </svg>
          </button>
        </li>
        {pagesArray.map((pag, index) => {
          return (
            <Fragment key={index}>
              <li>
                <button className={` first: ml-0 activelistStyle`}>
                  {pag}
                </button>
              </li>
              {hasNextPage && (
                <li>
                  <button className={` first: ml-0 listStyle`}>
                    {pag + 1}
                  </button>
                </li>
              )}
            </Fragment>
          );
        })}
        <li>
          <button onClick={() => adjustPage(1)} className={`listStyle`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
