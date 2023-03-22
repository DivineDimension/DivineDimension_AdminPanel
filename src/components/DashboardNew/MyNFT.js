import React,{useEffect,useState} from 'react';
import Layout from './LayoutT';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import firebase from '../../NFTFolder/firebase';
import { useHistory } from "react-router-dom";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import fireDb from '../../NFTFolder/firebase';
import configfile from '../../NFTFolder/config.json'
import Icon1 from '../../assets/images/elem-original.png';
import node from './nodeapi.json';
import Compress from "react-image-file-resizer";
//import ClaimTabReFra from './ClaimTabReFra';
import SaleTab from './SaleTab';
import OwnTab from './OwnTab';
import CreateTabTab from './CreateTabTab';
//import Logo from '../../assets/images/logocifihomepage.png'
import Logo from '../../assets/images/cover.png'
//const algosdk = require('algosdk'); 

const MyNFT = () => {    
    useEffect(() => {
        document.title = "DivineDimension | MyNFT"
    }, [])
    const [show, setShow] = React.useState(false);
    const handleShow = () => setShow(true);    
    const handleClose = () => {setShow(false)};
    const [Img,setImg] = useState("")        
    const[getImgreffalgoLiked,setgetImgreffalgoLiked]=useState([]);    
    const[getImgreffalgoActivity,setgetImgreffalgoActivity]=useState([]);        
    const[getPinataData,setPinataData]=useState([""]);               
    const[getRoyAddress,setRoyAddress]=useState([""]);           
    const[loader, setLoader] = useState(false);    
    const[pageSize,setPageSize]=useState(12);     
    const [searchText, setSearchText] = React.useState('');
    const[getrecent,setrecent]=useState("View All");    
    const [algobalanceApp,setalgobalanceApp] = useState("");    
    let history=useHistory();    
    const[getCliamFra,setClaimFra]=useState([]);
    const[getReCliamFra,setReClaimFra]=useState([]);                
    const[getIProfile,setgetIProfile]=useState([""]);     
    console.log("UserP",getIProfile)          
    
    const dbCallAddress=async()=>{            
        let r=[];
        try {    
        firebase.auth().signInAnonymously().then((response)=>{           
        firebase.database().ref("royaltyaddress").on("value", (data) => {                       

          if (data) {  
              try{                                   
                if(data.val().address === localStorage.getItem('EAWalletAddress')){
                    r.push({
                        rAddress:data.val().address,                        
                    })                
                    setLoader(true)
                }                
            }   catch(e){                      
            }                 
          }
          else{
            setRoyAddress([""]);  
          }          
          setRoyAddress(r);
        });         
        })         
      } catch (error) {
      }                
    }    
    useEffect(()=>{dbCallAddress()},[])

    const dbcallImagePinata=async()=>{            
        let r=[];
        try {    
        //firebase.auth().signInAnonymously().then((response)=>{           
        firebase.database().ref("pinataimage").on("value", (data) => {                       
          if (data) {  
              try{                                      
                data.forEach((d) => {                                                   
                    r.push({
                        pinataImageUrl:d.val().imageurl,
                        dbKey: d.val().key,    
                        pinataurl: d.val().pinataurl
                      })                
                })                  
            }   catch(e){                      
            }                 
          }
          else{
            setPinataData([""]);  
          }
          setPinataData(r);
        });         
        //})         
      } catch (error) {        
      }                
    }    
    useEffect(()=>{dbcallImagePinata()},[])
    const captureFile =async(event) => {
    event.stopPropagation()
    event.preventDefault()
    const file = event.target.files[0]
    let reader = new window.FileReader()
    try{
    Compress.imageFileResizer (file,1500, 260, 'JPEG', 300, 0,
    uri =>{        
        setImg(uri)              
        updatecover(uri);
    },
    'base64'
    );
    reader.readAsArrayBuffer(file)    
    }catch (err) {    
    }
    }; 
    const dbcallProfile=async()=>{            
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
            //firebase.auth().signInAnonymously().then(async(response)=>{           
            const hasRestaurant = await fireDb.database()
            .ref(`EPuserprofile/${localStorage.getItem('EAWalletAddress')}`)
            .orderByKey().limitToFirst(1).once('value')
            .then(res => res.exists());              
            if(hasRestaurant)
            {
                let r=[];
            try {    
            //firebase.auth().signInAnonymously().then((response)=>{           
            firebase.database().ref("EPuserprofile").child(localStorage.getItem('EAWalletAddress')).on("value", (data) => {          
                if (data) {  
                    try{
    
                    
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
                }   catch(e){                      
                }                 
                }
                else{
                setgetIProfile([""]);  
                }
                setgetIProfile(r);
            });         
            //})         
            } catch (error) {            
            }                
            }else{
                setgetIProfile([""]);  
            }  
            //})          
        }        
    }    
    useEffect(()=>{dbcallProfile()},[])        

    const updatecover=async(u)=>{
            setShow(false)            
            toast.warn(`Banner Upload InProgress`,{autoClose: 3000});                        
            if(getIProfile === "" || getIProfile === null || getIProfile === undefined ){
                toast.error(`Please Create Your Artist`,{autoClose: 3000});         
                done()
            }else{
                if(getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined){                    
                    toast.error(`Please Create Your Artist`,{autoClose: 3000});         
                    done()
                }else{
                    //firebase.auth().signInAnonymously().then((response)=>{           
                    let ref2=firebase.database().ref(`EPuserprofile/${localStorage.getItem('EAWalletAddress')}`);                    
                    let dateset=new Date().toDateString();                                    
                    ref2.update({
                    Imageurl:getIProfile[0].Imageurl,bgurl:u,
                    UserName:getIProfile[0].UserName,Customurl:getIProfile[0].Customurl,WalletAddress:localStorage.getItem('EAWalletAddress'),
                    TimeStamp:dateset,Twittername:getIProfile[0].Twittername,Personalsiteurl:getIProfile[0].Personalsiteurl,Email:getIProfile[0].Email,Bio:getIProfile[0].Bio,valid:getIProfile[0].valid})
                    .then(()=>{                              
                    toast.dismiss()
                    toast.success(`Banner Uploaded SuccessFully`,{autoClose: 3000});            
                    done()                    
                    }).catch((err) => {                                    
                    toast.error(`Banner Uploaded Failed`,{autoClose: 3000});         
                    done()                    
                    }); 
                    //})  
                }                
            }          
    }
    
    //const indexClient = new algosdk.Indexer('', node['indexerclient'], '');
    // useEffect(() => {        
    //     async function listenMMAccount() {    
    //     if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === "0x" || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){                  
    //     setalgobalanceApp("");      
    //     }
    //     else{          
    //         let accountInfo = await indexClient.lookupAccountByID(localStorage.getItem("EAWalletAddress")).do();                        
    //         setalgobalanceApp((accountInfo['account']['amount']/1000000));
    //   }    
    // }
    // listenMMAccount();
    // }, []);
        
    const dbcallalgoFraClaim=async()=>{    
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("FractionalClaim").child(getalgo).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();
                req.push(            
                  {
                    Assetid:value.Assetid,
                    Imageurl:value.Imageurl,
                    NFTPrice:value.NFTPrice,
                    EscrowAddress:value.EscrowAddress,
                    keyId:value.keyId,
                    NFTName:value.NFTName,
                    userSymbol:value.userSymbol,
                    Ipfsurl:value.Ipfsurl,
                    ownerAddress:value.ownerAddress,
                    previousoaddress:value.previousoaddress,
                    TimeStamp:value.TimeStamp,
                    NFTDescription:value.NFTDescription,
                    HistoryAddress:value.HistoryAddress,
                    Appid:value.Appid,
                    valid:value.valid,
                    CreatorAddress:value.CreatorAddress,
                    NFTType:value.NFTType,
                    NFTChannel:value.NFTChannel,
                    SocialLink:value.SocialLink,
                    NFTModel:value.NFTModel,
                    Claim:value.Claim
                })                
                });        
              }
              req.reverse()
              setClaimFra(req);
            });          
        })        
        }        
    }      
    useEffect(()=>{dbcallalgoFraClaim()},[])
    const dbcallalgoFraReClaim=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        firebase.auth().signInAnonymously().then((response)=>{ //imagerefAlgoRoyaltyClaim     
          firebase.database().ref("imageFractionalBuyNew").child(getalgo).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();
                req.push(            
                  {
                    Assetid:value.Assetid,
                    Imageurl:value.Imageurl,
                    NFTPrice:value.NFTPrice,
                    EscrowAddress:value.EscrowAddress,
                    keyId:value.keyId,
                    NFTName:value.NFTName,
                    userSymbol:value.userSymbol,
                    Ipfsurl:value.Ipfsurl,
                    ownerAddress:value.ownerAddress,
                    previousoaddress:value.previousoaddress,
                    TimeStamp:value.TimeStamp,
                    NFTDescription:value.NFTDescription,
                    HistoryAddress:value.HistoryAddress,
                    Appid:value.Appid,
                    valid:value.valid,
                    CreatorAddress:value.CreatorAddress,
                    NFTType:value.NFTType,
                    NFTChannel:value.NFTChannel,
                    SocialLink:value.SocialLink,
                    NFTModel:value.NFTModel,
                    Claim:value.Claim
                })                
                });        
              }
              req.reverse()
              setReClaimFra(req);
            });          
        })        
        }        
    }      
    useEffect(()=>{dbcallalgoFraReClaim()},[])    

    const dbcallalgoActivity=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{            
        let getalgo=localStorage.getItem("EAWalletAddress");      
        //firebase.auth().signInAnonymously().then((response)=>{              
          firebase.database().ref("EPolygonactivitytable").child(getalgo).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();                
                req.push(            
                  {
                    Assetid:value.Assetid,
                    Imageurl:value.Imageurl,
                    NFTPrice:value.NFTPrice,
                    EscrowAddress:value.EscrowAddress,
                    keyId:value.keyId,
                    NFTName:value.NFTName,
                    userSymbol:value.userSymbol,
                    Ipfsurl:value.Ipfsurl,
                    ownerAddress:value.ownerAddress,
                    previousoaddress:value.previousoaddress,
                    TimeStamp:value.TimeStamp,
                    NFTDescription:value.NFTDescription,
                    HistoryAddress:value.HistoryAddress,
                    Appid:value.Appid,
                    valid:value.valid,
                    CreatorAddress:value.CreatorAddress,
                    NFTType:value.NFTType,
                    NFTChannel:value.NFTChannel,
                    SocialLink:value.SocialLink
                })                
                });        
              }
              req.reverse()
              setgetImgreffalgoActivity(req);              
            });    
        //})              
        }        
    }      
    useEffect(()=>{dbcallalgoActivity()},[])
    const dbcallalgoLiked=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{                    
        firebase.auth().signInAnonymously().then((response)=>{              
          firebase.database().ref("LikedImage").child(localStorage.getItem("EAWalletAddress")).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();                
                req.push(            
                  {
                    Assetid:value.Assetid,
                    Imageurl:value.Imageurl,
                    NFTPrice:value.NFTPrice,
                    EscrowAddress:value.EscrowAddress,
                    keyId:value.keyId,
                    NFTName:value.NFTName,
                    userSymbol:value.userSymbol,
                    Ipfsurl:value.Ipfsurl,
                    ownerAddress:value.ownerAddress,
                    previousoaddress:value.previousoaddress,
                    TimeStamp:value.TimeStamp,
                    NFTDescription:value.NFTDescription,
                    HistoryAddress:value.HistoryAddress,
                    Appid:value.Appid,
                    valid:value.valid,
                    CreatorAddress:value.CreatorAddress,
                    NFTType:value.NFTType,
                    NFTChannel:value.NFTChannel,
                    SocialLink:value.SocialLink
                })                
                });  
                req.reverse()      
                setgetImgreffalgoLiked(req);
              }
              
            });    
        })              
        }        
    }      
    useEffect(()=>{dbcallalgoLiked()},[])
    

    

    const filterdataFraClaim=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getCliamFra;                                                
        }    
        if(getrecent === "Recently added"){        
            let data = getCliamFra.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getCliamFra.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getCliamFra.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})          
          return data;
        }
        }
        else{
                let data = getCliamFra.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getCliamFra;
    }

    const filterdataFraReClaim=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString(); 
        if(searchText === "")
        {
        if(getrecent === "View All"){                    
            return getReCliamFra;                                                
        }                          
        if(getrecent === "Recently added"){        
            let data = getReCliamFra.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getReCliamFra.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getReCliamFra.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})          
          return data;
        }
        }
        else{
                let data = getReCliamFra.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getReCliamFra;
    }
    
    
    const filterdata5=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {
        if(getrecent === "View All"){                    
            return getImgreffalgoActivity;                                                
        }                          
        if(getrecent === "Recently added"){        
            let data = getImgreffalgoActivity.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgoActivity.reverse().sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgoActivity.reverse().sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})          
          return data;
        }
        }
        else{
                let data = getImgreffalgoActivity.reverse().filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgoActivity.reverse()
    }

    const decrementSize=()=>{
        if(pageSize >= 16){
        setPageSize(pageSize-4)
        }        
    }
    
    const alertOpen=()=>{
        toast.warning(`Please Connect Your Wallet`,{autoClose: 8000});            
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const done=async()=>{
    await sleep(7000);
    history.push("/my-NFT")
    window.location.reload(false);    
    }             
      
    return (
        <Layout>
            <div className='sidebar-inner d-none d-xl-flex align-items-start flex-wrap'>
                <Link className='active' to="/my-NFT">Profile</Link>
                <Link to="/upcoming">Staking</Link>
                <Link to="/upcoming">Badges</Link>
                <Link to="/viewtoken">Inventory</Link>
                <Link to="/viewtoken">Claim</Link>
                <Link to="/avatar">Avatar</Link>
                <Link to="/create-artists">Settings</Link>
            </div>
            <Container>
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>            
                <Card className='card-dash mb-4 d-block border-0'>                    
                    
                                        
                         <Row className='align-items-center'>
                         <Col lg={4} className="order-lg-2 mb-lg-0 mb-2 text-end">
                         {getIProfile === "" || getIProfile === null || getIProfile === undefined  || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined?( 
                             <>
                             {localStorage.getItem('EAWalletAddress') === "" || localStorage.getItem('EAWalletAddress') === null || localStorage.getItem('EAWalletAddress') === undefined ?(
                                 <Button className='btn btn-blue' onClick={()=>{alertOpen()}}>Create Artist</Button>

                             ):(
                                <Button className='btn btn-blue' onClick={()=>{history.push({
                                 pathname: '/create-artists'
                                })}}>Create Artist</Button>
                             )}
                             
                             </>
                         ):(
                             <>
                             <Button className='btn btn-blue' onClick={()=>{history.push({
                                 pathname: '/create-artists'
                             })}}>Edit Artist</Button>&nbsp;
                             <Button className='btn btn-blue' onClick={()=>{history.push({
                                 pathname: '/Mint-NFT'
                             })}}>Mint NFT</Button>
                             </>
                         )}
                             
                         </Col>
                         <div className="profile-banner">
                    <div className="profile-card">
                    {getIProfile[0] === null || getIProfile[0] === "" || getIProfile[0] === undefined || getIProfile[0] === " "  ? (
                        <>
                          <img src={Logo} alt="pics" width={"1500px"} height={"260px"} />
                        </>
                      ):(
                        <>
                        {getIProfile[0].bgurl === null || getIProfile[0].bgurl === "" || getIProfile[0].bgurl === undefined || getIProfile[0].bgurl === " " ? (<>
                          <img src={Logo} alt="pics" width={"1500px"} height={"260px"} />
                        </>):(
                          <>
                          <img src={getIProfile[0].bgurl} alt="pic" width={"1500px"} height={"260px"}/>
                        </>
                        )}                        
                        </>
                      )}                        
                      <Button variant='blue' onClick={handleShow}>Add cover</Button>
                    </div>                   
                      {getIProfile[0] === null || getIProfile[0] === "" || getIProfile[0] === undefined || getIProfile[0] === " "  ? (
                        <> <Link className='profile-pic'>
                          <img src={Logo} alt="pic" />
                          </Link>
                        </>
                      ):(
                        <>
                        {getIProfile[0].Imageurl === null || getIProfile[0].Imageurl === "" || getIProfile[0].Imageurl === undefined || getIProfile[0].Imageurl === " "  ? (<>
                            <Link className='profile-pic'>
                          <img src={Logo} alt="pic" />
                          </Link>
                        </>):(<> 
                            <Link className='profile-pic'>                       
                          <img src={getIProfile[0].Imageurl} alt="pic" />
                          </Link>
                        </>)}
                        
                        </>
                      )}
                                            
                         </div>
                         <Col lg={8}>
                             <div className='d-flex flex-wrap flex-lg-nowrap align-items-center create-art'>                                                              
                                 <div className=''>
                                     {getIProfile === "" || getIProfile === null || getIProfile === undefined || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined?(
                                         <>
                                         <p className="heading mb-0">Artist Name : <strong>{configfile.nullvalue}</strong> </p>
                                         <p className='heading mb-0'>Social : {configfile.nullvalue} <br />Wallet address : {configfile.nullvalue} </p>
                                         </>
                                     ):(
                                         <>
                                         <p className="heading mb-0">Artist Name : <strong>{getIProfile[0].UserName}</strong></p>
                                         <p className='heading mb-0'>Social : 
                                             {getIProfile[0].Personalsiteurl === null || getIProfile[0].Personalsiteurl === undefined || getIProfile[0].Personalsiteurl === "" ? (
                                                <strong> {configfile.nullvalue} </strong>
                                             ):(                                                
                                                <strong>
                                                    &nbsp;
                                                {getIProfile[0].Personalsiteurl}
                                                &nbsp;
                                                </strong>
                                             )}
                                              <br />Wallet address :                                          
                                         &nbsp;
                                        <a  href={"https://explorer.aptoslabs.com/account/" + localStorage.getItem("EAWalletAddress")} target="_blank" rel="noreferer noreferrer">
                                        <strong>{localStorage.getItem('EAWalletAddress').slice(0,12)}....{localStorage.getItem('EAWalletAddress').slice(50,58)} </strong>
                                        &nbsp;
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                </svg>
                                        </a>                                        
                                         <p className='heading mb-0'>Twitter : {getIProfile[0].Twittername === null || getIProfile[0].Twittername === undefined || getIProfile[0].Twittername === "" ? (
                                            <strong>{configfile.nullvalue}</strong>
                                         ):(
                                            <a  href={"https://twitter.com/" + getIProfile[0].Twittername} target="_blank" rel="noreferer noreferrer">
                                            <strong>
                                            {getIProfile[0].Twittername}
                                            &nbsp;
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                </svg>
                                            </strong>
                                            </a>
                                         )}                                         
                                         </p>
                                         </p>
                                         </>
                                     )}
                                     
                                 </div>
                             </div>                             
                         </Col>
                     </Row>                                        
                   
                </Card>
             
                <div className='nft-tabs'>                    
                    <Tabs defaultActiveKey="Activity" id="uncontrolled-tab-example" className='dashboard-tabs'>                    
                        <Tab eventKey="Sale-NFT" title="Sale-NFT">
                            
                            <Row>                            
                                     <SaleTab/>                                                 
                            </Row>                            
                        </Tab>                                                
                        <Tab eventKey="Owned-NFT" title="Owned-NFT">                            
                            <Row>                            
                                     <OwnTab/>                                                 
                            </Row>                            
                        </Tab>                        
                        <Tab eventKey="Created-NFT" title="Created-NFT">                            
                            <Row>                            
                                     <CreateTabTab/>                                                 
                            </Row>                            
                        </Tab>                        
                        
                        
                        {/* <Tab eventKey="Fractional-Claim" title="Fractional-Claim">
                            <div className='d-flex justify-content-end mb-3'>
                            <Dropdown>
                                <Dropdown.Toggle variant='dark' className='noarrow' id="dropdown-basic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi ms-0 me-2 bi-sort-down-alt" viewBox="0 0 16 16">
                                        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
                                    </svg> Sort
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='list-unstyled' align="end">
                                    <Form.Check 
                                        type='radio'
                                        id="sort 4"
                                        label="View All"
                                        name="sort"
                                        onChange={()=>{setrecent("View All")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 1"
                                        label="24 hours"
                                        name="sort"
                                        onChange={()=>{setrecent("Recently added")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 2"
                                        name="sort"
                                        label="Price low - high"
                                        onChange={()=>{setrecent("Low to High")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 3"
                                        name="sort"
                                        label="Price high - low"
                                        onChange={()=>{setrecent("High to Low")}}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                            <Row>
                            {getReCliamFra === null || getReCliamFra === "" || getReCliamFra === undefined || getReCliamFra[0] === null || getReCliamFra[0] === "" || getReCliamFra[0] === undefined || filterdataFraReClaim()[0] === null || filterdataFraReClaim()[0] === "" || filterdataFraReClaim()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>                                
                                {filterdataFraReClaim().map((x, index) => {  
                                    if(index<pageSize)                 
                                    return( 
                                    <ClaimTabReFra x={x} />
                                    )
                                })}
                                </>
                            )}                                                                
                            </Row>

                            {getReCliamFra.length <= 10 ? (
                                <></>
                            ):(
                                <div className='pagination justify-content-end d-flex align-items-center'>                                
                                <Button variant='page' onClick={()=>{decrementSize()}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi m-0 bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </Button>
                                <Button variant='page' onClick={()=>{setPageSize(pageSize+4)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi m-0 bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Button>
                            </div>
                            ) }                            
                        </Tab>        */}
                        <Tab eventKey="Activity" title="Activity">
                            <div className='d-flex justify-content-end mb-3'>
                            <Dropdown>
                                <Dropdown.Toggle variant='dark' className='noarrow' id="dropdown-basic">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi ms-0 me-2 bi-sort-down-alt" viewBox="0 0 16 16">
                                        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
                                    </svg> Sort
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='list-unstyled' align="end">
                                    <Form.Check 
                                        type='radio'
                                        id="sort 4"
                                        label="View All"
                                        name="sort"
                                        onChange={()=>{setrecent("View All")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 1"
                                        label="24 hours"
                                        name="sort"
                                        onChange={()=>{setrecent("Recently added")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 2"
                                        name="sort"
                                        label="Price low - high"
                                        onChange={()=>{setrecent("Low to High")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 3"
                                        name="sort"
                                        label="Price high - low"
                                        onChange={()=>{setrecent("High to Low")}}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                            <Row>
                            {getImgreffalgoActivity === null || getImgreffalgoActivity === "" || getImgreffalgoActivity === undefined || getImgreffalgoActivity[0] === null || getImgreffalgoActivity[0] === "" || getImgreffalgoActivity[0] === undefined || filterdata5()[0] === null || filterdata5()[0] === "" || filterdata5()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                            
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata5().map((x, index) => {   
                                if(index<pageSize)                
                                return(                                     
                                    <Card className='card-dash p-3 d-block border-0'>
                                    <div className='activity-item d-flex align-items-center mb-3'>        
                                            <div className="activity-content">                                                
                                                <p>  {x.EscrowAddress}</p>
                                                {/* {x.Assetid === "" || x.Assetid === null || x.Assetid === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://testnet.algoexplorer.io/asset/${x.Assetid}`)}>  {x.Assetid}</p>
                                                </>)} */}
                                                <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://mumbai.polygonscan.com/address/${x.ownerAddress}`)}> {x.ownerAddress}</p>                
                                                {x.NFTDescription === "" || x.NFTDescription === null || x.NFTDescription === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://mumbai.polygonscan.com/address/${x.NFTDescription}`)}>  {x.NFTDescription}</p>
                                                </>)}
                                                <div className="time">{x.TimeStamp}</div>
                                                
                                            </div>
                                        </div>                                                                                                        
                                    </Card>                                    
                                )
                            })}  
                            </>
                            )}                                                              
                            </Row>

                            {getImgreffalgoActivity <= 10 ? (
                                <></>
                            ):(
                                <div className='pagination justify-content-end d-flex align-items-center'>                                
                                <Button variant='page' onClick={()=>{decrementSize()}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi m-0 bi-chevron-left" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                                    </svg>
                                </Button>
                                <Button variant='page' onClick={()=>{setPageSize(pageSize+4)}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#fff" class="bi m-0 bi-chevron-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                                    </svg>
                                </Button>
                            </div>

                            ) }                            
                        </Tab>                                                                                                                                               
                    </Tabs>                                                   
                </div>
                <Modal show={show} size="sm" className="modal-reset" centered >
                <Modal.Header >
                <Modal.Title>Update cover</Modal.Title>
                </Modal.Header>
                <Modal.Body>                    
                    <div className="mt-3">
                      {localStorage.getItem('EAWalletAddress') === null || localStorage.getItem('EAWalletAddress') === undefined || localStorage.getItem('EAWalletAddress') === "" ? (
                      <>
                      <Link >
                      <label htmlFor="uploadFile" className='mb-3 btn btn-primary btn-lg w-100' onClick={()=>{window.location.reload()}}>Please Connect Wallet</label>
                      </Link>
                      </>
                      ):(
                      <>
                      Upload new cover for your profile page. We recommend to upload images in 1500x260 resolution
                      <input type="file" hidden id='uploadFile' onChange = {captureFile}/>
                      <label htmlFor="uploadFile" className='mb-3 btn btn-primary btn-lg w-100'>Select file</label>
                      <Button variant="white" className='w-100' size={'lg'} onClick={handleClose}>
                          Cancel
                      </Button>
                      </>
                      )}
                        
                    </div>
                </Modal.Body>
               </Modal>
            </Container>
        </Layout>
    )
}

export default MyNFT;