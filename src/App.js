import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
