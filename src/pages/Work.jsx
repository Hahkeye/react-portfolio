import Project from "../components/Project";
import { Row,Container } from "react-bootstrap";
const projects = [
    {
      title:"Scamazon",
      link:"https://github.com/Hahkeye/scamazon",
      description: "Little mock up ecomerce site made with some friends.",
      image:"project1.png"
    },
    {
      title:"Task Master",
      link:"https://github.com/Hahkeye/task-master",
      description: "Web based note taking application with persistance. You can also edit the notes afterwards if you would like to.",
      image:"project2.png"
    },
    {
      title:"Chat api",
      link:"https://github.com/Hahkeye/mongo-chatter",
      description: "Just a bare bones mock up of a social network api. Users have thoughts and thoughts can have reactions by other users. Just an implemention on top of mongo to keep skills fresh and in the frontal cortex.",
      image:"project3.png"
    }
  ];


function Work() {
    return (
        <Container fluid="md">
          <Row>
            {projects.map( (project,index) =>{
                return <Project key={index} project={project}/>
            })}
          </Row>
        </Container>
    ) ;
  }
  
  export default Work;