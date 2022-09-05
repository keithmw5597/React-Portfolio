import React, { useState } from "react";
import { Navbar } from 'react-bootstrap';
import Nav from "../Nav/index";


function Header () {
    const [contactSelected, setContactSelected] = useState(false);
    const [categories] = useState([
        {
            name: 'commercial',
            description: 'Photos of grocery stores, food trucks, and other commercial projects',
        },
        { name: 'portraits', description: 'Portraits of people in my life' },
        { name: 'food', description: 'Delicious delicacies' },
        { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature'},
    ]);
  
    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    return (
        <section>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>
                    <h1 className="title">
                      
                        Keith Williams
                   
                    </h1>
                </Navbar.Brand>
                    <Nav
                        categories={categories}
                        setCurrentCategory={setCurrentCategory}
                        currentCategory={currentCategory}
                        contactSelected={contactSelected}
                        setContactSelected={setContactSelected}
                    ></Nav>
            </Navbar>
               
                  
                      
          
        </section>
    )

};

export default Header