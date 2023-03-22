import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Tree from '../../assets/images/home-desktop-tree-edit.png';
import Step1 from '../../assets/images/step1.png';
import Step2 from '../../assets/images/step2.png';
import Step3 from '../../assets/images/step3.png';
import Step4 from '../../assets/images/step4.png';
import Shape from '../../assets/images/shape1.png';

const TuaPotential = () => {
    return (
        <div className='tua-potential'>
            <Container fluid="lg">
                <Row className='text-center position-relative text-uppercase z-2 justify-content-center'>
                    <Col>
                        <h1>Protocol mechanics</h1> <br/><br/><br/><br/>
                    </Col>
                </Row>

                <div className="tua-list">
                    <img src={Tree} alt="tree" className='img-fluid d-md-block d-none' />

                    <div className="tua-list-content tua-list-content-1">
                        <div className="h2">SHARED LIQUIDITY</div>
                        <p>Decentralized exchanges in DeFi 1.0 are designed to use closed 
liquidity pools. Such a model creates fragmented liquidity since liquidity is not shared between separate 
pools.ELEMENT protocol addresses this issue by sharing liquidity across all pools</p>
                        {/* <p>Benefit DEX users by crediting ELEM tokens equal to the exchange swap fees paid during the transaction.</p> */}
                    </div>

                    <div className="tua-list-image tua-list-image-1 d-md-none">
                        <img src={Step1} className='img-fluid' alt="step" />
                    </div>
                    
                    <div className="tua-list-content tua-list-content-3">
                        <div className="h2">FLEXIBLE POOL COMPOSITION</div>
                        <p>In current decentralized exchanges, the invariant’s equilibrium state is predefined when all tokens in 
a pool have the same liquidity.ELEMENT  makes it easier to introduce new tokens in a liquidity pool.The protocol’s equilibrium 
state is determined by the same coverage ratio instead of the same liquidity.</p>
                    </div>

                    <div className="tua-list-image tua-list-image-2 d-md-none">
                        <img src={Shape} className='img-fluid' alt="step" />
                    </div>

                    <div className="tua-list-content tua-list-content-2">
                        <div className="h2">SINGLE-SIDED TOKEN</div>
                        <p>One of the distinct features of the ELEMENT allowing users to deposit and withdraw the same type of 
tokens without worrying about the size, composition, and difference between their tokens and LP tokens. 
This quality makes the liquidity provision process much more convenient.</p>
                        {/* <p>VC Fund help increase floor price consistently and regulate purchase power.</p> */}
                    </div>

                    <div className="tua-list-image tua-list-image-3 d-md-none">
                        <img src={Step2} className='img-fluid' alt="step" />
                    </div>
                    
                    <div className="tua-list-content tua-list-content-4">
                        <div className="h2">SLIPPAGE OPTIMIZATION</div>
                        <p>One of the strengths of the ELEMENT protocol is lower slippage levels.</p>
                    </div>
                    <div className="tua-list-image tua-list-image-4 d-md-none">
                        <img src={Step4} className='img-fluid' alt="step" />
                    </div>
                    {/* <div className="tua-list-content tua-list-content-5">
                        <div className="h2">RISK MANAGEMENT
</div>
                        <p>Some of the risk management techniques used in ELEMENT StableSwap.</p>
                    </div>
                    <div className="tua-list-image tua-list-image-5 d-md-none">
                        <img src={Step4} className='img-fluid' alt="step" />
                    </div> */}
                </div>
            </Container>
        </div>
    );
};

export default TuaPotential;