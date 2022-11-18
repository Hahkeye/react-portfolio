import { ButtonGroup, Button } from "react-bootstrap";


const Navigation = () =>{
    return(
        <>  
            <ButtonGroup>
                <Button as="a" variant="primary" href="/">
                    Work
                </Button>
                <Button as="a" variant="secondary" href="/about">
                    About
                </Button>
                <Button as="a" variant="primary" href="/contact">
                    Contact
                </Button>
            </ButtonGroup>
            
        </>
    );
}

export default Navigation;