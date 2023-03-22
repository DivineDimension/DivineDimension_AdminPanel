import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

// import Shape from '../../assets/images/shape-circle-left.png';
import Card1 from '../../assets/images/learn-card-1.png';
import Card2 from '../../assets/images/learn-card-2.png';
import Card3 from '../../assets/images/learn-card-3.png';

const LearnMore = () => {
    return (
        <div className='learn-more position-relative'>
            {/* <img src={Shape} className='learn-shape-left d-none d-md-block' alt="Shape" /> */}
            <Container>
                <h2 className="text-center text-uppercase">Learn more</h2>

                <Row>
                    <Col lg={4} className='mb-lg-0 mb-4'>
                        <div className="card-learn">
                            <img src={Card1} alt="card 1" className='img-fluid' />
                            <div className="card-learn-content">
                                <a  style={{cursor:"pointer"}}><h4>Tokenomics 
                                    {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9706 8.48601H1.00007" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.8994 1.41479L17.9705 8.48586L10.8994 15.5569" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> */}
                                </h4></a>
                                <p>For more information regarding Element tokenomics (including emissions, vesting), click here.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-lg-0 mb-4'>
                        <div className="card-learn">
                            <img src={Card2} alt="card 1" className='img-fluid' />
                            <div className="card-learn-content">
                            {/* href="https://docs.elementfi.io" */}
                            <a  style={{cursor:"pointer"}}><h4>Docs 
                                    {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9706 8.48601H1.00007" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.8994 1.41479L17.9705 8.48586L10.8994 15.5569" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> */}
                                </h4></a>
                                <p>Our documents contain everything you need to know about Element, as well as some technical support.</p>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} className='mb-lg-0 mb-4'>
                        <div className="card-learn">
                            <img src={Card3} alt="card 1" className='img-fluid' />
                            <div className="card-learn-content">
                            <a  style={{cursor:"pointer"}}> <h4>Roadmap 
                                    {/* <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.9706 8.48601H1.00007" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M10.8994 1.41479L17.9705 8.48586L10.8994 15.5569" stroke="white" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg> */}
                                </h4></a>
                                <p>For more information on progress, and to understand Element’s goals and vision, check out the roadmap.</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default LearnMore;