import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget'
import './Header.css'

export const Header = () => {

    return(
        <header className="header">
            <div className="header_container">
                <Navbar bg="dark" data-bs-theme="dark">
                    <Container className='nav_container'>
                        <Navbar.Brand href="#">mh.</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#">Products & Services</Nav.Link>
                            <Nav.Link href="#">About Us</Nav.Link>
                            <Nav.Link href="#">Contact</Nav.Link>
                        </Nav>
                        <button href="#"><CartWidget/></button>
                    </Container>
                </Navbar>
            </div>
        </header>
    )
}