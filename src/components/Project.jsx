import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// const Project = (props) =>{
//     return(
//         <Card>
//             <Card.Img variant="bottom" src={`img/${props.project.image}`}/>
//             <Card.Body>
//                 <Card.Title>{props.project.title}</Card.Title>
//                 <Card.Text>
//                     {props.project.description}
//                 </Card.Text>
//                 <Button as="a" href={props.project.link}>Get to da REPO!</Button>
//             </Card.Body>
//         </Card>
//     );
// }
const Project = (props) =>{
    return(
        <Card sx={{ maxWidth: 375, maxHeight:520}}>
            <CardMedia
            image={`img/${props.project.image}`}
            component="img"
            height="200"
            alt={`${props.project.image}`}
            />
            <CardContent>
                <Typography gutterBottom variant='h3' component="div">
                    {`${props.project.title}`}
                </Typography>
                <Typography>
                    {`${props.project.description}`}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' href={`${props.project.link}`}>Github repo</Button>
            </CardActions>
        </Card>
    );
}
export default Project;