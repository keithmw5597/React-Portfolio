import React from 'react';
import { Navbar } from 'react-bootstrap';
import Nav from './components/Nav/index';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ContactForm from './components/Contact';

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
          <Route>
            <Contact/>
          </Route>
        </main>
      </Router>
    </div>
  );
}

export default App;
