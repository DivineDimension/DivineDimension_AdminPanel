import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import { Link,useHistory,Redirect, useLocation } from "react-router-dom";

import Layout from './Layout';
// components
import EcosystemComponents from './snippetscifi/ecosystemComponents';
import BuildManage from './snippetscifi/BuildManage';
import Pulse from './snippetscifi/Pulse';
import Team from './snippetscifi/Team';
import AdvisorBoard from './snippetscifi/AdvisorBoard';
import Investor from './snippetscifi/Investor';
import TechnologyPartners from './snippetscifi/TechnologyPartners';
import Roadmap from './snippetscifi/Roadmap';
import Platform from './snippetscifi/Platform';

// assets
// import BannerImage from '../assets/images/gaming-market-image.png';
import BannerDots from '../assets/images/banner-dots.png';
import BMDots from '../assets/images/bm-dots.png'
import BannerImage from '../assets/images/divinemainlogo.png';


function HomePage() {
    const location = useLocation();
    
    if(localStorage.getItem('Login') === false || localStorage.getItem('Login') === null || localStorage.getItem('Login') === undefined || localStorage.getItem('Login') === "" || localStorage.getItem('Login') === "false"){            
        return <Redirect to="/login" state={{ from: location }}/>;
   } else  {  
    return (
        <Layout>
            <div className="page-banner text-white" style={{paddingTop: '0px'}}>
                {/* <img src={BannerDots} className="page-banner-dots d-none d-lg-block" alt="dots" /> */}
                <Container>
                    <Row className="align-items-center">
                        <Col lg="6" className="order-lg-2">
                            <img src={BannerImage} className="img-fluid page-banner-image" alt="banner" />
                        </Col>
                        <Col lg="6">
                            <h2 style={{color:'white'}} className="text-uppercase">DivineDimension<strong className="text-grad"><br />
                            {/* platform <span>FOR cricket</span> */}
                            </strong></h2>
                            <p style={{color:'white'}}>The ultimate metaverse experience for the spiritual community.</p>                            
                    {/* <Button href="/my-NFT" size="lg">Join us now</Button>                                         */}
                        </Col>                        
                    </Row>                       
                </Container>
            </div>

            {/* <EcosystemComponents /> */}

            {/* <BuildManage /> */}

            {/* <Pulse /> */}

            {/* <Team /> */}

            {/* <div className="board-sections overflow-hidden position-relative">
                <img src={BMDots} alt="dots" className="invester-dots d-none d-lg-block" />

                <AdvisorBoard />

                <Investor />

                <TechnologyPartners />

                <Roadmap />
            </div> */}
            
            {/* <Platform /> */}
        </Layout>
    );
   }
}

export default HomePage;