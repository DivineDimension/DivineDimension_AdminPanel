import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

// import Logo from '../assets/images/logocifihomepage.png';
import Logo from '../assets/images/divinelogo.png';

function Header() {
    return (        
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand href="/"><img src={Logo} alt="logo" width={75} height={75}/></Navbar.Brand>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className="active" href="/">Home</Nav.Link>
                        <Nav.Link href="/my-NFT">NFT Marketplace</Nav.Link>
                        {/* <Nav.Link href="/">DEFI</Nav.Link>
                        <Nav.Link href="/">CRICKET 360</Nav.Link> */}
                        <Nav.Link href="/">COMMUNITY</Nav.Link>
                        <Nav.Link href="/">FAQ</Nav.Link>
                        <Nav.Link href="/">SUPPORT</Nav.Link>
                    </Nav>
                    {/* <Nav>
                        <Nav.Link className="btn btn-transparent" href="./">SIGN IN</Nav.Link>
                        <Nav.Link className="btn btn-shadow btn-primary" href="./">SIGN UP</Nav.Link>
                    </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>        
    );
}

export default Header;