// import React, { useEffect, useContext, useState } from "react";

// const API_URL = `https://openlibrary.org/search.json?title=`; // Base URL for the API
// const BASE_API='https://openlibrary.org/search.json?q=the&page=1&limit=10';

// const AppContext = React.createContext();

// // Provider function
// const AppProvider = ({ children }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [book, setBook] = useState([]);
//     const [isError, setIsError] = useState({ show: false, msg: "" });
//     const[query,setQuery] = useState("Harry Potter");

//     const getBooks = async (bookTitle) => {
//         setIsLoading(true); // Set loading to true before fetching
//         try {
//             const response = await fetch(`${API_URL}${bookTitle}`);
//             const data = await response.json();
//             console.log(data); // Check the structure of the data in console

//             // Check if `docs` array is available
//             if (data.docs && data.docs.length > 0) {
//                 setBook(data.docs);
//                 setIsError({ show: false, msg: "" });
//             } else {
//                 setIsError({ show: true, msg: "No books found." });
//             }
//         } catch (error) {
//             setIsError({ show: true, msg: "Something went wrong. Please try again later." });
//             console.log(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };
//     const fetchBooks=async()=>{
//         const response= await fetch(BASE_API);
//         const data=await response.json();
//         console.log(data.docs);
//         const books = data.docs?.map(book => ({
//             cover_edition_key: book.cover_edition_key,
//             cover_i: book.cover_i,
//             ddc: book.ddc || [],
//             ebook_access: book.ebook_access,
//             ebook_count_i: book.ebook_count_i,
//             edition_count: book.edition_count,
//             edition_key: book.edition_key || [],
//             first_publish_year: book.first_publish_year,
//             has_fulltext: book.has_fulltext,
//             ia: book.ia || [],
//             ia_collection: book.ia_collection || [],
//             title: book.title,
//             author_name: book.author_name || []
//         }));
//         console.log(books);
//         setBook(books);
//     }

//     useEffect(() => {
//         // getBooks("Harry Potter"); // Fetch books with a default title for the initial load
//         fetchBooks(`${API_URL}&s=${query}`);
//     }, [query]);
 
//     return (
//         <AppContext.Provider value={{ isLoading, isError, book, getBooks,query,setQuery }}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// const useGlobalContext = () => {
//     return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };

//modified change


import React, { useEffect, useContext, useState } from "react";

const API_URL = `https://openlibrary.org/search.json?title=`;

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [book, setBook] = useState([]);
    const [isError, setIsError] = useState({ show: false, msg: "" });
    const [query, setQuery] = useState("Harry Potter"); // Default search term

    // Fetch books based on the query
    const getBooks = async () => {
        setIsLoading(true);
        try {
            const response = await fetch(`${API_URL}${query}`);
            const data = await response.json();

            if (data.docs && data.docs.length > 0) {
                setBook(data.docs); // Update book state with search results
                setIsError({ show: false, msg: "" });
            } else {
                setIsError({ show: true, msg: "No books found." });
            }
        } catch (error) {
            setIsError({ show: true, msg: "Something went wrong. Please try again later." });
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    // Fetch books when the component mounts or when the query changes
    useEffect(() => {
        getBooks();
    }, [query]);

    return (
        <AppContext.Provider value={{ isLoading, isError, book, query, setQuery }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };




//commented 2nd

// import React, { useEffect, useContext, useState } from "react";

// const API_URL = `https://openlibrary.org/search.json?title=`; // Base URL for title search

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {
//     const [isLoading, setIsLoading] = useState(true);
//     const [book, setBook] = useState([]);
//     const [isError, setIsError] = useState({ show: false, msg: "" });
//     const [searchTerm, setSearchTerm] = useState("Harry Potter"); // Default search term

//     const getBooks = async (title) => {
//         setIsLoading(true);
//         try {
//             const response = await fetch(`${API_URL}${title}`);
//             const data = await response.json();
//             console.log(data);

//             if (data.docs && data.docs.length > 0) {
//                 setBook(data.docs);
//                 setIsError({ show: false, msg: "" });
//             } else {
//                 setIsError({ show: true, msg: "No books found." });
//             }
//         } catch (error) {
//             setIsError({ show: true, msg: "Something went wrong. Please try again later." });
//             console.log(error);
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         getBooks(searchTerm);
//     }, [searchTerm]); // Fetch books every time searchTerm changes

//     return (
//         <AppContext.Provider value={{ isLoading, isError, book, setSearchTerm }}>
//             {children}
//         </AppContext.Provider>
//     );
// };

// const useGlobalContext = () => {
//     return useContext(AppContext);
// };

// export { AppContext, AppProvider, useGlobalContext };





//commented first


// import React,{useEffect,useContext, useState} from "react";


// const API_URL =`https://openlibrary.org/search.json?title=%7BbookTitle`
// // const API_URL = `https://openlibrary.org/search.json?title=Harry+Potter`;
// // const API_URL = `https://openlibrary.org/search.json?title={bookTitle}`;

// // const API_URL = `https://openlibrary.org/search.json?title=%7BbookTitle`

// const AppContext = React.createContext();

// //provider function
// const AppProvider = ({children})=>{
//     const[isLoading,setIsLoading] = useState(true);
//     const[book,setBook] = useState([]);
//     const[isError,setIsError] = useState({show:"false",msg:""});
//     const getBooks = async(url)=>{
//         try{
//             const res = await fetch(url);
//             const data = await res.json();
//             console.log(data);
//             if(data.Response === "True")
//             {
//                 setIsLoading(false);
//                 setBook(data.docs);
//             }else{
//                 setIsError({
//                     show:true,
//                     msg:data.error,
//                 });
//             }
//         }catch(error)
//         {
//             console.log(error);
//         }
//     };

//     useEffect(()=>{
//         getBooks(API_URL);
//     },[]);
//     return(
//      <AppContext.Provider value={{isLoading,isError,book}}>
//         {children}
//     </AppContext.Provider>
// );
// };

// const useGlobalContext = ()=>{
//     return useContext(AppContext);
// };


// export {AppContext,AppProvider,useGlobalContext};