import React, {useState, useEffect} from 'react';
import { Card, Col, Container, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import Layout from './LayoutT';
import PieChartTau from './snippets/PieChart';
import dashboardDetails from '../Dashboard/stablecoin.json';
import configfile from '../../NFTFolder/config.json'
import firebase from '../../NFTFolder/firebase';

const DashboardNFT = () => {

    useEffect(() => {
        document.title = "ELEMENT | Dashboard"
    }, [])

    
    const  [TotalNFT,setTotalNFT] = useState(0)        
    const  [TotalMintNFT,setTotalMintNFT] = useState("")
    console.log("TotalNFTMain",TotalMintNFT)
    const  [TotalMintRNFT,setTotalMintRNFT] = useState("")
    //const  [TotalMintFNFT,setTotalMintFNFT] = useState("")
    const  [TotalMintANFT,setTotalMintANFT] = useState("")

    const  [TotalSaleNFT,setTotalSaleNFT] = useState("")
    const  [TotalSaleRNFT,setTotalSaleRNFT] = useState("")
    //const  [TotalSaleFNFT,setTotalSaleFNFT] = useState("")
    const  [TotalSaleANFT,setTotalSaleANFT] = useState("")

    const  [TotalMintUsers,setTotalUsers] = useState("") 

    const  [TotalBuyNFT,setTotalBuyNFT] = useState("")
    const  [TotalBuyRNFT,setTotalBuyRNFT] = useState("")
    //const  [TotalBuyFNFT,setTotalBuyFNFT] = useState("")
    const  [TotalBuyANFT,setTotalBuyANFT] = useState("")    
    const dbcallalgoTotal=async()=>{                        
        let totalnft = 0;
        //firebase.auth().signInAnonymously().then((response)=>{      
        firebase.database().ref("EPolygonNFTN").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                                            
                    totalnft = totalnft + 1;                        
                });                                        
              }                          
            //   setTotalNFT(totalnft)
        });                          
        firebase.database().ref("EPolygonNFTR").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                                            
                    totalnft = totalnft + 1;                        
                });                                        
                }                          
                //setTotalNFT(totalnft)
        });                          
        firebase.database().ref("EPolygonNFTA").on("value", (data) => {
                if (data) {                
                    data.forEach((d) => {                                                                            
                        totalnft = totalnft + 1;                        
                    });                                        
                    }                                              
        });                          
        setTotalNFT(totalnft)
        //})        
    }                 
    useEffect(()=>{dbcallalgoTotal()},[TotalNFT])
    const dbcallalgo=async()=>{                
        let c=0;        
        let nft = 0;
        let rnft = 0;
        //let fnft = 0;
        let anft = 0;
        let totalnft = 0;
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTTotal").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                    
                    c=c+1;                                                       
                    let values = d.val();          
                    Object.keys(values).map((k)=>{
                        console.log("NFTDy",values[k].NFTChannel)
                        if(values[k].NFTChannel === "NFT"){
                            console.log("InsideNFT")
                            nft = nft + 1;                                                        
                            totalnft = totalnft + 1;
                        }
                        else if(values[k].NFTChannel === "Royalty"){
                            rnft = rnft + 1;
                            totalnft = totalnft + 1;
                        }
                        else if(values[k].NFTChannel === "Auction"){
                            anft = anft + 1;
                            totalnft = totalnft + 1;
                        }
                        // else{
                        //     fnft = fnft + 1;
                        //     totalnft = totalnft + 1;
                        // }                               
                    })                                                                              
                });                                                        
                setTotalMintRNFT(rnft)
                //setTotalMintFNFT(fnft)                
                setTotalMintANFT(anft)                
                setTotalMintNFT(nft)                    
                console.log("TotalNFTs",nft)
                setTotalNFT(totalnft)
              }                          
            });  
            
        //})        
    }                 
    useEffect(()=>{dbcallalgo()},[])
    const dbcallusers=async()=>{                
        let users=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPuserprofile").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                users=users+1;
                });                                        
              }                          
              setTotalUsers(users)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallusers()},[])

    const dbcallNFTSale=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTNS").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalSaleNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallNFTSale()},[])

    const dbcallRNFTSale=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{              
          firebase.database().ref("EPolygonNFTRS").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalSaleRNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallRNFTSale()},[])

    const dbcallFNFTSale=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTRS").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              //setTotalSaleFNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallFNFTSale()},[])

    const dbcallANFTSale=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTAS").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalSaleANFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallANFTSale()},[])
    


    const dbcallNFTBuy=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTNBuy").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalBuyNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallNFTBuy()},[])

    const dbcallRNFTBuy=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTRBuy").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalBuyRNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallRNFTBuy()},[])

    const dbcallFNFTBuy=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTFBuy").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              //setTotalBuyFNFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallFNFTBuy()},[])

    const dbcallANFTBuy=async()=>{                
        let userssaleNFT=0;                
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTABuy").on("value", (data) => {
            if (data) {                
                data.forEach((d) => {                                                    
                    userssaleNFT=userssaleNFT+1;
                });                                        
              }                          
              setTotalBuyANFT(userssaleNFT)                
            });              
        //})        
    }                 
    useEffect(()=>{dbcallANFTBuy()},[])
                        
    return (
        <Layout>
            <Container>
                <Row>
                    <Col md={6} className="mb-4">                        
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Total NFT 
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Total NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            {/* <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.fractionalappId} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a> */}
                            </Col>
                            </Row>
                                                        
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">                                        
                                        {TotalNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalNFT}/>
                                        )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Total NFT 

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Total NFT of Minting asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt(TotalNFT) ? (parseInt(TotalNFT).toFixed(0)).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                        
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">NFT Mint
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.NFTappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                        {TotalMintNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalMintNFT}/>
                                        )}
                                        
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Minting NFT

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Minting of NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            {/* <h6>{parseInt((tauTotalSupply - parseFloat(tauCir)/1000000)) ? (parseInt((tauTotalSupply - parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString() : "0"} NFT</h6> */}
                                            <h6>{parseInt((TotalMintNFT)) ? (parseInt((TotalMintNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        {/* <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Fractional NFT Mint
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Fractional NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.fractionalappId} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalMintFNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalMintFNFT}/>
                                        )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Minting Fractional NFT

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Minting of Fractional NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>                                            
                                            <h6>{parseInt((TotalMintFNFT)) ? (parseInt((TotalMintFNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                             */}
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">NFT Sale
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Sale NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.NFTappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalSaleNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalSaleNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                NFT Sale

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Sale of NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            {/* <h6>{parseInt((tauTotalSupply - parseFloat(tauCir)/1000000)) ? (parseInt((tauTotalSupply - parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString() : "0"} NFT</h6> */}
                                            <h6>{parseInt((TotalSaleNFT)) ? (parseInt((TotalSaleNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        {/* <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Fractional NFT Sale
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Fractional Sale NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.fractionalappId} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalSaleFNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalSaleFNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Fractional NFT Sale

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Sale of Fractional NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>                                            
                                            <h6>{parseInt((TotalSaleFNFT)) ? (parseInt((TotalSaleFNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                             */}
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">NFT Buy
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Buy NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.NFTappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalBuyNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalBuyNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                NFT Buy

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Buy of NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            {/* <h6>{parseInt((tauTotalSupply - parseFloat(tauCir)/1000000)) ? (parseInt((tauTotalSupply - parseFloat(tauCir)/1000000).toFixed(0))).toLocaleString() : "0"} NFT</h6> */}
                                            <h6>{parseInt((TotalBuyNFT)) ? (parseInt((TotalBuyNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        {/* <Card className='card-dash border-0 mb-4'>
                            <Row>
                            <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Fractional NFT Buy
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                        Buy Fractional NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + dashboardDetails.fractionalappId} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalBuyFNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalBuyFNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Fractional NFT Buy

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Buy of Fractional NFT.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>                                            
                                            <h6>{parseInt((TotalBuyFNFT)) ? (parseInt((TotalBuyFNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                             */}

<Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Auction NFT Buy
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Auction NFT Buy of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.auctionappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalBuyANFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalBuyANFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Auction NFT Buy

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Buy of Auction NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalBuyANFT)) ? (parseInt((TotalBuyANFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                                 
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Royalty NFT Buy
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Royalty NFT Buy of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.royaltyappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalBuyRNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalBuyRNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Royalty NFT Buy

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Buy of Royalty NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalBuyRNFT)) ? (parseInt((TotalBuyRNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                        


                    </Col>
                    <Col md={6}>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Users of NFT
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Users of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            {/* <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + dashboardDetails.elemID} target="_blank" rel="noreferer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a> */}
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalMintUsers === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalMintUsers}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Users of NFT Ecosystem

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Users of NFT Element Ecosystem.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalMintUsers)) ? (parseInt((TotalMintUsers).toFixed(0))).toLocaleString() : "0"} Users</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                         
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Royalty NFT Mint
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Royalty NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.royaltyappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalMintRNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalMintRNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Minting Royalty NFT

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Minting of Royalty NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalMintRNFT)) ? (parseInt((TotalMintRNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Auction NFT Mint
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Auction NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.auctionappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalMintANFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalMintANFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Minting Auction NFT

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Minting of Auction NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalMintANFT)) ? (parseInt((TotalMintANFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                                 
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Royalty NFT Sale
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Sale Royalty NFT of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.royaltyappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalSaleRNFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalSaleRNFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Royalty NFT Sale

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Sale of Royalty NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalSaleRNFT)) ? (parseInt((TotalSaleRNFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                        <Card className='card-dash border-0 mb-4'>
                            <Row>
                                <Col>
                            <div className="text-md mb-20 font-semibold leading-7 text-purple">Auction NFT Sale
                            <OverlayTrigger
                                key="right"
                                placement="right"
                                overlay={
                                    <Tooltip id={`tooltip-right`}>
                                       Auction NFT Sale of Element Ecosystem.
                                    </Tooltip>
                                }
                                >
                                    <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                </OverlayTrigger>
                            </div>
                            </Col>
                            <Col>
                            <a className='mb-3 text-white d-flex align-items-center btn-link' href={"https://testnet.algoexplorer.io/application/" + configfile.auctionappId} target="_blank" rel="noreferer noreferrer">
                            <svg class="white me-2" width="16" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.8333 15.8333H4.16667V4.16667H10V2.5H4.16667C3.24167 2.5 2.5 3.25 2.5 4.16667V15.8333C2.5 16.75 3.24167 17.5 4.16667 17.5H15.8333C16.75 17.5 17.5 16.75 17.5 15.8333V10H15.8333V15.8333ZM11.6667 2.5V4.16667H14.6583L6.46667 12.3583L7.64167 13.5333L15.8333 5.34167V8.33333H17.5V2.5H11.6667Z"></path></svg>
                            View on explorer
                            </a>
                            </Col>
                            </Row>
                            
                            <hr className='mb-20 mt-0' />
                            <div className='mb-0'>                                
                                <Row className='justify-content-center'>
                                    <Col xs={12} sm={6} className="mb-sm-0 text-center mb-3">
                                    {TotalSaleANFT === 0 ? (
                                            <></>
                                        ):(
                                            <PieChartTau x={TotalSaleANFT}/>
                                    )}
                                    </Col>
                                    <Col xs={'auto'} sm={6}>
                                        <div className='mb-20 pt-sm-3'>
                                            <div className="text-sm d-flex align-items-center mb-1  ">
                                                <svg className="d-inline-block me-2" style={{width: '16px', height: '16px', borderRadius: '4px'}}><rect fill="#2C3862" x="0" y="0" width="16" height="16"></rect></svg>
                                                Sale Auction NFT

                                                <OverlayTrigger
                                                    key="left"
                                                    placement="left"
                                                    overlay={
                                                        <Tooltip id={`tooltip-left`}>
                                                            The Sale of Auction NFT asset.
                                                        </Tooltip>
                                                    }
                                                    >
                                                        <svg className="tooltip-icon ms-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="#CCCCCC" stroke-width="1.5"></path><path d="M11 8C11 7.44772 11.4477 7 12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8Z" fill="#CCCCCC"></path><path d="M11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12V16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16V12Z" fill="#CCCCCC"></path></svg>
                                                    </OverlayTrigger>
                                            </div>
                                            <h6>{parseInt((TotalSaleANFT)) ? (parseInt((TotalSaleANFT).toFixed(0))).toLocaleString() : "0"} NFT</h6>
                                        </div>                                        
                                    </Col>
                                </Row>
                            </div>
                        </Card>                                                 
                        
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
};

export default DashboardNFT;