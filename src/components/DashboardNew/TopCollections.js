import React,{useState,useEffect} from 'react';
import Layout from './LayoutT';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import firebase from '../../NFTFolder/firebase';
import configelem from '../../NFTFolder/config.json';
import node from './nodeapi.json';
import { DateTime } from "luxon";
import TopCollectionTab from './TopCollectionTab';

const TopCollections = () => {
    useEffect(() => {
        document.title = "ELEMENT | HotCollections"
    }, [])
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[getElemBalance,setElembalance]=useState("");
    const[getElemBalanceEscrow,setElembalanceEscrow]=useState("");
    const[getElemBalanceEscrowCir,setElembalanceEscrowCir]=useState("");
    const[getElemBalanceTotal,setElembalanceTotal]=useState("");    
    const[getImgreffalgoLiked,setgetImgreffalgoLiked]=useState([]);    
    const[pageSize,setPageSize]=useState(12);     
    const [searchText, setSearchText] = React.useState('');    
    const[getrecentHours,setrecentHours]=useState("last 7 days");        
    
    const [algobalanceApp,setalgobalanceApp] = useState("");  
    const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);        
    const[getImgreffalgoCount,setgetImgreffalgoCount]=useState([]);    
    

    const dbcallalgos=async()=>{    
        let req = [];                        
        firebase.auth().signInAnonymously().then((response)=>{      
            firebase.database().ref("imageSaleAlgosRoyalty").on("value", (data) => {
                if (data) {
                  data.forEach((d) => {                
                    let value=d.val();
                    Object.keys(value).map(async(k)=>{                                                    
                    req.push(            
                        {
                          Assetid:value[k].Assetid,
                          Imageurl:value[k].Imageurl,
                          NFTPrice:value[k].NFTPrice,
                          EscrowAddress:value[k].EscrowAddress,
                          keyId:value[k].keyId,
                          NFTName:value[k].NFTName,
                          userSymbol:value[k].userSymbol,
                          Ipfsurl:value[k].Ipfsurl,
                          ownerAddress:value[k].ownerAddress,
                          previousoaddress:value[k].previousoaddress,
                          TimeStamp:value[k].TimeStamp,
                          NFTDescription:value[k].NFTDescription,
                          HistoryAddress:value[k].HistoryAddress,
                          Appid:value[k].Appid,
                          valid:value[k].valid,
                          CreatorAddress:value[k].CreatorAddress,
                          NFTType:value[k].NFTType,
                          NFTChannel:value[k].NFTChannel,
                          SocialLink:value[k].SocialLink
                        })               
                    })
                //}                
                });        
              }
              setgetImgreffalgosale(req);
        });  
        })                
                 
    }      
    useEffect(()=>{dbcallalgos()},[])
    
    const filterdata=()=>{
        if(searchText === "")
        {          
        let dateset=new Date().toDateString();        
        var dt = DateTime.local();    
        var dtone = DateTime.local().minus({weeks:1});            
        if(getrecentHours === "last 24 hours"){
            let data = getImgreffalgosale.filter((val)=>{                                                                        
                return dateset === val.TimeStamp            
            }                                        
          )                    
          return data;
        }
        if(getrecentHours === "last 7 days"){                        
            let weekdates4 = dtone.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY).replaceAll(',','');
            let weekdates5 = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY).replaceAll(',','');   
            
            let data2=getImgreffalgosale.filter((val)=>{                 
                console.log("CreatedTime",val.TimeStamp)         
                console.log("weekdate4",weekdates4)         
                console.log("weekdate5",weekdates5)         
                return (val.TimeStamp < weekdates5 || val.TimeStamp > weekdates4);                
            })                         
            return data2;
        }
        if(getrecentHours === "last 30 days"){               
            let today = new Date();
            let lastDayOfMonth = new Date(today.getFullYear(), today.getMonth()-0, 0);                              
            let formatdate = lastDayOfMonth.toDateString();
            let weekdates5c = dt.toLocaleString(DateTime.DATE_MED_WITH_WEEKDAY).replaceAll(',','');            
            let data=getImgreffalgosale.filter((val)=>{ 
                return ( formatdate <= val.TimeStamp ||  weekdates5c >= val.TimeStamp )                
            })            
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

    const filterdata2=()=>{
        if(searchText === "")
        {                  
        let data=getImgreffalgosale.sort((a,b)=>{ return parseFloat(a.NFTPrice/100000000) - parseFloat(b.NFTPrice/100000000)})          
        return data;
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
    }
      

    const decrementSize=()=>{
        if(pageSize >= 16){
        setPageSize(pageSize-4)
        }        
    }

    


    const dbcallalgoCount=async()=>{
        let c=0;
        firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("imagerefAlgolt").on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                  c=c+1                
                });        
              }
              setgetImgreffalgoCount(c)              
            });      
        })                      
    }      
    useEffect(()=>{dbcallalgoCount()},[])

    return (    
        <Layout>
            <Container>
                <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>            
                <div className='nft-tabs'>
                    <InputGroup className="input-group-search float-md-end">
                        <Form.Control placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
                        <Button variant="outline-secondary" id="button-addon2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                            </svg>
                        </Button>
                    </InputGroup>                    
                    <Tabs defaultActiveKey="all" id="uncontrolled-tab-example" className='dashboard-tabs'>
                        <Tab eventKey="all" title="All">
                            
                            <div className='d-flex justify-content-end mb-3'>
                            <div className='d-flex justify-content-end mb-3'>
                            
                            <Dropdown>
                            Top Collection over &nbsp;&nbsp;
                                <Dropdown.Toggle variant='dark' className='noarrow' id="dropdown-basic">
                                 {getrecentHours} &nbsp;
                                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi ms-0 me-2 bi-sort-down-alt" viewBox="0 0 16 16">
                                        <path d="M3.5 3.5a.5.5 0 0 0-1 0v8.793l-1.146-1.147a.5.5 0 0 0-.708.708l2 1.999.007.007a.497.497 0 0 0 .7-.006l2-2a.5.5 0 0 0-.707-.708L3.5 12.293V3.5zm4 .5a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1h-1zm0 3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1h-3zm0 3a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1h-5zM7 12.5a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7a.5.5 0 0 0-.5.5z"/>
                                    </svg>
                                </Dropdown.Toggle>

                                <Dropdown.Menu className='list-unstyled' align="end">
                                    <Form.Check 
                                        type='radio'
                                        id="sort 1"
                                        label="last 24 hours"
                                        name="sort"                                        
                                        onChange={()=>{setrecentHours("last 24 hours")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 2"
                                        name="sort"
                                        label="last 7 days"
                                        onChange={()=>{setrecentHours("last 7 days")}}
                                    />
                                    <Form.Check 
                                        type='radio'
                                        id="sort 3"
                                        name="sort"
                                        label="last 30 days"
                                        onChange={()=>{setrecentHours("last 30 days")}}
                                    />
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>                                                      
                            </div>
                            
                            <Row>

                            {getImgreffalgosale === null || getImgreffalgosale === "" || getImgreffalgosale === undefined || getImgreffalgosale[0] === null || getImgreffalgosale[0] === "" || getImgreffalgosale[0] === undefined || filterdata()[0] === null || filterdata()[0] === "" || filterdata()[0] === undefined ? (
                                    <div className="no-found py-5p text-center">
                                    <h2>No Data Found</h2>                                    
                                    <Link to="/top-collections" className='btn btn-primary'>Browse marketplace</Link>
                                    </div>
                            ) : (
                            <>
                            {filterdata().map((x, index) => {  
                                if(index<pageSize)              
                                return( 
                                    <TopCollectionTab x={x}/>                                    
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
                    </Tabs>
                </div>                
            </Container>
        </Layout>
    )
}

export default TopCollections;