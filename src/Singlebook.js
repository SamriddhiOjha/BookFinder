import React from 'react'
import { useParams } from 'react-router-dom';

function Singlebook() {

    const {id} = useParams();
  return (
    <div>
      Our Singlebook {id} 
      </div>
  )
}

export default Singlebook
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const SingleBook = () => {
//     const { id } = useParams();
//     const [book, setBook] = useState(null);

//     useEffect(() => {
//         const fetchBook = async () => {
//             try {
//                 const response = await fetch(`https://openlibrary.org/works/${id}.json`);
//                 const data = await response.json();
//                 setBook(data);
//             } catch (error) {
//                 console.error("Error fetching book:", error);
//             }
//         };

//         fetchBook();
//     }, [id]);

//     if (!book) return <p>Loading...</p>;

//     // Helper to get the book cover URL
//     const getBookImageUrl = (coverId) => `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`;

//     return (
//         <div className="single-book-page bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10">
//             <h2 className="text-2xl font-semibold mb-4">{book.title}</h2>
//             <img
//                 src={getBookImageUrl(book.covers ? book.covers[0] : null)}
//                 alt="Book cover"
//                 className="w-full h-auto object-cover mb-4 rounded-md"
//             />
//             <p className="text-lg font-medium">Author: {book.authors ? book.authors[0].name : "Unknown Author"}</p>
//             <p className="text-md mt-2">Published: {book.first_publish_year || "Unknown Year"}</p>
//             <p className="text-sm mt-4">{book.description ? book.description.value || book.description : "No description available."}</p>
//         </div>
//     );
// };

// export default SingleBook;
