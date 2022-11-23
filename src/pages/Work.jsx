import Project from "../components/Project";
// import { Row,Container } from "react-bootstrap";
import Grid2 from '@mui/material/Unstable_Grid2';
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
    },
    {
      title:"Grpahql",
      link:"https://github.com/Hahkeye/Graphql-is-the-best",
      description: "Grapqhl exercise",
      image:"project6.png"
    },
    {
      title:"Brewery Companiion",
      link:"https://github.com/Hahkeye/brewery-app-companion",
      description: `Have you and your friends or family ever been in the mood for a brew, but didn’t know where to go? we have the solution for you!`,
      image:"project4.png"
    },
    {
      title:"Code Quiz",
      link:"https://github.com/Hahkeye/code-quiz",
      description: "Simple quiz about Javascript written for the most part in Javascript. Only a few questions and not to hard. Mainly done out of practice of skills.",
      image:"project5.png"
    }
  ];


// function Work() {
//     return (

//         <Container fluid="md">
//           <Row>
//             {projects.map( (project,index) =>{
//                 return <Project key={index} project={project}/>
//             })}
//           </Row>
//         </Container>
//     ) ;
//   }
function Work() {
  return (
    <Grid2 container spacing={2}>
      {projects.map( (project,index) =>{
              return <Project key={index} project={project}/>
          })}
    </Grid2>
  ) ;
}
export default Work;