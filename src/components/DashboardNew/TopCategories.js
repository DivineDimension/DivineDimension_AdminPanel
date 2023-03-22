import React,{useState,useEffect} from 'react';
import Layout from './LayoutT';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import Loader from "react-js-loader";
import Icon1 from '../../assets/images/elem-original.png';
import cardbgblur from '../../assets/images/card-bg-blur.png';
import firebase from '../../NFTFolder/firebase';

const TopCategories = () => {
    useEffect(() => {
        document.title = "DivineDimension | HotCollections"
    }, [])
    const[loader, setLoader] = useState(false);    
    const[pageSize,setPageSize]=useState(12);     
    const [searchText, setSearchText] = React.useState('');    
    const[getImgreffalgoCount,setgetImgreffalgoCount]=useState([]); 
    const[getImgreffprofile,setgetImgreffprofile]=useState([]);        
    const dbcallProfile=async()=>{        
        let req = [];
        let c=0;
        //firebase.auth().signInAnonymously().then((response)=>{      
          firebase.database().ref("EPuserprofile").on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();      
               
                if(value.walletAddress === null || value.walletAddress === undefined || value.walletAddress === "")          {
                c=c+1
                }else{
                    req.push(            
                        {
                          Bio:value.Bio,
                          Imageurl:value.Imageurl,
                          Customurl:value.Customurl,
                          Email:value.Email,
                          Personalsiteurl:value.Personalsiteurl,
                          TimeStamp:value.TimeStamp,
                          Twittername:value.Twittername,
                          UserName:value.UserName,
                          bgurl:value.bgurl,
                          valid   :value.valid,
                          walletAddress:value.walletAddress,                    
                        })       
                }                                         
                });        
              }
              setgetImgreffprofile(req);
            });                 
        //})                      
    }      
    useEffect(()=>{dbcallProfile()},[])      

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

    const filterSearchData=()=>{                
        if(searchText === "" || searchText === null || searchText === undefined){                
        }else{
            let data = getImgreffprofile.filter((val)=>{            
            let val1 = (val.UserName).toLowerCase().includes(searchText.toLocaleLowerCase())                
            return val1;
        }) 
        return data;
    }                 
    return getImgreffprofile;
    }
    
    return (    
        <Layout>
          <div className='sidebar-inner d-none d-xl-flex align-items-start flex-wrap'>
                <Link to="/top-nftcollection">NFT Collections</Link>
                <Link className="active" to="/top-categories">Trending Collections</Link>
                <Link to="/genesis-market">Royalty NFTs</Link>  
            </div>
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
                            <div className='d-flex mt-4 mb-3 align-items-start flex-wrap'>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                Collections
                              </Link>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                Avatar
                              </Link>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                Entity
                              </Link>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                Equipment
                              </Link>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                Art
                              </Link>
                              <Link to='/' className='d-flex link-pill mb-2 me-3 align-items-center '>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-files" viewBox="0 0 16 16">
                                  <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zM3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z"/>
                                </svg>
                                LAND & Estate
                              </Link>
                            </div>                        

                            <Row>                            
                            {getImgreffprofile === null || getImgreffprofile === "" || getImgreffprofile === undefined || getImgreffprofile[0] === null || getImgreffprofile[0] === "" || getImgreffprofile[0] === undefined ?(
                                <>                                
                                <Loader type="bubble-loop" bgColor={"#FFFFFF"}  color={'#FFFFFF'} size={100} />                                
                                </>
                            ):(
                                <>
                                {filterSearchData()[0] === null || filterSearchData()[0] === "" || filterSearchData()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                <h2>No Data Found</h2>                                
                                <Link to="/top-categories" className='btn btn-primary'>Browse marketplace</Link>
                                </div>
                                ) : (
                                <>
                                    {filterSearchData().map((x, index) => {  
                                    if(index<pageSize)                                                  
                                    return(                                         
                    
                    <Col className="profile-banner"  xxl={3} md={4} sm={6} xs={12}>                                            
                    <Link to={{
                    pathname: "/my-NFTcopyy",            
                    state:{allData:x}}}>       
                        <Card className='card-dash profile-card border-0' style={{minHeight: '360px'}}>                             
                        {getImgreffprofile[0] === null || getImgreffprofile[0] === "" || getImgreffprofile[0] === undefined || getImgreffprofile[0] === " "  ? (
                        <>
                          <img src={cardbgblur} alt="pics" style={{width:50,height:50}} className='img-fluid profile-card-image w-100' />
                        </>
                      ):(
                        <>
                        {x.bgurl === null || x.bgurl === "" || x.bgurl === undefined || x.bgurl === " "  ? (<>
                            <img src={cardbgblur} alt="pics" style={{width:50,height:50}}  />
                        </>):(
                          <>
                          <img src={x.bgurl} alt="pic" className='img-fluid w profile-card-image-100'/>
                        </>
                        )}                        
                        </>
                      )}                                
                      <br />              
                      <h6 className='mb-2'>{x.UserName} <br /><span className='text-success'></span></h6>
                        </Card>                              
                        </Link>                           
                      {getImgreffprofile[0] === null || getImgreffprofile[0] === "" || getImgreffprofile[0] === undefined || getImgreffprofile[0] === " " ? (
                        <>
                         <Link className='profile-pic' style={{width: '70px', height: '70px'}}>
                          <img src={Icon1} alt="pic" />
                          </Link>
                        </>
                      ):(
                        <>  
                        {x.Imageurl === null || x.Imageurl === "" || x.Imageurl === undefined || x.Imageurl === " "  ? (<>
                            <Link className='profile-pic' style={{width: '70px', height: '70px'}}>
                          <img src={Icon1} alt="pic" />
                          </Link>
                        </>):(<> 
                            <Link className='profile-pic' style={{width: '70px', height: '70px'}}>       
                          <img src={x.Imageurl} alt="pic" />                                                    
                        </Link>                        
                        </>
                        )}                             
                        </>
                      )}       
                    </Col>                                         
                    )
                    })}                                                                                                        
                    </>                                
                    )}                                
                    </>                                
                )}                                                        
                            </Row>
                            {getImgreffprofile.length <= 10 ? (
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

export default TopCategories;