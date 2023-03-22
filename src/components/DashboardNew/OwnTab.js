import React,{useEffect,useState} from 'react';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import firebase from '../../NFTFolder/firebase';
import configfile from '../../NFTFolder/config.json'
import OwnedFrctionTab from './OwnedFrctionTab';
import OwnedAuctionTab from './OwnedAuctioTab';
import OwnedTab from './OwnedTab';
import OwnedTabNFT from './OwnedTabNFT';
import OwnedTab1155 from './OwnedTab1155';

const OwnTab=()=>{
    const[pageSize,setPageSize]=useState(12);     
    const[getImgreffalgosowned,setgetImgreffalgoowned]=useState([]);
    const[getowned1155,setgetowned1155]=useState([]);
    const[getImgreffalgosownedNFT,setgetImgreffalgoownedNFT]=useState([]);    
    const[getImgreffalgosownedFraNFT,setgetImgreffalgoownedFraNFT]=useState([]);    
    const[getImgreffalgosownedAucNFT,setgetImgreffalgoownedAucNFT]=useState([]);    
    const [searchText, setSearchText] = React.useState('');
    const[getrecent,setrecent]=useState("View All");    

    const dbcallowned1155=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFT1155Buy").child(getalgo).on("value", (data) => {
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
                })                
                });        
              }
              req.reverse()
              setgetowned1155(req);
            });        
        //})          
          }        
    }      
    useEffect(()=>{dbcallowned1155()},[])   

    const dbcallalgoowned=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTRBuy").child(getalgo).on("value", (data) => {
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
                })                
                });        
              }
              req.reverse()
              setgetImgreffalgoowned(req);
            });        
        //})          
          }        
    }      
    useEffect(()=>{dbcallalgoowned()},[])   
    const dbcallalgoownedNFT=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTNBuy").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgoownedNFT(req);
            });        
        //})          
          }        
    }      
    useEffect(()=>{dbcallalgoownedNFT()},[])    
    const dbcallalgoownedFractiNFT=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTNBuy").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgoownedFraNFT(req);
            });        
        //})          
          }        
    }      
    useEffect(()=>{dbcallalgoownedFractiNFT()},[])    

    const dbcallalgoownedAuctNFT=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{
        let getalgo=localStorage.getItem("EAWalletAddress");              
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPolygonNFTABuy").child(getalgo).on("value", (data) => {
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
              setgetImgreffalgoownedAucNFT(req);
            });        
        //})          
          }        
    }      
    useEffect(()=>{dbcallalgoownedAuctNFT()},[])    

    const filterdata2NFT=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {
        if(getrecent === "View All"){                    
            return getImgreffalgosownedNFT;                                                
        }                          
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosownedNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosownedNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosownedNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})          
          return data;
        }
        }
        else{
                let data = getImgreffalgosownedNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosownedNFT
    }
    const filterdata2=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {
        if(getrecent === "View All"){                    
            return getImgreffalgosowned;                                                
        }                          
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosowned.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosowned.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosowned.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})          
          return data;
        }
        }
        else{
                let data = getImgreffalgosowned.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosowned
    }
    const filterdata2FractiNFT=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getImgreffalgosownedFraNFT;                                                
        }
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosownedFraNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosownedFraNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosownedFraNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})          
          return data;
        }
        }
        else{
                let data = getImgreffalgosownedFraNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosownedFraNFT
    }
    const filterdata2AuctiNFT=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getImgreffalgosownedAucNFT;                                                
        }
        if(getrecent === "Recently added"){        
            let data = getImgreffalgosownedAucNFT.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getImgreffalgosownedAucNFT.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getImgreffalgosownedAucNFT.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})          
          return data;
        }
        }
        else{
                let data = getImgreffalgosownedAucNFT.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getImgreffalgosownedAucNFT
    }

    const filterdata21155=()=>{
        let dateset=new Date().toDateString();
        let today= new Date();
        let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();        
        if(searchText === "")
        {                          
        if(getrecent === "View All"){                    
            return getowned1155;                                                
        }
        if(getrecent === "Recently added"){        
            let data = getowned1155.filter((val)=>{                                                                                        
                return dateset === val.TimeStamp                        
            })
            return data;                                                
        }
        if(getrecent === "Low to High"){
          let data=getowned1155.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
          return data;
        }
        if(getrecent ===  "High to Low"){
          let data=getowned1155.sort((a,b)=>{ return parseFloat(b.NFTPrice/100000000) - parseFloat(a.NFTPrice/100000000)})          
          return data;
        }
        }
        else{
                let data = getowned1155.filter((val)=>{
                if(val.NFTName === "" || val.NFTName === null || val.NFTName === undefined){    
                }else{
                let val1 = (val.NFTName).toLowerCase().includes(searchText.toLocaleLowerCase())                                
                return val1
                }            
            })                                    
            return data;
        }                
        return getowned1155
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
                            {getImgreffalgosownedNFT[0] === null || getImgreffalgosownedNFT[0] === undefined || getImgreffalgosownedNFT[0] === null || filterdata2NFT()[0] === null || filterdata2NFT()[0] === "" || filterdata2NFT()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata2NFT().map((x, index) => { 
                                if(index<pageSize)                 
                                return( 
                                    <OwnedTabNFT x={x} />
                                )
                            })}                                                                
                            </>
                            )}
                            </Row>

                            {getImgreffalgosownedNFT.length <= 10 ? (
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
                            {getImgreffalgosowned[0] === null || getImgreffalgosowned[0] === undefined || getImgreffalgosowned[0] === null || filterdata2()[0] === null || filterdata2()[0] === "" || filterdata2()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>
                                {/* <p className="lead mb-4">Subscribe to authors and come back to see <br />NFTs from your favorite artists</p> */}
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata2().map((x, index) => { 
                                if(index<pageSize)                 
                                return( 
                                    <OwnedTab x={x} />
                                )
                            })}                                                                
                            </>
                            )}
                            </Row>

                            {getImgreffalgosowned.length <= 10 ? (
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
                            {getImgreffalgosownedFraNFT[0] === null || getImgreffalgosownedFraNFT[0] === undefined || getImgreffalgosownedFraNFT[0] === null || filterdata2FractiNFT()[0] === null || filterdata2FractiNFT()[0] === "" || filterdata2FractiNFT()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata2FractiNFT().map((x, index) => { 
                                if(index<pageSize)                 
                                return( 
                                    <OwnedFrctionTab x={x} />
                                )
                            })}                                                                
                            </>
                            )}
                            </Row>

                            {getImgreffalgosownedFraNFT.length <= 10 ? (
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
                        </Tab>                                                                              */}
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
                            {getImgreffalgosownedAucNFT[0] === null || getImgreffalgosownedAucNFT[0] === undefined || getImgreffalgosownedAucNFT[0] === null || filterdata2AuctiNFT()[0] === null || filterdata2AuctiNFT()[0] === "" || filterdata2AuctiNFT()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/my-NFT" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata2AuctiNFT().map((x, index) => { 
                                if(index<pageSize)                 
                                return( 
                                    <OwnedAuctionTab x={x} />
                                )
                            })}                                                                
                            </>
                            )}
                            </Row>

                            {getImgreffalgosownedAucNFT.length <= 10 ? (
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
export default OwnTab;