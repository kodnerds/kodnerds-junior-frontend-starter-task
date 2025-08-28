import React from "react";
import "./Pagination.css";

const Pagination = ({
    dataLength,
    itemsPerPage,
    handleCurrentPage,
    currentPage,
    indexOfFirstItem,
}) => {
    let NumberOfPages = Array.from({
        length: Math.ceil(dataLength / itemsPerPage),
    });

    return (
        <div className="pagination_container">
            <button
                disabled={indexOfFirstItem === 0}
                onClick={() => handleCurrentPage("previous")}
            >
                Previous
            </button>
            {NumberOfPages.map((item, index) => (
                <button
                    onClick={() => handleCurrentPage("pageNumber", index + 1)}
                    className={currentPage === index + 1 ? "active" : ""}
                >
                    {index + 1}
                </button>
            ))}
            <button
                disabled={currentPage === NumberOfPages.length}
                onClick={handleCurrentPage}
            >
                Next
            </button>
        </div>
    );
};

export default Pagination;
