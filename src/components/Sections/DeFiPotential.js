import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PotentialCard from '../Snippets/PotentialCard';
import PotentialCardSwap from '../Snippets/PotentialCardSwap';
import PotentialCardStaking from '../Snippets/PotentialCardStaking';
import PotentialCardLaunchpad from '../Snippets/PotentialCardLaunchpad';
import PotentialCardNFT from '../Snippets/PotentialCardNFT';

import Icon1 from '../../assets/images/amm-icon.svg';
import Icon2 from '../../assets/images/bonding-staking-icon.svg';
import Icon3 from '../../assets/images/launchpad-icon.svg';
import Icon4 from '../../assets/images/nft-marketplace-icon.svg';
import Icon5 from '../../assets/images/bridge-icon.svg';
import Icon6 from '../../assets/images/collateral-image.svg';

import {Link} from "react-router-dom";

const DeFiPotential = () => {
    return (
        <div className='defi-potential'>
            <Container fluid="lg">
                <Row className='text-center justify-content-center text-uppercase'>
                    <Col lg={8} xl={7} md={8}>
                        <h2>Unleash the borderless DeFi potential</h2>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} className='mb-4'>
                    {/* <Link to="/swap"> */}
                        <PotentialCardSwap title="AMM" icon={Icon1} text="Put your capital to work through efficient liquidity pools" comingSoon={true} />
                    {/* </Link> */}
                    </Col>
                    <Col lg={8} className='mb-4'> 
                        <PotentialCardStaking title="BONDING & STAKING" icon={Icon2} text="Rewards ELEM holders with compounding interest and increase protocol holdings over time " comingSoon={true} />
                    </Col>
                    <Col lg={4} className='mb-4'>
                    {/* <Link to="/Launchpad"> */}
                        <PotentialCardLaunchpad title="Launchpad" icon={Icon3} text="Get access to highly-vetted ideas of tomorrow" comingSoon={true} />
                    {/* </Link> */}
                    </Col>
                    <Col lg={4} className='mb-4'>
                    {/* <a href="https://elementnft.vercel.app/" target="_blank">    */}
                        <PotentialCardNFT title="NFT Marketplace" icon={Icon4} text="Mint and trade metaverse NFTs to gain borderless virtual assets" comingSoon={true} />
                    {/* </a>  */}
                    </Col>
                    <Col lg={4} className='mb-4'>
                        <PotentialCard title="CROSS CHAIN BRIDGE" icon={Icon5} text="Wrap tokens to and from Blockchains" comingSoon={true} />
                    </Col>
                    <Col lg={12} className='mb-4'>
                        <PotentialCard title="COLLATERAL BANKING" icon={Icon6} text="A New kind of Liquidation Free Lending and Borrowing Platform with a yield based risk derivatives" comingSoon={true} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DeFiPotential;