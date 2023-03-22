/* global AlgoSigner */
import React,{ useEffect ,useState,useContext} from "react";
import {  Col, Container, InputGroup, Row,Button } from "reactstrap";
import { useHistory,Link } from "react-router-dom";
//import Layout from '../components/Layouts/Layout';
//import Layout from '../components/Dashboard/Layout';
//import Layout from '../components/DashboardNew/Layout';
import fireDb from '../NFTFolder/firebase'
import Layout from '../components/DashboardNew/LayoutT';
import { ToastContainer, Zoom, toast} from 'react-toastify';
import ButtonLoad from 'react-bootstrap-button-loader';
import config from '../NFTFolder/config.json'
import node from '../components/DashboardNew/nodeapi.json';
import MyAlgoConnect from '@randlabs/myalgo-connect';
import configfile from '../NFTFolder/config.json'
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
import WalletConnect from "@walletconnect/client";
import {DataContext} from "../App";
const algosdk = require('algosdk'); 
//const bs58 = require("bs58");
const pinataSDK = require('@pinata/sdk');
const algodClient = new algosdk.Algodv2('', node['algodclient'], '');
//const Base32Converter = require('base32-converter');
const myAlgoConnect = new MyAlgoConnect();      
const bridge = "https://bridge.walletconnect.org";
const Approvepage = () => {  
    const value = useContext(DataContext);
    const pinata = pinataSDK(value[0].pinataapikey,value[0].pinatasecretkey);
    let history=useHistory();              
    //var converter = new Base32Converter(Base32Converter.system.RFC4648);
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);  
    const [CurrentExit,setCurrentExit] = useState([]);  
    // const [getmetadata,setmetadata] = useState(""); 
    // const [getassetid, setassetid] = useState('');
    // const [getcurrents, setcurrents] = useState(""); 
    //console.log("Dataget",CurrentExit)
    //const [showTestLoading, setshowTestLoading] = React.useState(false);  
    //console.log("Test",showTestLoading)                    
  const dbcallalgo=async()=>{
    //console.log("inside dbcallalgo function")  
    let req = [];
    if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " || localStorage.getItem("walletAddress") === undefined || localStorage.getItem("walletAddress") === ''){
    }
    else{      
      try{      
        fireDb.auth().signInAnonymously().then(async(response)=>{           
        const hasRestaurant = await fireDb.database()
            .ref(`LaunchpadWhiteList/${localStorage.getItem('walletAddress')}`)
            .orderByKey().limitToFirst(1).once('value')
            .then(res => res.exists());
            console.log("NewIdea",hasRestaurant)      
            if(hasRestaurant){
              fireDb.auth().signInAnonymously().then((response)=>{      
                fireDb.database().ref("LaunchpadWhiteList").child(localStorage.getItem("walletAddress")).on("value", (data) => {
                  if (data) {            
                    data.forEach((d) => {                
                      let value=d.val();              
                      req.push(            
                        {
                        "dbkey":value.dbkey,
                        "createdDate": value.createdDate,
                        "Name": value.Name,
                        "proofType": value.proofType,
                        "algoAddress": value.algoAddress,
                        "ProofNumber": value.ProofNumber,
                        "selfiePath": value.selfiePath,            
                        "kycStatus":value.kycStatus,
                        "reviewedBy": value.reviewedBy,
                        "approvedBy": value.approvedBy,
                        "submittedDate": value.submittedDate,
                        "reviewedDate": value.reviewedDate,
                        "approvedDate": value.approvedDate,
                        "identity":value.identity,            
                        "citizenship": value.citizenship,
                        "base64Image": value.base64Image,
                        "assetId": value.assetId,
                        "address": value.address,
                        "dob":value.dob,
                        "email": value.email,
                        "phoneNumber":value.phoneNumber,
                        "ipfslink":value.ipfslink,
                        "encrypted":value.encrypted,
                        "Password":value.Password,
                        "PasswordKey":value.PasswordKey,
                        "pinataUpload":value.pinataUpload,
                        "pinataNFTupload":value.pinataNFTupload,
                      })                
                      setCurrentExit(req);
                      //setshowTestLoading(true)
                      });        
                    }
                    // else{
                    //   setshowTestLoading(false)
                    // }
                    //setCurrentExit(false);
                });
                })
            }
            else{
              setCurrentExit([""]);
            }   
          })     
      }catch{          
      }                  
      }        
  }      
  useEffect(()=>{dbcallalgo()},[])

  // const convertIpfsCidV0ToByte32 = (cid) => {
  //   let hex = `${bs58.decode(cid).slice(2).toString('hex')}`
  //   let base64 = `${bs58.decode(cid).slice(2).toString('base64')}`
  //   //third console
  //   console.log('CID Hash Converted to hex: ', hex)      
  //   const buffer = Buffer.from(bs58.decode(cid).slice(2).toString('base64'), 'base64');
  //   //fourth console
  //   console.log('CID Hash Converted to Base64: ', base64)
  //   const volBytes = buffer.length;
  //   //fifth console
  //   console.log('CID Hash Bytes volume is: ', `${volBytes} bytes, OK for ASA MetaDataHash field!`)      
  //   return { base64, hex, buffer };
  // };

  const waitForConfirmation = async function (algodclient, txId) {
    let status = (await algodclient.status().do());
    let lastRound = status["last-round"];
      while (true) {
        const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
        if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {
          //Got the completed Transaction
          //console.log("Transaction " + txId + " confirmed in round " + pendingInfo["confirmed-round"]);
          break;
        }
        lastRound++;
        await algodclient.statusAfterBlock(lastRound).do();
      }
  };
  const approve = async() => {    
  if(localStorage.getItem('walletAddress') === null || localStorage.getItem('walletAddress') === "" || localStorage.getItem('walletAddress') === undefined)
  {
    toast.dismiss()
    toast.warning(`please connect your wallet`,{autoClose: 5000});            
    handleHideLoad()           
  }    
  else if(CurrentExit === null || CurrentExit === undefined || CurrentExit === ""){
      toast.dismiss()
      toast.warning(`Your Data Not Found`,{autoClose: 5000});            
      handleHideLoad()           
  }else if(CurrentExit[0].reviewedBy === "" || CurrentExit[0].reviewedBy === null || CurrentExit[0].reviewedBy === undefined || CurrentExit[0].reviewedBy === "pending" ){      
      toast.dismiss()
      toast.warning(`Your Data Not Approved`,{autoClose: 5000});            
      handleHideLoad()           
  }
  else if(CurrentExit[0].assetId === null || CurrentExit[0].assetId === "" || CurrentExit[0].assetId === undefined || CurrentExit[0].assetId === "null"){
      if(CurrentExit[0].reviewedBy === "success"){  
        handleShowLoad()
        // let programWL = new Uint8Array(Buffer.from(configfile.compiledwhitelist, "base64"));    
        // let lsigWL = new algosdk.LogicSigAccount(programWL);
        // console.log("EscrowAddress", lsigWL.address());   
        const params = await algodClient.getTransactionParams().do();
        //console.log("185")        
        params.fee = 1000;
        params.flatFee = true;                    
        // const body = {            
        //   "base64Image": CurrentExit[0].base64Image,            
        // };
        // const options = {
        //     pinataMetadata: {
        //         name: CurrentExit[0].Name,
        //         keyvalues: {
        //             customKey: 'customValue',
        //             customKey2: 'customValue2'
        //         }
        //     },
        //     pinataOptions: {
        //         cidVersion: 0
        //     }
        // };
        //pinata.pinJSONToIPFS(body, options).then(async(result) => {            
          //handle results here
        //console.log(result);            
        const CryptoJS = require("crypto-js");  
        //let encrypted = CryptoJS.AES.encrypt(`https://gateway.pinata.cloud/ipfs/"+${result['IpfsHash']}`,localStorage.getItem('walletAddress'));            
        const decrypted = CryptoJS.AES.decrypt(CurrentExit[0].Password,CurrentExit[0].PasswordKey).toString();
        let encrypted1 = CryptoJS.AES.encrypt(CurrentExit[0].pinataUpload,decrypted).toString();        
        // let val = converter.encode(CurrentExit[0]);
        // console.log("base32c",val);
        let addnfturl=CurrentExit[0].pinataNFTupload;
        const txn1 = algosdk.makeAssetCreateTxnWithSuggestedParamsFromObject({    
        from:localStorage.getItem('walletAddress'),        
        assetName: CurrentExit[0].Name,
        unitName: 'DID',
        total: 1,
        decimals: 0,
        note: undefined,        
        //assetURL:'https://devnet.elementfi.io/',
        //assetURL:addnfturl,
        manager:localStorage.getItem('walletAddress'),
        reserve:localStorage.getItem('walletAddress'),
        freeze:localStorage.getItem('walletAddress'),        
        clawback:localStorage.getItem('walletAddress'),
        suggestedParams: params
        });              
        let response;
        let assetID;
        if(localStorage.getItem("walletName") === "myAlgoWallet"){                   
        const signedTxn = await myAlgoConnect.signTransaction(txn1.toByte());
        response = await algodClient.sendRawTransaction(signedTxn.blob).do(); 
        await waitForConfirmation(algodClient, response.txId);
        let ptx = await algodClient.pendingTransactionInformation(response.txId).do();
        assetID = ptx["asset-index"];   
        console.log("AssetId",ptx["asset-index"])
        console.log("WalletAddress",localStorage.getItem('walletAddress'))
        }else if(localStorage.getItem("walletName") === "PeraWallet"){
          const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });                  
                const txns = [txn1]
                const txnsToSign = txns.map(txn => {
                const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");                    
                return {
                      txn: encodedTxn,
                  };
                });                            
                const requestParams = [ txnsToSign ];
                const request = formatJsonRpcRequest("algo_signTxn", requestParams);                            
                const result = await connector.sendCustomRequest(request);                 
                const decodedResult = result.map(element => {
                return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
                });                
                response=await algodClient.sendRawTransaction(decodedResult).do();
                await waitForConfirmation(algodClient, response.txId);
                let ptx = await algodClient.pendingTransactionInformation(response.txId).do();
                assetID = ptx["asset-index"];   
                console.log("AssetId",ptx["asset-index"])
                console.log("WalletAddress",localStorage.getItem('walletAddress'))
        }
        
        // let ftxn = algosdk.makeAssetFreezeTxnWithSuggestedParamsFromObject({          
        //   from:localStorage.getItem('walletAddress'), 
        //   note:undefined,
        //   assetIndex:ptx["asset-index"],
        //   freezeTarget:localStorage.getItem('walletAddress'), 
        //   freezeState:true, 
        //   suggestedParams: params
        // })
        // const signedTxnFreeze = await myAlgoConnect.signTransaction(ftxn.toByte());
        // let responseFreeze = await algodClient.sendRawTransaction(signedTxnFreeze.blob).do(); 
        // await waitForConfirmation(algodClient, responseFreeze.txId);
        //console.log("AssetId",assetID)
        const updatejson = {
            "dbkey":CurrentExit[0].dbkey,
            "createdDate": CurrentExit[0].createdDate,
            "Name": CurrentExit[0].Name,
            "proofType": CurrentExit[0].proofType,
            "algoAddress": CurrentExit[0].algoAddress,
            "ProofNumber": CurrentExit[0].ProofNumber,
            "selfiePath": CurrentExit[0].selfiePath,            
            "kycStatus":CurrentExit[0].kycStatus,
            "reviewedBy": CurrentExit[0].reviewedBy,
            "approvedBy": CurrentExit[0].approvedBy,
            "submittedDate": CurrentExit[0].submittedDate,
            "reviewedDate": CurrentExit[0].reviewedDate,
            "approvedDate": CurrentExit[0].approvedDate,
            "identity":CurrentExit[0].identity,            
            "citizenship": CurrentExit[0].citizenship,
            "base64Image": CurrentExit[0].base64Image,
            "assetId": assetID,
            "address": CurrentExit[0].address,
            "dob":CurrentExit[0].dob,
            "email": CurrentExit[0].email,
            "phoneNumber":CurrentExit[0].phoneNumber,
            "ipfslink":CurrentExit[0].pinataUpload,
            "encrypted" : encrypted1,
            "Password":"null",
            "PasswordKey":CurrentExit[0].PasswordKey,
            "pinataUpload":CurrentExit[0].pinataUpload,
            "pinataNFTupload":CurrentExit[0].pinataNFTupload,
        }
          
        const options = {
            pinataMetadata: {
                name: CurrentExit[0].Name ,
                keyvalues: {
                    customKey: 'customValue',
                    customKey2: 'customValue2'
                }
            },
            pinataOptions: {
                cidVersion: 0
            }
        };
        pinata.pinJSONToIPFS(updatejson, options).then((result) => {
            //handle results here
            //console.log(result);
            const CryptoJS = require("crypto-js");  
            //let encrypted = CryptoJS.AES.encrypt(`https://gateway.pinata.cloud/ipfs/"+${result['IpfsHash']}`,localStorage.getItem('walletAddress'));            
            let encrypted = CryptoJS.AES.encrypt(`https://gateway.pinata.cloud/ipfs/"+${result['IpfsHash']}`, CurrentExit[0].PasswordKey).toString();
            //console.log("Ecrypted",encrypted)
            fireDb.auth().signInAnonymously().then((response)=>{      
              let ref2=fireDb.database().ref(`LaunchpadWhiteList/${localStorage.getItem('walletAddress')}`);                              
              ref2.child(CurrentExit[0].dbkey).update({
                "dbkey":CurrentExit[0].dbkey,
                "createdDate": CurrentExit[0].createdDate,
                "Name": CurrentExit[0].Name,
                "proofType": CurrentExit[0].proofType,
                "algoAddress": CurrentExit[0].algoAddress,
                "ProofNumber": CurrentExit[0].ProofNumber,
                "selfiePath": CurrentExit[0].selfiePath,            
                "kycStatus":CurrentExit[0].kycStatus,
                "reviewedBy": CurrentExit[0].reviewedBy,
                "approvedBy": CurrentExit[0].approvedBy,
                "submittedDate": CurrentExit[0].submittedDate,
                "reviewedDate": CurrentExit[0].reviewedDate,
                "approvedDate": CurrentExit[0].approvedDate,
                "identity":encrypted,            
                "citizenship": CurrentExit[0].citizenship,
                "base64Image": CurrentExit[0].base64Image,
                "assetId": assetID,
                "address": CurrentExit[0].address,
                "dob":CurrentExit[0].dob,
                "email": CurrentExit[0].email,
                "phoneNumber":CurrentExit[0].phoneNumber,
                "ipfslink":`https://gateway.pinata.cloud/ipfs/"+${result['IpfsHash']}`,
                "encrypted" : encrypted1,
                "Password":"null",
                "PasswordKey":CurrentExit[0].PasswordKey,
                "pinataUpload":CurrentExit[0].pinataUpload,
                "pinataNFTupload":CurrentExit[0].pinataNFTupload,
              })
                .then(async()=>{
                  toast.success("DID is created successfully",{autoClose: 5000});                 
                  handleHideLoad()   
                  await sleep(5000)
                  history.push('/dashboardd')                                              
                })
              })                                  
        }).catch((err) => {
            //handle error here
            console.log(err);
        });
          
      // }).catch((err) => {
      //     //handle error here
      //     console.log(err);
      // });      
      }
      else{
        toast.dismiss()
        toast.warning(`Your KYC Details Pending Approval`,{autoClose: 5000});            
        handleHideLoad()           
      }
    }
  else{
      toast.dismiss()
      toast.warning(`Your are Already Create D-ID`,{autoClose: 5000});            
      handleHideLoad()               
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

return (       
    <Layout>
      <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>      
        <div className="">
        {localStorage.getItem('walletAddress') === null || localStorage.getItem('walletAddress') === undefined || localStorage.getItem('walletAddress') === "" ? (
        <Container fluid>           
        <h4 className="text-white">Generate D-ID</h4>                                                                
        <Row className="justify-content-center">
            <Col xl="8" lg="8" md="10" sm="12">
                      <center>
                    <h4 className="mb-3">please connect your wallet</h4>                                                                                                        
                      </center>
            </Col>
        </Row>
        </Container>          
      ):(
        <>
        <Container>                      
                <Row className="justify-content-center">                
                    <Col lg="7" md="10" sm="12">
                    <h4 className="text-white">Generate D-ID</h4>                                                                
                    {CurrentExit === null || CurrentExit === "" || CurrentExit === undefined ? (
                        <Container fluid>           
                        <Row className="justify-content-center">
                            <Col xl="8" lg="8" md="10" sm="12">
                                      <center>
                                    <h4 className="text-white">Please upload KYC details</h4>                                                                                                        
                                      </center>
                            </Col>
                        </Row>
                        </Container>            
                      // <p className='subheading mb-0'> <strong> Please upload KYC details </strong> </p>                                          
                      ):(
                        <>
                        {CurrentExit[0] === null || CurrentExit[0] === "" || CurrentExit[0] === undefined ? (
                            <Container fluid>           
                            <Row className="justify-content-center">
                                <Col xl="8" lg="8" md="10" sm="12">
                                          <center>
                                          <h4 className="text-white">Please upload KYC details</h4>                                                                                                        
                                          </center>
                                </Col>
                            </Row>
                            </Container>                                    
                          ):(
                            <>                
                          {CurrentExit[0].assetId === null || CurrentExit[0].assetId === "" || CurrentExit[0].assetId === undefined || CurrentExit[0].assetId === "null"?(
                              <div className="card-dash mt-3 d-block border-0 mb-4 card">
                              <div className="">                            
                              <div className="bar-items-wrapper">
                                    <div
                                        className="bar-items bg-site-secondary pl-3"
                                        style={{ minWidth: "470px" }}>                                    
                                            <span>CREATE D-ID</span>                                    
                                    </div>
                                </div>
                                <hr />
                                <InputGroup className="mt-3">                                
                                <ButtonLoad loading={loader} className='w-100 mb-3' onClick={()=>{approve()}}>CREATE</ButtonLoad>            
                                </InputGroup>                                    
                                </div>
                                </div>                                                               
                          ):(
                            <Container fluid>           
                            <Row className="justify-content-center">
                                <Col xl="8" lg="8" md="10" sm="12">
                                          <center>
                                        <h4 className="mb-3">Your D-ID Created successfully</h4>                                                                                                        
                                        <p className="mb-3">Click Below Button,Go to View D-ID</p>   
                                        <Link to="/viewkyc" ><Button variant="blue" className="text-white" >View D-ID</Button></Link>
                                          </center>
                                </Col>
                            </Row>
                            </Container>                                    
                          )}
                          
                            </>
                          )}
                        </>
                      )}                        
                            </Col>
                            </Row>                                  
        </Container>
        </>
        )}        
                            </div>
                            </Layout>
                            );
}

export default Approvepage;