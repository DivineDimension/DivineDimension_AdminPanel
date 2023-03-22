import React,{useEffect,useState,useContext} from 'react';
import { Card, Col} from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import firebase from '../../NFTFolder/firebase';
import fireDb from '../../NFTFolder/firebase';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
import {DataContext} from "../../App";
const CreateTab =({x})=>{
    const EAWalletbalances = useContext(DataContext);        
    let history=useHistory();
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[getIProfile,setgetIProfile]=useState([""]);           
    const [getprices,setprices]=useState("")        
    const[loader, setLoader] = useState(false);    
    const [getduplicateAssetValue,setduplicateAssetValue] = useState("");      
    const [getduplicateAssetValue2,setduplicateAssetValue2] = useState("");         
    const [getduplicateAssetValue2new,setduplicateAssetValue2new] = useState("");
    const [getduplicateAssetValue2newEscrow,setduplicateAssetValue2newEscrow] = useState("");     
    const dbcallProfile=async()=>{            
      if(localStorage.getItem("walletAddress")  === null || localStorage.getItem("walletAddress")  === "" || localStorage.getItem("walletAddress")  === " " || localStorage.getItem("wallet") === undefined || localStorage.getItem("walletAddress") === ''){
      }
      else{
        firebase.auth().signInAnonymously().then(async(response)=>{           
          const hasRestaurant = await fireDb.database()
          .ref(`EPuserprofile/${localStorage.getItem('walletAddress')}`)
          .orderByKey().limitToFirst(1).once('value')
          .then(res => res.exists());          
          if(hasRestaurant)
          {
              let r=[];
          try {    
          firebase.auth().signInAnonymously().then((response)=>{           
          firebase.database().ref("EPuserprofile").child(localStorage.getItem('walletAddress')).on("value", (data) => {          
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
          })         
          } catch (error) {          
          }                
          }else{
              setgetIProfile([""]);  
          } 
        })           
      }        
    }    
    useEffect(()=>{dbcallProfile()},[])        

    const waitForConfirmation = async function (algodclient, txId) {
        let status = (await algodclient.status().do());
        let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await algodclient.pendingTransactionInformation(txId).do();
            if (pendingInfo["confirmed-round"] !== null && pendingInfo["confirmed-round"] > 0) {             
              break;
            }
            lastRound++;
            await algodclient.statusAfterBlock(lastRound).do();
          }
    };

    const saledb =(b) =>{        
        if(localStorage.getItem('walletAddress') === null || localStorage.getItem('walletAddress') === "" || localStorage.getItem('walletAddress') === undefined || localStorage.getItem('walletAddress') === " "){            
            toast.warn(`please connect your wallet`,{autoClose: 5000});            
            handleHideLoad()            
        }else if(localStorage.getItem('walletAddress') === b.ownerAddress){   
            if(parseInt(getduplicateAssetValue2) === parseInt(100) || parseInt(getduplicateAssetValue2) === parseInt(10)){
                handleShowLoad()     
                fireDb.auth().signInAnonymously().then((response)=>{                     
                let dateset=new Date().toDateString();      
                fireDb.database().ref(`imageSaleAlgosFractional/${localStorage.getItem('walletAddress')}`).child(b.keyId).set({
                    Assetid:b.Assetid,Imageurl:b.Imageurl,NFTPrice:b.NFTPrice,EscrowAddress:b.EscrowAddress,keyId:b.keyId,
                    NFTName:b.NFTName,userSymbol:b.userSymbol,Ipfsurl:b.Ipfsurl,ownerAddress:b.ownerAddress,previousoaddress:b.previousoaddress,
                    TimeStamp:dateset,NFTDescription:b.NFTDescription,HistoryAddress:b.HistoryAddress,Appid:b.Appid,valid:b.valid,
                    CreatorAddress:b.CreatorAddress,NFTType:b.NFTType,NFTChannel:b.NFTChannel,SocialLink:b.SocialLink,NFTModel:b.NFTModel
                }).then(()=>{
                    fireDb.database().ref(`imagerefAlgoRoyalty/${localStorage.getItem('walletAddress')}`).child(b.keyId).remove();
                    let refactivity=fireDb.database().ref(`activitytable/${localStorage.getItem('walletAddress')}`);   
                    const db = refactivity.push().key;                         
                    refactivity.child(db).set({
                    Assetid:b.Assetid,Imageurl:b.Imageurl,NFTPrice:b.NFTPrice,EscrowAddress:"saleNFT",keyId:db,
                    NFTName:b.NFTName,userSymbol:b.userSymbol,Ipfsurl:b.Ipfsurl,ownerAddress:b.ownerAddress,previousoaddress:localStorage.getItem('walletAddress'),                
                    TimeStamp:dateset,NFTDescription:b.NFTDescription,HistoryAddress:b.HistoryAddress,Appid:b.Appid,valid:b.valid,
                    CreatorAddress:b.CreatorAddress,NFTType:b.NFTType,NFTChannel:b.NFTChannel,SocialLink:b.SocialLink,NFTModel:b.NFTModel
                })
                    .then(async()=>{                                                                                
                        handleHideLoad()                    
                        toast.success(`Moving NFT to Sale`,{autoClose: 5000});                                                     
                        await done();
                    })                                          
                })
                })
            }else{
                toast.error("Your Assert Algo balance is below 10.so can't update price",{autoClose:3000});              
                handleHideLoad()
            }
        }
    }    
    const setpricedb=async(b)=>{        
        if(getprices === null || getprices === undefined || getprices === "" ){
            toast.warning(`please enter price`,{autoClose:5000})
            handleHideLoad()            
        }else if(isNaN(getprices))
        {        
            toast.warning(`please valid number`,{autoClose:5000})
            handleHideLoad()                        
        }
        else if(getprices === "0"){
            toast.warning(`please enter above 0 price`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(getprices === "00" || getprices === "000" || getprices === "0000" || getprices === "00000" || getprices === "000000" || getprices === "0000000"){
            toast.warning(`you are entered zeros`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(getprices.length >= 7 ){                                    
            toast.warning(`you are entered Maximum Values`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(EAWalletbalances === "" || EAWalletbalances === "0" || EAWalletbalances === undefined || EAWalletbalances === null){
            toast.warning(`Insufficient balance to NFT Updating Price `,{autoClose:5000})
            handleHideLoad()            
        }
        else if(localStorage.getItem('walletAddress') === null || localStorage.getItem('walletAddress') === "" || localStorage.getItem('walletAddress') === undefined || localStorage.getItem('walletAddress') === " "){
            toast.warning(`please connect your wallet`,{autoClose:5000})
            handleHideLoad() 
        }        
        else{                
        }        
    }
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const done=async()=>{
        await sleep(7000);
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
    return(           
                <Col xxl={3} md={4} sm={6} xs={12} className='mb-4'>
                <Card className='card-dash p-3 d-block border-0'>
                    <div className='card-img text-center mb-2'>                        
                            <img src={x.Imageurl} alt="image" className='img-fluid' />                        
                    </div>
                    <div className='d-flex mb-2 justify-content-between flex-wrap align-items-center'>                        
                    </div>
                    <h5 className='mb-2'>{x.NFTName} <br />                                                            
                                        </h5>
                                        
                                        <p className='subheading mb-0'>
                                        <span className='text-success'>
                                            {x.SocialLink === null || x.SocialLink === "" || x.SocialLink === undefined ?(
                                                <>
                                                {/* {configfile.nullvalue}                                                 */}
                                                
                                                </>
                                            ):(
                                                <h6>{x.SocialLink}                                        
                                                </h6>  
                                            )}                                            
                                        </span>
                                        </p>
                                        <br />

                    

                        {getduplicateAssetValue2new === 0 || getduplicateAssetValue2new === null || getduplicateAssetValue2new === undefined ? (
                        <>
                        {getduplicateAssetValue2newEscrow === 0 || getduplicateAssetValue2newEscrow === null || getduplicateAssetValue2newEscrow === undefined ? (
                            <ButtonLoad disabled loading={loader} variant="blue" className='w-100'>Your NFT Balance 0</ButtonLoad>                                        
                        ):(
                            <>
                            <h6 className='mb-2'>Price</h6><h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />{x.NFTPrice/1000000}</h5>
                            <ButtonLoad loading={loader} variant="blue" className='w-100' onClick={()=>{saledb(x)}}>Sale</ButtonLoad>                          
                            </>
                        )}                        
                        </>
                    ):(
                        <>
                        {parseInt(getduplicateAssetValue) === parseInt(100) || parseInt(getduplicateAssetValue) === parseInt(10) ?(
                        <>                                                                    
                        <h6 className='mb-2'>Price</h6><h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />                                                
                        <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                        <input type="number" placeholder='Enter Price' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />                        
                        </div>
                        </h5>                                                 
                        <ButtonLoad loading={loader} variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Update Price</ButtonLoad>                                        
                                        
                        </>
                    ):(
                        <>
                        <h6 className='mb-2'>Price</h6><h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />{x.NFTPrice/1000000}</h5>
                        <ButtonLoad loading={loader} variant="blue" className='w-100' onClick={()=>{saledb(x)}}>Sale</ButtonLoad>                          
                        </>
                    )} 
                    </>
                    )}
                </Card>
                </Col>                
        
    )
}

export default CreateTab