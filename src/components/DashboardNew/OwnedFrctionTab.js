import React,{useEffect,useState,useContext} from 'react';
import { Card, Col} from 'react-bootstrap';
import ButtonLoad from 'react-bootstrap-button-loader';
import firebase from '../../NFTFolder/firebase';
import fireDb from '../../NFTFolder/firebase';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { useHistory } from "react-router-dom";
import configfile from '../../NFTFolder/config.json'
import {DataContext} from "../../App";

const OwnedFrctionTab =({x})=>{
    let history=useHistory();
    const EAWalletbalances = useContext(DataContext);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);    
    const[getIProfile,setgetIProfile]=useState([""]);           
    const [getprices,setprices]=useState("")    
    const[loader, setLoader] = useState(false);
    const [algobalanceApp,setalgobalanceApp] = useState("");    
    
    const [getduplicateAssetValue,setduplicateAssetValue] = useState("");   
    const [getduplicateAssetValue2new,setduplicateAssetValue2new] = useState("");  
    console.log("getduplicateAssetValue2new",getduplicateAssetValue2new)
    
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

    
    // const datas =async(b)=>{        
    //     if(getprices === null || getprices === undefined || getprices === "" ){
    //         toast.warning(`please enter price`,{autoClose:5000})
    //         handleHideLoad()            
    //     }else if(isNaN(getprices))
    //     {        
    //         toast.warning(`please valid number`,{autoClose:5000})
    //         handleHideLoad() 
    //     }
    //     else if(getprices === "0"){
    //         toast.warning(`please enter above 0 price`,{autoClose:5000})
    //         handleHideLoad()            
    //     }
    //     else if(getprices === "00" || getprices === "000" || getprices === "0000" || getprices === "00000"){
    //         toast.warning(`you are entered zeros`,{autoClose:5000})
    //         handleHideLoad()            
    //     }
    //     else if(getprices.length >= 5 ){                                    
    //         toast.warning(`you are entered Maximum Values`,{autoClose:5000})
    //         handleHideLoad()            
    //     }
    //     else if(algobalanceApp === "" || algobalanceApp === "0" || algobalanceApp === undefined || algobalanceApp === null || algobalanceApp <= 3){
    //         toast.warning(`Insufficient balance to create NFT`,{autoClose:5000})
    //         handleHideLoad()            
    //     }
    //     else if(localStorage.getItem('walletAddress') === null || localStorage.getItem('walletAddress') === "" || localStorage.getItem('walletAddress') === undefined || localStorage.getItem('walletAddress') === " "){
    //         toast.warning(`please connect your wallet`,{autoClose:5000})
    //         handleHideLoad()            
    //     }
    //     // else if(getprices.match(decimal)){
    //     //     toast.warning(`you are decimal Values`,{autoClose:5000})
    //     //     handleHideLoad()            
    //     // }    
    //     else{
    //     let minbalance=await minAlgoBalance()
    //     if(minbalance < (961000+2000)){
    //         toast.error("Your Algo balance is low. Please get more Algos from dispenser",{autoClose:5000});              
    //         handleHideLoad()
    //     }
    //     else{    
    //     if(parseInt(getduplicateAssetValue) === parseInt(100) || parseInt(getduplicateAssetValue) === parseInt(10)){     
    //     handleShowLoad()                             
    //     let index = parseInt(configfile['fractionalappId']);  
    //     let dataopreplace = dataauctioncreate.replaceAll("AppID",parseInt(configfile['fractionalappId'])).replaceAll("AssId",parseInt(b.Assetid))                
    //     const params = await algodClient.getTransactionParams().do();            
    //     params.fee = 1000;
    //     params.flatFee = true;                
    //     let results = await algodClient.compile(dataopreplace).do();                
    //     let program = new Uint8Array(Buffer.from(results.result, "base64"));           
    //     let lsig = new algosdk.LogicSigAccount(program);    
     
    //     let amount = 1000;                  
    //     let foreignassets = [];
    //     foreignassets.push(parseInt(b.Assetid));
    //     let appArg = [];
    //     appArg.push(new Uint8Array(Buffer.from("data")));                
    //     appArg.push(algosdk.encodeUint64(parseFloat((getprices*1000000)*(parseInt(getduplicateAssetValue)))))      

    //     let transaction1 = algosdk.makePaymentTxnWithSuggestedParamsFromObject({
    //         from: localStorage.getItem('walletAddress'), 
    //         to: lsig.address(), 
    //         amount: amount, 
    //         note: undefined,  
    //         suggestedParams: params
    //        });

    //        const transaction2 = algosdk.makeApplicationNoOpTxnFromObject({
    //            from:lsig.address(), 
    //            appIndex: index,
    //            appArgs: appArg,
    //            accounts: [localStorage.getItem('walletAddress')],
    //            foreignAssets:foreignassets,
    //            suggestedParams: params
    //          });
          
    //          const groupID = algosdk.computeGroupID([ transaction1, transaction2]);
    //          const txs = [ transaction1, transaction2];
    //          txs[0].group = groupID;
    //          txs[1].group = groupID;
    //          let response;
    //          if(localStorage.getItem("walletName") === "myAlgoWallet"){
    //             const signedTx1 = await myAlgoWallet.signTransaction(txs[0].toByte());
    //             const signedTx2 = algosdk.signLogicSigTransaction(txs[1], lsig);
    //             response = await algodClient.sendRawTransaction([ signedTx1.blob, signedTx2.blob]).do();           
    //             await waitForConfirmation(algodClient, response.txId);                      
    //             let id = "https://testnet.algoexplorer.io/tx/" + response.txId;
    //             toast.success(toastDiv(id));
    //             await setpricedb(b)
    //         }else if(localStorage.getItem("walletName") === "PeraWallet"){
    //             const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
    //             const txns = [txs[0],txs[1]]            
    //             const txnsToSign = txns.map(txn => {
    //             const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");            
    //             return {
    //             txn: encodedTxn,
    //             };
    //             });        
    //             const signedTx2 = algosdk.signLogicSigTransaction(txns[1], lsig);            
    //             const requestParams = [ txnsToSign ];
    //             const request = formatJsonRpcRequest("algo_signTxn", requestParams);
    //             const result = await connector.sendCustomRequest(request);
    //             const decodedResult = result.map(element => {
    //                 return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
    //             });            
    //             decodedResult[1] = signedTx2.blob;            
    //             response = await algodClient.sendRawTransaction(decodedResult).do()     
    //             await waitForConfirmation(algodClient, response.txId);                      
    //             let id = "https://testnet.algoexplorer.io/tx/" + response.txId;
    //             toast.success(toastDiv(id));
    //             await setpricedb(b)      
    //         }                
    //     }else{
    //         toast.error(`Your Assert Algo balance is below ${getduplicateAssetValue}.so can't update price`,{autoClose:3000});              
    //         handleHideLoad()
    //     }
                        
    //     }
    // }
    // }
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
        await sleep(8000);
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
                    
                    <h5 className='mb-2'>{x.NFTName} <br />                    
                                        </h5>
                                        <h6 className='mb-2'>Price</h6>
                                        <p className='subheading mb-0'>
                                        <span className='text-success'>
                                            {x.NFTPrice === null || x.NFTPrice === "" || x.NFTPrice === undefined ?(
                                                <>
                                                {configfile.nullvalue}                                               
                                                </>
                                            ):(
                                                <h6>
                                                {(x.NFTPrice/100000000)}                                                
                                                </h6>
                                            )}                                            
                                        </span>
                                        </p>
                                        <br />

                    {getduplicateAssetValue2new === 0 || getduplicateAssetValue2new === null || getduplicateAssetValue2new === undefined ? (
                        <>
                        <ButtonLoad disabled loading={loader} variant="blue" className='w-100'>Your NFT Balance 0</ButtonLoad>                                        
                        </>
                    ):(
                        <>                    
                        {x.NFTPrice === "" || x.NFTPrice === null || x.NFTPrice === undefined ?(
                        <>                                            
                        <h5 className='d-flex mb-3 align-items-center'><img src={getIProfile[0].Imageurl} alt="logo" className='me-2 avatar-pic' />                        
                        <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                        <input type="number" placeholder='Enter Price' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />
                        </div>
                        </h5> 
                        <ButtonLoad disabled loading={loader} variant="blue" className='w-100' onClick={()=>{setpricedb(x)}}>Update Price and Sale</ButtonLoad>                                        
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
                    </>
                    )}
                </Card>
                </Col>                
        
    )
}

export default OwnedFrctionTab