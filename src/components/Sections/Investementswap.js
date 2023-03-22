import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Circles from '../../assets/images/sm-planet.png'
import BigCircles from '../../assets/images/investment-vectores.png'

const Investement = () => {
    return (
        <div className='investement position-relative'>
            <Container>
                <div className="investement-inner">
                    <img src={Circles} className='investement-circles' alt="investement circles" />
                    <img src={BigCircles} className='investement-circles-big' alt="investement circles" />
                    <Row>
                        <Col lg={7}>
                        <br/> <br/> <br/> 
                            <h1 className='mb-3'>COVERAGE RATIO</h1>
                            <p>ELEMENT is the first StableSwap to use coverage ratio in its dynamics 
to delineate equilibrium states on Algorand.The coverage ratio is a crucial aspect of the ELEMENT protocol that must 
be maintained above a certain threshold to avoid defaults.</p>
                            {/* <p>The coverage ratio is a crucial aspect of the ELEMENT protocol that must 
be maintained above a certain threshold to avoid defaults.</p> */}

                            {/* <p>The ELEM treasury will increase in value through a series of strategic investments thus increasing the backed price.</p> */}
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Investement;