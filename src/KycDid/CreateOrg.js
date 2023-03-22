import React,{ useEffect ,useState,useContext} from "react";
import { Link, useHistory } from "react-router-dom";
import {  Col, Container,Row,Button } from "reactstrap";
import ButtonLoad from 'react-bootstrap-button-loader';
import Compress from "react-image-file-resizer";
import Layout from '../components/DashboardNew/LayoutT';
import { ToastContainer, Zoom, toast} from 'react-toastify';
import fireDb from '../NFTFolder/firebase'
import launchpadDetails from '../components/DashboardNew/snippets/launchpad.json'
import {DataContext} from "../App";
const axios = require('axios');

const CreateOrg = () => {  
    const value = useContext(DataContext);
    let history=useHistory();     
    const [getFile,setFile] = useState("") 
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);              
    const[Name,setName]=useState("");
    const[Dob,setDob]=useState("");
    const[Address,setAddress]=useState("");
    const[Email,setEmail]=useState("");
    const[phoneNumber,setPhoneNumber]=useState("");
    const [Citizenship,setCitizenship] = useState("");  
    const [TypeOfProof,setTypeOfProof] = useState("");  
    const [ProofNumber,setProofNumber] = useState("");      
    const [PasswordEny,setPasswordEny] = useState("");          
    const [Imgname,setImgname] = useState("")
    const [Img,setImg] = useState("")
    const [CurrentExit,setCurrentExit] = useState([]);  
    console.log("Dataget",CurrentExit)
    const [showTestLoading, setshowTestLoading] = React.useState(false);  
    console.log("Test",showTestLoading)    
    const[getIProfile,setgetIProfile]=useState([""]);  
    const dbcallProfile=async()=>{            
      if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
      }
      else{
        let r=[];
        try {         
          //fireDb.auth().signInAnonymously().then(async(response)=>{           
              const hasRestaurant = await fireDb.database()
              .ref(`EPuserprofile/${localStorage.getItem('EAWalletAddress')}`)
              .orderByKey().limitToFirst(1).once('value')
              .then(res => res.exists());
              //console.log("NewIdea",hasRestaurant)
              if(hasRestaurant){
                fireDb.database().ref("EPuserprofile").child(localStorage.getItem('EAWalletAddress')).on("value", (data) => {          
                  console.log("Datasnap",data)        
                  if (data) {                       
                      r.push({
                        Bio:data.val().Bio,
                        Customurl: data.val().Customurl,
                        Email: data.val().Email,
                        Imageurl:data.val().Imageurl,
                        Personalsiteurl: data.val().Personalsiteurl,
                        TimeStamp: data.val().TimeStamp,
                        Twittername: data.val().Twittername,
                        UserName: data.val().UserName,
                        WalletAddress: data.val().walletAddress,
                        bgurl:data.val().bgurl,
                        valid:data.val().valid
                      })                              
                  }
                  else{
                    setgetIProfile([""]);  
                  }
                    setgetIProfile(r);          
                    });                  
              }else{
                setgetIProfile([""]);  
              }  
            //})    
          } catch (error) {
            //console.log('error occured during search', error);    
          }                
      }      
      }    
    useEffect(()=>{dbcallProfile()},[])
    
    const dbcallalgo=async()=>{
      //console.log("inside dbcallalgo function")  
      let req = [];
      if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
      }
      else{      
        try{  
          //fireDb.auth().signInAnonymously().then(async(response)=>{           
          const hasRestaurant = await fireDb.database()
            .ref(`organization/${localStorage.getItem('EAWalletAddress')}`)
            .orderByKey().limitToFirst(1).once('value')
            .then(res => res.exists());
            console.log("NewIdea",hasRestaurant)      
        //fireDb.auth().signInAnonymously().then((response)=>{      
        if(hasRestaurant){
          fireDb.database().ref("LaunchpadWhiteList").child(localStorage.getItem("EAWalletAddress")).on("value", (data) => {
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
                  "ipfslink":"",
                  "encrypted":value.encrypted,
                  "Password":value.Password,
                })                
                setCurrentExit(req);
                setshowTestLoading(true)
                });        
              }
              else{
                setshowTestLoading(false)
              }
              //setCurrentExit(false);
          });
        }else{          
          setCurrentExit([""]);
          setshowTestLoading(false)
        }        
        //})
        //})
        }catch{          
        }         
        } 
       
    }      
    useEffect(()=>{dbcallalgo()},[])

    const captureFile =async(event) => {
      event.stopPropagation()
      event.preventDefault()
      const file = event.target.files[0]
      setImgname(file.name)
      setFile(file)
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
        else if(Dob === ""){
          toast.dismiss()
          toast.warning(`Please enter Dob`,{autoClose: 5000});            
          handleHideLoad()                               
        }
        else if(Address === ""){
          toast.dismiss()
          toast.warning(`Please enter Address`,{autoClose: 5000});            
          handleHideLoad()                                         
        }
        else if(Email === ""){
          toast.dismiss()
          toast.warning(`Please enter Email`,{autoClose: 5000});            
          handleHideLoad()                                                   
        }
        else if(phoneNumber === ""){
          toast.dismiss()
          toast.warning(`Please enter PhoneNumber`,{autoClose: 5000});            
          handleHideLoad()                                                             
        }
        else if(Citizenship === ""){
          toast.dismiss()
          toast.warning(`Please enter Citizenship`,{autoClose: 5000});            
          handleHideLoad()                                                                       
        }
        else if(TypeOfProof === ""){
          toast.dismiss()
          toast.warning(`Please enter TypeOfProof`,{autoClose: 5000});            
          handleHideLoad()                                                                                 
        }
        else if(ProofNumber === ""){
          toast.dismiss()
          toast.warning(`Please enter ProofNumber`,{autoClose: 5000});            
          handleHideLoad()                                                                                           
        }
        else if(PasswordEny === ""){
          toast.dismiss()
          toast.warning(`Please enter Password`,{autoClose: 5000});            
          handleHideLoad()                                                                                           
        }        
        else if(Img === ""){
          toast.dismiss()
          toast.warning(`Please Upload Image`,{autoClose: 5000});            
          handleHideLoad()                                                                                                     
        }   
        else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Email))){
          toast.warning(`Please Enter Valid E-mail`,{autoClose:5000})            
          handleHideLoad()            
        } 
        else if(showTestLoading === false){     
          console.log("CurreentE",CurrentExit)          
          toast.dismiss()               
            handleShowLoad()     
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
            let yyyy = today.getFullYear();
            today = mm + '/' + dd + '/' + yyyy;                                                                                                 
            const formData = new FormData();
            formData.append("file",getFile);
            const resFile = await axios({
              method: "post",
              url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
              data: formData,
              headers: {
                  'pinata_api_key': value[0].pinataapikey,
                  'pinata_secret_api_key': value[0].pinatasecretkey,
                  "Content-Type": "multipart/form-data"
              },
            });
            const realipfsurl = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;                  
            const addnfturl = `ipfs://${resFile.data.IpfsHash}`
            const CryptoJS = require("crypto-js");              
            let encrypted = CryptoJS.AES.encrypt(PasswordEny,PasswordEny).toString();
            console.log("EnyPassword");
            //asset optin end here
              //fireDb.auth().signInAnonymously().then((response)=>{      
                let ref2=fireDb.database().ref(`organization/${localStorage.getItem('EAWalletAddress')}`);            
                const db = ref2.push().key;                                                
                ref2.child(db).set({
                "dbkey":db,
                "createdDate": today,
                "Name": Name,
                "proofType": TypeOfProof,
                "algoAddress": localStorage.getItem("EAWalletAddress"),
                "ProofNumber": Name,
                "selfiePath": Img,            
                "kycStatus": "create",
                "reviewedBy": "pending",
                "approvedBy": "",
                "submittedDate": today,
                "reviewedDate": "",
                "approvedDate": "",
                "identity":Img,            
                "citizenship":Citizenship,
                "base64Image":Img,
                "assetId":"null",
                "address":Address,
                "dob":Dob,
                "email":Email,
                "phoneNumber":phoneNumber,
                "ipfslink":"",
                "encrypted":"null",
                "Password":encrypted,
                "PasswordKey":PasswordEny,
                "pinataUpload":realipfsurl,
                "pinataNFTupload":addnfturl,
                })
                  .then(async()=>{
                    let ref2=fireDb.database().ref(`userprofile/${localStorage.getItem("EAWalletAddress")}`);  
                    let dateset=new Date().toDateString();                        
                    if(getIProfile === null || getIProfile === undefined || getIProfile === ""){
                      ref2.set({
                        Imageurl:"",bgurl:"",
                        UserName:Name,Customurl:"",WalletAddress:localStorage.getItem("EAWalletAddress"),
                        TimeStamp:dateset,Twittername:"",Personalsiteurl:"",Email:Email,Bio:"",valid:""})
                            .then(async()=>{ 
                            toast.success("Register KYC successful",{autoClose: 5000});                 
                            handleHideLoad() 
                            await sleep(5000)
                            history.push('/dashboardd')                          
                            })                      
                    }else if(getIProfile[0] === null || getIProfile[0] === undefined || getIProfile[0] === ""){
                      ref2.set({
                        Imageurl:"",bgurl:"",
                        UserName:Name,Customurl:"",WalletAddress:localStorage.getItem("EAWalletAddress"),
                        TimeStamp:dateset,Twittername:"",Personalsiteurl:"",Email:Email,Bio:"",valid:""})
                            .then(async()=>{ 
                            toast.success("Register KYC successful",{autoClose: 5000});                 
                            handleHideLoad() 
                            await sleep(5000)
                            history.push('/dashboardd')                          
                            })
                    }else{
                      ref2.update({
                        Imageurl:getIProfile[0].Imageurl,bgurl:getIProfile[0].bgurl,
                        UserName:getIProfile[0].UserName,Customurl:getIProfile[0].Customurl,WalletAddress:localStorage.getItem("EAWalletAddress"),
                        TimeStamp:dateset,Twittername:getIProfile[0].Twittername,Personalsiteurl:getIProfile[0].Personalsiteurl,Email:getIProfile[0].Email,Bio:getIProfile[0].Bio,valid:getIProfile[0].valid})
                            .then(async()=>{ 
                            toast.success("Register KYC successful",{autoClose: 5000});                 
                            handleHideLoad() 
                            await sleep(5000)
                            history.push('/dashboardd')                          
                            })
                    }                    
                  })
                //})
        }       
        else{
          toast.dismiss()
          toast.warning(`Your Profile Already Create`,{autoClose: 5000});            
          handleHideLoad()                                                                                                                                                 
          }                             
    }                 
    const handleChange = (event) => {
      setTypeOfProof(event.target.value);
    };
    
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
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi ms-2 bi-info-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                        <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
                    </svg> */}
                    <p><strong>Note:</strong> This is a TestNet version. Kindly refrain from uploading your original documents here.</p>
                </div>
        {CurrentExit === "" || CurrentExit === null || CurrentExit === undefined ? (        
          <Container fluid="md">                  
          <form>
            <Row>
              <Col xs={6} className="mb-3">
                <label htmlFor="name">Name:</label>
                <input placeholder="Name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setName( event.target.value)}/>                
              </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="dob">DOB:</label>
                <input placeholder="DD/MM/YYYY" type="date" className="form-control form-control-field border-0" id="dob" style={{color:'#808080'}} onChange={event => setDob( event.target.value)}/>                
              </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="address">Address:</label>
                <input placeholder="Address" type="text" className="form-control form-control-field border-0" id="address" onChange={event => setAddress( event.target.value)}/>                
              </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="email">Email:</label>
                <input placeholder="Email" type="email" className="form-control form-control-field border-0" id="email" onChange={event => setEmail( event.target.value)}/>                
              </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="phonenumber">Phone Number:</label>
                <input placeholder="Phone Number" type="tel"  id="phonenumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control form-control-field border-0" onChange={event => setPhoneNumber( event.target.value)}/>                
              </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="citizenship">Citizenship:</label>
                <input placeholder="Citizenship" type="text"  id="citizenship" className="form-control form-control-field border-0" onChange={event => setCitizenship( event.target.value)}/>                
              </Col>              
              <Col xs={6} className="mb-3">
                    <label htmlFor="top">Type of Proof:</label>
                    {/* <input placeholder="type of proof" type="text"  id="top" className="form-control form-control-field border-0" onChange={event => setTypeOfProof( event.target.value)}/>                 */}
                    <select className="form-select border-0 p-0 bg-transparent noarrow" style={{color:'#808080'}} value={TypeOfProof} onChange={handleChange}>          
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Passport">Passport</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Aadhar card">Aadhar card</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Driving License">Driving License</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Voter Id">Voter Id</option>                                      
                    </select>
                  </Col>
              <Col xs={6} className="mb-3">
                <label htmlFor="cor">Enter Proof Number:</label>
                <input placeholder="proof number" type="text"  id="cor" className="form-control form-control-field border-0" onChange={event => setProofNumber( event.target.value)}/>                
              </Col>              
              <Col xs={6} className="mb-3">
                <label htmlFor="cor">Enter Proof Number:</label>
                <input placeholder="proof number" type="text"  id="cor" className="form-control form-control-field border-0" onChange={event => setPasswordEny( event.target.value)}/>                
              </Col>              
              <Col xs={12} md={6} className="mb-3">
                <label htmlFor="fileid">Select Image:</label>
                <input type="file" name="tfile" id="fileid" onChange = {captureFile} className="form-control form-control-field border-0"/>                
              </Col>                            
            </Row>            
               <ButtonLoad loading={loader} className='w-100 mb-3' onClick={()=>{UploadDb()}}>UPLOADS</ButtonLoad>                           
          </form>
        
          </Container>
        ):(
        <>
            {CurrentExit[0] === null || CurrentExit[0] === "" || CurrentExit[0] === undefined ? (
              <Container fluid="md">                  
              <form>
                <Row>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="name">Name:</label>
                    <input placeholder="Name" type="text" className="form-control form-control-field border-0" id="name" onChange={event => setName( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="dob">DOB:</label>
                    <input placeholder="DD/MM/YYYY" type="date" className="form-control form-control-field border-0" id="dob" style={{color:'#808080'}} onChange={event => setDob( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="address">Address:</label>
                    <input placeholder="Address" type="text" className="form-control form-control-field border-0" id="address" onChange={event => setAddress( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Email" type="email" className="form-control form-control-field border-0" id="email" onChange={event => setEmail( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="phonenumber">Phone Number:</label>
                    <input placeholder="Phone Number" type="tel"  id="phonenumber" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" className="form-control form-control-field border-0" onChange={event => setPhoneNumber( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="citizenship">Citizenship:</label>
                    <input placeholder="Citizenship" type="text"  id="citizenship" className="form-control form-control-field border-0" onChange={event => setCitizenship( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="top">Type of Proof:</label>
                    {/* <input placeholder="type of proof" type="text"  id="top" className="form-control form-control-field border-0" onChange={event => setTypeOfProof( event.target.value)}/>                 */}
                    <select className="form-select border-0 p-0 bg-transparent noarrow" style={{color:'#808080'}} value={TypeOfProof} onChange={handleChange}>          
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Passport">Passport</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Aadhar card">Aadhar card</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Driving License">Driving License</option>                  
                    <option className="form-select border-0 p-0 bg-transparent noarrow" value= "Voter Id">Voter Id</option>                                      
                    </select>
                  </Col>
                  <Col xs={6} className="mb-3">
                    <label htmlFor="cor">Enter Proof Number:</label>
                    <input placeholder="proof number" type="text"  id="cor" className="form-control form-control-field border-0" onChange={event => setProofNumber( event.target.value)}/>                
                  </Col>
                  <Col xs={6} className="mb-3">
                  <label htmlFor="cor">Enter Password:</label>
                  <input placeholder="Enter Password" type="password"  id="cor" className="form-control form-control-field border-0" onChange={event => setPasswordEny( event.target.value)}/>                
                  </Col>              
                  <Col xs={12} md={6} className="mb-3">
                    <label htmlFor="fileid">Select Image:</label>
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
                          <h4 className="mb-3">KYC Details uploaded successfully</h4>                                                                                                        
                          <p className="mb-3">Click Below Button,Go to Generate D-ID</p>   
                          <Link to="/approvekyc" ><Button variant="blue" className="text-white" >Create D-ID</Button></Link>
                            </center>
                          </div>
                      </div>
                  </Col>
              </Row>
              </Container>            
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

export default CreateOrg;