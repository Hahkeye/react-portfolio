import * as React from 'react';
// import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Navigation() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    console.log(event);
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} >
            <Tab label="Work" href='/' {...a11yProps(0)} />
            <Tab label="About"  href='/about' {...a11yProps(1)} />
            <Tab label="Contact"  href='/contact' {...a11yProps(2)} />
        </Tabs>
    </Box>
  );
}


// import { ButtonGroup, Button } from "react-bootstrap";


// const Navigation = () =>{
//     return(
//         <>  
//             <ButtonGroup>
//                 <Button as="a" variant="primary" href="/">
//                     Work
//                 </Button>
//                 <Button as="a" variant="secondary" href="/about">
//                     About
//                 </Button>
//                 <Button as="a" variant="primary" href="/contact">
//                     Contact
//                 </Button>
//             </ButtonGroup>
            
//         </>
//     );
// }

// export default Navigation;
