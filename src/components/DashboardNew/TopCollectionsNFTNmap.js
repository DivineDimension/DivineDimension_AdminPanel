import React,{useState,useEffect} from 'react';
import Layout from './LayoutT';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import firebase from '../../NFTFolder/firebase';
import GNFTTradingCardTab from './GNFTTradingCardTab';
import GNFTArtTab from './GNFTArtTab';
import GNFTPetTab from './GNFTPetTab';
import GNFTPhotographyTab from './GNFTPhotographyTab';
import GNFTSportsTab from './GNFTSportsTab';
import GNFTExploreTab from './GNFTExploreTab';
import map1 from '../../assets/images/map1.png';
import map2 from '../../assets/images/map2.png';
import map3 from '../../assets/images/map3.png';
import map4 from '../../assets/images/map4.png';
import map5 from '../../assets/images/map5.png';
import map6 from '../../assets/images/map6.png';
import map7 from '../../assets/images/map7.png';
import map8 from '../../assets/images/map8.png';
import landmap from '../../assets/images/landmap.png';
import plus from '../../assets/images/plusicon.png';
import minus from '../../assets/images/minusicon.png';
const TopCollectionsNFTN = () => {
    useEffect(() => {
        document.title = "DivineDimension | Map"
    }, [])    
    const[pageSize,setPageSize]=useState(12);     
    const [searchText, setSearchText] = React.useState('');    
    const[getrecent,setrecent]=useState("View All");            
    const[getImgreffalgoCount,setgetImgreffalgoCount]=useState([]);    
    const[getImgreffalgosale,setgetImgreffalgosale]=useState([]);    
    const[getImgreffalgosaleSports,setgetImgreffalgosaleSports]=useState([]);    
    const[getImgreffalgosalePet,setgetImgreffalgosalePet]=useState([]);    
    const[getImgreffalgosaleArts,setgetImgreffalgosaleArts]=useState([]);    
    const[getImgreffalgosalePhotography,setgetImgreffalgosalePhotography]=useState([]);
    const[getImgreffalgosaleTradingCards,setgetImgreffalgosaleTradingCards]=useState([]);    

    const zoomin = async() => {
        var GFG = document.getElementById("geeks");
        var currHeight = GFG.clientHeight;
        var currwidth = GFG.clientWidth;
        console.log("currnhe",currHeight)
            GFG.style.height = (currHeight + 40) + "px";
            GFG.style.width = (currwidth + 40) + "px";
    }
    const zoomout = async() => {
        var GFG = document.getElementById("geeks");
        var currHeight = GFG.clientHeight;
        var currwidth = GFG.clientWidth;
            GFG.style.height = (currHeight - 40) + "px";
            GFG.style.width = (currwidth - 40) + "px";
    }
   
     


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
                    <Tab eventKey="all" title="Explore">
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
                            {/* <Button > */}
                            <img src={plus} onClick={()=>zoomin()} width={50}></img>    &nbsp;
		{/* Zoom-In */}
	{/* </Button> */}
	
	{/* <Button  > */}
    <img src={minus} onClick={()=>zoomout()} width={50}></img>
		{/* Zoom-Out */}
	{/* </Button> */}
                            <Row>
                            {/* <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'> */}
                            {/* <Card className='card-dash p-3 d-block border-0'>   */}
                                 <img src={landmap} id="geeks" GFG="250"
                                //  className='img-fluid'
                                                // width={100} height={100}
                                                ></img>  
                                                {/* </Card>                                               */}
                                                             
                                {/* </Col> */}
                            {/* {getImgreffalgosaleSports === null || getImgreffalgosaleSports === "" || getImgreffalgosaleSports === undefined || getImgreffalgosaleSports[0] === null || getImgreffalgosaleSports[0] === "" || getImgreffalgosaleSports[0] === undefined || filterdata1()[0] === null || filterdata1()[0] === "" || filterdata1()[0] === undefined ? (
                                <>
                                {filterdata2static2().map((x, index) => {  
                                    if(index<pageSize)    
                                    return(
                                        <GNFTSportsTab x={x}/>                                     
                                    )
                                })}      
                                </>
                            ) : (
                            <>
                            {filterdata1().map((x, index) => {  
                                if(index<pageSize)                                                 
                                return(
                                    <GNFTSportsTab x={x}/>                                                                                                                                                                                             
                                )
                            })}   
                            </>
                            )}                              */}
                            </Row>

                            {/* {getImgreffalgosaleSports.length <= 12 ? (
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

                            ) }                             */}
                   
                        </Tab>
                        <Tab eventKey="Buyland" title="Buy Land">
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
                         
                            <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                            <Card className='card-dash p-3 d-block border-0'>  
                                 <img src={map1} className='img-fluid'
                                                // width={100} height={100}
                                                ></img>  
                                                </Card>                                              
                                                             
                                </Col>
                                <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                            <Card className='card-dash p-3 d-block border-0'>  
                                 <img src={map2} className='img-fluid'
                                                // width={100} height={100}
                                                ></img>  
                                                </Card>                                              
                                                             
                                </Col>
                                <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                            <Card className='card-dash p-3 d-block border-0'>  
                                 <img src={map3} className='img-fluid'
                                                // width={100} height={100}
                                                ></img>  
                                                </Card>                                              
                                                             
                                </Col>
                                <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                            <Card className='card-dash p-3 d-block border-0'>  
                                 <img src={map4} className='img-fluid'
                                                // width={100} height={100}
                                                ></img>  
                                                </Card>                                              
                                                             
                                </Col>
                                </Row>
                                <Row>
                         
                         <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                         <Card className='card-dash p-3 d-block border-0'>  
                              <img src={map5} className='img-fluid'
                                             // width={100} height={100}
                                             ></img>  
                                             </Card>                                              
                                                          
                             </Col>
                             <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                         <Card className='card-dash p-3 d-block border-0'>  
                              <img src={map6} className='img-fluid'
                                             // width={100} height={100}
                                             ></img>  
                                             </Card>                                              
                                                          
                             </Col>
                             <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                         <Card className='card-dash p-3 d-block border-0'>  
                              <img src={map7} className='img-fluid'
                                             // width={100} height={100}
                                             ></img>  
                                             </Card>                                              
                                                          
                             </Col>
                             <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                         <Card className='card-dash p-3 d-block border-0'>  
                              <img src={map8} className='img-fluid'
                                             // width={100} height={100}
                                             ></img>  
                                             </Card>                                              
                                                          
                             </Col>
                              
                              
                            {/* {getImgreffalgosale === null || getImgreffalgosale === "" || getImgreffalgosale === undefined || getImgreffalgosale[0] === null || getImgreffalgosale[0] === "" || getImgreffalgosale[0] === undefined || filterdata()[0] === null || filterdata()[0] === "" || filterdata()[0] === undefined ? (
                                <>
                                {filterdata2static1().map((x, index) => {  
                                    if(index<pageSize)    
                                    return(
                                        <GNFTExploreTab x={x}/>                                     
                                    )
                                })}      
                                </>
                            ) : (
                            <>
                            {filterdata().map((x, index) => {   
                                if(index<pageSize)                
                                return(
                                    <GNFTExploreTab x={x}/>                                     
                                )
                            })}              
                            </>
                            )}                   */}
                            </Row>

                            {/* {getImgreffalgosale.length <= 10 ? (
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

                            ) }                             */}
                        </Tab>
                        
                      
                             
                                                                 
                    </Tabs>
                </div>
            </Container>
        </Layout>

        
    )
}

export default TopCollectionsNFTN;