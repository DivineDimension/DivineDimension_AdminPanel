import React,{useEffect,useState,useContext} from 'react';
import { Card, Col} from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import firebase from '../../NFTFolder/firebase';
import fireDb from '../../NFTFolder/firebase';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
import web3 from './web3';
import configfile from '../../NFTFolder/config.json'
import {DataContext} from "../../App";
import { abibytecode1155 } from './abiminterc1155';

const OwnedTab1155 =({x})=>{    
    let history=useHistory();
    const EAWalletbalances = useContext(DataContext);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[getIProfile,setgetIProfile]=useState([""]);           
    const [getprices,setprices]=useState("")    
    const[loader, setLoader] = useState(false);
    //const [algobalanceApp,setalgobalanceApp] = useState("");        
    // const [getduplicateAssetValue2new,setduplicateAssetValue2new] = useState(""); 
    // console.log("getduplicateAssetValue2new",getduplicateAssetValue2new)
    const [Totalsupply,setTotalsupply] = useState();    
    console.log("ToSupply",Totalsupply)
    useEffect(()=>{
        const callItemsValue=async()=>{            
                //location.state.allData.EscrowAddress
                let getaaaa=new web3.eth.Contract(abibytecode1155,"0xbe354B4949049951a37e3114B2B7843cd8bb30Cb");
                let priceamount = await getaaaa.methods.items(x.Assetid).call();
                //setTotalsupply(priceamount)
                let priceamounts = await getaaaa.methods.balanceOf(localStorage.getItem('EAWalletAddress'),x.Assetid).call();
                setTotalsupply(priceamounts)
                console.log("ItemsvaluesOwned",priceamounts)      
            }                   
        callItemsValue();
    },[])
        
    const dbcallProfile=async()=>{            
      if(localStorage.getItem("EAWalletAddress")  === null || localStorage.getItem("EAWalletAddress")  === "" || localStorage.getItem("EAWalletAddress")  === " " || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
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
              setgetIProfile([""]);  
              }
              setgetIProfile(r);
          });         
          //})         
          } catch (error) {          
          }                
          }else{
              setgetIProfile([""]);  
          }  
       //})          
      }        
    }    
    useEffect(()=>{dbcallProfile()},[])        
    
    
    const setpricedb=async(b)=>{        
        if(getprices === null || getprices === undefined || getprices === "" ){
            toast.warning(`please enter price`,{autoClose:5000})
            handleHideLoad()        
        }else if(isNaN(getprices))
        {        
            toast.warning(`please valid number`,{autoClose:5000})
            handleHideLoad()            
        }
        //else if(getprices === "0" || parseInt(getprices) === 0){
        else if(getprices === "0"){
            toast.warning(`please enter above 0 price`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(getprices === "00" || getprices === "000" || getprices === "0000" || getprices === "00000"){
            toast.warning(`you are entered zeros`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(getprices.length >= 5 ){                                    
            toast.warning(`you are entered Maximum Values`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(EAWalletbalances === "" || EAWalletbalances === "0" || EAWalletbalances === undefined || EAWalletbalances === null){
            toast.warning(`Insufficient balance to NFT Updating Price `,{autoClose:5000})
            handleHideLoad()            
        }
        else if(localStorage.getItem('EAWalletAddress') === null || localStorage.getItem('EAWalletAddress') === "" || localStorage.getItem('EAWalletAddress') === undefined || localStorage.getItem('EAWalletAddress') === " "){
            toast.warning(`please connect your wallet`,{autoClose:5000})
            handleHideLoad()            
        }        
        else{
        // let minbalance=await minAlgoBalance()
        // if(minbalance < (961000+2000)){
        //     toast.error("Your Algo balance is low. Please get more Algos from dispenser",{autoClose:5000});              
        //     handleHideLoad()
        // }
        // else{                
        handleShowLoad()     
        let amountmul=(parseFloat(getprices)*100000000);
        toast.info("Updating The Price of NFT",{autoClose:5000});                                 
        try {                        
                let getaaaa=new web3.eth.Contract(abibytecode1155,b.EscrowAddress);
                const accounts = await  web3.eth.getAccounts();
                await getaaaa.methods.setTokenState(b.Assetid,"true").send({
                from:localStorage.getItem('EAWalletAddress'),
                gas: 210000,
                //gasPrice: '20000000000'
                });

                await getaaaa.methods.setTokenPrice(b.Assetid,web3.utils.toBN(amountmul)).send({
                    from:localStorage.getItem('EAWalletAddress'),              
                    gas: 210000,
                    //gasPrice: '20000000000'
                })               
                
                await getaaaa.methods.safeTransferFrom(b.Assetid,parseInt(Totalsupply),[]).send({
                    from:accounts[0]
                });

            //   console.log("TransferV",res2CS)      
            //   let id = "https://explorer.aptoslabs.com/txn/"+"EPolygon";
            //   toast.success(toastDiv(id));      
        //let cl=response.txId;          
        //db here                  
        //fireDb.auth().signInAnonymously().then((responses)=>{                     
          let dateset=new Date().toDateString();      
            fireDb.database().ref(`EPolygonNFT1155S/${localStorage.getItem('EAWalletAddress')}`).child(b.keyId).set({
                Assetid:b.Assetid,Imageurl:b.Imageurl,NFTPrice:amountmul,EscrowAddress:b.EscrowAddress,keyId:b.keyId,
                NFTName:b.NFTName,userSymbol:b.userSymbol,Ipfsurl:b.Ipfsurl,ownerAddress:b.ownerAddress,previousoaddress:b.previousoaddress,
                TimeStamp:dateset,NFTDescription:b.NFTDescription,HistoryAddress:b.HistoryAddress,Appid:b.Appid,valid:b.valid,
                CreatorAddress:b.CreatorAddress,NFTType:b.NFTType,NFTChannel:b.NFTChannel,SocialLink:b.SocialLink,NFTModel:b.NFTModel
              }).then(()=>{
                fireDb.database().ref(`EPolygonNFT1155Buy/${localStorage.getItem('EAWalletAddress')}`).child(b.keyId).remove();
                let refactivity=fireDb.database().ref(`EPolygonactivitytable/${localStorage.getItem('EAWalletAddress')}`);   
                const db = refactivity.push().key;                         
                refactivity.child(db).set({
                Assetid:b.Assetid,Imageurl:b.Imageurl,NFTPrice:amountmul,EscrowAddress:"saleNFT",keyId:db,
                NFTName:b.NFTName,userSymbol:b.userSymbol,Ipfsurl:b.Ipfsurl,ownerAddress:b.ownerAddress,previousoaddress:localStorage.getItem('EAWalletAddress'),                
                TimeStamp:dateset,NFTDescription:"EPolygon",HistoryAddress:b.HistoryAddress,Appid:b.Appid,valid:b.valid,
                CreatorAddress:b.CreatorAddress,NFTType:b.NFTType,NFTChannel:b.NFTChannel,SocialLink:b.SocialLink,NFTModel:b.NFTModel
            })
                .then(async()=>{                                                                                
                    toast.success(`Moving NFT to Sale`,{autoClose: 5000});            
                    handleHideLoad()                    
                    await sleep(8000);
                    history.push("/my-NFT")
                    window.location.reload(false);                        
                })                                          
              })

        //})
        //db end here                  
    } catch (err) {
            console.error(err);            
            toast.error(`your browser appearing issue`,{autoClose: 5000});            
            handleHideLoad()            
          }                     
        }            
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
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
                                        <h6 className='mb-2'>Price</h6>
                                        <p className='subheading mb-0'>
                                        <span className='text-success'>
                                            {x.NFTPrice === null || x.NFTPrice === "" || x.NFTPrice === undefined ?(
                                                <>{configfile.nullvalue}</>
                                            ):(
                                                <h6>{(x.NFTPrice/100000000)}</h6>
                                            )}                                            
                                        </span>
                                        </p>
                                        <br />                    
                    {x.NFTPrice === "" || x.NFTPrice === null || x.NFTPrice === undefined ?(
                        <>                                            
                        <h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />                        
                        <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                        <input type="number" placeholder='Enter Price' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />
                        </div>
                        </h5> 
                        <ButtonLoad loading={loader} variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Update Price and Sale</ButtonLoad>                                        
                        </>
                    ):(
                        <>                        
                        <h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />                        
                        <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                        <input type="number" placeholder='Enter Price' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />
                        </div>
                        </h5> 
                        <ButtonLoad loading={loader} variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Update Price and Sale</ButtonLoad>                                        
                        </>
                    )}                     
                </Card>
                </Col>                
        
    )
}

export default OwnedTab1155