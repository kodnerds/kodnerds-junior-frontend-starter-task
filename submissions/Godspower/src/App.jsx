import { useState } from "react";
import "./App.css";
import Card from "./Card";
import data from "./assets/data";
import Pagination from "./Pagination";

function App() {
    const [currentPage, setCurrentPage] = useState(1);
    let itemsPerPage = 6;
    let indexOfLastItem = currentPage * itemsPerPage;
    let indexOfFirstItem = indexOfLastItem - itemsPerPage;
    let currentitems = data.slice(indexOfFirstItem, indexOfLastItem);
    let dataLength = data.length;

    const handleCurrentPage = (flag, pageNumber) => {
        if (flag === "pageNumber") {
            setCurrentPage(pageNumber);
        } else if (flag === "previous") {
            // if (indexOfFirstItem !== 0) {
            //     setCurrentPage((prev) => prev - 1);
            //     return;
            // }
            setCurrentPage((prev) => prev - 1);
        } else {
            // if (indexOfLastItem !== dataLength) {
            //     setCurrentPage((prev) => prev + 1);
            //     return;
            // }
            setCurrentPage((prev) => prev + 1);
        }
    };
    return (
        <div className="container">
            <h1>Explore Topics</h1>
            <div className="card_container">
                {currentitems.map(
                    ({
                        image,
                        author_image,
                        author,
                        date,
                        title,
                        description,
                        readMore,
                        id,
                    }) => (
                        <Card
                            key={id}
                            image={image}
                            author_image={author_image}
                            author={author}
                            date={date}
                            title={title}
                            description={description}
                            readMore={readMore}
                        />
                    )
                )}
            </div>
            <div className="pagination_wrapper">
                <Pagination
                    dataLength={dataLength}
                    itemsPerPage={itemsPerPage}
                    handleCurrentPage={handleCurrentPage}
                    currentPage={currentPage}
                    indexOfFirstItem={indexOfFirstItem}
                />
            </div>
        </div>
    );
}

export default App;
