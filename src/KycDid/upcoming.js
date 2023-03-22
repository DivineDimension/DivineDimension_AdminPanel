import { useEffect } from "react";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown,Modal} from 'react-bootstrap';
import Layout from '../components/DashboardNew/LayoutT';
import fireDb from '../NFTFolder/firebase'
const View = () => {
    //let history = useHistory();            
    const[getrecent,setrecent]=useState("View All");    
    const[pageSize,setPageSize]=useState(12);     
    const[getImgreffalgoActivity,setgetImgreffalgoActivity]=useState([]);         
    console.log("DataEx",getImgreffalgoActivity)       

    const dbcallalgoActivity=async()=>{        
        let req = [];
        if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("EAWalletAddress") === ''){
        }
        else{            
        let getalgo=localStorage.getItem("EAWalletAddress");      
        //fireDb.auth().signInAnonymously().then((response)=>{              
        fireDb.database().ref("CreatedTokens").child(getalgo).on("value", (data) => {
            if (data) {
              data.forEach((d) => {                
                let value=d.val();                
                req.push(            
                  {                    
                    keyId:value.keyId,
                    Owner:value.Owner,                    
                    TokenAddress:value.TokenAddress,
                    Tokenname:value.Tokenname,
                    TokenSymbol:value.TokenSymbol,
                    Totalsupply:value.Totalsupply,
                    Minted:value.Minted,
                    Burned:value.Burned,  
                    date:value.date,                              
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

    const filterdata5=()=>{
        let dateset=new Date().toDateString();
        //let today= new Date();
        // let weekdate=new Date(today.getFullYear(), today.getMonth(), today.getDate()-1).toDateString();                
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
        return getImgreffalgoActivity.reverse()
    }
    const decrementSize=()=>{
        if(pageSize >= 16){
        setPageSize(pageSize-4)
        }        
    }

    return (
        <Layout>
            <div className='sidebar-inner d-none d-xl-flex align-items-start flex-wrap'>
                <Link to="/my-NFT">Profile</Link>
                <Link className='active' to="/upcoming">Staking</Link>
                <Link className='active' to="/upcoming">Badges</Link>
                <Link to="/viewtoken">Inventory</Link>
                <Link to="/viewtoken">Claim</Link>
                <Link to="/avatar">Avatar</Link>
                <Link to="/create-artists">Settings</Link>
            </div>
        <div className="justify-content-center">  
        <Container fluid>                                
        <Tabs defaultActiveKey="Activity" id="uncontrolled-tab-example" className='dashboard-tabs'>                       
                        <Tab eventKey="Activity" >                            
                            <Row>
                            {getImgreffalgoActivity === null || getImgreffalgoActivity === "" || getImgreffalgoActivity === undefined || getImgreffalgoActivity[0] === null || getImgreffalgoActivity[0] === "" || getImgreffalgoActivity[0] === undefined || filterdata5()[0] === null || filterdata5()[0] === "" || filterdata5()[0] === undefined ? (
                                <div className="no-found py-5p text-center">
                                {/* <h2>No Data Found</h2>                             */}
                                <Link to="/" className='btn btn-primary'>Upcoming</Link>
                                </div>
                            ) : (
                            <>
                            {filterdata5().map((x, index) => {   
                                if(index<pageSize)                
                                return(                                     
                                    <Card className='card-dash p-3 d-block border-0'>
                                    <div className='activity-item d-flex align-items-center mb-3'>        
                                            <div className="activity-content">                                                                                                
                                                {x.Owner === "" || x.Owner === null || x.Owner === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://mumbai.polygonscan.com/address/${x.Owner}`)}>  {x.Owner}</p>
                                                </>)}                                            
                                                {x.TokenAddress === "" || x.TokenAddress === null || x.TokenAddress === undefined ?(<>
                                                </>):(<>
                                                    <p style={{cursor: 'pointer'}} onClick={() => window.open(`https://mumbai.polygonscan.com/address/${x.TokenAddress}`)}>  {x.TokenAddress}</p>
                                                </>)}
                                                <p className="heading mb-0">{x.Tokenname}</p>
                                                <p className="heading mb-0">{x.TokenSymbol}</p>                                                
                                                <p className="heading mb-0">{x.Totalsupply}</p>   
                                                
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
        </Container>                            
        </div>
        </Layout>
    );
}

export default View;