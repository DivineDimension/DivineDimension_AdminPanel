import React, { useEffect } from 'react';
import {Container, Navbar, Nav, Badge, Dropdown, Button} from 'react-bootstrap';
import {
    NavLink as Link
  } from "react-router-dom";

import Logo from '../../assets/images/modal-logo-new.png';
import swap from "../Swap";
function Header() {
    useEffect(() => {
        localStorage.removeItem('Theme', 'light');
        document.body.classList.remove('light-mode');   
    })
    return (
        <header className="header">
            <Navbar expand="xl" className='p-0'>
                <Container fluid="lg">
                    <Navbar.Brand href="/"><img src={Logo} alt="logo" />
                     <span className='ms-3'>/&nbsp; Analytics</span>
                    
                     </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.9214 18.6127V20.6127H5.92139V18.6127H16.9214ZM21.9214 11.6127V13.6127H3.92139V11.6127H21.9214ZM19.9214 4.61267V6.61267H8.92139V4.61267H19.9214Z" fill="white"/>
                        </svg>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-lg-none">
                            <div className="d-flex mb-4 d-xl-none align-items-center justify-content-between">
                                <Navbar.Brand href="/"><img src={Logo} alt="logo" /></Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                    </svg>
                                </Navbar.Toggle>
                            </div>
                            <div className="navbar-controls order-xl-2 d-flex align-items-center">
                                <Link to="/" className='btn me-3 btn-outline-white'>Connect wallet</Link>
                                
                                <Dropdown>
                                    <Dropdown.Toggle variant="language" id="dropdown-basic">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM9.71 19.667C8.72341 17.5743 8.15187 15.3102 8.027 13H4.062C4.25659 14.5389 4.89392 15.9882 5.89657 17.1717C6.89922 18.3552 8.22401 19.2221 9.71 19.667ZM10.03 13C10.181 15.439 10.878 17.73 12 19.752C13.1523 17.6766 13.8254 15.3695 13.97 13H10.03ZM19.938 13H15.973C15.8481 15.3102 15.2766 17.5743 14.29 19.667C15.776 19.2221 17.1008 18.3552 18.1034 17.1717C19.1061 15.9882 19.7434 14.5389 19.938 13ZM4.062 11H8.027C8.15187 8.68979 8.72341 6.42569 9.71 4.333C8.22401 4.77788 6.89922 5.64475 5.89657 6.8283C4.89392 8.01184 4.25659 9.4611 4.062 11ZM10.031 11H13.969C13.8248 8.6306 13.152 6.32353 12 4.248C10.8477 6.32345 10.1746 8.63052 10.03 11H10.031ZM14.29 4.333C15.2766 6.42569 15.8481 8.68979 15.973 11H19.938C19.7434 9.4611 19.1061 8.01184 18.1034 6.8283C17.1008 5.64475 15.776 4.77788 14.29 4.333Z" fill="white"/>
                                        </svg> 
                                        English
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        
                            <Nav className="mx-auto">
                                <Link className='nav-link' to="/swap" activeClassName="active">Swap</Link>
                                <Link className='nav-link' to="/pool" activeClassName="active">Pool</Link>
                                <Link className='nav-link' to="/farm" activeClassName="active">Farm</Link>
                                <Link className='nav-link' to="/vaults" activeClassName="active">Vaults</Link>
                                <Link className='nav-link' to="/stake" activeClassName="active">Stake <Badge>NEW</Badge></Link>
                                <Link className='nav-link' to="/bridge" activeClassName="active">Bridge</Link>
                                <Link className='nav-link' to="/launchpad" activeClassName="active">Launchpad</Link>
                                <Link className='nav-link' to="/analytics" activeClassName="active">Analytics</Link>
                            </Nav>
                        </div>

                        <div className="d-none navbar-control d-lg-flex align-items-center">
                            
                            {/* <Button className='btn w-100 mb-10 text-none btn-grad ' onClick={}>Back To Home Page</Button> */}
                            <Link to="/swap" className='m-md-2 mb-3 btn btn-lg btn-sm-full btn-grad'>Back To Home Page </Link>
                            {/* <Button variant="reset" className="ms-4">
                                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.25 5.13013H26.75V7.63013H4.25V5.13013ZM11.75 13.8801H26.75V16.3801H11.75V13.8801ZM4.25 22.6301H26.75V25.1301H4.25V22.6301Z" fill="white"/>
                                </svg>
                            </Button> */}
                        </div>

                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </header>
    );
}

export default Header;