import React, { useState,useEffect } from 'react';
import Layout from "./LayoutT";
import {
    Link
  } from "react-router-dom";
import { Button, Col, Container, Modal, OverlayTrigger, Row, Tab, Tabs, Tooltip } from 'react-bootstrap';
// import PoolParent from './snippets/PoolParent';
import PoolChild from './snippets/PoolChild';
// import PoolChild2 from './snippets/PoolChild2';
// import PoolChild3 from './snippets/PoolChild3';
import ButtonLoad from 'react-bootstrap-button-loader';
import axios from 'axios';
import algologo from '../../assets/images/Algo.png';
// import elemlogo from '../../assets/images/elem-original.png';
import elemlogo from '../../assets/images/elem-original-old.png';


// import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "algorand-walletconnect-qrcode-modal";
// import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
// import { dualwalletconnect } from './walletconnection';
// import algosdk, { Algod ,encodeUint64} from "algosdk";
// import node from './nodeapi.json';
// import MyAlgoConnect from '@randlabs/myalgo-connect';
import { FormControl, InputGroup } from "react-bootstrap";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
// import { PtpstakingAppAdress,PtpstakingAppId,swapAppAdress,swapAppId,PTP,VEPTP,lpstakingAppAdress,lpstakingAppId,UsdcAppId,UsdtAppId,TauAppId,USDC,USDT,USDCE,USDTE, usdcStakingappid, usdtStakingappid, TauStakingappid, usdcStakingappaddress, usdtStakingappaddress, TauStakingappaddress } from './singlesidedAmmconfig';
// import { greaterAsset,AppDetails,globalstate,getD,getY ,getvaluesfromnode} from '../StableswapConfig';
// import { walletBalance,checkotp } from '../formula';
// import { createtpairhistory } from '../apicallfunction';

// const algodClient = new algosdk.Algodv2('',node['algodclient'], '');
// const myAlgoWallet = new MyAlgoConnect({ disableLedgerNano: false });
// const indexerClient = new algosdk.Indexer('', node['indexerclient'], '');
// const bridge = "https://bridge.walletconnect.org";


function PoolNew() {
    let usdtpriceoracle =70116137
    let usdcpriceoracle =70116074
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [trade, setTrade] = useState(false);
    const handleToggle = () => setShow(!show);
    const handleToggle1 = () => setShow1(!show1);
    const handleTrade = () => setTrade(!trade);
    const [BondAmount, setBondAmount] = useState();
    const[appOpted,setOpted] = useState(false);

    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[usdcprice,setusdcprice] = useState("")
    const[BoostingApr, setBoostingApr] = useState("");
    const[loader, setLoader] = useState(false);
    const handleShowLoad1 = () => setLoader1(true);
    const handleHideLoad1 = () => setLoader1(false);
    const[loader1, setLoader1] = useState(false);
    const[functname, setfunctname] = useState("");
    const[stakedAmount, setstakedAmount] = useState("");
    const[stakedtime, settstakedtime] = useState("");
    const[totalPTP, settotalPTP] = useState("");
    const[ptpbalance, setptpbalance] = useState("");
    const[ptpptpoptin, setptpptpoptin] = useState(false);
    const[veptpptpbalance, setveptpptpbalance] = useState("");
    const[veptpptpoptin, setveptpptpoptin] = useState(true);
    const[claimamount, setclaimamount] = useState("");
    const[usdcstakedAmount, setusdcstakedAmount] = useState("");
    const[taustakedAmount, settaustakedAmount] = useState("");

    const[usdtstakedAmount, setusdtstakedAmount] = useState("");
    const[Circulatingsupply,setcirculatingsupply] = useState("")

    



    return ( 
        <Layout>
               <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

            <Container>
              
               

              

               
                
                <div className='pools-tab'>
                    <Tabs
                    defaultActiveKey="main"
                    id="tab-example"
                    className="mb-24 justify-content-center"
                    >
                        <Tab eventKey="main" title="Staking">
                        <PoolChild />
                            {/* <PoolChild />
                            <PoolChild2 />
                            <PoolChild3 /> */}
                            {/* <PoolChild />
                            <PoolChild /> */}
                        </Tab>
                        {/* <Tab eventKey="alt" title="Alt Pools">
                            <PoolParent />
                            <PoolParent />
                            <PoolParent />
                            <PoolParent />
                        </Tab>
                        <Tab eventKey="factory" title="Factory Pools">
                            <PoolParent />
                            <PoolParent />
                            <PoolParent />
                            <PoolParent />
                        </Tab> */}
                    </Tabs>
                </div>

            </Container>
        </Layout>
     );
}

export default PoolNew;