import React from 'react';
import employeeAidePic from 'src/assets/images/EmployeeAIDE.png';
import winePair from 'src/assets/images/wine-pair-project.jpeg';
import RisingStars from 'src/assets/images/Rising stars.jpeg';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';

function Projects() {
  // const projectCard = Project;
  const projectData = [
    {
        id:1,
        name: "Wine-pair",
        deployed: "https://enajera1.github.io/project-1-wine-pairing/",
        img: winePair,
        githubLink: "https://github.com/enajera1/project-1-wine-pairing",
    },
    {
        id:2,
        name:"EmployeeAIDE",
        deployed: "https://employeeaide.herokuapp.com",
        img: employeeAidePic,
        githubLink: "https://github.com/drkevinfriday/projectTwoFullStack"
    },
    {
        id:3,
        name: "Rising Stars",
        deployed: "",
        img: RisingStars,
        githubLink: "https://github.com/lizwashington/Rising-Stars-Project3",
    }
]

const content = projectData.map((indivProject) => 
    <Project key={indivProject.id} 
    id = {indivProject.id} 
    name={indivProject.name} 
    deployed ={indivProject.deployed} 
    img = {indivProject.img} 
    githubLink = {indivProject.githubLink}/>
)

  return (
    <Container fluid id="portfolio" className="p-4">
        <CardGroup>
            {content}
        </CardGroup>
    </Container>
  );
};

export default Projects;