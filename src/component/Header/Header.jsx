import Logo from "../Logo/Logo"
import Navlist from "../Navlist/Navlist";
import Icon from "../icon/icon";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from "react-bootstrap";
import Banner from "../Banner/Banner"
function Header() {
    return (
        // <header>
        //     <div className="container">
        //         <div className="row">
                    
        //             <Logo />
        //             <Navlist/>
        //             <Icon />
        //         </div>
        //     </div>
        // </header>
        <div>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Button variant="primary">Primary</Button>
        </Container>
      </Navbar>
        <Banner/>
        </div>
      

    )
}
export default Header;