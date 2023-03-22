import React,{ useEffect ,useState,useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {  Col, Container,Row,Button } from "reactstrap";
import ButtonLoad from 'react-bootstrap-button-loader';
import Layout from '../components/DashboardNew/LayoutT';
import { ToastContainer, Zoom, toast} from 'react-toastify';
import fireDb from '../NFTFolder/firebase'
import web3 from "../components/DashboardNew/web3";
import tokencreate from  "./tokenabi.js";
import {ercdata} from  "./ERCdata";
import launchpadDetails from '../components/DashboardNew/snippets/launchpad.json'
import {DataContext} from "../App";
import { async } from "q";
const axios = require('axios');

const CreateToken = () => {  
    const[createdAsset, setCreatedAsset] = useState("");
    const value = useContext(DataContext);
    let history=useHistory();         
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);              
    const[Name,setName]=useState("");
    const[Dob,setDob]=useState("");
    const[Address,setAddress]=useState("");        
    const [CurrentExitclub,setCurrentExitclub] = useState([]);  
    console.log("Dataget",CurrentExitclub)
    const [CurrentExitteam,setCurrentExitteam] = useState([]);  
    console.log("Dataget",CurrentExitteam)
    const [showTestLoadingclub, setshowTestLoadingclub] = React.useState(false);  
    const [showTestLoadingteam, setshowTestLoadingteam] = React.useState(false);  
    console.log("Test",showTestLoadingclub)        
    console.log("Test",showTestLoadingteam)        
    
    const dbcallalgo=async()=>{      
      let req = [];
      if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
      }
      else{      
        try{  
          //fireDb.auth().signInAnonymously().then(async(response)=>{           
          const hasRestaurant = await fireDb.database()
            .ref(`organizationclub/${localStorage.getItem('EAWalletAddress')}`)
            .orderByKey().limitToFirst(1).once('value')
            .then(res => res.exists());
            console.log("NewIdea",hasRestaurant)      
        //fireDb.auth().signInAnonymously().then((response)=>{      
        if(hasRestaurant){
          fireDb.database().ref("organizationclub").child(localStorage.getItem("EAWalletAddress")).on("value", (data) => {
            if (data) {            
              data.forEach((d) => {                
                let value=d.val();              
                req.push(            
                  {
                  "dbkey":value.dbkey,
                  "createdDate": value.createdDate,
                  "Name": value.Name,                  
                  "Location": value.Location,                  
                  "Email": value.Email,                  
                  "BOD1": value.BOD1,                  
                  "BOD2": value.BOD2,                  
                  "State": value.State,                
                  "Zone": value.Zone,                    
                  "algoAddress": value.algoAddress,                  
                  "selfiePath": value.selfiePath,            
                  "kycStatus":value.kycStatus,
                  "reviewedBy": value.reviewedBy,
                  "approvedBy": value.approvedBy,
                  "submittedDate": value.submittedDate,
                  "reviewedDate": value.reviewedDate,
                  "approvedDate": value.approvedDate,   
                  "identity":value.identity,                                             
                  "base64Image": value.base64Image,
                  "assetId": value.assetId,                  
                  "ipfslink":value.ipfslink,
                  "encrypted":value.encrypted,
                  "Password":value.Password,
                  "PasswordKey":value.PasswordKey,
                  "pinataUpload":value.pinataUpload,
                  "pinataNFTupload":value.pinataNFTupload,                                
                })                
                setCurrentExitclub(req);
                setshowTestLoadingclub(true)
                });        
              }
              else{
                setshowTestLoadingclub(false)
              }
              //setCurrentExit(false);
          });
        }else{          
          setCurrentExitclub([""]);
          setshowTestLoadingclub(false)
        }        
        //})
        //})
        }catch{          
        }         
        } 
       
    }      
    useEffect(()=>{dbcallalgo()},[])

    const dbcallalgoTeam=async()=>{      
      let req = [];
      if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
      }
      else{      
        try{  
          //fireDb.auth().signInAnonymously().then(async(response)=>{           
          const hasRestaurant = await fireDb.database()
            .ref(`organizationTeam/${localStorage.getItem('EAWalletAddress')}`)
            .orderByKey().limitToFirst(1).once('value')
            .then(res => res.exists());
            console.log("NewIdea",hasRestaurant)      
        //fireDb.auth().signInAnonymously().then((response)=>{      
        if(hasRestaurant){
          fireDb.database().ref("organizationTeam").child(localStorage.getItem("EAWalletAddress")).on("value", (data) => {
            if (data) {            
              data.forEach((d) => {                
                let value=d.val();              
                req.push(            
                  {
                    "dbkey":value.dbkey,
                    "createdDate":value.createdDate,
                    "Name": value.Name,                
                    "AdminName":value.AdminName,
                    "selfiePath": value.selfiePath,            
                    "kycStatus":value.kycStatus,
                    "reviewedBy": value.reviewedBy,
                    "approvedBy": value.approvedBy,
                    "submittedDate": value.submittedDate,
                    "reviewedDate": value.reviewedDate,
                    "approvedDate": value.approvedDate,
                    "identity":value.identity,                            
                    "base64Image":value.base64Image,
                    "assetId":value.assetId,                
                    "ipfslink":value.ipfslink,
                    "encrypted":value.encrypted,
                    "Password":value.Password,
                    "PasswordKey":value.PasswordKey,
                    "pinataUpload":value.pinataUpload,
                    "pinataNFTupload":value.pinataNFTupload,                  
                  })                
                setCurrentExitteam(req);
                setshowTestLoadingteam(true)
                });        
              }
              else{
                setshowTestLoadingteam(false)
              }
              //setCurrentExit(false);
          });
        }else{          
          setCurrentExitteam([""]);
          setshowTestLoadingteam(false)
        }        
        //})
        //})
        }catch{          
        }         
        } 
       
    }      
    useEffect(()=>{dbcallalgoTeam()},[])
                

    const UploadDb=async(event)=>{            
        if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ""){
          toast.dismiss()
          toast.warning(`please connect your wallet`,{autoClose: 5000});            
          handleHideLoad()           
        }                
        else if(Name === ""){          
          toast.dismiss()
          toast.warning(`Please enter Name`,{autoClose: 5000});            
          handleHideLoad()                     
        }
        else if(Dob === ""){
          toast.dismiss()
          toast.warning(`Please enter Symbol`,{autoClose: 5000});            
          handleHideLoad()                               
        }
        else if(Address === ""){
          toast.dismiss()
          toast.warning(`Please enter Totolsupply`,{autoClose: 5000});            
          handleHideLoad()                                         
        }                
        else{
        handleShowLoad();
        //mint coin here
        //*100000000
        let totalsupply = parseInt(Address)
        //*100000000);
        console.log("web3",web3.utils.toBN(totalsupply))
        const accounts = await web3.eth.getAccounts();
        console.log("Accounts",accounts[0])
        const createdToken = await tokencreate.deploy({          
        data:ercdata,
        arguments: [Name,Dob,web3.utils.toBN(totalsupply)]        
        })
        .send({
        from: accounts[0],
        // gas: 4796559,
        // gasPrice: '20000000000'
        })        
        //console.log("worked",createdToken.options.address);
        //console.log("worked",localStorage.getItem('walletAddress'));
        localStorage.setItem("createdToken",createdToken.options.address);        
        setCreatedAsset(createdToken.options.address);    
        //let TokenAddress = new web3.eth.Contract(tokencreate, createdToken.options.address);       
        console.log("Acc",accounts[0])
        //let TokenAddress = new web3.eth.Contract(abi,localStorage.getItem('createdToken'));        
        console.log("Token Create is Completed")
        //event.preventDefault();        
        //web3.utils.toBN(())
        // await createdToken.methods.mint(accounts[0],Address).send({
        //   from:accounts[0],
        //   //gas:21000,
        // })
          //on('transactionHash',function(hash){                
            // let id = "https://testnet.bscscan.com/tx/" + hash;
            // toast.success(toastDiv(id));
            // toast.success(`Transaction Success ${hash}`);
            // window.location.reload();           
           //})
          //  .then(async(r)=>{
            let dateset=new Date().toDateString();               
            let refactivity= await fireDb.database().ref(`CreatedTokens/${accounts[0]}`);   
            const db = refactivity.push().key;                         
            await refactivity.child(db).set({
            keyId:db,
            Owner:accounts[0],
            TokenAddress:createdToken.options.address,
            //TokenAddress:createdAsset,
            Tokenname:Name,
            TokenSymbol:Dob,
            Totalsupply:totalsupply,
            Minted:"0",
            Burned:"0",            
            date:dateset
            }).then(async()=>{	                      
                toast.dismiss()
                toast.success(`Token Created  Successfully`,{autoClose: 5000});                                                                  
                handleHideLoad()
                await sleep(2000)
                window.location.reload(false);
                // done2();            
            })                    
           //})          
        }                             
    }                     
    
    const toastDiv = (txId) =>
    (
    <div>
         <p> Transaction is successful &nbsp;<a style={{color:'#133ac6'}} href={txId} target="_blank" rel="noreferrer"><br/><p style={{fontWeight: 'bold'}}>View in Algoexplorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
         <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill="#133ac6"/>
          </svg></p></a></p>  
     </div>
    );

    function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

return(
    <Layout>
      <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
      {localStorage.getItem('EAWalletAddress') === null || localStorage.getItem('EAWalletAddress') === undefined || localStorage.getItem('EAWalletAddress') === "" ? (
        <Container fluid>           
        <Row className="justify-content-center">
            <Col xl="8" lg="8" md="10" sm="12">
                <div className="card-bond">
                    <div className="p-3 card-bond-inner">
                      <center>
                    <h4 className="mb-3">please connect your wallet</h4>                                                                                                        
                      </center>
                    </div>
                </div>
            </Col>
        </Row>
        </Container>          
      ):(      
        <Container fluid>              
        <Row className="justify-content-center">
        <Col lg="7" md="10" sm="12">
        <div className="note mb-60 d-flex justify-content-center">                    
            <p><strong>Note:</strong> This is a TestNet version. Kindly refrain from uploading your original documents here.</p>
        </div>
        {CurrentExitclub === "" || CurrentExitclub === null || CurrentExitclub === undefined ? (          
          <Container fluid>           
              <Row className="justify-content-center">
                  <Col xl="8" lg="8" md="10" sm="12">
                      <div className="card-bond">
                          <div className="p-3 card-bond-inner">
                            <center>
                          <h4 className="mb-3">Please Create Club First</h4>                                                                                                        
                          <p className="mb-3">Click Below Button,Go to Create Club</p>
                          <Link to="/createclub" ><Button variant="blue" className="text-white" >Create Club</Button></Link>
                            </center>
                          </div>
                      </div>
                  </Col>
              </Row>
            </Container>                      
        ):(
          <>
          {CurrentExitclub[0] === "" || CurrentExitclub[0] === null || CurrentExitclub[0] === undefined ? (          
            <Container fluid>           
                <Row className="justify-content-center">
                    <Col xl="8" lg="8" md="10" sm="12">
                        <div className="card-bond">
                            <div className="p-3 card-bond-inner">
                              <center>
                            <h4 className="mb-3">Please Create Club First</h4>                                                                                                        
                            <p className="mb-3">Click Below Button,Go to Create Club</p>
                            <Link to="/createclub" ><Button variant="blue" className="text-white" >Create Club</Button></Link>
                              </center>
                            </div>
                        </div>
                    </Col>
                </Row>
              </Container>                      
          ):(
          <>
          {CurrentExitteam === "" || CurrentExitteam === null || CurrentExitteam === undefined ? (          
          <Container fluid>           
              <Row className="justify-content-center">
                  <Col xl="8" lg="8" md="10" sm="12">
                      <div className="card-bond">
                          <div className="p-3 card-bond-inner">
                            <center>
                          <h4 className="mb-3">Please Create team First</h4>                                                                                                        
                          <p className="mb-3">Click Below Button,Go to Create Team</p>
                          <Link to="/createteam" ><Button variant="blue" className="text-white" >Create Team</Button></Link>
                            </center>
                          </div>
                      </div>
                  </Col>
              </Row>
          </Container>                      
        ):(
          <>
          {CurrentExitteam[0] === "" || CurrentExitteam[0] === null || CurrentExitteam[0] === undefined ? (          
            <Container fluid>           
            <Row className="justify-content-center">
                <Col xl="8" lg="8" md="10" sm="12">
                    <div className="card-bond">
                        <div className="p-3 card-bond-inner">
                          <center>
                        <h4 className="mb-3">Please Create team First</h4>                                                                                                        
                        <p className="mb-3">Click Below Button,Go to Create Team</p>
                        <Link to="/createteam" ><Button variant="blue" className="text-white" >Create Team</Button></Link>
                          </center>
                        </div>
                    </div>
                </Col>
            </Row>
          </Container>                      
          ):(
          <>
          {CurrentExitteam[0].reviewedBy === "success" && CurrentExitteam[0].kycStatus === "approved" ?(
            <Container fluid="md">                  
            <form>
              <Row>
              <Col xs={6} className="mb-3">
                      <label htmlFor="name">Name:</label>
                      <input placeholder="Name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setName( event.target.value)}/>                
                    </Col>                  
                    <Col xs={6} className="mb-3">
                      <label htmlFor="address">Symbol:</label>
                      <input placeholder="Symbol" type="text" className="form-control form-control-field border-0" id="symbol" onChange={event => setDob( event.target.value)}/>                
                    </Col>
                    <Col xs={6} className="mb-3">
                      <label htmlFor="address">TotalSupply:</label>
                      <input placeholder="TotalSupply" type="text" className="form-control form-control-field border-0" id="totalsupply" onChange={event => setAddress( event.target.value)}/>                
              </Col>                                                  
              </Row>            
                <ButtonLoad loading={loader} className='w-100 mb-3' onClick={(e)=>{UploadDb(e)}}>UPLOADS</ButtonLoad>                           
            </form>        
          </Container>            
          ):(
            <Container fluid>           
              <Row className="justify-content-center">
                  <Col xl="8" lg="8" md="10" sm="12">
                      <div className="card-bond">
                          <div className="p-3 card-bond-inner">
                          <center>
                          <h4 className="mb-3">Please Wait Your Team is Not Approved</h4>                                                    
                          </center>
                          </div>
                      </div>
                  </Col>
              </Row>
            </Container>                      
          )}          
          </>          
          )}
          </>          
        )}
            </>                      
          )}
          </>          
        )}        
        </Col>
        </Row>
        </Container>        
      )}        
    </Layout>                      
)
}

export default CreateToken;