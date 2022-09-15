import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import GlobalStyles from './components/styles/Global';

function App() {

  return (
    <BrowserRouter>
      <GlobalStyles/>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage/>}/>
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
