import React,{useState,useEffect,useContext} from 'react';
import Layout from './LayoutT';
import { Link ,useLocation} from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { Card, Col, Container, Row, Tabs, Tab, Badge, Button, InputGroup, Form, Dropdown, Table,Modal} from 'react-bootstrap';
import { AptosClient, AptosAccount, FaucetClient, TokenClient, CoinClient } from "aptos";
import ButtonLoad from 'react-bootstrap-button-loader';
import CardImage from '../../assets/images/card-image.jpg';
import firebase from '../../NFTFolder/firebase';
import fireDb from '../../NFTFolder/firebase';
import configfile from '../../NFTFolder/config.json'
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import Logo from '../../assets/images/algorand-logo.png';
import {abibytecodeauction} from './datasbytecodeAuctionNFT'
import {abiauction} from './Auctionnftcontract';
import web3 from './web3';
import axios from 'axios';
import {DataContext} from "../../App";

import { swappet } from './config';
const NFTDetailsAuction = (props) => {
    const EAWalletbalances = useContext(DataContext);    
    //let caddressnew = "0x069918e79642121dcd5e88565efdd16b1ba9421dfcfed66eff3a1c400efcfc3d"
    useEffect(() => {
        document.title = "DivineDimension | NFTDetails"
    }, [])    
    const [EAWalletbalance, setwalletbalance] = useState();
    console.log("EBalnce",EAWalletbalance)
    const[getIProfileYour,setgetIProfileYour]=useState([""]);   
    
  let caddressnew = "0x069918e79642121dcd5e88565efdd16b1ba9421dfcfed66eff3a1c400efcfc3d"
  let pooladdress5 = "0x25737ec2848292811e7c988aa4987d83e34d61861e5890e78d89ecbfd5090cff"  
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
    const [getprices,setprices]=useState(0)        
    const[loader, setLoader] = useState(false);
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const location = useLocation();
    const history = useHistory();    
    const[getIProfile,setgetIProfile]=useState([""]);         
    const [HighestBidder,setHighestBidder] = useState("");   
    const [HighestPrices,setHighestPrices] = useState("");   
    const[getAuctionTime,setAuctionTime]=useState("");   
    const[getCAuctionTime,setCAuctionTime]=useState("");   
    const[getAuction,setAuction]=useState([""]);
    console.log("Auction1",getAuction)
    console.log("Auction2",getAuctionTime)
    console.log("Auction3",getCAuctionTime)
    console.log("HighestBidder",HighestBidder)     
    console.log("HighestPrices",HighestPrices)     

    const dbcallAuction=async()=>{                         
        if(location.state === null || location.state === undefined || location.state === "" ){
        }else{
            try {  
                // let getaaaa=new web3.eth.Contract(abiauction,location.state.allData.EscrowAddress);                                            
                // console.log("GetA",getaaaa,location.state.allData.EscrowAddress)
                // setAuctionTime(await getaaaa.methods.auctionEndTime().call());                                        
                // let r=[];
                // //let valuueReturn = await getaaaa.methods.auctionEndTime().call();
                // //let valuueReturn = await getaaaa.methods.auctionitems(location.state.allData.Assetid).call();                
                // r.push(await getaaaa.methods.auctionitems(location.state.allData.Assetid).call());            
                // setAuction(await getaaaa.methods.auctionitems(location.state.allData.Assetid).call());                                    
                // console.log("vR",r[0].highesttokenbidder)
                // setHighestBidder(r[0].highesttokenbidder)
                // setHighestPrices(r[0].highestbidamount)
                // setCAuctionTime(Math.round(+new Date()/1000));
                
                const client = new AptosClient('https://fullnode.testnet.aptoslabs.com');;
      let contractaddressnew = "0x69918e79642121dcd5e88565efdd16b1ba9421dfcfed66eff3a1c400efcfc3d"
      // let newcode = await getResourceAccountAddress(valuess.CreatorAddress,valuess.NFTName)
      // console.log("Newcode",newcode)
      let a = await client.getAccountResources(location.state.allData.CreatorAddress,location.state.allDataviewtoken.NFTName)
      //let a2 = await client.getAccountTransactions(valuess.CreatorAddress,valuess.NFTName)
      //console.log("vv1",a2);
      a.map((b)=>{
        //console.log("vv",b.type);
        if(b.type === `${contractaddressnew}::auction1::ResourceInfo`){
        //0x69918e79642121dcd5e88565efdd16b1ba9421dfcfed66eff3a1c400efcfc3d
        // if(b.type === "::auction1::ResourceInfo"){
          //console.log("Bvalue",b.data.resource_map.data)
          let bvalue = b.data.resource_map.data;
          bvalue.map(async(bv)=>{          
            if(bv.key === location.state.allData.NFTName+location.state.allData.NFTName){
              console.log("BV",bv.value)
              let as = await client.getAccountResource(bv.value,`${contractaddressnew}::auction1::MokshyaReward`)
              console.log("vvnew",as.data.highest_bidder);
              setHighestBidder(as.data.highest_bidder)
            }
          })
        }      
      })
            } catch (error) {                  
                console.log("Err",error)
            } 
        }                       
    }    
    useEffect(()=>{dbcallAuction()},[])
    

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
        if(location.state === null || location.state === "" || location.state === undefined){
            toast.warning(`Data is Required`,{autoClose:5000})
            handleHideLoad()
            done2()
        }        
        else if(location.state.allData === null || location.state.allData === "" || location.state.allData === undefined ){
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
        else if(getprices === "0"){
            toast.warning(`Please Enter above 0 Price`,{autoClose:5000})
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
        else if(parseFloat(EAWalletbalances)  < ((location.state.allData.NFTPrice/100000000)))
        {            
            toast.dismiss()
            toast.error("Your Polygon balance is low. Please get more Matic from dispenser..",{autoClose:5000});  
            handleHideLoad()
        }        
        else if((parseFloat(HighestPrices)/100000000) >= parseFloat(getprices)){
            console.log("GetValue",(HighestPrices/100000000))//1.5 <= 2.2 
            toast.warning(`Please Enter above Bidding Price`,{autoClose:5000})
            handleHideLoad()            
        }
        else if((parseFloat(location.state.allData.NFTPrice)/100000000) === parseFloat(getprices)){
            toast.warning(`Please Enter above Bidding Price`,{autoClose:5000})
            handleHideLoad()            
        }
        else if(parseFloat(location.state.allData.NFTPrice) === (parseFloat(getprices)*100000000)){
            toast.warning(`Please Enter above Bidding Price`,{autoClose:5000})
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
        // else if((parseFloat(getValueIdNewHB)/1000000) >= parseFloat(getprices)){
        //     toast.warning(`Please Enter above Bidding Price`,{autoClose:5000})
        //     handleHideLoad()            
        // }
        else{        
        // let minbalance=await minAlgoBalance()
        // let minAss = await minBal()        
        // let mbalance = (961000+1000+(parseInt(getValueIdNew))+1000)
        // if(minAss < mbalance){            
        //     toast.error("Your Algo balance is low. Please get more Algos from dispenser.",{autoClose:5000});  
        //     handleHideLoad()
        // }
        // else if(minbalance < mbalance){
        //     toast.error("Your Algo balance is low. Please get more Algos from dispenser..",{autoClose:5000});  
        //     handleHideLoad()
        // }        
        // else if(algobalanceApp  < (((parseInt(getValueIdNew))/1000000)+2)  )
        // {            
        //     toast.dismiss()
        //     toast.error("Your Algo balance is low. Please get more Algos from dispenser..",{autoClose:5000});  
        //     handleHideLoad()
        // }
        //else{            
            handleShowLoad()  
            toast.dismiss();            
            toast.info("NFT Bidding InProgress",{autoClose: 5000});                             
        try{

            let AssId = location.state.allData.Assetid;
            //let PriceId =((location.state.allData.NFTPrice/100000000)+0.01).toString()                             
            let PriceId = parseFloat(getprices)*100000000;
            const response = await window.martian.connect();
        const address = response.address;
        const options = {
          max_gas_amount: "10000"
        }    
        let property_version = 0   
        let calc = (getprices * 100000000)
        const payloadclaim = {
          type: "script_function_payload",
          function: `${caddressnew}::auction1::bid_tokens`, 
          type_arguments: ["0x1::aptos_coin::AptosCoin"],
          arguments: [                    
            location.state.allData.CreatorAddress,
            location.state.allData.ownerAddress,
            location.state.allData.NFTName,         
            location.state.allData.NFTName,     
            property_version,
            1,
            calc,                           
          ]
        }
                  
        // const txn_request2CS =  await window.martian.generateTransaction(address, payloadclaim,options)
        // console.log("Req",txn_request2CS)
        // const signed_txn2CS = await  window.martian.signTransaction(txn_request2CS)
        // console.log("signedTx",signed_txn2CS)
        // const res2CS = await window.martian.submitTransaction(signed_txn2CS)        
        // console.log("TransferV",res2CS)              
        // let id = "https://explorer.aptoslabs.com/txn/"+res2CS.hash+"?network=testnet";
        let transaction2Hash = await swappet(payloadclaim)
        console.log("transactionHash", transaction2Hash); 
        //   let id = "https://explorer.aptoslabs.com/txn/"+transactionHash;        
        let id = "https://explorer.aptoslabs.com/txn/"+transaction2Hash+"?network=testnet";
        toast.success(toastDiv(id));                 
        // toast.success(`Asset Bidding ${response.txId}`,{autoClose: 8000});                                      
        toast.success(`NFT Bidding Successfully`,{autoClose: 8000});            
        handleHideLoad()
        await sleep(10000) 
        await done() ;
            // let getaaa=new web3.eth.Contract(abiauction,location.state.allData.EscrowAddress);                        
            // await getaaa.methods.bid(AssId,web3.utils.toBN(PriceId)).send({
            //     from:localStorage.getItem('EAWalletAddress'),                  
            //     gas: 210000
            // }).on('transactionHash',function(hash){                      
            //     toast.success(`NFT Bidding Successfully`,{autoClose: 8000});            
            //     handleHideLoad()                
            //     done()                            
            // })                                        

            //let id = "https://explorer.aptoslabs.com/txn/"+res2CS.hash+"?network=testnet";
            //toast.success(toastDiv(id));                        
            //toast.success(`Asset Bidding ${response.txId}`,{autoClose: 8000});                                                  
        }catch (err) {        
            console.error(err);
            toast.warning(`you are facing error `,{autoClose:5000})                    
            handleHideLoad()
        }                               
        }                    
    }

    const storeDBBuy=async(response,value,addresses)=>{
        let dateset=new Date().toDateString();
        //firebases.auth().signInAnonymously().then((response)=>{                              
          firebase.database().ref(`EPolygonNFTAS/${value.ownerAddress}`).child(value.keyId).remove().then(()=>{
          firebase.database().ref(`EPolygonNFTABuy/${addresses}`).child(value.keyId).set({
              Assetid:value.Assetid,Imageurl:value.Imageurl,NFTPrice:value.NFTPrice,
              EscrowAddress:value.EscrowAddress,keyId:value.keyId,
              NFTName:value.NFTName,userSymbol:value.userSymbol,Ipfsurl:value.Ipfsurl,
              ownerAddress:addresses,previousoaddress:value.ownerAddress,
              TimeStamp:dateset,NFTDescription:value.NFTDescription,HistoryAddress:value.HistoryAddress,
              Appid:value.Appid,valid:value.valid,
              CreatorAddress:value.CreatorAddress,NFTType:"",
              NFTChannel:value.NFTChannel,
              SocialLink:"",
              NFTModel:value.NFTModel
                }).then(()=>{                          
                  let refactivity=firebase.database().ref(`EPolygonactivitytable/${addresses}`);   
                  let refactivityCreator=firebase.database().ref(`EPolygonactivitytable/${value.CreatorAddress}`);
                  const dbcreator = refactivityCreator.push().key;                         
                  const db = refactivity.push().key;                         
                  refactivity.child(db).set({
                  Assetid:value.Assetid,Imageurl:value.Imageurl,NFTPrice:value.NFTPrice,
                  EscrowAddress:"BuyNFT",keyId:db,
                  NFTName:value.NFTName,userSymbol:value.userSymbol,Ipfsurl:value.Ipfsurl,
                  ownerAddress:addresses,previousoaddress:value.ownerAddress, 
                  TimeStamp:dateset,NFTDescription:response,HistoryAddress:value.HistoryAddress,
                  Appid:value.Appid,valid:value.valid,
                  CreatorAddress:value.CreatorAddress,NFTType:"",
                  NFTChannel:value.NFTChannel,
                  SocialLink:"",
                  NFTModel:value.NFTModel              
                  })
                  .then(()=>{     
                      refactivityCreator.child(dbcreator).set({
                          Assetid:value.Assetid,Imageurl:value.Imageurl,NFTPrice:value.NFTPrice,
                          EscrowAddress:"Reward-Algos",keyId:dbcreator,
                          NFTName:value.NFTName,userSymbol:value.userSymbol,Ipfsurl:value.Ipfsurl,
                          ownerAddress:addresses,previousoaddress:value.ownerAddress, 
                          TimeStamp:dateset,NFTDescription:response,HistoryAddress:value.HistoryAddress,
                          Appid:value.Appid,valid:value.valid,
                          CreatorAddress:value.CreatorAddress,NFTType:"",
                          NFTChannel:value.NFTChannel,
                          SocialLink:"",
                          NFTModel:value.NFTModel
                          })
                          .then(()=>{     
                            console.log("NFT Purchased Successfully")
                            toast.dismiss() 
                            toast.success(`NFT Purchased Successfully`,{autoClose: 8000});                            
                            handleHideLoad()
                            done()                            
                            })                      
                            })                          
                            handleHideLoad()
                            done()                     
                        }) 
          })                                    
        //})
    }

    const BuyPriceDb=async()=>{
        console.log("location",location.state)
        if(location.state === null || location.state === "" || location.state === undefined){
           console.log("1")
            toast.warning(`Data is Required`,{autoClose:5000})
            handleHideLoad()
            done2()
        }
        
        else if(location.state.allData === null || location.state.allData === "" || location.state.allData === undefined ){
            console.log("1")
            toast.warning(`Data is Required`,{autoClose:5000})
            handleHideLoad()
            done2()
        }        
        else if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === "0x" || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
            console.log("1")
            toast.warning(`please connect wallet`,{autoClose:5000})
            handleHideLoad()            
        }
        // else if(algobalanceApp === 0 || algobalanceApp === ""){
        //     toast.warning(`your wallet balance below 1`,{autoClose:5000})
        //     handleHideLoad()            
        // }
        // else if((parseFloat(item.NFTPrice)/1000000) >= algobalanceApp ){
        //     toast.warning(`your balance not enough to purchase this nft`,{autoClose:5000})
        //     handleHideLoad()            
        // }                
        else if(EAWalletbalances === 0 || EAWalletbalances === ""){
            console.log("1")
            toast.warning(`your wallet balance below 1`,{autoClose:5000})
            handleHideLoad()            
        }
        else if((parseFloat(location.state.allData.NFTPrice)/100000000) >= parseFloat(EAWalletbalances)){
            console.log("1")
            toast.warning(`your balance not enough to purchase this nft`,{autoClose:5000})
            handleHideLoad()            
        }                
        else if(parseFloat(EAWalletbalances)  <= ((location.state.allData.NFTPrice/100000000)))
        {     console.log("1")       
            toast.dismiss()
            toast.error("Your Polygon balance is low. Please get more Matic from dispenser..",{autoClose:5000});  
            handleHideLoad()
        }
        else if(getIProfileYour === "" || getIProfileYour === null || getIProfileYour === undefined || getIProfileYour === "undefined" ){
            console.log("1")
            toast.dismiss()
            toast.error("Please Create Your Profile",{autoClose:5000});  
            handleHideLoad()
        }
        else if(getIProfileYour[0] === "" || getIProfileYour[0] === null || getIProfileYour[0] === undefined || getIProfileYour[0] === "undefined" ){
            console.log("1")
            toast.dismiss()
            toast.error("Please Create Your Profile",{autoClose:5000});  
            handleHideLoad()
        }        
        else if(parseInt(HighestBidder) === parseInt(localStorage.getItem('EAWalletAddress'))){
            console.log("1")
          handleShowLoad()                 
          toast.info("NFT Purchase InProgress",{autoClose: 5000});  
          console.log("ItemCheck",location.state.allData)
          //const collectionName= "Statis";
          //let caddress = "0x783e677f5ad43ef8925a21e7a9189ff6966724ddebf9c097b8490803f3cc841b";
          //let caddress = "0xc0cee507c8e5e143ef1a6da33a7e863cf91bf3f144c0462d84b57c8a2e7191ed";          
          try {    
            let AssId = location.state.allData.Assetid;
            // let getaaa=new web3.eth.Contract(abiauction,location.state.allData.EscrowAddress);                                    
            let PriceId = parseFloat(HighestPrices)
            // await getaaa.methods.auctionEnd(AssId).send({
            //     from:localStorage.getItem('EAWalletAddress'),                 
            //     value: web3.utils.toBN(PriceId),                    
            //     gas: 210000
            // }).on('transactionHash',function(hash){      
            //     console.log("hashget",hash)                                                
            // })
              
            const response = await window.martian.connect();
            const address = response.address;
            const options = {
              max_gas_amount: "10000"
            }
            let property_version = 0    
            //await sleep(10000)                          
            //await AssetBuy()      
            const payloadclaim = {
                type: "script_function_payload",
                function: `${caddressnew}::auction1::buy_tokens`, 
                type_arguments: ["0x1::aptos_coin::AptosCoin"],
                arguments: [                    
                  location.state.allData.CreatorAddress,
                  location.state.allData.ownerAddress,
                  location.state.allData.NFTName,         
                  location.state.allData.NFTName,     
                  property_version,
                  1,
                  location.state.allData.NFTPrice,
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
            await storeDBBuy("res2.hash",location.state.allData,localStorage.getItem('EAWalletAddress'))
          } catch (error) {              
            console.log("Error",error)
            console.log(error)                                
            handleHideLoad()
            window.location.reload(false)
          }
          }    
    }
        
    const doneduplicate=async()=>{
        await sleep(3000);        
        window.location.reload(false);    
    } 
        

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    const done=async()=>{
        await sleep(7000);
        history.push("/my-NFT")
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
                            <img src={CardImage} alt="img" className='img-fluid' />
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
                                                                                
                                <>                            
                                {/* {getValueIdNew === "" || getValueIdNew === undefined || getValueIdNew === null ?(
                                    <p>{configfile.nullvalue}</p>
                                ):(
                                    <>
                                    {getValueIdNewHB === "" || getValueIdNewHB === undefined || getValueIdNewHB === null ?(                                    
                                        <>
                                        <h6 className='d-flex mb-3 align-items-center'>                                    
                                        Highest Bid :&nbsp;
                                        <p>{configfile.nullvalue}</p>
                                        </h6>
                                        </>
                                    ):(
                                        <>
                                        <h6 className='d-flex mb-3 align-items-center'>                                    
                                        Highest Bid :&nbsp;
                                        {((parseFloat((getValueIdNewHB/1000000))))}
                                        </h6>
                                        <br></br>
                                        </>
                                    )}                                    
                                    </>
                                )} */}
                                </>                                                                                                                                
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
                                {HighestPrices === null || HighestPrices === "" || HighestPrices === undefined ? ( 
                                <>                                
                                    <p>{configfile.nullvalue}</p>                                                                
                                </>
                                ):(                                    
                                    <h3 className='d-flex mb-3 align-items-center'><p>Bidding Price &nbsp;&nbsp;{(HighestPrices/100000000)}</p></h3>
                                )}
                                {location.state === null || location.state === undefined || location.state === "" ?(
                                    <></>
                                ):(
                                    <>
                                    {(location.state.allData.AuctionTime) > (Math.floor(new Date().getTime()/1000.0)) ?(                  
                                    <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                                    <input type="number" placeholder='Enter Bidding Algos' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />
                                    <ButtonLoad loading={loader} className='btn btn-blue' onClick={()=>{BuyNFT()}}>Bid NFT</ButtonLoad>   
                                    {/* <ButtonLoad loading={loader} className={"button-small rounded"} onClick={()=>{BuyPriceDb()}}><span>Buy NFT</span></ButtonLoad> */}

                                    </div>
                                    ):(
                                    <>                    
                                    {parseInt(HighestBidder) === parseInt(localStorage.getItem("EAWalletAddress"))?(
                                    <ButtonLoad loading={loader} className={"button-small rounded"} onClick={()=>{BuyPriceDb()}}><span>Buy NFT</span></ButtonLoad>
                                    ):(
                                    <ButtonLoad loading={loader} className={"button-small rounded"}><span>Not Highest Bidder</span></ButtonLoad>
                                    )}                 
                                    </>                  
                                    )}      
                                    </>
                                )}
                                

                                {/* {AssetOpt ? (
                                    <>
                                    {(toAuctiontimeend) > (Math.floor(new Date().getTime()/1000.0)) ?(
                                        <div className="input-group-max d-flex align-items-center text-nowrap px-3 input-group-max-lg w-100">
                                        <input type="number" placeholder='Enter Bidding Algos' className='form-control' value={((getprices))} onChange={event => setprices((event.target.value))} />
                                        <ButtonLoad loading={loader} className='btn btn-blue' onClick={()=>{BuyNFT()}}>Bid NFT</ButtonLoad>   
                                        </div>
                                    ):( 
                                        <>
                                        {(EscrowHB === null || EscrowHB === undefined || EscrowHB === "" || EscrowHB === 0 || getValueIdNewHB === null || getValueIdNewHB === undefined || getValueIdNewHB === "" || getValueIdNewHB === 0) ? (
                                            <ButtonLoad disabled loading={loader} className='btn btn-blue' >Target Time End</ButtonLoad>
                                        ):(
                                            <>
                                            {EscrowHB === localStorage.getItem('EAWalletAddress') ? (
                                                <ButtonLoad loading={loader} className='btn btn-blue' onClick={()=>{CliamNFT(location.state.allData)}}>Buy NFT</ButtonLoad>                                           
                                            ):(
                                                <ButtonLoad disabled loading={loader} className='btn btn-blue' >Target Time End</ButtonLoad>
                                            )}
                                            </>                                            
                                        )}
                                        </>                                           
                                    )}
                                    </>                                                                        
                                ):(
                                    <>
                                    {(toAuctiontimeend) > (Math.floor(new Date().getTime()/1000.0)) ?(
                                        <ButtonLoad loading={loader} className='btn btn-blue' onClick={()=>{BuyOptNFT()}}>Optin NFT</ButtonLoad>                                    
                                    ):(
                                        <ButtonLoad disabled loading={loader} className='btn btn-blue' >Target Time End</ButtonLoad>
                                    )}                                    
                                    </>
                                )}                                                                                             */}
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

export default NFTDetailsAuction;