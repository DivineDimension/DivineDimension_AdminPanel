import React from 'react';
import {Container, Navbar, Nav, Badge, Dropdown, Modal, Row, Col, Button, Form} from 'react-bootstrap';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import {
    NavLink as Link
  } from "react-router-dom";
import { useState } from "react";
import url from "../../configurl"
import { useEffect } from "react";
import Logo from '../../assets/images/logo.png';
import colorLogo from '../../assets/images/modal-logo-new.png'
import MyAlgoConnect from '@randlabs/myalgo-connect';
import algosdk from "algosdk";
import config from "../../configurl";
import { AppId,escrowProgram } from '../swapConfig';
import {b64decode,base64} from "algosdk";
import axios from 'axios';
import logo from '../../assets/images/logoasset.png'
import {calltokenForUsers, updateusedetails,connectWalletLaunchpad} from '../apicallfunction';
import usdclogo from '../../assets/images/usdc-logo.png';
// import { createtxhash,gettxhistory } from '../apicallfunction';
import { postusertx } from '../apicallfunction';
import { asset3id,priceOfCoin2,readingLocalstate,assetName,asset1id,asset2id,priceOfCoin1,walletAsset,walletAssetDetails,asset1WithId,asset2WithId,readingLocalstateWithAppid ,escrowdata,usdcbalance,rewardasset1,rewardasset2} from '../formula';
import moonbeam from "../../assets/images/moonbeam.png";
const myAlgoWallet = new MyAlgoConnect({ disableLedgerNano: false });

const baseServer = 'https://testnet-algorand.api.purestake.io/ps2';
const port = '';

const token = {
   'X-API-Key': 'pOD5BAUCxq7InVPjo0sO01B0Vq4d7pD1ask5Ix43'
}

const algodClientGet = new algosdk.Algodv2(token, baseServer, port);

const algodClient = new algosdk.Algodv2('', 'https://node.testnet.algoexplorerapi.io', '');
const indexerClient = new algosdk.Indexer('', 'https://algoindexer.testnet.algoexplorerapi.io', '');

let appID_global = AppId;

function Header() {
    
    const baseServer = 'https://testnet-algorand.api.purestake.io/ps2';
    const port = '';
    
    const token = {
       'X-API-Key': 'pOD5BAUCxq7InVPjo0sO01B0Vq4d7pD1ask5Ix43'
    }

    React.useEffect(() => {
        localStorage.removeItem('Theme', 'light');
        document.body.classList.remove('light-mode');   
    })
    
    const algodClientGet = new algosdk.Algodv2(token, baseServer, port);
    
        const algodClient = new algosdk.Algodv2('', 'https://node.testnet.algoexplorerapi.io', '');
        const indexClient = new algosdk.Indexer('', 'https://algoindexer.testnet.algoexplorerapi.io', '');
    
        const [assetCount, setAssetCount] = useState("");
        const [algoBalance, setAlgoBalance] = useState("");
        const [copyButton, setCopyButton] = useState(false);
    
        const handleCopy = () =>{setCopyButton(false)};
        const handleCopied = () =>{setCopyButton(true)};
    
       const connectWallet = async () => {
            try {
                handleCopy();
    
                let settings = {
                    shouldSelectOneAccount: true,
                    openManager: true
                }
    
              const accounts = await myAlgoWallet.connect(settings);
              const addresses = accounts.map((account) => account.address);
    
              console.log("addresses : ", addresses);
              localStorage.setItem("walletAddress", addresses[0]);
                await countAsset();
              window.location.reload();
              setShowButton(false);
            } catch (err) {
              console.error(err);
            }
          };
          const [showButton, setShowButton] = useState(true);
          let walletAddress = localStorage.getItem("walletAddress");
          const wallet = async() => {
            let v = localStorage.getItem("walletAddress");
            if(v){
              setShowButton(false)
            }
            else{
              setShowButton(true)
            }
          }
          useEffect(() =>{wallet()},[localStorage.getItem("walletAddress"),showButton])
        
         
        
          const Disconnect = async() => {
            localStorage.setItem("walletAddress", "");
            handleCopy();
            window.location.reload();
            setShowButton(true)
          }
    
          useEffect(async() => {
            await countAsset()
        }, [assetCount, algoBalance]);
    
          const countAsset = async () =>
          {
            let accountInfo = await indexClient.lookupAccountByID(localStorage.getItem("walletAddress")).do();            console.log(accountInfo);
            setAssetCount(accountInfo['account']['assets']['length']);
            setAlgoBalance(accountInfo['account']['amount']);
          }
    
    const copyCheck = () =>
    {
        navigator.clipboard.writeText(localStorage.getItem("walletAddress"));
        handleCopied() 
    }

    return (
        <>
            <header className="header">
                <Navbar expand="xl" className='p-0'>
                    <Container fluid="lg">
                        <Navbar.Brand href="/"><img src={colorLogo} alt="logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav">
                            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.9214 18.6127V20.6127H5.92139V18.6127H16.9214ZM21.9214 11.6127V13.6127H3.92139V11.6127H21.9214ZM19.9214 4.61267V6.61267H8.92139V4.61267H19.9214Z" fill="white"/>
                            </svg>
                        </Navbar.Toggle>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <div className="d-flex mb-4 d-xl-none align-items-center justify-content-between">
                                <Navbar.Brand href="/"><img src={colorLogo} alt="logo" /></Navbar.Brand>

                                <Navbar.Toggle aria-controls="basic-navbar-nav">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" className="bi bi-x-lg" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                                        <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                                    </svg>
                                </Navbar.Toggle>
                            </div>
                            <div className="navbar-controls order-xl-2 d-flex align-items-center">
                                {/* <button className='btn me-2 btn-grad px-3'> */}
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi m-0 bi-plus-circle" viewBox="0 0 16 16">
                                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                    </svg> */}
                                    {/* <img src={moonbeam} fill="currentColor"/>
                                </button> */}

                                {/* <Dropdown>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Dropdown Button
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-end dropdown-menu-setting p-3">
                                        <div className="card p-2 dropdown-menu-card mb-3">
                                        <Form.Check 
                                            type="checkbox"
                                            id={`checkbox`}
                                            label={`Hide unverified Asset`}
                                        />
                                        </div>
                                        </Dropdown.Menu>
                                    </Dropdown> */}
                                    

                                    <>
                            { showButton ? 
                                <button className='btn me-0 btn-grad' onClick={()=>connectWallet()}>Connect Wallet</button>
                                : <>
                               {/* <button className='btn me-2 btn-grad' > {parseFloat(wb).toFixed(2)}&nbsp;ALGO </button> */}

                                {/* <button className='btn me-3 btn-grad' onClick={()=>connectWallet()}>{(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length -4, (localStorage.getItem("walletAddress")).length)}</button><br /> */}
                                {/* <button className='btn me-3 btn-grad' onClick={() =>Disconnect()}>Disconnect</button> */}
                            
                                <Dropdown >
                                    <Dropdown.Toggle variant="grad" className='dropdown-noarrow' id="dropdown-basic">
                                    {/* {(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length -4, (localStorage.getItem("walletAddress")).length)} */}
                                    {(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length -4, (localStorage.getItem("walletAddress")).length)}

                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-menu-end dropdown-menu-setting p-3">
                                        <div className="dropdown-menu-header mb-3">
                                            <Row>
                                            <Col>
                                            <h6 className='mb-0' >{(localStorage.getItem("walletAddress")).substring(0, 4)}...{(localStorage.getItem("walletAddress")).substring((localStorage.getItem("walletAddress")).length -4, (localStorage.getItem("walletAddress")).length)}</h6>
                                            {copyButton === true ?<><button className="btn btn-secondary mb-2 mt-2">Copied!</button></>:<><button className="btn btn-secondary mb-2 mt-2"  onClick={() => copyCheck()}>Copy address</button></>}
                                            <p className='text-gray'><small>{assetCount} Assets</small></p>
                                            </Col>
                                            <Col>
                                            <button className='btn btn-grad'> <center> {(parseFloat(algoBalance)/1000000).toFixed(2)} ALGO <br/>(TestNet) </center></button> 
                                            </Col>
                                            </Row>
                                        </div>
                                            <Dropdown.Item className='d-flex align-items-center p-2 rounded' onClick={()=>connectWallet()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-2 bi-person" viewBox="0 0 16 16">
                                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                                            </svg>
                                            Account</Dropdown.Item>
                                        <Dropdown.Item className='d-flex align-items-center p-2 rounded' onClick={() =>Disconnect()}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi me-2 bi-box-arrow-right" viewBox="0 0 16 16">
                                                <path fillRule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                                <path fillRule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                            </svg>
                                            Disconnect
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                                </>
                                }</>
                            </div>

                            <Nav className="mx-auto navbar-nav-inner">
                                <Link className='nav-link' to="/swap" activeClassName="active">Swap</Link>
                                <Link className='nav-link' to="/pool" activeClassName="active">Pool</Link>
                                <Link className='nav-link' to="/farm" activeClassName="active">Farm</Link>
                                {/* <Link className='nav-link' to="/vaults" activeClassName="active">Vaults</Link>*/}
                                {/* <Link className='nav-link' to="/stake" activeClassName="active">Stake</Link>  */}
                                <Link className='nav-link' to="/launchpad" activeClassName="active">Launchpad</Link>
                                <Link className='nav-link' to="/dashboard" activeClassName="active">Stablecoin Hub</Link>
                                {/* <Link className='nav-link' to="/analytics" activeClassName="active">Credit <Badge>Upcoming</Badge></Link> */}
                                {/* <Link className='nav-link' to="/moneymarket" activeClassName="active">Money Market</Link> */}
                                <Dropdown>
                                        <Dropdown.Toggle variant='reset' style={{display:"inline_block", fontWeight:"normal", paddingTop:"3px"}}>
                                        <a className='nav-link inactive'>Money Market<Badge>Upcoming</Badge></a>
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu style={{backgroundColor:"#0d0a19"}}>
                                            <Dropdown.Item style={{backgroundColor:"#0d0a19"}} href="/lending">Lending</Dropdown.Item>
                                            <Dropdown.Item style={{backgroundColor:"#0d0a19"}} href="/borrow">Borrow</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown>
                                <Link className='nav-link' to="/analytics" activeClassName="active">Analytics</Link>
                                <Link className='nav-link' to="/bridge" activeClassName="active">Bridge<Badge>Upcoming</Badge></Link>
                                <Link className='nav-link' to="#" activeClassName="inactive">SaaS<Badge>Upcoming</Badge></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    </Navbar>
            </header>
        </>
    );
}

export default Header;
