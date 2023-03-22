import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import colorLogo from '../../assets/images/modal-logo-new.png'
function Header() {
    React.useEffect(() => {
        localStorage.removeItem('Theme', 'light');
        document.body.classList.remove('light-mode');   
    })
    return (
        <header className="header">
            <Navbar expand="xl" className='p-0'>
                <Container fluid="lg">
                    <Navbar.Brand href="/"><img src={colorLogo} alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9214 18.6127V20.6127H5.92139V18.6127H16.9214ZM21.9214 11.6127V13.6127H3.92139V11.6127H21.9214ZM19.9214 4.61267V6.61267H8.92139V4.61267H19.9214Z" fill="white"/>
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex mb-4 d-xl-none align-items-center justify-content-between">
                            <Navbar.Brand href="/"><img src={colorLogo} alt="logo" /></Navbar.Brand>

                            <Navbar.Toggle aria-controls="basic-navbar-nav">
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-x-lg" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                    <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                </svg>
                            </Navbar.Toggle>
                        </div>

                        <Nav className="ms-auto me-xl-4">
                            {/* <Nav.Link href="#">Tokenomics</Nav.Link>*/}
                            <Nav.Link href="https://docs.elementfi.io" target="_blank" rel="noreferrer">Docs</Nav.Link> 
                            {/* <Nav.Link href="/app">Enter App</Nav.Link> */}

                        </Nav>
                        <Link to="/stableswap" className='m-md-2 mb-3 btn btn-lg btn-sm-full btn-grad'>Enter TestNet
                        {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
                        </svg> */}
                    </Link>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    );
}

export default Header;