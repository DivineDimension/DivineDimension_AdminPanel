import React, {useState, useEffect} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {
    Link
  } from "react-router-dom";

// import ProtocolImage from "../../assets/images/protocol-image.png";
import ProtocolImage from "../../assets/images/element-circles.png";
import ProtocolImageMOb from "../../assets/images/element-protocol-mob-image-2.png";

const HomeBannerBanking = () => {

    return (
        <div className='page-banner text-center pb-0'>
            <Container fluid="lg">
                <Row className='justify-content-center py-0'>
                    <Col xl={12}><br/>
                        <h1>ELEMENT</h1>
                    </Col>
                </Row>

                <div className="text-center banner-protocol-image">

                    <img src={ProtocolImage} alt="ProtocolImage" className='img-fluid mx-auto' />
                    {/* <img src={ProtocolImageMOb} alt="ProtocolImage" className='img-fluid d-md-none w-100' /> */}
                    
                </div>

                <Row className='justify-content-center banner-protocol-text'>
                    <Col xl={12}>
                       <p>Next-Gen Multi-dimensional Institutional grade CBDC and DeFi Platform</p>
                        {/* <p>TAU is the first non-dilutive fractional stablecoin for DeFi 2.0, where the price balance is orthogonally regulated through ELEM elastic supply adjustments, burn and bonding mechanics within a closed ecosystem.</p> */}
                    </Col>
                </Row>
                <div className="pt-4">

<Link to="/stableswap" className='m-md-2 mx-1 mb-3 btn btn-lg btn-grad'>DeFi Suite  
    {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
    </svg> */}
</Link>
<Link to="/CDBC_Hub" className='m-md-2 mx-1 mb-3 btn btn-lg btn-grad'>CBDC Hub
    {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
    </svg> */}
</Link>
<Link to="/elemcurrency" className='m-md-2 mx-1 mb-3 btn btn-lg btn-grad'>Elem Currency
    {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
    </svg> */}
</Link>
<Link to="/singlesideAmm" className='m-md-2 mb-3 btn btn-lg btn-grad'>Single Side AMM
    {/* <svg width="22" height="15" viewBox="0 0 22 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.6389 8.36952L18.8028 8.2H18.567H0.967033C0.700676 8.2 0.486002 8.10872 0.33782 7.95548C0.189347 7.80195 0.1 7.57826 0.1 7.3C0.1 7.02174 0.189347 6.79805 0.33782 6.64452C0.486002 6.49128 0.700676 6.4 0.967033 6.4H18.567H18.8064L18.6382 6.22972L14.0939 1.63048C14.0937 1.63036 14.0936 1.63023 14.0935 1.63011C13.7445 1.26887 13.7447 0.730627 14.0939 0.369516C14.4414 0.0101614 14.9564 0.0101614 15.3039 0.369516L21.7831 7.06952C21.939 7.23075 21.939 7.46925 21.7831 7.63048L15.3039 14.3305C14.9564 14.6898 14.4414 14.6898 14.0939 14.3305C13.7445 13.9692 13.7445 13.4308 14.0939 13.0695L18.6389 8.36952Z" fill="currentColor" stroke="currentColor" strokeWidth="0.2"/>
    </svg> */}
</Link>
</div>

                {/* <div className="pt-4">
                <Link to="/dashboard" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>Stablecoin Hub</Link>
                <Link to="/features" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>All-In-One DeFi</Link>
                <Link to="/elemcurrency" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>SaaS (Private L2)</Link> */}
                {/* <Link to="/swap" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>AMM DEX</Link>
                <Link to="/lending" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>Money Market</Link>
                <Link to="/launchpad" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>Launchpad</Link>
                <Link to="/farm" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>Yield Farming</Link> */}
                {/* <a target="_blank" rel="noreferrer" className='m-md-2 mb-3 btn btn-lg btn-sm-full d-md-none btn-grad'>NFT Market</a> */}
                    {/* <Link to="/dashboard" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>Stablecoin Hub</Link>
                    <Link to="/features" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>All-In-One DeFi</Link>
                    <Link to="/elemcurrency" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>SaaS (Private L2)</Link> */}
                    {/* <Link to="/swap" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>AMM DEX</Link>
                    <Link to="/lending" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>Money Market</Link>
                    <Link to="/launchpad" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>Launchpad</Link>
                    <Link to="/farm" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>Yield Farming</Link>
                    <a target="_blank" rel="noreferrer" className='m-md-2 mb-3 btn btn-lg btn-mob-full d-none d-md-inline-block btn-grad'>NFT Market</a> */}
                {/* </div> */}
            </Container>
        </div>
    );
};

export default HomeBannerBanking;