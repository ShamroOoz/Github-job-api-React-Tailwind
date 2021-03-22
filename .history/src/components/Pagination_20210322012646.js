import React, { Fragment, useEffect, useState } from "react";

const Pagination = ({ page, setpage, hasNextPage }) => {
  //
  let listStyle =
    " first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500";
  let activelistStyle =
    "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 text-white bg-blue-500";

  //
  const [pagesArray, setpagesArray] = useState([]);

  //
  useEffect(() => {
    for (let i = 0; i < page; i++) {
      setpagesArray([...pagesArray, (pagesArray[i] = i + 1)]);
    }
    console.log(pagesArray);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const adjustPage = (amount) => {
    setpage((prevPage) => prevPage + amount);
  };

  return (
    <nav className="block py-2 flex justify-center ">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        <li>
          <button onClick={() => adjustPage(-1)} className={listStyle}>
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
                <button className={activelistStyle}>{pag}</button>
              </li>
              {hasNextPage && (
                <li>
                  <button className={listStyle}>{pag + 1}</button>
                </li>
              )}
            </Fragment>
          );
        })}
        <li>
          <button onClick={() => adjustPage(page + 1)} className={listStyle}>
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
