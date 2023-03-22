import React,{useState,useEffect,useContext} from 'react';
import Layout from './LayoutT';
import { Link ,useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown, Table,Modal} from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import CardImage from '../../assets/images/card-image.jpg';
import firebase from '../../NFTFolder/firebase';
import fireDb from '../../NFTFolder/firebase';
import configfile from '../../NFTFolder/config.json'
import {abi} from './Normalnftcontract'
import web3 from './web3';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import Logo from '../../assets/images/algorand-logo.png';
import node from './nodeapi.json';
import axios from 'axios';
import {DataContext} from "../../App";
import { swappet } from './config';

const NFTDetailsNFT = (props) => {    
    const EAWalletbalances = useContext(DataContext);    
    useEffect(() => {
        document.title = "DivineDimension | NFTDetails"
    }, [])
    const [EAWalletbalance, setwalletbalance] = useState();
    console.log("EBalnce",EAWalletbalance)
    const[getIProfileYour,setgetIProfileYour]=useState([""]);  
    let caddressnew = "0x069918e79642121dcd5e88565efdd16b1ba9421dfcfed66eff3a1c400efcfc3d" 
    let pooladdressfinal = "0xc78f87c3e587d53bf4821a10472c4ba973ac57815d7901d4d3224347f484cd7f";
      
    const dbcallProfileYour=async()=>{            
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
                setgetIProfileYour([""]);  
                }
                setgetIProfileYour(r);
            });         
            //})         
            } catch (error) {            
            }                
            }else{
                setgetIProfileYour([""]);  
            }  
            //})          
        }        
    }    
    useEffect(()=>{dbcallProfileYour()},[])        
    // useEffect(()=>{
    //     const ReadBalance=async()=>{
    //       if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){                      
    //         toast.warning(`please connect your wallet`,{autoClose: 5000});            
    //         handleHideLoad()                     
    //       }else{
    //       let url = `https://api.polygonscan.com/api?module=account&action=balance&address=${localStorage.getItem('EAWalletAddress')}&apikey=YourApiKeyToken`;                
    //       await axios.get(`${url}`)
    //       .then(async(url)=>{
    //       const allnote=await (url.data.result/100000000);                                        
    //       localStorage.setItem('EAWalletBalance',allnote)                
    //       await setwalletbalance(allnote)                                                    
    //       //window.location.reload(false)                                                
    //       }).catch(error => console.error(`Error: ${error}`));                
    //     }
    //     }
    //     ReadBalance();
    // },[])  
    // const [AssetOpt,setToAssetOpt] = useState(false)     
    // const [minAlgo, setMinAlgo] = useState("");        
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);    
    const location = useLocation();
    const history = useHistory(); 
    const[getIProfile,setgetIProfile]=useState([""]);               
    
        
    const dbcallPro=async()=>{                    
            if(location.state === null || location.state === undefined || location.state === "" ){
            }else{
                try {  
                    //firebase.auth().signInAnonymously().then(async(response)=>{           
                    const hasRestaurant = await fireDb.database()
                    .ref(`EPuserprofile/${location.state.allData.ownerAddress}`)
                    .orderByKey().limitToFirst(1).once('value')
                    .then(res => res.exists());                        
                    if(hasRestaurant)
                    {                    
                let r=[];            
                //firebase.auth().signInAnonymously().then((response)=>{         
                firebase.database().ref("EPuserprofile").child(location.state.allData.ownerAddress).on("value", (data) => {          
                    if (data) {                      
                        r.push({                
                            Imageurl:data.val().Imageurl,                
                            Bio:data.val().Bio,
                            Customurl: data.val().Customurl,
                            Email: data.val().Email,                            
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
                //}) 
                }else{
                    setgetIProfile([""]);  
                }   
                //})            
                } catch (error) {                  
                } 

            }
                       
    }    
    useEffect(()=>{dbcallPro()},[])
    


    const BuyNFT =async()=>{
        if(location.state.allData === null || location.state.allData === "" || location.state.allData === undefined ){
            toast.warning(`Data is Required`,{autoClose:5000})
            handleHideLoad()
            done2()
        }
        else if(location.state === null || location.state === "" || location.state === undefined){
            toast.warning(`Data is Required`,{autoClose:5000})
            handleHideLoad()
            done2()
        }
        else if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === "0x" || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
            toast.warning(`please connect wallet`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(location.state.allData.ownerAddress === localStorage.getItem("EAWalletAddress"))
        {   
            toast.warning(`please connect Another wallet`,{autoClose:5000})
            handleHideLoad()            
        }                    
        else if(EAWalletbalances === 0 || EAWalletbalances === ""){
            toast.warning(`your wallet balance below 1`,{autoClose:5000})
            handleHideLoad()            
        }
        else if((parseFloat(location.state.allData.NFTPrice)/100000000) >= parseFloat(EAWalletbalances)){
            toast.warning(`your balance not enough to purchase this nft`,{autoClose:5000})
            handleHideLoad()            
        }                
        else if(parseFloat(EAWalletbalances)  <= ((location.state.allData.NFTPrice/100000000)))
        {            
            toast.dismiss()
            toast.error("Your Polygon balance is low. Please get more Matic from dispenser..",{autoClose:5000});  
            handleHideLoad()
        }        
        else if(getIProfileYour === "" || getIProfileYour === null || getIProfileYour === undefined || getIProfileYour === "undefined" ){
            toast.dismiss()
            toast.error("Please Create Your Profile",{autoClose:5000});  
            handleHideLoad()
        }
        else if(getIProfileYour[0] === "" || getIProfileYour[0] === null || getIProfileYour[0] === undefined || getIProfileYour[0] === "undefined" ){
            toast.dismiss()
            toast.error("Please Create Your Profile",{autoClose:5000});  
            handleHideLoad()
        }
        else{            
            //if(parseInt(assetbalanceApp) === 1 || parseInt(assetbalanceApp) === "1"){                                
            handleShowLoad()  
            toast.dismiss();            
            toast.info("NFT Purchase InProgress",{autoClose: 5000});               
            let AssId = location.state.allData.Assetid
            let PriceId =parseFloat(location.state.allData.NFTPrice)
            try{
                // let getaaa=new web3.eth.Contract(abi,location.state.allData.EscrowAddress);                        
                // await getaaa.methods.buyThing(AssId).send({
                //     from:localStorage.getItem('EAWalletAddress'), 
                //     value: web3.utils.toBN(PriceId),
                //     gas: 210000
                // });
                // const response = await window.martian.connect();
                // const address = response.address;
                // const options = {
                //   max_gas_amount: "10000"
                // }
                let property_version = 0
                let percentageaddresssend = "0x34c412ef3eee4933bdefa14e5a9ecdf2e2a153ddbdb89ec3a1d1c96f536eb655";
                const payloadclaim = {
                    type: "script_function_payload",
                    function: `${caddressnew}::creating6::dispense`,      
                    type_arguments: ["0x1::aptos_coin::AptosCoin"],
                    arguments: [
                      pooladdressfinal,        
                      location.state.allData.CreatorAddress,
                      location.state.allData.ownerAddress,                     
                      location.state.allData.NFTName,         
                      location.state.allData.NFTName, 
                      percentageaddresssend,
                      location.state.allData.NFTPrice,    
                      property_version,        
                      1
                    ]
                  }
          
          
                      
                //   const txn_request2 =  await window.martian.generateTransaction(address, payloadclaim,options)
                //   console.log("Req",txn_request2)
                //   const signed_txn2 = await  window.martian.signTransaction(txn_request2)
                //   console.log("signedTx",signed_txn2)
                //   const res2 = await window.martian.submitTransaction(signed_txn2)        
                //   console.log("TransferV",res2)  
                //   let id = "https://explorer.aptoslabs.com/txn/"+res2.hash;
                  
                let transactionHash = await swappet(payloadclaim)
                console.log("transactionHash", transactionHash); 
                  let id = "https://explorer.aptoslabs.com/txn/"+transactionHash;
                  toast.success(toastDiv(id));      
                  // toast.success(`Asset Buying ${res2.hash}`,{autoClose: 8000});              
                  await sleep(10000)  
            
                // let id = "https://explorer.aptoslabs.com/txn/"+res2.hash;
                // toast.success(toastDiv(id));                              
                // let "EPolygon"=res2.hash;
                //toast.success(`Asset Buying ${response.txId}`,{autoClose: 8000});              
            //db change here
            let a=location.state.allData.HistoryAddress.concat(localStorage.getItem('EAWalletAddress'));              
            let dateset=new Date().toDateString();
            if(location.state.allData.NFTType === undefined || location.state.allData.SocialLink === undefined || location.state.allData.NFTChannel === undefined)
            {
                //firebase.auth().signInAnonymously().then((response)=>{                              
                    fireDb.database().ref(`EPolygonNFTNS/${location.state.allData.ownerAddress}`).child(location.state.allData.keyId).remove().then(()=>{
                    fireDb.database().ref(`EPolygonNFTNBuy/${localStorage.getItem("EAWalletAddress")}`).child(location.state.allData.keyId).set({
                        Assetid:location.state.allData.Assetid,Imageurl:location.state.allData.Imageurl,NFTPrice:location.state.allData.NFTPrice,
                        EscrowAddress:location.state.allData.EscrowAddress,keyId:location.state.allData.keyId,
                        NFTName:location.state.allData.NFTName,userSymbol:location.state.allData.userSymbol,Ipfsurl:location.state.allData.Ipfsurl,
                        ownerAddress:localStorage.getItem('EAWalletAddress'),previousoaddress:location.state.allData.ownerAddress,
                        TimeStamp:dateset,NFTDescription:location.state.allData.NFTDescription,HistoryAddress:a,
                        Appid:location.state.allData.Appid,valid:location.state.allData.valid,
                        CreatorAddress:location.state.allData.CreatorAddress,NFTType:"",
                        NFTChannel:"",
                        SocialLink:"",
                        NFTModel:location.state.allData.NFTModel
                        }).then(()=>{                          
                            let refactivity=fireDb.database().ref(`EPolygonactivitytable/${localStorage.getItem('EAWalletAddress')}`);   
                            const db = refactivity.push().key;                         
                            refactivity.child(db).set({
                            Assetid:location.state.allData.Assetid,Imageurl:location.state.allData.Imageurl,NFTPrice:location.state.allData.NFTPrice,
                            EscrowAddress:"BuyNFT",keyId:db,
                            NFTName:location.state.allData.NFTName,userSymbol:location.state.allData.userSymbol,Ipfsurl:location.state.allData.Ipfsurl,
                            ownerAddress:localStorage.getItem('EAWalletAddress'),previousoaddress:location.state.allData.ownerAddress, 
                            TimeStamp:dateset,NFTDescription:"EPolygon",HistoryAddress:a,
                            Appid:location.state.allData.Appid,valid:location.state.allData.valid,
                            CreatorAddress:location.state.allData.CreatorAddress,NFTType:"",
                            NFTChannel:"",
                            SocialLink:"",NFTModel:location.state.allData.NFTModel
                        })
                            .then(()=>{     
                                //toast.dismiss() 
                                toast.success(`NFT Purchased Successfully`,{autoClose: 8000});                            
                                handleHideLoad()
                                done()                        
                            })                                            
                            // handleHideLoad()
                            // done()                        
                        }) 

                    })                        
                    //})
                //})

            }else{
                //firebase.auth().signInAnonymously().then((response)=>{                              
                    fireDb.database().ref(`EPolygonNFTNS/${location.state.allData.ownerAddress}`).child(location.state.allData.keyId).remove().then(()=>{
                    fireDb.database().ref(`EPolygonNFTNBuy/${localStorage.getItem("EAWalletAddress")}`).child(location.state.allData.keyId).set({
                        Assetid:location.state.allData.Assetid,Imageurl:location.state.allData.Imageurl,NFTPrice:location.state.allData.NFTPrice,
                        EscrowAddress:location.state.allData.EscrowAddress,keyId:location.state.allData.keyId,
                        NFTName:location.state.allData.NFTName,userSymbol:location.state.allData.userSymbol,Ipfsurl:location.state.allData.Ipfsurl,
                        ownerAddress:localStorage.getItem('EAWalletAddress'),previousoaddress:location.state.allData.ownerAddress,
                        TimeStamp:dateset,NFTDescription:location.state.allData.NFTDescription,HistoryAddress:a,
                        Appid:location.state.allData.Appid,valid:location.state.allData.valid,
                        CreatorAddress:location.state.allData.CreatorAddress,NFTType:location.state.allData.NFTType,
                        NFTChannel:location.state.allData.NFTChannel,
                        SocialLink:location.state.allData.SocialLink,NFTModel:location.state.allData.NFTModel
                        }).then(()=>{                                  
                            let refactivity=fireDb.database().ref(`EPolygonactivitytable/${localStorage.getItem('EAWalletAddress')}`);   
                            const db = refactivity.push().key;                         
                            refactivity.child(db).set({
                            Assetid:location.state.allData.Assetid,Imageurl:location.state.allData.Imageurl,NFTPrice:location.state.allData.NFTPrice,
                            EscrowAddress:"BuyNFT",keyId:db,
                            NFTName:location.state.allData.NFTName,userSymbol:location.state.allData.userSymbol,Ipfsurl:location.state.allData.Ipfsurl,
                            ownerAddress:localStorage.getItem('EAWalletAddress'),previousoaddress:location.state.allData.ownerAddress, 
                            TimeStamp:dateset,NFTDescription:"EPolygon",HistoryAddress:a,
                            Appid:location.state.allData.Appid,valid:location.state.allData.valid,
                            CreatorAddress:location.state.allData.CreatorAddress,NFTType:location.state.allData.NFTType,
                            NFTChannel:location.state.allData.NFTChannel,
                            SocialLink:location.state.allData.SocialLink,NFTModel:location.state.allData.NFTModel
                        })
                            .then(()=>{  
                                //toast.dismiss()                                                                                    
                                toast.success(`NFT Purchased Successfully`,{autoClose: 8000});                            
                                handleHideLoad()
                                done()                            
                            })                                                
                            // handleHideLoad()
                            // done()                        
                        }) 
                    })
                    //})
                //})
            }
        }catch (err) {        
            console.error(err);
            toast.warning(`you are facing error `,{autoClose:5000})
            //done2()          
        }                       
            }        
            // else{
            // toast.dismiss()
            // toast.warning(`Asset Balance is zero,please try another NFT`,{autoClose:5000})
            // handleHideLoad()            
            // }                    
    }                

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
     }
      const done=async()=>{
        await sleep(7000);
        history.push("/my-NFT")
        window.location.reload(false);    
      } 
      const doneduplicate=async()=>{
        await sleep(3000);        
        window.location.reload(false);    
        }

      const done2=async()=>{
        await sleep(3000);
        history.push("/my-NFT")
        window.location.reload(false);    
      } 

      const toastDiv = (txId) =>
        (
        <div>
            <p> Transaction is successful &nbsp;<a style={{color:'#133ac6'}} href={txId} target="_blank" rel="noreferrer"><br/><p style={{fontWeight: 'bold'}}>View in Algoexplorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill="#133ac6"/>
            </svg></p></a></p>  
        </div>
        );
        

    return (
        <Layout>
            <Container>
            <ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/>
                <Row className='mb-4'>
                    <Col md={4} className="mb-md-0 mb-4">
                        <Card className='card-dash d-block'>
                        {location.state === null || location.state === "" || location.state === undefined ? ( 
                            <img src={CardImage} alt="img" className='img-fluid rounded-16' />
                        ):(
                            <img src={location.state.allData.Imageurl} alt="img" className='img-fluid' style={{height:"20%",width:'50%'}} />
                        )}
                            
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className='card-dash border-0 d-block'>                            
                            {location.state === null || location.state === "" || location.state === undefined ? ( 
                                <>
                                <h2 className='subheading mb-0'>{configfile.nullvalue}</h2>
                                <p>{configfile.nullvalue}</p>                                
                                </>
                            ):(
                                <>
                                <h6 className='subheading mb-0'>NFT Name :  <strong>{location.state.allData.NFTName} </strong></h6>
                                <p>{location.state.allData.NFTDescription}</p>                                
                                </>
                             )} 
                                {location.state === null || location.state === "" || location.state === undefined ? ( 
                                    <>
                                    <h2 className='d-flex mb-3 align-items-center'>
                                    <img src={Logo} alt="logo" className='me-2 avatar-pic' />
                                    <p>{configfile.nullvalue}</p>                                
                                    </h2>                                
                                    </>
                                ):(
                                    <h3 className='d-flex mb-3 align-items-center'>
                                        <img src={Logo} alt="logo" className='me-2 avatar-pic' />
                                        {(location.state.allData.NFTPrice/100000000)}    
                                    </h3>                                                                                 
                                )}                                                                                                                                                       
                                <ButtonLoad loading={loader} className='btn btn-blue' onClick={()=>{BuyNFT()}}>Buy NFT</ButtonLoad>                                
                        </Card>
                    </Col>
                </Row>
                <Row className='mb-5'>
                    <Col md={4} className="mb-md-0 mb-4">
                        <Card className='card-dash border-0 d-block'>
                            <h3>NFT Information</h3>
                            
                            <div className='d-flex mb-2 align-items-center justify-content-between'>
                                <h6 className='subheading mb-0'>NFT Contract :</h6>
                                {location.state === null || location.state === "" || location.state === undefined ? ( 
                                    <strong>{configfile.nullvalue}</strong>
                                ):(
                                    <a href={`https://mumbai.polygonscan.com/address/${location.state.allData.EscrowAddress}`} target="_blank" rel="noopener noreferrer">                                                                    
                                    <strong>{location.state.allData.EscrowAddress.slice(0,6)}....{location.state.allData.EscrowAddress.slice(52,58)}</strong>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg>
                                    </a>
                                )}                                                 
                            </div>
                            {/* <div className='d-flex mb-2 align-items-center justify-content-between'>
                                <h6 className='subheading mb-0'>Token ID :</h6>

                                {location.state === null || location.state === "" || location.state === undefined ? ( 
                                    <strong>{configfile.nullvalue}</strong>
                                ):(
                                    <a href={`https://testnet.algoexplorer.io/asset/${location.state.allData.Assetid}`} target="_blank" rel="noopener noreferrer">                                
                                    <strong>{location.state.allData.Assetid}</strong>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                            </svg>
                                    </a>
                                )}
                                
                            </div> */}
                            <div className='d-flex mb-2 align-items-center justify-content-between'>
                                <h6 className='subheading mb-0'>Creator's Address :</h6>
                                {location.state === null || location.state === "" || location.state === undefined ? ( 
                                    <strong>{configfile.nullvalue}</strong>
                                ):(
                                    <a href={`https://mumbai.polygonscan.com/address/${location.state.allData.CreatorAddress}`} target="_blank" rel="noopener noreferrer">                                
                                    <strong>{location.state.allData.CreatorAddress.slice(0,6)}....{location.state.allData.CreatorAddress.slice(52,58)}</strong>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg>
                                    </a>
                                )}                                
                            </div>
                            <div className='d-flex mb-2 align-items-center justify-content-between'>
                                <h6 className='subheading mb-0'>Owner's Address :</h6>
                                {location.state === null || location.state === "" || location.state === undefined ? ( 
                                    <strong>{configfile.nullvalue}</strong>
                                ):(
                                    <a href={`https://mumbai.polygonscan.com/address/${location.state.allData.ownerAddress}`} target="_blank" rel="noopener noreferrer">                                
                                    <strong>{location.state.allData.ownerAddress.slice(0,6)}....{location.state.allData.ownerAddress.slice(52,58)}</strong>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                            <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                    </svg>
                                    </a>
                                )}                                
                            </div>
                        </Card>
                    </Col>
                    <Col md={8}>
                        <Card className='card-dash mb-4 d-block border-0'>
                            <div className='d-flex flex-wrap flex-lg-nowrap create-art'>
                            {getIProfile === "" || getIProfile === null || getIProfile === undefined  || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined ? (
                                  <img src="https://bscstation.finance/images/logo-defaul.png" alt="art" className='me-3' />
                            ):(
                                <>
                                {getIProfile[0].Imageurl === "" || getIProfile[0].Imageurl === null || getIProfile[0].Imageurl === undefined ?(
                                    <h3 className='d-flex mb-3 align-items-center'>                                
                                    <img src={CardImage} alt="logo" className='me-2 avatar-pic' />
                                    {configfile.nullvalue}                                    
                                    </h3>                                
                                ):(                                    
                                    <h3 className='d-flex mb-3 align-items-center'>                                
                                    <img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />                                    
                                </h3>

                                )}                             
                                </>
                            )}                              
                                <div className=''>
                                {getIProfile === "" || getIProfile === null || getIProfile === undefined  || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined ? (
                                    <strong>{configfile.nullvalue}</strong>
                                ):(
                                    <h6 className='subheading mb-0'>Artist : &nbsp; <strong>{getIProfile[0].UserName} </strong></h6>
                                )}
                                    
                                    <p className='subheading mb-0'>Social :  &nbsp;
                                    {getIProfile === "" || getIProfile === null || getIProfile === undefined  || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined ? (
                                        <strong>{configfile.nullvalue}</strong>
                                    ):(
                                        <>
                                        {getIProfile[0].Personalsiteurl === "" || getIProfile[0].Personalsiteurl === null || getIProfile[0].Personalsiteurl === undefined  || getIProfile[0] === "" || getIProfile[0] === null || getIProfile[0] === undefined ? (
                                            <>                                            
                                            <strong>{getIProfile[0].Personalsiteurl}</strong>                                            
                                            </>
                                        ):(                                        
                                        <>
                                            <strong>{getIProfile[0].Personalsiteurl}</strong>
                                        </>                                        
                                        )}
                                        </>                                        
                                    )}
                                    </p>
                                    <p className='subheading mb-0'>Wallet address :  &nbsp;                                    
                                        <>
                                        {(location.state  === null || location.state  === "" || location.state === " " || location.state === undefined || location.state === '') ? (

                                            <a  href={"https://mumbai.polygonscan.com/address/" + configfile.nullvalue} target="_blank" rel="noreferer noreferrer">
                                            <strong>{configfile.nullvalue}.... </strong>
                                            &nbsp;
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                    </svg>
                                            </a>                                                                                
                                        ):(
                                        <a  href={"https://mumbai.polygonscan.com/address/" + location.state.allData.ownerAddress} target="_blank" rel="noreferer noreferrer">
                                        <strong>{location.state.allData.ownerAddress.slice(0,12)}....{location.state.allData.ownerAddress.slice(52,58)} </strong>
                                        &nbsp;
                                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi ms-2 bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                                </svg>
                                        </a>                                                                                
                                        )}                                        
                                        </>                                    
                                    </p>                                    
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>                              
            </Container>
        </Layout>
    )
}

export default NFTDetailsNFT;