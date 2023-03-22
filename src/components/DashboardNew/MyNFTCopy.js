import React,{useEffect,useState} from 'react';
import Layout from './LayoutT';
import { Link,useLocation} from 'react-router-dom';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import firebase from '../../NFTFolder/firebase';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
//import Icon1 from '../../assets/images/elem-original.png';
import Logo from '../../assets/images/cover.png'
import configfile from '../../NFTFolder/config.json'
const MyNFTCopy = (props) => {
    useEffect(() => {
        document.title = "ELEMENT | MyNFT"
    }, [])    
    const[getImgreffalgoActivity,setgetImgreffalgoActivity]=useState([]);    
    const[pageSize,setPageSize]=useState(12);         
    const[getrecent,setrecent]=useState("Low to High");    
    const location = useLocation();            
    const[getImgreffalgo,setgetImgreffalgo]=useState([]);    
    const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);
    const[getImgreffalgosowned,setgetImgreffalgoowned]=useState([]);    
    const[getIProfile,setgetIProfile]=useState([""]);       
    const dbcallalgoActivity=async()=>{        
        let req = [];
        if(location.state  === null || location.state  === "" || location.state  === " " || location.state === undefined || location.state === ''){
        }
        else{            
        let getalgo=location.state.allData.ownerAddress;        
        firebase.auth().signInAnonymously().then((response)=>{              
          firebase.database().ref("activitytable").child(getalgo).on("value", (data) => {
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
        })              
          }        
    }      
    useEffect(()=>{dbcallalgoActivity()},[])
   

    const dbcallalgos=async()=>{        
        let req = [];
        if(location.state  === null || location.state  === "" || location.state  === " " || location.state === undefined || location.state === ''){
        }
        else{
        let getalgo=location.state.allData.ownerAddress;              
        firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("imageSaleAlgosRoyalty").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgosale(req);
            });    
        })              
          }        
    }      
    useEffect(()=>{dbcallalgos()},[])
    
    const dbcallProfile=async()=>{            
        let r=[];
        try {                 
        if(location.state  === null || location.state  === "" || location.state  === " " || location.state === undefined || location.state === ''){
        }
        else{
        firebase.auth().signInAnonymously().then((response)=>{      
        firebase.database().ref("EPuserprofile").child(location.state.allData.ownerAddress).on("value", (data) => {          
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
                WalletAddress: data.val().WalletAddress,
                bgurl:data.val().bgurl,
                valid:data.val().valid
              })                
          }
          else{
            setgetIProfile([""]);  
          }          
          setgetIProfile(r);
        });   
        })               
        }
      } catch (error) {      
      }                
    }    
    useEffect(()=>{dbcallProfile()},[])
    const dbcallalgo=async()=>{        
        let req = [];
        
        if(location.state  === null || location.state  === "" || location.state  === " " || location.state === undefined || location.state === ''){
        }
        else{
        let getalgo=location.state.allData.ownerAddress
        firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("imagerefAlgoRoyalty").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgo(req);
            });    
        })              
          }        
    }      
    useEffect(()=>{dbcallalgo()},[])
    

    const dbcallalgoowned=async()=>{        
        let req = [];
        if(location.state  === null || location.state  === "" || location.state  === " " || location.state === undefined || location.state === ''){
        }
        else{
        let getalgo=location.state.allData.ownerAddress
        firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("imageRoyaltybuy").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgoowned(req);
            });  
        })                
          }        
    }      
    useEffect(()=>{dbcallalgoowned()},[])    

    const filterdata=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosale.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosale.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosale.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})          
          return data;
        }        
        return getImgreffalgosale
    }

    const filterdata2=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();                
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosowned.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosowned.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosowned.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})          
          return data;
        }        
        return getImgreffalgosowned
    }

    const filterdata3=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();                
        if(getrecent === "Recently added"){        
            let data = getImgreffalgo.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgo.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgo.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})        
          return data;
        }        
        return getImgreffalgo
    }


    const decrementSize=()=>{
        if(pageSize >= 16){
        setPageSize(pageSize-4)
        }        
    }

    const filterdata5=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();                
        if(getrecent === "Recently added"){        
            let data = getImgreffalgoActivity.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgoActivity.sort((a,b)=>{ return parseFloat(a.NFTPrice/1000000) - parseFloat(b.NFTPrice/1000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgoActivity.sort((a,b)=>{ return parseFloat(b.NFTPrice/1000000) - parseFloat(a.NFTPrice/1000000)})        
          return data;
        }        
        return getImgreffalgoActivity
    }
    return (
        <Layout>
            <Container>
            <ToastContainer position='top-center' draggable = {false} transition={Zoom} autoClose={8000} closeOnClick = {false}/>
                <Card className='card-dash mb-4 d-block border-0'>
                    <Row className='align-items-center'>
                        <Col lg={4} className="order-lg-2 mb-lg-0 mb-2 text-end">                        
                        </Col>
                    <div className="profile-banner">
                    <div className="profile-card">
                    {getIProfile[0] === null || getIProfile[0] === "" || getIProfile[0] === undefined || getIProfile[0] === " " || getIProfile[0] === NaN ? (
                        <>
                          <img src={Logo} alt="pics" width={"1500px"} height={"260px"} />
                        </>
                      ):(
                        <>
                        {getIProfile[0].bgurl === null || getIProfile[0].bgurl === "" || getIProfile[0].bgurl === undefined || getIProfile[0].bgurl === " " || getIProfile[0].bgurl === NaN ? (<>
                          <img src={Logo} alt="pics" width={"1500px"} height={"260px"} />
                        </>):(
                          <>
                          <img src={getIProfile[0].bgurl} alt="pic" width={"1500px"} height={"260px"}/>
                        </>
                        )}                        
                        </>
                      )}                                              
                    </div>                   
                      {getIProfile[0] === null || getIProfile[0] === "" || getIProfile[0] === undefined || getIProfile[0] === " " || getIProfile[0] === NaN ? (
                        <> <Link className='profile-pic'>
                          <img src={Logo} alt="pic" />
                          </Link>
                        </>
                      ):(
                        <>
                        {getIProfile[0].Imageurl === null || getIProfile[0].Imageurl === "" || getIProfile[0].Imageurl === undefined || getIProfile[0].Imageurl === " " || getIProfile[0].Imageurl === NaN ? (<>
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
                                         <p className='subheading mb-0'>Name : <strong>{configfile.nullvalue}</strong></p>
                                         <p className='subheading mb-0'>Social : <strong>{configfile.nullvalue} </strong><br />Wallet address : <strong>{configfile.nullvalue}</strong></p>
                                         </>
                                     ):(
                                         <>
                                         <p className='subheading mb-0'>Name : <strong>{getIProfile[0].UserName}</strong></p>
                                         <p className='subheading mb-0'>Social : 
                                             {getIProfile[0].Personalsiteurl === null || getIProfile[0].Personalsiteurl === undefined || getIProfile[0].Personalsiteurl === "" ? (
                                                <strong>{configfile.nullvalue}</strong>
                                             ):(                                            
                                                <>
                                                &nbsp;
                                                <strong>{getIProfile[0].Personalsiteurl}</strong>
                                                &nbsp;
                                                </>                                                                                            
                                             )}
                                              <br />Wallet address :                                          
                                         &nbsp;
                                         {location.state === "" || location.state === undefined || location.state === null ? (
                                            <strong>{configfile.nullvalue}</strong>
                                         ):(
                                            <a  href={"https://testnet.algoexplorer.io/address/"+location.state.allData.ownerAddress} target="_blank" rel="noreferer noreferrer">                                    
                                            <strong>{location.state.allData.ownerAddress.slice(0,12)}....{location.state.allData.ownerAddress.slice(50,58)} </strong>
                                            &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                    </svg>
                                            </a>                                        
                                         )}
                                        
                                         <p className='subheading mb-0'>Twitter : {getIProfile[0].Twittername === null || getIProfile[0].Twittername === undefined || getIProfile[0].Twittername === "" ? (
                                            <strong>{configfile.nullvalue}</strong>
                                         ):(
                                            <a  href={"https://twitter.com/" + getIProfile[0].Twittername} target="_blank" rel="noreferer noreferrer">
                                            <strong>{getIProfile[0].Twittername}</strong>
                                            &nbsp;
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                </svg>
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
                        <Tab eventKey="all" title="On Sale">
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
                            {getImgreffalgosale === null || getImgreffalgosale === "" || getImgreffalgosale === undefined || getImgreffalgosale[0] === null || getImgreffalgosale[0] === "" || getImgreffalgosale[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFTcopy" className='btn btn-primary'>Browse marketplace</Link>
                                </div>

                            ) : (
                                <>   
                            {filterdata().map((x, index) => {   
                                if(index<pageSize)                
                                return( 
                                    <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                    <Card className='card-dash p-3 d-block border-0'>
                                        <div className='card-img text-center mb-2'>
                                            <Link to={{
                                                pathname: "/NFT-details",            
                                                state:{allData:x}                                                
                                            }}>
                                                <img src={x.Imageurl} alt="image" className='img-fluid' />
                                            </Link>
                                        </div>
                                        <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>
                                                                                        
                                        </div>                                        
                                        <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/1000000}</h4>                                         
                                    </Card>
                                    </Col>
                                )
                            })} 
                            </>
                            )}                                                               
                            </Row>

                            {getImgreffalgosale.length <= 10 ? (
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
                        <Tab eventKey="hot-collection" title="Owned">
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
                            {getImgreffalgosowned === null || getImgreffalgosowned === "" || getImgreffalgosowned === undefined || getImgreffalgosowned[0] === null || getImgreffalgosowned[0] === "" || getImgreffalgosowned[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFTcopy" className='btn btn-primary'>Browse marketplace</Link>
                                </div>

                            ) : (
                                <>                            
                            {filterdata2().map((x, index) => {  
                                if(index<pageSize)                 
                                return( 
                                    <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                    <Card className='card-dash p-3 d-block border-0'>
                                        <div className='card-img text-center mb-2'>                                            
                                                <img src={x.Imageurl} alt="image" className='img-fluid' />
                                        </div>
                                        <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>                                            
                                        </div>                                        
                                        <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/1000000}</h4>                                         
                                    </Card>
                                    </Col>
                                )
                            })}   
                            </>
                            )}                                                             
                            </Row>

                            {getImgreffalgosowned.length <= 10 ? (
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
                        <Tab eventKey="popular-collection" title="Created">

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
                            {getImgreffalgo === null || getImgreffalgo === "" || getImgreffalgo === undefined || getImgreffalgo[0] === null || getImgreffalgo[0] === "" || getImgreffalgo[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFTcopy" className='btn btn-primary'>Browse marketplace</Link>
                                </div>

                            ) : (
                                <>                                
                                {filterdata3().map((x, index) => {    
                                    if(index<pageSize)               
                                    return( 
                                    <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                    <Card className='card-dash p-3 d-block border-0'>
                                        <div className='card-img text-center mb-2'>                                            
                                                <img src={x.Imageurl} alt="image" className='img-fluid' />                                            
                                        </div>
                                        <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>                                            
                                        </div>                                        
                                        <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/1000000}</h4>                                         
                                    </Card>
                                    </Col>
                                    )
                                })}
                                </>
                            )}                                                                
                            </Row>

                            {getImgreffalgo.length <= 10 ? (
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
                            {getImgreffalgoActivity === null || getImgreffalgoActivity === "" || getImgreffalgoActivity === undefined || getImgreffalgoActivity[0] === null || getImgreffalgoActivity[0] === "" || getImgreffalgoActivity[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFTcopy" className='btn btn-primary'>Browse marketplace</Link>
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
                                                {x.Assetid === "" || x.Assetid === null || x.Assetid === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://testnet.algoexplorer.io/asset/${x.Assetid}`)}>  {x.Assetid}</p>
                                                </>)}
                                                <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://testnet.algoexplorer.io/address/${x.ownerAddress}`)}> {x.ownerAddress}</p>                
                                                {x.NFTDescription === "" || x.NFTDescription === null || x.NFTDescription === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://testnet.algoexplorer.io/tx/${x.NFTDescription}`)}>  {x.NFTDescription}</p>
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

                            {getImgreffalgoActivity.length <= 10 ? (
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
            </Container>
        </Layout>
    )
}

export default MyNFTCopy;