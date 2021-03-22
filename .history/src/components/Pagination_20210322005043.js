import React, { useEffect, useState } from "react";

const Pagination = ({ page, setpage, hasNextPage }) => {
  let listStyle =
    " first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 bg-white text-blue-500";
  let activelistStyle =
    "first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-blue-500 text-white bg-blue-500";

  //
  const [pagesArray, setpagesArray] = useState([]);

  //
  useEffect(() => {
    for (let i = 0; i < page; i++) {
      setpagesArray([...pagesArray, (pagesArray[i] = i)]);
    }
    console.log(pagesArray);
  }, []);

  // const adjustPage = (amount) => {
  //   setpage((prevpage) => prevpage + amount);
  // };

  return (
    <nav className="block py-2 flex justify-center ">
      <ul className="flex pl-0 rounded list-none flex-wrap">
        <li>
          <a href="#pablo" className={activelistStyle}>
            {`1`}
          </a>
        </li>
        ;
      </ul>
    </nav>
  );
};

export default Pagination;

// {
//   page !== 1 && (
//     <li>
//       <a href="#pablo" className={listStyle}>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//           className="w-4"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
//           />
//         </svg>
//       </a>
//     </li>
//   );
// }

// <li>
//   <a href="#pablo" className={activelistStyle}>
//     1
//   </a>
// </li>;
// {
//   page > 2 && (
//     <li>
//       <a href="#pablo" className={listStyle}>
//         ...
//       </a>
//     </li>
//   );
// }
// <li>
//   <a href="#pablo" className={listStyle}>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="currentColor"
//       className="w-4"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth="2"
//         d="M13 5l7 7-7 7M5 5l7 7-7 7"
//       />
//     </svg>
//   </a>
// </li>;
