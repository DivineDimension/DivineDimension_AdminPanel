import React from 'react';
// import { Container } from 'react-bootstrap';
import { Col, Container, Row } from 'react-bootstrap';
import Layout from './Layouts/LayoutLandingswap';
import DeFiPotentialswap from './Sections/DeFiPotentialswap';
import DeFiPotentialV2 from './Sections/DeFiPotentialV2';
import DualToken from './Sections/DualToken';
import HomeBannerswap from './Sections/HomeBannerswap';
import HomeBannerswap2 from './Sections/HomeBannerswap2';
import LearnMore from './Sections/LearnMore';
import PartnersInvestors from './Sections/PartnersInvestors';
import HomeBanner1 from './Sections/HomeBannerProtocol';
// import {Container} from 'react-bootstrap';
import TUAPotential from './Sections/TuaPotentialswap';
import Investement from './Sections/Investementswap';
function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Layout>
              
                {/* <HomeBanner1 /> */}
                {/* <div className="page-home-v2"> */}
                {/* <div className="page-home"> */}
                
            <div className="page-home-v2">
                <HomeBannerswap />
                <div className="page-home">
                {/* <HomeBannerswap2 /> */}
                {/* <DeFiPotentialswap /> */}
                {/* <TUAPotential /> */}
            
                {/* <Investement /> */}
                {/* <DeFiPotentialV2/> */}
                {/* <DualToken /> */}

                <Container fluid="lg">
                 
                </Container>

                <LearnMore />
                {/* <PartnersInvestors /> */}
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;