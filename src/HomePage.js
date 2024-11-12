import React from 'react';
import Books from './Books';
import Search from './Search';

function HomePage() {
  // const name = useContext(AppContext); //through this useContext hook can get access of any data present in AppContext

  return (
    <>
     <Search />
    <Books/>
    </>
  );
};

export default HomePage