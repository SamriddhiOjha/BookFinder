// import React from 'react'
// import { useGlobalContext } from './context'

// function Search() {

//     const{query,setQuery,isError} = useGlobalContext();
//     return(
//     <section className='search-section'>
//         <h2>Search Your Book</h2>
//      <form action="#" onSubmit={(e)=>e.preventDefault()}>
//         <div>
//             <input type='text' placeholder='search here'
//             value = {query}
//             onChange={(e)=>setQuery(e.target.value)}
//             />
//         </div>
//         </form>   
//         <div className='card-error'>
//         <p>{isError.show && isError.msg}</p>
//         </div>
//     </section>
//     )

// }

// export default Search


//modified
import React from 'react'; 
import { useGlobalContext } from './context';

function Search() {
    const { query, setQuery, isError } = useGlobalContext();

    return (
        <section className="search-section">
            <h2>Search Your Book</h2>
            <form action="#" onSubmit={(e) => e.preventDefault()}>
                <div>
                    <input
                        type="text"
                        placeholder="Search here"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)} // Update query on input change
                    />
                </div>
            </form>
            {isError.show && <p className="card-error">{isError.msg}</p>}
        </section>
    );
}

export default Search;
