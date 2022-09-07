import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from './components/Nav/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Contact from './components/Contact/index';

function App() {


  return (
    <div>
      <Router>
        <Navbar bg="dark" variant='dark'>
          <Navbar.Brand>
            Keith Williams
          </Navbar.Brand>
          <Nav/>
        </Navbar>
        <main>
          <Routes>
            <Route path="./src/components/Contact/index" element={<Contact/>}/>
              
            
          </Routes>
        
        </main>
      </Router>
    </div>
  );
}

export default App;
