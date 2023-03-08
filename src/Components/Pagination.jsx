import React from "react";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const nextPage = () => {
     currentPage !== nPages ? setCurrentPage(currentPage + 1) : setCurrentPage(1) ;
  };
  
  const prevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };


  return (
    <nav className="mt-9">
      <ul className=" items-center inline-flex -space-x-px justify-center">
        <li className="page-item">
          <a href="#" onClick={prevPage} className="block px-3 font-medium underline underline-offset-4 py-2 ml-0 leading-tight text-gray-600 bg-white border-gray-300 rounded-l-lg hover:bg-gray-200 hover:text-gray-700">
            Prev
          </a>
        </li>

        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={` ${currentPage === pgNumber ? "bg-gray-500 rounded-lg text-white py-3" : ""}`}
          >
            <a
              href="#"
              className="py-0"
              onClick={() => setCurrentPage(pgNumber)}
            >
              {pgNumber}
            </a>
          </li>
        ))}

        <li className="page-item">
        <a href="#" onClick={nextPage} className="block px-3 py-2 ml-0 font-medium underline underline-offset-4 leading-tight text-gray-600 bg-white border-gray-300 rounded-l-lg hover:bg-gray-200 hover:text-gray-700">
            Next
          </a>

        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
