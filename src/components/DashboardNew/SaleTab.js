import React,{useEffect,useState} from 'react';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import firebase from '../../NFTFolder/firebase';
import configfile from '../../NFTFolder/config.json'

const SaleTab=()=>{
    const[pageSize,setPageSize]=useState(12);     
    const[getImgreffalgosaleNFT,setgetImgreffalgosaleNFT]=useState([]);
    const[getImgreffalgosaleNFT1155,setgetImgreffalgosaleNFT1155]=useState([]);
    const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);
    console.log("GetLog",getImgreffalgosale)
    const[getImgreffalgosaleFractionalNFT,setgetImgreffalgosaleFractionalNFT]=useState([]);
    const[getImgreffalgosaleAuctionNFT,setgetImgreffalgosaleAuctionNFT]=useState([]);
    const [searchText, setSearchText] = React.useState('');
    const[getrecent,setrecent]=useState("View All");    

    const dbcallalgosaleNFT1155=async()=>{
        //console.log("inside dbcallalgo function")  
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");       
        //firebase.auth().signInAnonymously().then((response)=>{             
          firebase.database().ref("EPolygonNFT1155S").child(getalgo).on("value", (data) => {
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
                    NFTModel:value.NFTModel
                  })                
                });        
              }
              req.reverse()
              setgetImgreffalgosaleNFT1155(req);
            });     
        //})             
          }        
    }      
    useEffect(()=>{dbcallalgosaleNFT1155()},[])

    const dbcallalgosaleNFT=async()=>{
        //console.log("inside dbcallalgo function")  
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");       
        //firebase.auth().signInAnonymously().then((response)=>{             
          firebase.database().ref("EPolygonNFTNS").child(getalgo).on("value", (data) => {
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
                    NFTModel:value.NFTModel
                  })                
                });        
              }
              req.reverse()
              setgetImgreffalgosaleNFT(req);
            });     
        //})             
          }        
    }      
    useEffect(()=>{dbcallalgosaleNFT()},[])

    const dbcallalgos=async()=>{
        //console.log("inside dbcallalgo function")  
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");       
        //firebase.auth().signInAnonymously().then((response)=>{             
          firebase.database().ref("EPolygonNFTRS").child(getalgo).on("value", (data) => {
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
                    NFTModel:value.NFTModel
                  })                
                });        
              }
              req.reverse()
              setgetImgreffalgosale(req);
            });     
        //})             
          }        
    }      
    useEffect(()=>{dbcallalgos()},[])

    const dbcallalgosaleNFTFrac=async()=>{
        //console.log("inside dbcallalgo function")  
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");       
        firebase.auth().signInAnonymously().then((response)=>{             
          firebase.database().ref("imageSaleAlgosFractional").child(getalgo).on("value", (data) => {
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
                    NFTModel:value.NFTModel
                  })                
                });        
              }
              req.reverse()
              setgetImgreffalgosaleFractionalNFT(req);
            });     
        })             
          }        
    }      
    useEffect(()=>{dbcallalgosaleNFTFrac()},[])
    

    const dbcallalgosaleNFTAuction=async()=>{
        //console.log("inside dbcallalgo function")  
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");       
        //firebase.auth().signInAnonymously().then((response)=>{             
          firebase.database().ref("EPolygonNFTAS").child(getalgo).on("value", (data) => {
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
                    AuctionTime:value.AuctionTime
                  })                
                });        
              }
              req.reverse()
              setgetImgreffalgosaleAuctionNFT(req);
            });     
        //})             
          }        
    }      
    useEffect(()=>{dbcallalgosaleNFTAuction()},[])
    const filterdataNFTNew=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();
        // console.log("DateExplore",weekdate)
        // console.log("DateExplore2",dateset)
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getImgreffalgosaleNFT;                                                
        }
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosaleNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosaleNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosaleNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        }
        else{
                let data = getImgreffalgosaleNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosaleNFT
    }
    const filterdata=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();
        // console.log("DateExplore",weekdate)
        // console.log("DateExplore2",dateset)
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getImgreffalgosale;                                                
        }
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosale.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosale.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosale.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        }
        else{
                let data = getImgreffalgosale.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosale
    }
    
    const filterdataFrac=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();
        // console.log("DateExplore",weekdate)
        // console.log("DateExplore2",dateset)
        if(searchText === "")
        {
        if(getrecent === "View All"){                    
            return getImgreffalgosaleFractionalNFT;                                                
        }                          
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosaleFractionalNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosaleFractionalNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosaleFractionalNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        }
        else{
                let data = getImgreffalgosaleFractionalNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosaleFractionalNFT
    }

    const filterdataAuction=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();
        // console.log("DateExplore",weekdate)
        // console.log("DateExplore2",dateset)
        if(searchText === "")
        {                 
        if(getrecent === "View All"){                    
            return getImgreffalgosaleAuctionNFT;                                                
        }             
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosaleAuctionNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosaleAuctionNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosaleAuctionNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        }
        else{
                let data = getImgreffalgosaleAuctionNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosaleAuctionNFT
    }
    const filterdata1155=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();
        // console.log("DateExplore",weekdate)
        // console.log("DateExplore2",dateset)
        if(searchText === "")
        {                 
        if(getrecent === "View All"){                    
            return getImgreffalgosaleNFT1155;                                                
        }             
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosaleNFT1155.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosaleNFT1155.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosaleNFT1155.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})
          //console.log("filtercall1",data)
          return data;
        }
        }
        else{
                let data = getImgreffalgosaleNFT1155.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosaleNFT1155
    }    
    const decrementSize=()=>{
        if(pageSize >= 16){
        setPageSize(pageSize-4)
        }        
    }
    return(        
                    <div className='nft-tabs'>
                    <Tabs defaultActiveKey="NFT" id="uncontrolled-tab-example" className='dashboard-tabs'>                    
                        <Tab eventKey="NFT" title="NFT">
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
                            {getImgreffalgosaleNFT === null || getImgreffalgosaleNFT === undefined || getImgreffalgosaleNFT === null || getImgreffalgosaleNFT[0] === null || getImgreffalgosaleNFT[0] === undefined || getImgreffalgosaleNFT[0] === null || filterdataNFTNew()[0] === null || filterdataNFTNew()[0] === "" || filterdataNFTNew()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>
                                {/* <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p> */}
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ):(
                                <>
                                {filterdataNFTNew().map((x, index) => {   
                                    if(index<pageSize)                
                                    return( 
                                        <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                        <Card className='card-dash p-3 d-block border-0'>
                                            <div className='card-img text-center mb-2'>
                                                {/* <Link to="/NFT-details"> */}
                                                    <img src={x.Imageurl} alt="image" className='img-fluid' />
                                                {/* </Link> */}
                                            </div>
                                            <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>
                                                {/* <h6 className='subheading'>Images</h6> */}
                                                {/* <Badge bg="purple">Image</Badge> */}
                                            </div>
                                            <p className='mb-2'>{x.NFTName} <br /><span className='text-success'>
                                            {x.SocialLink === null || x.SocialLink === "" || x.SocialLink === undefined ?(
                                                <>{configfile.nullvalue}</>
                                            ):(
                                                <>{x.SocialLink}</>
                                            )}                                                
                                                </span></p>
                                                <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getImgreffalgosaleNFT[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/100000000}</h4>                                             
                                        </Card>
                                        </Col>
                                    )
                                })} 
                                </>                                                                                          
                            )}                                                        
                            </Row>

                            {getImgreffalgosaleNFT.length <= 10 ? (
                                <></>
                            ):(
                                <div className='pagination justify-content-end d-flex align-items-center'>
                                {/* <div className='page-count'>1</div>
                                <div className='page-numbers'>of 49</div> */}
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
                        <Tab eventKey="Royalty" title="Royalty">
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
                            {getImgreffalgosale === null || getImgreffalgosale === undefined || getImgreffalgosale === null || getImgreffalgosale[0] === null || getImgreffalgosale[0] === undefined || getImgreffalgosale[0] === null || filterdata()[0] === null || filterdata()[0] === "" || filterdata()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>
                                {/* <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p> */}
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ):(
                                <>
                                {filterdata().map((x, index) => {   
                                    if(index<pageSize)                
                                    return( 
                                        <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                        <Card className='card-dash p-3 d-block border-0'>
                                            <div className='card-img text-center mb-2'>
                                                {/* <Link to="/NFT-details"> */}
                                                    <img src={x.Imageurl} alt="image" className='img-fluid' />
                                                {/* </Link> */}
                                            </div>
                                            <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>
                                                {/* <h6 className='subheading'>Images</h6> */}
                                                {/* <Badge bg="purple">Image</Badge> */}
                                            </div>
                                            <p className='mb-2'>{x.NFTName} <br /><span className='text-success'>
                                            {x.SocialLink === null || x.SocialLink === "" || x.SocialLink === undefined ?(
                                                <>{configfile.nullvalue}</>
                                            ):(
                                                // <>{x.SocialLink}</>
                                                <>{configfile.nullvalue}</>
                                            )}                                                
                                                </span></p>
                                                <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getImgreffalgosale[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/100000000}</h4> 
                                            {/* {x.NFTPrice === "" || x.NFTPrice === null || x.NFTPrice === undefined ?(
                                                <>                                            
                                                <input type="text" placeholder='Enter Price' className="className='d-flex mb-3 align-items-center" onChange={event => setprices( event.target.value)}/>
                                                <Button variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Set Price</Button>                                        
                                                </>
                                            ):(
                                                <Button variant="blue" className='w-100' onClick={()=>{saledb(x)}}>Sale</Button>                                        
                                            )}  */}
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
                                {/* <div className='page-count'>1</div>
                                <div className='page-numbers'>of 49</div> */}
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
                        {/* <Tab eventKey="Fractional" title="Fractional">
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
                            {getImgreffalgosaleFractionalNFT === null || getImgreffalgosaleFractionalNFT === undefined || getImgreffalgosaleFractionalNFT === null || getImgreffalgosaleFractionalNFT[0] === null || getImgreffalgosaleFractionalNFT[0] === undefined || getImgreffalgosaleFractionalNFT[0] === null || filterdataFrac()[0] === null || filterdataFrac()[0] === "" || filterdataFrac()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ):(
                                <>
                                {filterdataFrac().map((x, index) => {   
                                    if(index<pageSize)                
                                    return( 
                                        <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                        <Card className='card-dash p-3 d-block border-0'>
                                            <div className='card-img text-center mb-2'>                                                
                                                    <img src={x.Imageurl} alt="image" className='img-fluid' />                                            
                                            </div>
                                            <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>                                                
                                            </div>
                                            <p className='mb-2'>{x.NFTName} <br /><span className='text-success'>
                                            {x.SocialLink === null || x.SocialLink === "" || x.SocialLink === undefined ?(
                                                <>{configfile.nullvalue}</>
                                            ):(
                                                <>{x.SocialLink}</>
                                            )}                                                
                                                </span></p>
                                                <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getImgreffalgosaleFractionalNFT[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/10000000000}</h4> 
                                            
                                        </Card>
                                        </Col>
                                    )
                                })} 
                                </>                                                                                          
                            )}                                                        
                            </Row>

                            {getImgreffalgosaleFractionalNFT.length <= 10 ? (
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
                        </Tab> */}
                        <Tab eventKey="Auction" title="Auction">
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
                            {getImgreffalgosaleAuctionNFT === null || getImgreffalgosaleAuctionNFT === undefined || getImgreffalgosaleAuctionNFT === null || getImgreffalgosaleAuctionNFT[0] === null || getImgreffalgosaleAuctionNFT[0] === undefined || getImgreffalgosaleAuctionNFT[0] === null || filterdataAuction()[0] === null || filterdataAuction()[0] === "" || filterdataAuction()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>
                                {/* <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p> */}
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ):(
                                <>
                                {filterdataAuction().map((x, index) => {   
                                    if(index<pageSize)                
                                    return( 
                                        <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                        <Card className='card-dash p-3 d-block border-0'>
                                            <div className='card-img text-center mb-2'>
                                                {/* <Link to="/NFT-details"> */}
                                                    <img src={x.Imageurl} alt="image" className='img-fluid' />
                                                {/* </Link> */}
                                            </div>
                                            <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>
                                                {/* <h6 className='subheading'>Images</h6> */}
                                                {/* <Badge bg="purple">Image</Badge> */}
                                            </div>
                                            <p className='mb-2'>{x.NFTName} <br /><span className='text-success'>
                                            {x.SocialLink === null || x.SocialLink === "" || x.SocialLink === undefined ?(
                                                <>{configfile.nullvalue}</>
                                            ):(
                                                <>{x.SocialLink}</>
                                            )}                                                
                                                </span></p>
                                                <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={getImgreffalgosaleAuctionNFT[0].Imageurl} alt="logo" className='me-2 avatar-pic' /> {x.NFTPrice/100000000}</h4> 
                                            {/* {x.NFTPrice === "" || x.NFTPrice === null || x.NFTPrice === undefined ?(
                                                <>                                            
                                                <input type="text" placeholder='Enter Price' className="className='d-flex mb-3 align-items-center" onChange={event => setprices( event.target.value)}/>
                                                <Button variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Set Price</Button>                                        
                                                </>
                                            ):(
                                                <Button variant="blue" className='w-100' onClick={()=>{saledb(x)}}>Sale</Button>                                        
                                            )}  */}
                                        </Card>
                                        </Col>
                                    )
                                })} 
                                </>                                                                                          
                            )}                                                        
                            </Row>

                            {getImgreffalgosaleAuctionNFT.length <= 10 ? (
                                <></>
                            ):(
                                <div className='pagination justify-content-end d-flex align-items-center'>
                                {/* <div className='page-count'>1</div>
                                <div className='page-numbers'>of 49</div> */}
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
    )
}
export default SaleTab;