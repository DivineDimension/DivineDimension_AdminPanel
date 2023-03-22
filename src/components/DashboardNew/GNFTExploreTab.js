import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Button} from 'react-bootstrap';
// import Logo from '../../assets/images/algorand-logo.png';
import Logo from '../../assets/images/aptos.png';

import configfile from '../../NFTFolder/config.json'
import firebase from '../../NFTFolder/firebase';
const GNFTExploreTab = ({x})=>{
    const[getIProfile1,setgetIProfile1]=useState([""]);           
    const[getIProfile2,setgetIProfile2]=useState([""]);       

    const dbcallProfile=async()=>{            
        let r=[];
        try {    
            if(x.ownerAddress === "" || x.ownerAddress === undefined || x.ownerAddress === null)        {
                setgetIProfile1([""]);  
            }
            else{
                firebase.auth().signInAnonymously().then((response)=>{           
                    firebase.database().ref("EPuserprofile").child(x.ownerAddress).on("value", (data) => {          
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
                        setgetIProfile1([""]);  
                      }
                      setgetIProfile1(r);
                    });         
                    })         
            }
        
      } catch (error) {        
      }                
    }    
    useEffect(()=>{dbcallProfile()},[])

    const dbcallProfile2=async()=>{            
        let r=[];
        try {    
            if(x.ownerAddress === "" || x.ownerAddress === undefined || x.ownerAddress === null)        {
                setgetIProfile2([""]);  
            }
            else{
                firebase.auth().signInAnonymously().then((response)=>{           
                    firebase.database().ref("EPuserprofile").child(x.previousoaddress).on("value", (data) => {          
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
                        setgetIProfile2([""]);  
                      }
                      setgetIProfile2(r);
                    });         
                    })         
            }
        
      } catch (error) {        
      }                
    }    
    useEffect(()=>{dbcallProfile2()},[])
                        return(
                                <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                                    <Card className='card-dash p-3 d-block border-0'>  
                                    <div>
                                    {getIProfile1 === null || getIProfile1 === undefined || getIProfile1 === ""  ? (
                                        <img src={Logo}  alt="logo" className='me-2 avatar-pic' />                                            
                                        ):(
                                            <>
                                            {getIProfile1[0].Imageurl === null || getIProfile1[0].Imageurl === undefined || getIProfile1[0].Imageurl === ""  ? (
                                                <img src={Logo}  alt="logo" className='me-2 avatar-pic' />                                                
                                            ):(
                                                
                                                <Link to={{
                                                    pathname: "/my-NFTcopy",            
                                                    state:{allData:x}                                                
                                                }}>
                                                <img src={getIProfile1[0].Imageurl}  alt="logo" className='me-2 avatar-pic' />                                                
                                                </Link>
                                            )}                                            
                                            </>
                                        )}                                        
                                        </div>
                                        <br/>                                                                    
                                        <div className='card-img text-center mb-2'>                                            
                                                <img src={x.Imageurl} alt="image" className='img-fluid' />                                            
                                        </div>
                                        <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>                                        
                                        </div>                                        
                                        <h6 className='mb-2'>{x.NFTName} <br /><span className='text-success'><h6>
                                            {x.SocialLink === null || x.SocialLink === undefined || x.SocialLink === "" ? ( 
                                                <>{configfile.nullvalue}</>
                                            ):( 
                                                <>
                                                {/* {x.SocialLink.slice(0,18)} */}
                                                {configfile.nullvalue}
                                                </>
                                            )}                                            
                                            </h6></span></h6>                                        
                                        <h6 className='mb-2'>Price</h6><h4 className='d-flex mb-3 align-items-center'><img src={Logo} alt="logo" className='me-2 avatar-pic' />{x.NFTPrice/100000000}</h4> 
                                        {x.NFTPrice === "" || x.NFTPrice === null || x.NFTPrice === undefined ?(
                                            <>                                                                                        
                                            <Button variant="blue" className='w-100' s>Buy NFT</Button>                                        
                                            </>
                                        ):(
                                            <Link to={{
                                                pathname: "/NFTn-details",            
                                                state:{allData:x}                                                
                                            }}>
                                            <Button variant="blue" className='w-100'>Buy NFT</Button>
                                            </Link>
                                        )} 
                                        
                                    </Card>
                                    </Col>
    );
}

export default GNFTExploreTab;