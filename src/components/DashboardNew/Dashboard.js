import React, {useState, useEffect} from 'react';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Layout from './LayoutT';
import AreaChart from './snippets/AreaChart';
import AreaChartTau from './snippets/AreaChartTau';
import AreaChartasaswap from './snippets/AreaChartASAswap';
import AreaChartMintFeeTau from './snippets/AreaChartMintFeeTau';
import AreaChartEinr from './snippets/AreaChartEinr';
import AreaChartElemReserve from './snippets/AreaChartElemReserve';
import AreaChartMintFeeEinr from './snippets/AreaChartMintFeeEinr';
import AreaChartRedeemFee from './snippets/AreaChartRedeemFee';
import AreaChartTauCollateral from './snippets/AreaChartTauCollateral';
import AreaChartEinrCollateral from './snippets/AreaChartEinrCollateral';
import LineChart from './snippets/LineChart';
import PieChartElem from './snippets/PieChartStable';
import PieChartTau from './snippets/PieChartStable';
import PieChartEinr from './snippets/PieChartStable';
import node from './nodeapi.json';
import dashboardDetails from '../Dashboard/stablecoin-only.json';
import config from '../../NFTFolder/config.json'
import axios from 'axios';
import { elemToken } from '../swapConfig';
import AreaChartNFT from './snippets/AreaChartNFT'
import Logo from '../../assets/images/algorand-logo.png';


const Dashboard = () => {

    useEffect(() => {
        document.title = "ELEMENT | Dashboard"
    }, [])

    const [einrCir, setEinrCir] = useState("");
    const [elemCir, setElemCir] = useState("");
    const [tauCir, setTauCir] = useState("");
    const [usdcFee, setUsdcFee] = useState("");
    const [tauFee, setTauFee] = useState("");
    const [einrFee, setEinrFee] = useState("");
    const [elemBalance, setElemBalance] = useState("");
    const [elemReserveBalance, setElemReserveBalance] = useState("");
    const [tauBalance, setTauBalance] = useState("");
    const [usdcTauBalance, setUsdcTauBalance] = useState("");
    const [einrBalance, setEinrBalance] = useState("");
    const [usdcEinrBalance, setUsdcEinrBalance] = useState("");
    const [nftBalance, setnftBalance] = useState("");
    const[asaswapelembalance,setasaswapelembalance] = useState("");
    

        const tauID = dashboardDetails.tauID;
        const einrID = dashboardDetails.einrID;
        const elemID = dashboardDetails.elemID;
        const usdcID = dashboardDetails.usdcID;
        const tauTotalSupply = 18446744073709.551615;
        const elemTotalSupply = 18446744073709.551615;
        const einrTotalSupply = 18446744073709.551615;


    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={6} className="mb-4">
                        {/* <Card className='card-dash border-0 mb-4'>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Common</div>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Total Value Locked 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-0'>$391,332</h2>
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChart />
                            </div>

                            <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    24h Trading Volume 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-0'>$1,342</h2>
                            </div>
                            <div className="overflow-hidden card--chart">
                                <LineChart />
                            </div>
                        </Card> */}

                        {/* <Card className='card-dash border-0 mb-4'>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">TAU 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Market Price
                                </h6>
                                <h2 className='mb-2'>$1.03</h2>
                                <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.70%
                                </h6>
                            </div>
                            
                            <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    PEG Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$1.00</h2>
                                <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0%
                                </h6>
                            </div>

                            <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Total Supply
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>27,821</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>TAU</h6>
                                </div>
                            </div>

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                <h6 className='sub-heading mb-0'>
                                    Total Collateral
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-20'>$20,866</h2>

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <svg className="rv-xy-plot__inner" width="200" height="200"><g className="rv-xy-plot__series rv-xy-plot__series--arc m-auto sm:m-0" opacity="1" pointer-events="all" transform="translate(100,100)"><path className="rv-xy-plot__series rv-xy-plot__series--arc-path rv-radial-chart__series--pie__slice " d="M6.123233995736766e-15,-100A100,100,0,1,1,-6.123233995736766e-15,100A100,100,0,1,1,6.123233995736766e-15,-100M-1.1940306291686693e-14,-65A65,65,0,1,0,1.1940306291686693e-14,65A65,65,0,1,0,-1.1940306291686693e-14,-65Z" style={{opacity: 1, stroke: 'rgb(44, 56, 98)', fill: 'rgb(44, 56, 98)'}}></path></g></svg>
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Available collateral
                                            </div>
                                            <h6>$20,866</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card> */}
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">TAU  
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        TAU is the Stablecoin of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/asset/" + dashboardDetails.tauID} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Price
                                </h6>
                                <h4 className='mb-2'>$1.00</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> */}

                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                {/* <h6 className='sub-heading mb-0'>
                                    Total Supply
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                The Total Supply of TAU Stablecoin.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h2 className='mb-0'>18,446,744,073,709</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>TAU</h6>
                                </div> */}

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <PieChartTau />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Circulating Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Circulating Supply of TAU Stablecoin.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((tauTotalSupply - parseFloat(tauCir)/1000000)) ? (parseInt((tauTotalSupply - parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString() : "0"} TAU</h6>
                                        </div>
                                        <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Total Reserve Supply of TAU Stablecoin.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((parseFloat(tauCir)/1000000))) ? (parseInt((parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString() : "0"} TAU</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">TAU Treasury / Reserve
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total TAU asset balance in the TAU Treasury. Reserve is the remainings of the asset from circulating supply
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.dynamicStablecoinEscrowAddress} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt((parseFloat(tauBalance))) ? parseInt((parseFloat(tauBalance)).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartTau />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">EINR 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        EINR is the Indian Rupee's Digital Representation of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/asset/" + dashboardDetails.einrID} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Price
                                </h6>
                                <h4 className='mb-2'>$0.01</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> */}

                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                {/* <h6 className='sub-heading mb-0'>
                                    Total Supply
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                The Total Supply of EINR asset.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h2 className='mb-0'>18,446,744,073,709</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>EINR</h6>
                                </div> */}

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <PieChartEinr />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Circulating Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Circulating Supply of EINR asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((einrTotalSupply - parseFloat(einrCir)/1000000))) ? (parseInt((einrTotalSupply - parseFloat(einrCir)/1000000).toFixed(0))).toLocaleString() : "0"} EINR</h6>
                                        </div>
                                        <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Total Reserve Supply of EINR asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((parseFloat(einrCir)/1000000))) ? (parseInt((parseFloat(einrCir)/1000000).toFixed(0))).toLocaleString() : "0"} EINR</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">EINR Treasury / Reserve
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total EINR asset balance in the EINR Treasury. Reserve is the remainings of the asset from circulating supply
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.dynamicStablecoinEscrowAddressEinr} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt((parseFloat(einrBalance) / 76)) ? parseInt((parseFloat(einrBalance) / 76).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartEinr />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card>   

                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Mint TAU Fee Treasury 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        (i) This is a fee collected for every Mint of TAU. <br/>(ii) The fee asset is TAU. <br/>(iii) The percentage of fee is 1%.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.owner} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Percentage per Mint
                                </h6>
                                <h4 className='mb-2'>1% TAU</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                             {/* <hr className='mb-20 mt-0' /> */}

                            {/* <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> 

                             <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                <h6 className='sub-heading mb-0'>
                                    Total Fees Collected
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total Fees collected till now during Mint (TAU).
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h4 className='mb-0'>{(parseFloat(tauFee).toFixed(2)/1000000) ? (parseFloat(tauFee).toFixed(2)/1000000).toLocaleString() : "0"}</h4>
                                    <h6 className='sub-heading ms-3 mb-1'>TAU</h6>
                                </div>

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <AreaChartMintFeeTau />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Total TAU Fee

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Total Fees collected till now during Mint (TAU).
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(parseFloat(tauFee).toFixed(2)/1000000) ? parseInt(parseFloat(tauFee).toFixed(2)/1000000).toLocaleString() : "0"} TAU</h6>
                                        </div>
                                       {/* <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString()} TAU</h6>
                                        </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </Card>                           

                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Collateral Treasury (TAU)
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                This is a collateral treasury of TAU where the USDC while minting TAU is stored.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.dynamicStablecoinEscrowAddress} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt((parseFloat(usdcTauBalance)).toFixed(2)) ? parseInt((parseFloat(usdcTauBalance)).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartTauCollateral />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card> 

                        {/* <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">ASA Swap Treasury
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total ELEM asset balance in the ASA Swap Treasury.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/K44D26OSBNXR4DOYT4E6X7NLUOWRVJYYHDKWCBRGUNTL3VF3TLZZSCVXQU"} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt((parseFloat(asaswapelembalance/1000000) * 3).toFixed(2)).toLocaleString()}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartasaswap />
                            </div>
                            
 </Card> */}

                    </Col>
                    <Col md={6}>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">ELEM 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       The ELEM is an elastic asset that stabilizes TAU Stablecoin based on Bonding and Staking.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/asset/" + dashboardDetails.elemID} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Price
                                </h6>
                                <h4 className='mb-2'>$3.00</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> */}

                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                {/* <h6 className='sub-heading mb-0'>
                                    Total Supply
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                The Total Supply of ELEM asset.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h2 className='mb-0'>{parseInt(elemTotalSupply).toLocaleString()}</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM</h6>
                                </div> */}

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <PieChartElem />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Circulating Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Circulating Supply of ELEM asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(elemTotalSupply - (parseFloat(elemCir)/1000000)) ? (parseInt((elemTotalSupply - (parseFloat(elemCir)/1000000)).toFixed(0))).toLocaleString() : "0"} ELEM</h6>
                                        </div>
                                        <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Total Reserve Supply of ELEM asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(parseFloat(elemCir)/1000000) ? (parseInt((parseFloat(elemCir)/1000000).toFixed(0))).toLocaleString() : "0"} ELEM</h6>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </Card>

                         <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">ELEM Reserve
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total ELEM asset balance in the ELEM Reserve. Reserve is the remainings of the asset from circulating supply.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.elemReserveAddress} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt(parseFloat(elemReserveBalance) * 3) ? parseInt((parseFloat(elemReserveBalance) * 3).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartElemReserve />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card>               

                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">ELEM Treasury
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total ELEM asset balance in the ELEM Treasury.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.rebaseElemTreasury} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt(parseFloat(elemBalance) * 3) ? parseInt((parseFloat(elemBalance) * 3).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChart />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card>
   
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Redeem Fee Treasury 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        (i) This is a fee collected for every redemption of TAU and EINR. <br/>(ii) The fee asset is USDC. <br/>(iii) The percentage of fee is 1%.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.owner} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Percentage per Redeem
                                </h6>
                                <h4 className='mb-2'>5% USDC</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                             {/* <hr className='mb-20 mt-0' /> */}

                            {/* <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> 

                             <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                <h6 className='sub-heading mb-0'>
                                    Total Fees Collected
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total Fees collected till now during Redeem (TAU and EINR).
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h4 className='mb-0'>{(parseFloat(usdcFee).toFixed(2)/1000000) ? (parseFloat(usdcFee).toFixed(2)/1000000).toLocaleString() : "0"}</h4>
                                    <h6 className='sub-heading ms-3 mb-1'>USDC</h6>
                                </div>

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <AreaChartRedeemFee />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Total USDC Fee

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Total Fees collected till now during Redeem (TAU and EINR).
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(parseFloat(usdcFee).toFixed(2)/1000000) ? parseInt(parseFloat(usdcFee).toFixed(2)/1000000).toLocaleString() : "0"} USDC</h6>
                                        </div>
                                       {/* <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString()} TAU</h6>
                                        </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </Card> 

                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Mint EINR Fee Treasury 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        (i) This is a fee collected for every Mint of EINR. <br/>(ii) The fee asset is EINR. <br/>(iii) The percentage of fee is 1%.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.owner} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Percentage per Mint
                                </h6>
                                <h4 className='mb-2'>1% EINR</h4>
                                {/* <h6 className='stock-down font-bold mb-0'>
                                    <svg width="16" height="16" className='me-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.66699 6.6665L8.00033 9.99984L11.3337 6.6665H4.66699Z" fill="#F03738"></path></svg>
                                    0.06%
                                </h6> */}
                            </div>
                            
                             {/* <hr className='mb-20 mt-0' /> */}

                            {/* <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Floor Price 
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <h2 className='mb-2'>$0.0104</h2>
                            </div> 

                             <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Current emission rate
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex align-items-end">
                                    <h2 className='mb-0'>&lt; 0.0001</h2>
                                    <h6 className='sub-heading ms-3 mb-1'>ELEM/BLOCK</h6>
                                </div>
                            </div> */}

                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>
                                <h6 className='sub-heading mb-0'>
                                    Total Fees Collected
                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total Fees collected till now during Mint (EINR).
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                        </OverlayTrigger>
                                </h6>
                                <div className="d-flex mb-20 align-items-end">
                                    <h4 className='mb-0'>{parseInt(parseFloat(einrFee).toFixed(2)/1000000) ? parseInt(parseFloat(einrFee).toFixed(2)/1000000).toLocaleString() : "0"}</h4>
                                    <h6 className='sub-heading ms-3 mb-1'>EINR</h6>
                                </div>

                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        <AreaChartMintFeeEinr />
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Total EINR Fee

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Total Fees collected till now during Mint (EINR).
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(parseFloat(einrFee).toFixed(2)/1000000) ? parseInt(parseFloat(einrFee).toFixed(2)/1000000).toLocaleString() : "0"} EINR</h6>
                                        </div>
                                       {/* <div className='mb-20'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                                Locked Supply

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{(parseInt((parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString()} TAU</h6>
                                        </div> */}
                                    </Col>
                                </Row>
                            </div>
                        </Card>  

                        {/* <Card className='card-dash border-0 mb-4'>
                        <a href='https://testnet.algoexplorer.io/address/JUNVYPS2SRNKRN3JJZNSYM3IV5WQHZTBR4BM6ZI7OTEJP2AGEJLSAXSE5U ' target="_blank" rel="noopener noreferrer">
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">NFT Treasury</div>
                            </a>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance

                                    <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                Total ELEM asset balance in the NFT Treasury.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                                </h6>
                                <h2 className='mb-0'>${parseInt((parseFloat(nftBalance)  * 3).toFixed(2)).toLocaleString()}</h2>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChart />
                            </div>                                                        
                        </Card> */}

                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Collateral Treasury (EINR)
                            <OverlayTrigger
                                        key="right"
                                        placement="right"
                                        overlay={
                                            <Tooltip id={`tooltip-right`}>
                                                This is a collateral treasury of EINR where the USDC while minting EINR is stored.
                                            </Tooltip>
                                        }
                                        >
                                            <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                    </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/address/" + dashboardDetails.dynamicStablecoinEscrowAddressEinr} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Balance
                                </h6>
                                <h4 className='mb-0'>${parseInt((parseFloat(usdcEinrBalance))) ? parseInt((parseFloat(usdcEinrBalance)).toFixed(2)).toLocaleString() : "0"}</h4>                                
                            </div>
                            <div className="overflow-hidden mb-20 card--chart">
                                <AreaChartEinrCollateral />
                            </div>
                            
                            {/* <hr className='mb-20 mt-0' />

                            <div className='mb-20'>
                                <h6 className='sub-heading mb-0'>
                                    Collateral structure
                                </h6>
                            </div> */}

                            {/* <Row className='justify-content-center'>
                                <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    <PieChart />
                                </Col>
                                <Col xs={'auto'} sm={6}>
                                    <div className='mb-20 pt-sm-3'>
                                        <div className="text-sm d-flex align-items-center mb-1">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#798DC5" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM
                                        </div>
                                        <h6>$563,704</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#55689E" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-USDC
                                        </div>
                                        <h6>$102,630</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#404D70" x="0" y="0" width="16" height="16"></rect></svg>
                                            ELEM-TAU
                                        </div>
                                        <h6>$616.8</h6>
                                    </div>
                                    <div className='mb-20'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                            USDC
                                        </div>
                                        <h6>$131.3</h6>
                                    </div>
                                    <div className='mb-0'>
                                        <div className="text-sm d-flex align-items-center mb-1  ">
                                            <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2E3655" x="0" y="0" width="16" height="16"></rect></svg>
                                            Others

                                            <OverlayTrigger
                                                key="left"
                                                placement="left"
                                                overlay={
                                                    <Tooltip id={`tooltip-left`}>
                                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                                    </Tooltip>
                                                }
                                                >
                                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                </OverlayTrigger>
                                        </div>
                                        <h6>$235.3</h6>
                                    </div>
                                </Col>
                            </Row> */}
                        </Card> 
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default Dashboard;