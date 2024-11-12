// import React from "react";
// import { useGlobalContext } from "./context";
// import { NavLink } from "react-router-dom";

// const Books = () => {
//     const { book } = useGlobalContext();
//     const getBookImageUrl = (coverId) => {
//         return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`; // -L.jpg gives you a medium-sized image
//     };

//     return (
//         <>
//             <section className="book-page">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
//                     {book.map((currBook) => {
//                         // Extract unique book properties
//                         const bookKey = currBook.key; // Unique identifier for the book
//                         const bookTitle = currBook.title;
//                         console.log(currBook.cover_i, bookKey); // Title of the book

//                         return (
//                             <div className="flex-shrink-0">
//                                 <NavLink to={`book/${currBook.cover_i}`} key={bookKey}>
//                                     <div className="book-card p-4 bg-red shadow-lg rounded-lg">
//                                         <h3 className="text-lg font-semibold">{bookTitle}</h3>
//                                         <img
//                                             src={getBookImageUrl(currBook.cover_i)}
//                                             alt="Book cover"
//                                             className="w-full h-auto object-cover mb-4"
//                                         />
//                                         <p className="text-sm">{currBook.author_name ? currBook.author_name[0] : "Unknown Author"}</p>
//                                         <p className="text-sm">Published: {currBook.first_publish_year || "Unknown Year"}</p>
//                                     </div>
//                                 </NavLink>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </section>

//         </>
//     );
// };

// export default Books;

//part 2
import React from "react";
import { useGlobalContext } from "./context";
import { NavLink } from "react-router-dom";

const Books = () => {
    const { book, isLoading } = useGlobalContext();

    if (isLoading) {
        return <p>Loading books...</p>;
    }

    return (
        <section className="book-page">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"> 
                {book.map((currBook) => {
                    const bookKey = currBook.key;
                    const bookTitle = currBook.title;
                    
                    return (
                        <div className="flex-shrink-0" key={bookKey}>
                            <NavLink to={`book/${currBook.cover_i}`}>
                                <div className="book-card p-4 bg-red shadow-lg rounded-lg">
                                    <h3 className="text-lg font-semibold">{bookTitle}</h3>
                                    <img
                                        src={`https://covers.openlibrary.org/b/id/${currBook.cover_i}-L.jpg`}
                                        alt="Book cover"
                                        className="w-full h-auto object-cover mb-4"
                                    />
                                    <p className="text-sm">{currBook.author_name ? currBook.author_name[0] : "Unknown Author"}</p>
                                    <p className="text-sm">Published: {currBook.first_publish_year || "Unknown Year"}</p>
                                </div>
                            </NavLink>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Books;

