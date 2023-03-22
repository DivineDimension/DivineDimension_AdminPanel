import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PotentialCard from '../Snippets/PotentialCard';
import PotentialCardSwap from '../Snippets/PotentialCardSwapHomev2';
import PotentialCardStaking from '../Snippets/PotentialCardStakingHomev2';
import PotentialCardLaunchpad from '../Snippets/PotentialCardLaunchpadHomev2';
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
                        <h4 style={{fontWeight:"bold"}}>AN OPTIMAL SOLUTION TO ALL STABLECOIN AMM PROBLEMS</h4>
                    </Col>
                </Row>

                <Row>
                    <Col lg={4} className='mb-4'>
                    {/* <Link to="/swap"> */}
                        <PotentialCardSwap title="LOWER SLIPPAGE" icon={Icon4} text="Features various mechanics to address asset price slippages" comingSoon={true} />
                    {/* </Link> */}
                    </Col>
                    <Col lg={4} className='mb-4'> 
                        <PotentialCardStaking title="HIGHER SCALABILITY" icon={Icon1} text="Scalable design adds flexibility in adding and removing tokens from the main pool" comingSoon={true} />
                    </Col>
                    <Col lg={4} className='mb-4'>
                    {/* <Link to="/Launchpad"> */}
                        <PotentialCardLaunchpad title="CAPITAL EFFICIENCY" icon={Icon3} text="Elimination of impermanent loss risk for liquidity providers" comingSoon={true} />
                    {/* </Link> */}
                    </Col>
                    {/* <Col lg={4} className='mb-4'> */}
                    {/* <a href="https://elementnft.vercel.app/" target="_blank">    */}
                        {/* <PotentialCardNFT title="NFT Marketplace" icon={Icon4} text="Mint and trade metaverse NFTs to gain borderless virtual assets" comingSoon={true} /> */}
                    {/* </a>  */}
                    {/* </Col> */}
                    {/* <Col lg={4} className='mb-4'>
                        <PotentialCard title="CROSS CHAIN BRIDGE" icon={Icon5} text="Wrap tokens to and from Blockchains" comingSoon={true} />
                    </Col> */}
                    {/* <Col lg={12} className='mb-4'>
                        <PotentialCard title="COLLATERAL BANKING" icon={Icon6} text="A New kind of Liquidation Free Lending and Borrowing Platform with a yield based risk derivatives" comingSoon={true} />
                    </Col> */}
                </Row>
            </Container>
        </div>
    );
};

export default DeFiPotential;