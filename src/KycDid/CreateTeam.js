import React,{ useEffect ,useState,useContext} from "react";
//import "../node_modules/video-react/dist/video-react.css";
//import { Player } from "video-react";
import { Link, useHistory } from "react-router-dom";
import {  Col, Container,Row,Button } from "reactstrap";
import ButtonLoad from 'react-bootstrap-button-loader';
import Compress from "react-image-file-resizer";
import Layout from '../components/DashboardNew/LayoutT';
import { ToastContainer, Zoom, toast} from 'react-toastify';
//import FileThumbnail from "react-uploaded-video-preview";
import fireDb from '../NFTFolder/firebase'
import {DataContext} from "../App";
//const axios = require('axios');

const CreateTeam = () => {    
    // const [videoSrc , seVideoSrc] = useState("");
    // const [selectedFile, setSelectedFile] = React.useState({
    //   file: null,
    //   duration: 0,
    //   size: 0,
    // });
    // console.log("Video",selectedFile)
    const value = useContext(DataContext);
    let history=useHistory();     
    const [getFile,setFile] = useState("") 
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);              
    const[Name,setName]=useState("");    
    const[AdminName,setAdminName]=useState("");    
    const [Imgname,setImgname] = useState("")
    const [Img,setImg] = useState("")
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
                    "algoAddress":value.algoAddress,
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

    const captureFile =async(event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      setImgname(file.name)
      setFile(file)
      //handleChange(file)     
      let reader = new window.FileReader()      
      try{
      Compress.imageFileResizer(file, 500,500 , 'JPEG', 200, 0,
      uri => {        
        setImg(uri)
      },
      'base64'
      );
      reader.readAsArrayBuffer(file)      
    }catch (err) {
    }
    };
    

    const UploadDb=async()=>{            
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
        else if(AdminName === ""){          
          toast.dismiss()
          toast.warning(`Please enter Admin-Name`,{autoClose: 5000});            
          handleHideLoad()                     
        }        
        else if(Img === ""){
          toast.dismiss()
          toast.warning(`Please Upload Image`,{autoClose: 5000});            
          handleHideLoad()                                                                                                     
        }           
        else if(showTestLoadingteam === false){     
          console.log("CurreentE",CurrentExitteam)          
          toast.dismiss()               
            handleShowLoad()     
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;                                                                                                 
            // const formData = new FormData();
            // formData.append("file",getFile);
            // const resFile = await axios({
            //   method: "post",
            //   url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
            //   data: formData,
            //   headers: {
            //       'pinata_api_key': value[0].pinataapikey,
            //       'pinata_secret_api_key': value[0].pinatasecretkey,
            //       "Content-Type": "multipart/form-data"
            //   },
            // });
            // const realipfsurl = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;                  
            // const addnfturl = `ipfs://${resFile.data.IpfsHash}`
            // const CryptoJS = require("crypto-js");              
            // let encrypted = CryptoJS.AES.encrypt(PasswordEny,PasswordEny).toString();
            // console.log("EnyPassword");
            //asset optin end here
              //fireDb.auth().signInAnonymously().then((response)=>{      
                let ref2=fireDb.database().ref(`organizationTeam/${localStorage.getItem('EAWalletAddress')}`);            
                const db = ref2.push().key;                                                
                ref2.child(db).set({
                "dbkey":db,
                "createdDate": today,
                "Name": Name,                
                "algoAddress": localStorage.getItem("EAWalletAddress"),                  
                "AdminName":AdminName,
                "selfiePath": Img,            
                "kycStatus": "create",
                "reviewedBy": "pending",
                "approvedBy": "",
                "submittedDate": today,
                "reviewedDate": "",
                "approvedDate": "",
                "identity":Img,                            
                "base64Image":Img,
                "assetId":"null",                
                "ipfslink":"",
                "encrypted":"null",
                "Password":"",
                "PasswordKey":"",
                "pinataUpload":"",
                "pinataNFTupload":"",
                })
                  .then(async()=>{                    
                    toast.success("Register Team successful",{autoClose: 5000});                 
                    handleHideLoad() 
                    await sleep(5000)
                    history.push('/createtoken')                          
                })                                                                            
        }       
        else{
          toast.dismiss()
          toast.warning(`Your Profile Already Create`,{autoClose: 5000});            
          handleHideLoad()                                                                                                                                                 
          }                             
    }                 
    // const handleChange = (event) => {
    //   setTypeOfProof(event.target.value);
    // };

  // function convertHMS(value) {
  //   const sec = parseInt(value, 10); // convert value to number if it's string
  //   let hours = Math.floor(sec / 3600); // get hours
  //   let minutes = Math.floor((sec - hours * 3600) / 60); // get minutes
  //   let seconds = sec - hours * 3600 - minutes * 60; //  get seconds
  //   // add 0 if value < 10; Example: 2 => 02
  //   if (hours < 10) {
  //     hours = '0' + hours;
  //   }
  //   if (minutes < 10) {
  //     minutes = '0' + minutes;
  //   }
  //   if (seconds < 10) {
  //     seconds = '0' + seconds;
  //   }
  //   return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
  // }

  // const onChangeHandler = (event) => {      
  //     const file = event.target.files[0];      
  //     new Promise((resolve, reject) => {
  //       let reader = new FileReader();
  //       console.log('Handle',reader)
  //       reader.onload = function () {
  //         var aud = new Audio(reader.result);
  //         aud.onloadedmetadata = function () {
  //           resolve(convertHMS(aud.duration));
  //         };
  //       };
  //       reader.readAsDataURL(file);
  //     })
  //       .then((duration) => {
  //         console.log("Duration",duration)
  //         setSelectedFile({ file, duration, size: file?.size });
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  // };
    
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
          <Container fluid="md">                  
          <form>
            <Row>
                <Col xs={6} className="mb-3">
                  <label htmlFor="name">Team-Name:</label>
                  <input placeholder="Enter team-name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setName( event.target.value)}/>                
                </Col>
                <Col xs={6} className="mb-3">
                  <label htmlFor="name">Admin-Name:</label>
                  <input placeholder="Enter admin-name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setAdminName( event.target.value)}/>                
                </Col>
                <Col xs={12} md={6} className="mb-3">
                  <label htmlFor="fileid">Select Team-Logo:</label>
                  <input type="file" name="tfile" id="fileid" onChange = {captureFile} className="form-control form-control-field border-0"/>                
                </Col>                                          
            </Row>            
               <ButtonLoad loading={loader} className='w-100 mb-3' onClick={()=>{UploadDb()}}>UPLOADS</ButtonLoad>                           
          </form>
        
          </Container>
            ):(
            <>
            {CurrentExitteam[0] === null || CurrentExitteam[0] === "" || CurrentExitteam[0] === undefined ? (
              <Container fluid="md">                  
              <form>
                <Row>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="name">Team-Name:</label>
                    <input placeholder="Enter team-name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setName( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="name">Admin-Name:</label>
                    <input placeholder="Enter admin-name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setAdminName( event.target.value)}/>                
                  </Col>
                  <Col xs={12} md={6} className="mb-3">
                    <label htmlFor="fileid">Select Team-Logo:</label>
                    <input type="file" name="tfile" id="fileid" onChange = {captureFile} className="form-control form-control-field border-0"/>                
                  </Col>                                                            
                </Row>                                            
                  <ButtonLoad loading={loader} className='w-100 mb-3' onClick={()=>{UploadDb()}}>UPLOAD</ButtonLoad>            
              </form>         
              </Container>
            ):(
              <Container fluid>           
              <Row className="justify-content-center">
                  <Col xl="8" lg="8" md="10" sm="12">
                      <div className="card-bond">
                          <div className="p-3 card-bond-inner">
                            <center>
                          <h4 className="mb-3">Please Create Token</h4>                                                                                                        
                          <p className="mb-3">Click Below Button,Go to Create Token</p>
                          <Link to="/createtoken" ><Button variant="blue" className="text-white" >Create Token</Button></Link>
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
        </Col>
        </Row>
        </Container>        
      )}        
    </Layout>                      
)
}

export default CreateTeam;