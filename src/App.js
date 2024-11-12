import HomePage from './HomePage';
import {Routes,Route} from 'react-router-dom'; 
import Singlebook from './Singlebook';
import Error from './Error';

import "./App.css";

function App() {
  return (
  
    <Routes>
      <Route path ="/" element ={<HomePage/>}/>
      <Route path="book/:id" element={<Singlebook/>}/>
      <Route path="*" element={<Error/>}/>
      
    </Routes>
   
  );
}

export default App;
