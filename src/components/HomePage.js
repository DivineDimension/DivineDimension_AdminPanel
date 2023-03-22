import React from 'react';
import { Container } from 'react-bootstrap';
import Layout from './Layouts/LayoutLanding';
import DeFiPotential from './Sections/DeFiPotential';
import DualToken from './Sections/DualToken';
import HomeBanner from './Sections/HomeBanner';
import LearnMore from './Sections/LearnMore';
import PartnersInvestors from './Sections/PartnersInvestors';
import HomeBanner1 from './Sections/HomeBannerProtocol';
// import {Container} from 'react-bootstrap';


function HomePage() {
    React.useEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <Layout>
                <HomeBanner1 />
            <div className="page-home">
                <HomeBanner />
                <DeFiPotential />
                <DualToken />

                <Container fluid="lg">
                    <hr />
                </Container>

                <LearnMore />
                <PartnersInvestors />
            </div>
        </Layout>
    );
}

export default HomePage;