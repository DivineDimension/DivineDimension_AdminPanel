import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

import BannerImage from '../../assets/images/banner-image.svg'

const HomeBannerV2 = () => {
    return (
        <div className='page-banner'>
            <Container fluid="lg">
                <Row className='align-items-center justify-content-between'>
                    <Col xl={6} lg={4} className='text-center order-lg-2 mb-lg-0 mb-5'>
                        <img src={BannerImage} alt="BannerImage" className='img-fluid' />
                    </Col>
                    <Col xl={5} lg={7}>
                        <h1>ULTRAMODERN <br/> SINGLE-SIDED DEFI 2.0 STABLESWAP</h1>
                        {/* <p>ELEM is the first decentralized liquidity owned algorithmic currency on the Algorand blockchain that aim to bring No fee exchange transactions. each ELEM is soft - pegged to ALGO and undergo scheduled rebase to withstand price balance.</p> */}
                        <p>The First Liability-Centric Automated Market Maker for exchanging stable currencies on Algorand without impermanent loss risks</p>
                        <div className="pt-0">
                            {/* <Link to="#" className='m-md-2 mb-3 btn btn-sm-full btn-grad'>Start Now 
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
                                </svg>
                            </Link> */}
                            <a target="_blank" rel="noreferrer" className='m-md-2 mb-3 btn btn-sm-full btn-outline-white'>WhitePaper 
                                <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
                                </svg>
                            </a>
                        </div>
                    </Col>
                </Row>
                
            </Container>
        </div>
    );
};

export default HomeBannerV2;