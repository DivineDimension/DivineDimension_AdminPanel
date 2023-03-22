import { useState,useEffect,React } from "react";
import { Button, Col, FormControl, InputGroup, Modal, OverlayTrigger, Row, Stack, Tooltip } from "react-bootstrap";

import WalletConnect from "@walletconnect/client";
// import QRCodeModal from "algorand-walletconnect-qrcode-modal";
// import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
// import { dualwalletconnect } from '../walletconnection';
// import algosdk, { Algod ,encodeUint64} from "algosdk";
import ButtonLoad from 'react-bootstrap-button-loader';
// import node from '../nodeapi.json';
import elemlogo from '../../../assets/images/elem-original.png';
import dime from '../../../assets/images/Dimecoin.png';
// import axios from "axios";
// import MyAlgoConnect from '@randlabs/myalgo-connect';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
// import { PtpstakingAppAdress,usdcStakingappid,usdcStakingappaddress,swapAppId,PTP,VEPTP,oldveptp,usdtStakingappaddress,usdtStakingappid,lpstakingAppId,USDC,USDT,USDCE,USDTE, UsdcAppId, TauStakingappaddress, TAUE } from '../singlesidedAmmconfig';
// import { checkotp, walletBalance } from "../../formula";
// import { globalstate } from "../../StableswapConfig";
// import { createtpairhistory } from "../../apicallfunction";

// const algodClient = new algosdk.Algodv2('',node['algodclient'], '');
// const myAlgoWallet = new MyAlgoConnect({ disableLedgerNano: false });
// const indexerClient = new algosdk.Indexer('', node['indexerclient'], '');
// const bridge = "https://bridge.walletconnect.org";
import { AptosClient, Types } from 'aptos';
import { deployeraddress1, pooladdress1, deployeraddress, pooladdress, tokencreator1,tokencreator,liquidiswapbalance, liabilitycal, lpassetbalance,poolassetbalance, lpstakingbalane, mebalance, animeswapswapbalance, createtpairhistory } from '../config';



function PoolChild() {
    const [show, setShow] = useState(false);
    const [BondAmount, setBondAmount] = useState();
    const handleToggle = () => setShow(!show);
    const[functname, setfunctname] = useState("");
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[loader, setLoader] = useState(false);
    const[totalusdte, settotalusdte] = useState("");
    const[totalusdce, settotalusdce] = useState("");
    const[totaltaue, settotaltaue] = useState("");
    const[stakedAmount, setstakedAmount] = useState("");
    const[usdcebalance, setusdcebalance] = useState("");
    const[usdceoptin, setusdceoptin] = useState(true);
    const[veptpptpbalance, setveptpptpbalance] = useState("");
    const[ptpbalance, setptpbalance] = useState("");
    const[baseApr, setbaseApr] = useState("");
    const[BoostingApr, setBoostingApr] = useState("");
    const[appOpted,setOpted] = useState(false);
    const[totalApr, settotalApr] = useState("");
    const[ptpptpoptin, setptpptpoptin] = useState(true);
    const[claimamount, setclaimamount] = useState("");
    const handleShowLoad1 = () => setLoader1(true);
    const handleHideLoad1 = () => setLoader1(false);
    const[loader1, setLoader1] = useState(false);
    const[swapstate,setswapstate] = useState([])

    const[notregistered, setnotregister] = useState(false);
    const [amount, setamount] = useState("")
    const [Tovalue2, SetTovalue2] = useState(null);
    const [usdcbalance, setusdcbalance] = useState("0");
    const [usdtbalance, setusdtbalance] = useState("0");
    const [daibalance, setdaibalance] = useState("0");
    const[aniswap,setanimeswap] = useState("");
    const[liqiswap,setliqswap] = useState("");

    const TokenData = [
        {
            id: "USDT",
            text: "USDT NLP",
            name: "USDT",
         
            imglogo: elemlogo,
            currVal:usdtbalance?parseFloat(usdtbalance/100000000).toFixed(3):0,
            Rate: 0.998668,
            fee: 0.998668,
            Minimum_Received: 0.998668,
        },
        {
            id: "USDC",
            text: "USDC NLP",
            name: "USDC",
         
            imglogo: elemlogo,
            currVal:usdcbalance?parseFloat(usdcbalance/100000000).toFixed(3):0,
            Rate: 0.998600,
            fee: 0.998600,
            Minimum_Received: 0.998600,
        },
        {
            id: "DAI",
            text: "DAI NLP",
            name: "DAI",
         
            imglogo: elemlogo,
            currVal: daibalance?parseFloat(daibalance/100000000).toFixed(3):0,
            Rate: 0.998610,
            fee: 0.998610,
            Minimum_Received: 0.998610,
        },
      //   {
      //     id: "LiquidLP-USDC-MER-U",
      //     text: "LiquidLP-USDC-MER-U",
      //     name: "Liquidy",
       
      //     imglogo: aux,
      //     currVal: liqiswap?parseFloat(liqiswap/100000000).toFixed(3):0,
      //     Rate: 0.998610,
      //     fee: 0.998610,
      //     Minimum_Received: 0.998610,
      // },
      {
        id: "AnimeSwapLPCoin",
        text: "AnimeSwapLPCoin",
        name: "Anime",
     
        imglogo: elemlogo,
        currVal: aniswap?parseFloat(aniswap/100000000).toFixed(3):0,
        Rate: 0.998610,
        fee: 0.998610,
        Minimum_Received: 0.998610,
    },
        
    
    ]
    useEffect(() => {
        asset()
    }, [])
    const asset = async () => {
      let s = await liquidiswapbalance(localStorage.getItem("walletAddress"));
      setliqswap(s)
      let s1 = await animeswapswapbalance(localStorage.getItem("walletAddress"));
      setanimeswap(s1)
        const client = new AptosClient('https://fullnode.devnet.aptoslabs.com');
      //let k =await fetch("0xb23b85ed02837dfb40e517ad140bc600a68c59ab85e65150a9de21ec3dbde80e");
      if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " ||  localStorage.getItem("walletAddress") === '' || localStorage.getItem("walletAddress") === undefined){
  
      } 
      else{
        let b = await lpassetbalance(localStorage.getItem("walletAddress"),"DAI")
        console.log("usdcbalance",b  )
        setdaibalance(b  )
        let b1 = await lpassetbalance(localStorage.getItem("walletAddress"),"USDC")
        console.log("usdcbalance",b1  )
        setusdcbalance(b1  )
        let b2 = await lpassetbalance(localStorage.getItem("walletAddress"),"USDT")
        console.log("usdtbalance",b2  )
        setusdtbalance(b2  )
        // let c = await lpassetbalance(localStorage.getItem("walletAddress"),pooladdress1,"USDT")
        // console.log("poolusdt",c )
        // setpoolusdt(c )
        // let d = await lpassetbalance(localStorage.getItem("walletAddress"),"USDT")
        // console.log("lpbalance",d )
        // setlpbalance(d )
        
  
  
        
        
      }}
    const registercoin = async () => {
        setLoader(true)
       const transaction = {
           type: "entry_function_payload",
           function: `${tokencreator1}::TestCoins::register`,
           arguments: [],
        //    type_arguments: [`${tokencreator1}::TestCoins::${Tovalue2.text}`],
        type_arguments: [`${tokencreator1}::TestCoins::USDC`],

         };
       try {
           // const pendingTransaction = await (window).aptos.signAndSubmitTransaction(transaction);
           let pendingTransaction = await swappet(transaction)
           console.log("pendingTransaction", pendingTransaction);
           const client = new AptosClient('https://fullnode.testnet.aptoslabs.com');
           client.waitForTransaction(pendingTransaction);
           await successmsg(pendingTransaction);
           setnotregister(false)
        //    await asset();
       } catch (error) {
           toast.error(`${error}`); 
           console.log("err",error)
           setLoader(false)
       }
   }

   const successmsg = async(hash)=>{
    let id ="https://explorer.aptoslabs.com/txn/"+hash;
        toast.success(toastDiv(id,"Transaction completed successfully"));
        await resettstate();
        // await asset();
        await sleep(4000);
        
        setLoader(false)
        
        // window.location.reload();
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
 }

const toastDiv = (txId,type) =>
(
    <div>
       <p> {type} &nbsp;<a style={{color:'#AA14F0'}} href={txId} target="_blank" rel="noreferrer">View in Aptos Explorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill='#AA14F0'/>
</svg></a></p> 
    </div>
);

const resettstate = async() =>{
    setamount("");
}

const swappet = async (Payload)=>{
//     if(localStorage.getItem("wallet")==="Petra"){
      
//         const pendingTransaction = await (window).aptos.signAndSubmitTransaction(Payload);
//         return pendingTransaction.hash
//     }
//    else if (localStorage.getItem("wallet") === "Martian"){
    const response = await window.martian.connect();
    const sender = response.address;
    const options = {
        max_gas_amount: "100000"
    }
    const transactionRequest = await window.martian.generateTransaction(sender, Payload, options);
      const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
      return txnHash
//    }
//    else{
//     let g = Math.floor(new Date().getTime()/1000.0)
//     console.log("time",g+1000)
//     const otherOptions = {
//       max_gas_amount: '601012',
//       gas_unit_price: '100',
//       expiration_timestamp_secs: g+100,
//       // sequence_number: '15'
//     }
//      let txnHash = await window.pontem.signAndSubmit(Payload, otherOptions);
//      console.log("hash",txnHash.result.hash)
//      return txnHash.result.hash;
        
//    }
}

const clickevent = async(givename) =>{
    setfunctname(givename);
    handleToggle();
   }

console.log("notregistered",notregistered)
       

    return (
        <>
                       <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

            <Modal show={show} className="modal-dashboard" centered onHide={handleToggle}>
                <Modal.Header className="mb-0" closeButton />
                <Modal.Body className="pt-0">
                    <Modal.Title className="text-center mb-4">Confirm {functname} <img src={elemlogo} alt='image' width={23} height={23} className="mx-1" /> DIME</Modal.Title>
                    
                    <div className="d-flex text-muted align-items-center justify-content-between flex-wrap">
                        {/* <p className="mb-3">{functname}ed: 
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    0.0 USDCE
                                </Tooltip>
                            }
                            >
                                <div className="d-inline-block ms-1">0.0 USDCE</div>
                            </OverlayTrigger>
                        </p> */}
                        <p className="mb-3">My wallet balance:
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    DIME
                                </Tooltip>
                            }
                            >
                                <div className="d-inline-block ms-1">{usdcebalance? parseFloat(usdcebalance/1000000).toFixed(3):'0.0'} DIME</div>
                            </OverlayTrigger>
                        </p>
                    </div>

                    <InputGroup className='input-group-max input-group-max-lg mb-3'>
                        <FormControl
                            // disabled={true}
                            value={BondAmount}
                            type='number'
                            placeholder="0.00"
                            className="ps-1 pb-0"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={(e) => setBondAmount(e.target.value)}
                        />
                        <Button variant="outline-purple" className='btn-xs-d rounded'
                        //  onClick={()=>callingMax()}
                         >Max</Button>
                    </InputGroup>

                    {/* <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Amount {functname}ing (after fee)
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                                0.0 DIME
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">0.0 DIME</strong>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Fee
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                                0.0 DIME
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">0.0 DIME</strong>
                        </OverlayTrigger>
                    </div> */}
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">My total deposits
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are Depositing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                               DIME
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">{stakedAmount?parseFloat(stakedAmount/1000000).toFixed(3):'0.0'}DIME</strong>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Pool share
                            {/* <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger> */}
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                                Percentage
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">{parseFloat((totalusdce/(totalusdce+totalusdte))*100).toFixed(2)} %</strong>
                        </OverlayTrigger>
                    </div>

                    <Row className="mt-4 mb-3">
                        <Col sm={6} className="mb-sm-0 mb-2">
                            <Button variant="blue" className="w-100" onClick={handleToggle}>Cancel</Button>
                        </Col>
                        <Col sm={6} className="mb-sm-0 mb-2">
                        {/* {appOpted ? (<> */}
                                <ButtonLoad loading={loader} variant="blue" className="w-100"
                            //  onClick={()=>depositOrwithdraw()} 
                             >{functname}</ButtonLoad>
                            {/* </>):(<>
                                <ButtonLoad loading={loader} className='btn btn-blue w-100' onClick={()=>appOptIn()}>
                            Opt-In App
                        </ButtonLoad>
                            </>)} */}
                        </Col>
                    </Row>

                    {/* <p className="text-muted text-center"><small>In bankrun situation, LPs might only be able to withdraw in the over-covered tokens.</small></p> */}
                </Modal.Body>
            </Modal>

            <div className="mb-24 accordion-item accordion-item-pool shadow">
                <div className="accordion-button accordion-button-no-arrow py-3 collapsed">
                    <div className='d-flex flex-md-row flex-column align-items-md-center w-100'>
                        <div class="acc-title me-2 mb-md-0 mb-3">
                            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-2">
                                <img src={dime} alt="logo" /><span class="ms-3">DIME</span>
                            </div>
                            {/* <p className='mb-0 d-flex text-sm align-items-center justify-content-md-start justify-content-center'>
                                <span className='text-muted text-end'>Coverage <br />ratio</span> 
                                <h5 className="mb-0 ms-1 px-1">{swapstate.cashAdded?parseFloat(swapstate.cashAdded/swapstate.Liability).toFixed(3):'0.0'}</h5>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            The coverage ratio is the asset-to-liability ratio of a pool. It determines the swapping slippage, withdrawal and deposit fee in our protocol. Learn more about it in our documentation.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </p> */}
                        </div>
                        <div className="flex-grow-1 pe-md-4 mb-md-0 mb-3 justify-content-between d-flex align-items-center">
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">Pool deposits</h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                        {totalusdce ? parseFloat(totalusdce/1000000).toFixed(3):'0.0'}
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center"> 
                                    {/* {totalusdce ? parseFloat(totalusdce/1000000).toFixed(3):'0.0'} */}
                                    1078.89
                                     </h5>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                             DIME
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0">DIME</h6>
                                </OverlayTrigger>
                            </div>
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">Volume </h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                       Total volume
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center">
                                        {/* {parseFloat((totalusdce+totalusdte)/1000000).toFixed(3)} */}
                                        146900.42
                                        </h5>
                                </OverlayTrigger>
                                {/* <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                            14551.916605 USDC
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0">14.6k DIME</h6>
                                </OverlayTrigger> */}
                            </div>
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">My deposits</h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                        Total deposited amount
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center">{stakedAmount?parseFloat(stakedAmount/1000000).toFixed(3):'0.0'}</h5>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                             USDC
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0">DIME</h6>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <Stack direction="horizontal" className="justify-content-center" gap={3}>
                            <ButtonLoad loading={loader1} 
                            onClick={()=>registercoin()} 
                            disabled={!ptpptpoptin} variant="blue">Asset Opt-In</ButtonLoad>

                            {/* <Button 
                            // onClick={()=>clickevent("Deposit")}
                             disabled={ptpptpoptin} variant="blue">Stake</Button> */}
 <Button 
                            onClick={()=>clickevent("Deposit")}
                             disabled={false} variant="blue">Stake</Button>

                            {stakedAmount>1?(<>  <Button variant="blue" 
                            disabled={ptpptpoptin}
                            //   onClick={()=>clickevent("Withdraw")}
                               >Unstake</Button>
                              </>):(<>
                                <Button variant="blue" 
                            disabled={true}
                            //   onClick={()=>clickevent("Withdraw")}
                               >Unstake</Button>
                              </>)}
                          
                        </Stack>
                    </div>
                </div>
                <div className="accordion-body py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-sm d-flex flex-wrap align-items-center">
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-2">Reward</span>
                                <img src={elemlogo} alt="logo" width={15} />
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Base APR</span>
                                <span className="me-1">{parseFloat(baseApr/100000000).toFixed(2)}%</span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Base APR of this pool for the users who have deposited and staked USDC.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Median Boosted APR</span>
                                <span className="me-1">
                                    {/* {parseFloat(BoostingApr).toFixed(2)}% */}
                                    0%
                                    </span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Median APR of this pool for the users who have deposited and staked USDC.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Total APR</span>
                                <span className="me-1">{parseFloat((baseApr/1000000)+(BoostingApr/100)).toFixed(2)}%</span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Total APR of pool.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                        </div>
                        <span className="text-muted me-1">My claimable reward:</span><span className="me-1">{claimamount  && stakedAmount > 1 ?parseFloat(claimamount/1000000).toFixed(6):"0.0"}</span>
                       {claimamount/1000000 > 0.000001 && stakedAmount > 1 ?
                       (<>
                       <ButtonLoad loading={loader} variant="blue" 
                        // disabled={true}
                        // onClick={()=>claim()}
                        >
                            Claim Reward
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg> */}
                        </ButtonLoad>
                       </>):(<>
                        <Button variant="blue" 
                        disabled={true}
                        // onClick={()=>claim()}
                        >
                            Claim Reward
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg> */}
                        </Button>
                       </>)}
                        
                    </div>
                </div>
            </div>
        </> 
     );
}

export default PoolChild;