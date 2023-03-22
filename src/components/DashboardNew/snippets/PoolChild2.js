import { useState,useEffect } from "react";

import { Button, Col, FormControl, InputGroup, Modal, OverlayTrigger, Row, Stack, Tooltip } from "react-bootstrap";

import WalletConnect from "@walletconnect/client";
import QRCodeModal from "algorand-walletconnect-qrcode-modal";
import { formatJsonRpcRequest } from "@json-rpc-tools/utils";
import { dualwalletconnect } from '../walletconnection';
import algosdk, { Algod ,encodeUint64} from "algosdk";
import elemlogo from '../../../assets/images/elem-original.png';
import node from '../nodeapi.json';
import axios from "axios";
import MyAlgoConnect from '@randlabs/myalgo-connect';
import { ToastContainer, Toast, Zoom, Bounce, toast} from 'react-toastify';
import { PtpstakingAppAdress,PtpstakingAppId,usdcStakingappaddress,swapAppId,PTP,VEPTP,oldveptp,usdtStakingappaddress,usdtStakingappid,USDC,USDT,USDCE,USDTE, UsdtAppId, TauStakingappaddress, TAUE } from '../singlesidedAmmconfig';
import { checkotp, walletBalance } from "../../formula";
import { globalstate } from "../../StableswapConfig";
import ButtonLoad from 'react-bootstrap-button-loader';
import { createtpairhistory } from "../../apicallfunction";


const algodClient = new algosdk.Algodv2('',node['algodclient'], '');
const myAlgoWallet = new MyAlgoConnect({ disableLedgerNano: false });
const indexerClient = new algosdk.Indexer('', node['indexerclient'], '');
const bridge = "https://bridge.walletconnect.org";


function PoolChild() {
    const [show, setShow] = useState(false);
    const [BondAmount, setBondAmount] = useState();
    const handleToggle = () => setShow(!show);
    const[functname, setfunctname] = useState("");
    const handleShowLoad = () => setLoader(true);
    const handleHideLoad = () => setLoader(false);
    const[loader, setLoader] = useState(false);
    const[totalusdte, settotalusdte] = useState("");
    const[totalusdce, settotalusdce] = useState("");
    const[stakedAmount, setstakedAmount] = useState("");
    const[usdtebalance, setusdtebalance] = useState("");
    const[usdteoptin, setusdteoptin] = useState(true);
    const[appOpted,setOpted] = useState(false);

    const[veptpptpbalance, setveptpptpbalance] = useState("");
    const[ptpbalance, setptpbalance] = useState("");
    const[baseApr, setbaseApr] = useState("");
    const[BoostingApr, setBoostingApr] = useState("");
    const[totalApr, settotalApr] = useState("");
    const[ptpptpoptin, setptpptpoptin] = useState(true);
    const[claimamount, setclaimamount] = useState("");
    const handleShowLoad1 = () => setLoader1(true);
    const handleHideLoad1 = () => setLoader1(false);
    const[loader1, setLoader1] = useState(false);
    const[swapstate,setswapstate] = useState([])
    const[totaltaue, settotaltaue] = useState("");

    useEffect(() => {first()},[])
    const first = async()=>{
        let k = await globalstate(algodClient,usdtStakingappid);
        let tusdce,tusdte,ttaue;
        let ln = await axios.get(`${node['indexerclient']}/v2/accounts/${usdtStakingappaddress}/assets`);
        ln.data['assets'].map((r)=>{
            // if(r['asset-id'] == USDCE){
            //     tusdce = r.amount;
            //     settotalusdce(r.amount)
            // }
            if(r['asset-id'] == USDTE){
                tusdte = r.amount;
                settotalusdte(r.amount)
            }
        })
        let ln1 = await axios.get(`${node['indexerclient']}/v2/accounts/${usdcStakingappaddress}/assets`);
        ln1.data['assets'].map((r)=>{
            if(r['asset-id'] == USDCE){
                tusdce = r.amount;
                settotalusdce(r.amount)
            }
            // if(r['asset-id'] == USDTE){
            //     tusdte = r.amount;
            //     settotalusdte(r.amount)
            // }
        })
        let ln2 = await axios.get(`${node['indexerclient']}/v2/accounts/${TauStakingappaddress}/assets`);
        ln2.data['assets'].map((r)=>{
        
            if(r['asset-id'] == TAUE){
                ttaue = r.amount;
                settotaltaue(r.amount)
            }
        })

        
        let UsdcrewardDebt,Usdcfactor,UsdcclaimablePtp =0,stkamount,stktime;
        try{
            let bal = await axios.get(`${node['indexerclient']}/v2/accounts/${localStorage.getItem("walletAddress")}/apps-local-state?application-id=${usdtStakingappid}`);
        console.log("Balance",bal.data['apps-local-states'][0]['key-value']);
            bal.data['apps-local-states'][0]['key-value'].map((r)=>{
                if(r['key'] == "VXNkdExQU3Rha2VkQW1vdW50" ){
                    stkamount = r.value.uint;
                    setstakedAmount(r.value.uint)
                }
                if(r['key'] == "U3Rha2VkVGltZQ=="){
                    stktime =  (r.value.uint)
                }
                if(r['key'] == "VXNkdFN0YWtlZEZhY3Rvcg=="){
                    Usdcfactor =  (r.value.uint)
                }
                // if(r['key'] == "VXNkdGNsYWltYWJsZVB0cA=="){
                //     UsdcclaimablePtp =  (r.value.uint)
                // }
            })

            console.log("Balance",UsdcrewardDebt,Usdcfactor,UsdcclaimablePtp);
        }catch(err){
            setstakedAmount(0)
        }
        let [p,popt] = await walletBalance(USDTE);
        setusdtebalance(p);
        setusdteoptin(popt)

        let veptpb,ptpb ;
        let lns = await axios.get(`${node['indexerclient']}/v2/accounts/${PtpstakingAppAdress}/assets`);
        // console.log("Balance",ln.data);
        lns.data['assets'].map((r)=>{
            if(r['asset-id'] == VEPTP){
                veptpb = r.amount;
                setveptpptpbalance(r.amount)
            }
            if(r['asset-id'] == PTP){
                ptpb = r.amount;
                setptpbalance(r.amount)
            }
        })

         //APR calculation
         let baseapr = 90000000 * (tusdte/(tusdce+tusdte + ttaue))
         console.log("baseapr",baseapr)
         setbaseApr(baseapr)
 
         let weightofdeposit = Math.abs(1000000000000 - veptpb);
         let boostingapr = 150000000000000 * ((ptpb)/(weightofdeposit * ptpb))
         console.log("boostingapr",boostingapr)
         setBoostingApr(boostingapr)
 
         let totalapr = (baseapr + boostingapr)/(tusdce+tusdte+ptpb)
         console.log("totalapr",totalapr)
         settotalApr(totalapr)

         let [pto,popt1] = await walletBalance(PTP);
         // setptpbalance(p);
         setptpptpoptin(popt1)

        //  await claimcalcluation(stkamount,k.accPtpPerShare,Usdcfactor,k.accPtpPerFactorShare,UsdcclaimablePtp,UsdcrewardDebt,tusdte,k.lastRewardTimestamp,k.adjustedAllocPoint,k.totalAdjustedAllocPoint,k.sumOfFactors)
         let swap = await globalstate(algodClient,UsdtAppId);
         setswapstate(swap);
         console.log("swap",swap)
         setOpted(await checkotp(usdtStakingappid));

         let secondsElapsed = parseInt(Date.now()/1000) - stktime;
        let pending = ((((((swap.cashAdded * (1000))/swap.Liability) * secondsElapsed)/(tusdte/(1000)) * stkamount)/(1000000000)))
        console.log("pending usdc",pending,pending) 
        setclaimamount(pending)
    }
    const claimcalcluation = async(stakedamount,UsdtaccPtpPerShare,Usdtfactor,UsdtaccPtpPerFactorShare,UsdtclaimablePtp,UsdtrewardDebt,tusdce,UsdtlastRewardTimestamp,UsdtadjustedAllocPoint,totalAdjustedAllocPoint,UsdcsumOfFactors)=>{
       
        let pending = Math.abs((((((stakedamount * UsdtaccPtpPerShare) +( Usdtfactor * UsdtaccPtpPerFactorShare)) /(1000))) - UsdtrewardDebt)/(1000000))
        // setclaimamount(pending)
        await updatePool(stakedamount,Usdtfactor,UsdtclaimablePtp,UsdtrewardDebt,UsdtaccPtpPerShare,UsdtaccPtpPerFactorShare,tusdce,UsdtlastRewardTimestamp,UsdtadjustedAllocPoint,totalAdjustedAllocPoint,UsdcsumOfFactors)
        console.log("vlaues",stakedamount,UsdtaccPtpPerShare,Usdtfactor,UsdtaccPtpPerFactorShare,UsdtclaimablePtp,UsdtrewardDebt)
    }
    // const claimcalcluation = async(stakedamount,UsdtaccPtpPerShare,Usdtfactor,UsdtaccPtpPerFactorShare,UsdtclaimablePtp,UsdtrewardDebt)=>{
    //     let pending = Math.abs((((((stakedamount * UsdtaccPtpPerShare) +( Usdtfactor * UsdtaccPtpPerFactorShare)) /(1000000)) + UsdtclaimablePtp) - UsdtrewardDebt)/(1000000))
    //      setclaimamount(pending)
    //      console.log("claim",pending)
    //  }
     const updatePool = async(amount,factor,claimablePtp,rewardDebt,accPtpPerShare,accPtpPerFactorShare,balance,lastRewardTimestamp,adjustedAllocPoint,totalAdjustedAllocPoint,sumOfFactors)=>{

        let  AccPtpPerShare = accPtpPerShare;
        let  AccPtpPerFactorShare = accPtpPerFactorShare;
        let  lpSupply = balance;
        let secondsElapsed = (Date.now()/1000) - lastRewardTimestamp;
        let ptpReward = (secondsElapsed * (10*1000000) * adjustedAllocPoint) / totalAdjustedAllocPoint;
        AccPtpPerShare = AccPtpPerShare +  (ptpReward * 1000000 * 300) / (lpSupply * 1000);
            if (sumOfFactors != 0) {
                AccPtpPerFactorShare =AccPtpPerFactorShare+ (ptpReward * 1000000 * 700) / (sumOfFactors * 1000);
            }
        
        let pendingPtp =
        (((amount/100 * AccPtpPerShare + factor * AccPtpPerFactorShare) / 1000000000) + claimablePtp - rewardDebt);
        console.log("pendingPtp",pendingPtp) 
        setclaimamount(pendingPtp/1000000)

    }


    const clickevent = async(givename) =>{
        setfunctname(givename);
        handleToggle();
       }
       const zeroinputcheck = async(amount) =>{
        if(amount == "" || amount == 0 || amount == undefined || amount == null){
          toast.error(`Zero input not allowed`)
          handleHideLoad()
          return 1;
          
        }
        else{
         return 0;
       }
      }
      const abovebalance = async(amount,balance) =>{
       if(amount > balance){
         toast.error(`Entered Amount is greater than your balance`)
         handleHideLoad()
         return 1;
         
       }
       else{
         return 0;
       }
     }

       const depositOrwithdraw = async()=>{
           handleShowLoad()
        functname == "Deposit" ? await depositUsdtLP():await withdrawUsdtLP();

    }
  function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
   } 
      const waitForConfirmation = async function (algodclient, txId,type) {
          let status = await algodclient.status().do();
          let lastRound = status["last-round"];
          while (true) {
            const pendingInfo = await algodclient
              .pendingTransactionInformation(txId)
              .do();
            if (
              pendingInfo["confirmed-round"] !== null &&
              pendingInfo["confirmed-round"] > 0
            ) {
              let id = "https://testnet.algoexplorer.io/tx/" + txId;
             

              toast.success(toastDiv(id,type));
              await first()
              handleHideLoad();
              first()
              resetstate()
              break;
            }
            lastRound++;
            await algodclient.statusAfterBlock(lastRound).do();
          }
        };
        const waitForConfirmationForoptin = async function (algodclient, txId,type) {
            let status = await algodclient.status().do();
            let lastRound = status["last-round"];
            while (true) {
              const pendingInfo = await algodclient
                .pendingTransactionInformation(txId)
                .do();
              if (
                pendingInfo["confirmed-round"] !== null &&
                pendingInfo["confirmed-round"] > 0
              ) {
                let id = "https://testnet.algoexplorer.io/tx/" + txId;
                
                toast.success(toastDiv(id,type));
                // await first()
                handleHideLoad();
                // first()
                // resetstate()
                
                
                
                break;
              }
              lastRound++;
              await algodclient.statusAfterBlock(lastRound).do();
            }
          };
        const resetstate = async()=>{
            setBondAmount("");
    
        }
        const toastDiv = (txId,type) =>
        (
            <div>
               <p> {type} &nbsp;<a style={{color:'blue'}} href={txId} target="_blank" rel="noreferrer">View in algoexplorer <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.7176 3.97604L1.69366 14L0.046875 12.3532L10.0697 2.32926H1.23596V0H14.0469V12.8109H11.7176V3.97604Z" fill="blue"/>
        </svg></a></p> 
            </div>
        );

        const depositUsdtLP = async()=>{
            try{
                let rt = await zeroinputcheck(BondAmount)
                if(rt==1){
                    return;
                  }
                  rt = await abovebalance(BondAmount*1000000,usdtebalance)
                  if(rt==1){
                    return;
                  }
              const algodClient = new algosdk.Algodv2("",'https://node.testnet.algoexplorerapi.io', '');
              const params = await algodClient.getTransactionParams().do();
              let senderd =localStorage.getItem("walletAddress");
              let appIDa = usdtStakingappid;
              // let assetIda = 104654999;
              let receiverD = usdtStakingappaddress;
              let appArgsD = [];
        
              appArgsD.push(new Uint8Array (Buffer.from("Deposit")));
              //appArgsD.push(algosdk.encodeUint64(parseInt(104043755)));
              let amtc = BondAmount * 1000000;
              let assArgs = [];
              assArgs.push(parseInt(UsdtAppId));
              let assArgs1 = [];
              assArgs1.push(parseInt(USDTE));
              assArgs1.push(parseInt(oldveptp));
              assArgs1.push(parseInt(PTP));
              const txna = algosdk.makeApplicationNoOpTxnFromObject({
                suggestedParams: {
                    ...params,
                },
                from: senderd,
                appIndex:appIDa,
                appArgs: appArgsD,
                foreignApps:assArgs,
                foreignAssets:assArgs1
                
            });
              
              const txna1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
                  suggestedParams: {
                      ...params,
                  },
                  from: senderd,
                  to: receiverD,
                  amount : amtc,
                  assetIndex: parseInt(USDTE)
              });
              const transArrayD = [ txna, txna1 ];
        const groupID = algosdk.computeGroupID(transArrayD)
        for (let i = 0; i < 2; i++) 
        transArrayD[i].group = groupID;
        if(localStorage.getItem("walletName") === "myAlgoWallet"){

        const signedTxnsdo = await myAlgoWallet.signTransaction([transArrayD[0].toByte(),transArrayD[1].toByte()]);
        const responsedo = await algodClient.sendRawTransaction([signedTxnsdo[0].blob,signedTxnsdo[1].blob]).do();
        console.log(responsedo.txId);
       
        await waitForConfirmation(algodClient, responsedo.txId,"Staked successfully");
        await createtpairhistory(responsedo.txId,"USDT Stake",amtc/1000000,usdtStakingappid)

        }
        else if(localStorage.getItem("walletName") === "PeraWallet"){
            const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
            const txns = [transArrayD[0], transArrayD[1]]
            const txnsToSign = txns.map(txn => {
              const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
             //console.log(encodedTxn);
              return {
                txn: encodedTxn,
            };
          });
      
          const requestParams = [ txnsToSign ];
          const request = formatJsonRpcRequest("algo_signTxn", requestParams);
          const result = await connector.sendCustomRequest(request);
          const decodedResult = result.map(element => {
            return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
          });
            // send and await
      
            let response = await algodClient.sendRawTransaction(decodedResult).do();
            await waitForConfirmation(algodClient, response.txId,"Staked Successfully");
        await createtpairhistory(response.txId,"USDT Stake",amtc/1000000,usdtStakingappid)

            // await updatealgobalance()
      
      
         // localStorage.setItem("Staked","stakedbalance");
         
  
  
          }
        handleToggle();
        } 
              
            catch (err) {
                console.error(err);
               toast.error(`${err}`)
                handleHideLoad();
                } 
           }
           const withdrawUsdtLP = async()=>{
             
            try{
                let rt = await zeroinputcheck(BondAmount)
                if(rt==1){
                    return;
                  }
                  rt = await abovebalance(BondAmount*1000000,stakedAmount)
                  if(rt==1){
                    return;
                  }
              const algodClient = new algosdk.Algodv2("",'https://node.testnet.algoexplorerapi.io', '');
              const params = await algodClient.getTransactionParams().do();
              let senderd =localStorage.getItem("walletAddress");
              let appIDa = usdtStakingappid;
              // let assetIda = 104654999;
              let receiverD = usdtStakingappaddress;
              let appArgsD = [];
              let amtc = BondAmount * 1000000;
              appArgsD.push(new Uint8Array (Buffer.from("Withdraw")));
              appArgsD.push(algosdk.encodeUint64(parseInt(amtc)));
              
              let assArgs = [];
              assArgs.push(parseInt(UsdtAppId));
              let assArgs1 = [];
              assArgs1.push(parseInt(USDTE));
              assArgs1.push(parseInt(oldveptp));
              assArgs1.push(parseInt(PTP));
              const txna = algosdk.makeApplicationNoOpTxnFromObject({
                suggestedParams: {
                    ...params,
                },
                from: senderd,
                appIndex:appIDa,
                appArgs: appArgsD,
                foreignApps:assArgs,
                foreignAssets:assArgs1
                
            });
              
        //       const txna1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        //           suggestedParams: {
        //               ...params,
        //           },
        //           from: senderd,
        //           to: receiverD,
        //           amount : amtc,
        //           assetIndex: parseInt(usdtlp)
        //       });
              const transArrayD = [ txna ];
        const groupID = algosdk.computeGroupID(transArrayD)
        for (let i = 0; i < 1; i++) 
        transArrayD[i].group = groupID;
        if(localStorage.getItem("walletName") === "myAlgoWallet"){

        const signedTxnsdo = await myAlgoWallet.signTransaction(transArrayD[0].toByte());
        const responsedo = await algodClient.sendRawTransaction(signedTxnsdo.blob).do();
        

        await waitForConfirmation(algodClient, responsedo.txId," Unstaked successfully");
        await createtpairhistory(responsedo.txId,"USDT UnStake",amtc/1000000,usdtStakingappid)

        console.log(responsedo.txId);
        }
        else if(localStorage.getItem("walletName") === "PeraWallet"){
            const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
            const txns = [transArrayD[0]]
            const txnsToSign = txns.map(txn => {
              const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
             //console.log(encodedTxn);
              return {
                txn: encodedTxn,
            };
          });
      
          const requestParams = [ txnsToSign ];
          const request = formatJsonRpcRequest("algo_signTxn", requestParams);
          const result = await connector.sendCustomRequest(request);
          const decodedResult = result.map(element => {
            return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
          });
            // send and await
      
            let response = await algodClient.sendRawTransaction(decodedResult).do();
            await waitForConfirmation(algodClient, response.txId,"UnStaked Successfully");
            // await updatealgobalance()
            await createtpairhistory(response.txId,"USDT UnStake",amtc/1000000,usdtStakingappid)
      
      
         // localStorage.setItem("Staked","stakedbalance");
         
  
  
          }
        handleToggle();
        } 
              
            catch (err) {
                console.error(err);
               toast.error(`${err}`)
                handleHideLoad()
                } 
           }
           const claim = async()=>{
               handleShowLoad()
            try{
              const algodClient = new algosdk.Algodv2("",'https://node.testnet.algoexplorerapi.io', '');
              const params = await algodClient.getTransactionParams().do();
              let senderd =localStorage.getItem("walletAddress");
              let appIDa = usdtStakingappid;
              // let assetIda = 104654999;
              let receiverD = usdtStakingappaddress;
              let appArgsD = [];
              let amtc = BondAmount * 1000000;
              appArgsD.push(new Uint8Array (Buffer.from("SingleClaim")));
            //   appArgsD.push(new Uint8Array (Buffer.from("ClaimUsdt")));
              // appArgsD.push(algosdk.encodeUint64(parseInt(amtc)));
              
              let assArgs = [];
              assArgs.push(parseInt(UsdtAppId));
              let assArgs1 = [];
              assArgs1.push(parseInt(USDTE));
              assArgs1.push(parseInt(oldveptp));
              assArgs1.push(parseInt(PTP));
              const txna = algosdk.makeApplicationNoOpTxnFromObject({
                suggestedParams: {
                    ...params,
                },
                from: senderd,
                appIndex:appIDa,
                appArgs: appArgsD,
                foreignApps:assArgs,
                foreignAssets:assArgs1
                
            });
              
        //       const txna1 = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
        //           suggestedParams: {
        //               ...params,
        //           },
        //           from: senderd,
        //           to: receiverD,
        //           amount : amtc,
        //           assetIndex: parseInt(usdtlp)
        //       });
              const transArrayD = [ txna ];
        const groupID = algosdk.computeGroupID(transArrayD)
        for (let i = 0; i < 1; i++) 
        transArrayD[i].group = groupID;
        if(localStorage.getItem("walletName") === "myAlgoWallet"){

        const signedTxnsdo = await myAlgoWallet.signTransaction(transArrayD[0].toByte());
        const responsedo = await algodClient.sendRawTransaction(signedTxnsdo.blob).do();
        console.log(responsedo.txId);
        await waitForConfirmation(algodClient, responsedo.txId,"Claimed successfully");
        await createtpairhistory(responsedo.txId,"USDT Claim",claimamount/1000000,usdtStakingappid)

        }
        else if(localStorage.getItem("walletName") === "PeraWallet"){
            const connector = new WalletConnect({ bridge, qrcodeModal: QRCodeModal });
            const txns = [transArrayD[0]]
            const txnsToSign = txns.map(txn => {
              const encodedTxn = Buffer.from(algosdk.encodeUnsignedTransaction(txn)).toString("base64");
             //console.log(encodedTxn);
              return {
                txn: encodedTxn,
            };
          });
      
          const requestParams = [ txnsToSign ];
          const request = formatJsonRpcRequest("algo_signTxn", requestParams);
          const result = await connector.sendCustomRequest(request);
          const decodedResult = result.map(element => {
            return element ? new Uint8Array(Buffer.from(element, "base64")) : null;
          });
            // send and await
      
            let response = await algodClient.sendRawTransaction(decodedResult).do();
            await waitForConfirmation(algodClient, response.txId,"Claimed successfully");
            // await updatealgobalance()
            await createtpairhistory(response.txId,"USDT Claim",claimamount/1000000,usdtStakingappid)
      
      
         // localStorage.setItem("Staked","stakedbalance");
         
  
  
          }
        } 
              
            catch (err) {
                console.error(err);
               toast.error(`${err}`)
                handleHideLoad()
                } 
           }
           const callingMax = async() =>{
            let balan ;
         functname == "Deposit" ? balan = usdtebalance :balan = stakedAmount;
         setBondAmount(balan/1000000)
        }
        const assetoptin = async() => {
            handleShowLoad1()
            try{
         const algodClient = new algosdk.Algodv2("",'https://node.testnet.algoexplorerapi.io', '');
           const params = await algodClient.getTransactionParams().do();
           let sender =localStorage.getItem("walletAddress");
        
         const txn = algosdk.makeAssetTransferTxnWithSuggestedParamsFromObject({
             suggestedParams: {
                 ...params,
             },
             from: sender,
             to:sender,
             assetIndex: PTP,
             amount : 0,
         });
         //let appArgs = [];
         //appArgs.push(new Uint8Array (Buffer.from("assetoptin")));
        
          
         const myAlgoConnect = new MyAlgoConnect();
        //  const signedTxn = await myAlgoWallet.signTransaction(txn.toByte());
        //  const response = await algodClient.sendRawTransaction([signedTxn.blob]).do();
        let transid=await dualwalletconnect(txn);
         await waitForConfirmation(algodClient, transid,"Asset Opt-In successfully");
        //  console.log("TxId =", response.txId);
         handleHideLoad1()
        }catch (err) {
            console.error(err);
           toast.error(`${err}`)
            handleHideLoad1()
            } 
           }
           const appOptIn = async () =>
           {
             handleShowLoad()
          //console.log("minb",mintotranser ,balanceid1)
           // if(balanceid1 >= mintotranser + 557000){
           // const algodClient = new algosdk.Algodv2('', 'https://api.testnet.algoexplorer.io', '');
       
       
       
           let index = parseInt(usdtStakingappid);
           ////console.log("appId inside donate", index)
           try {
       
           const params = await algodClient.getTransactionParams().do();
       
           let optinTranscation = algosdk.makeApplicationOptInTxnFromObject({
           from:localStorage.getItem("walletAddress"),
           suggestedParams:params,
           appIndex:index
           });
       
           let transid=await dualwalletconnect(optinTranscation);
           await waitForConfirmationForoptin(algodClient, transid,"App Opt-In is completed successfully");
           // await updatealgobalance()
           // const signedTx1 = await myAlgoWallet.signTransaction(optinTranscation.toByte());
       
           // //toast.info("Transaction in Progress");
           // const response = await algodClient.sendRawTransaction(signedTx1.blob).do();
           // ////console.log("TxID", JSON.stringify(response, null, 1));
           // await waitForConfirmation(algodClient, response.txId,"App Opt-In");
           
       
           // await postusertx(localStorage.getItem("walletAddress"),response.txId,0,"Opt-In App",0,0,"","",0);
       
           // await postusertx("-",response.txId,"App Opt-In","-","-")
       
           setOpted(true)
           }catch (err) {
             handleHideLoad()
          //console.log("err",err.toString())
           let ev = err.toString()
           let present = ev.indexOf("balance")   
           let present4 = ev.indexOf("already")
           let present5 = ev.indexOf("blocked")
           //console.log("err",ev)
           if(present > 1){
           toast.error(`Your Algo balance is low. Please get more Algos from dispenser`);
           }
           else if(present4 > 1){
           toast.error(`Already opted the App `);
           }
           else if(present5 > 1){
           toast.error(`Allow the pop up window and try again`);
           }
           else{
            toast.error(`${err}`);
           }
          
       
       
       
           //console.error(err);
           // }
           }
       //     else{
       // handleHideLoad()
       //     toast.error("You are not having enough Algo to do Transaction");
       //     }
       
           }
       
    return (
        
        <>
          <><ToastContainer position='bottom-right' draggable = {false} transition={Zoom} autoClose={4000} closeOnClick = {false}/></>

          <Modal show={show} className="modal-dashboard" centered onHide={handleToggle}>
                <Modal.Header className="mb-0" closeButton />
                <Modal.Body className="pt-0">
                    <Modal.Title className="text-center mb-4">Confirm {functname} <img src={elemlogo} alt='image' width={23} height={23} className="mx-1" /> USDTe</Modal.Title>
                    
                    <div className="d-flex text-muted align-items-center justify-content-between flex-wrap">
                        {/* <p className="mb-3">{functname}ed: 
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    0.0 USDTe
                                </Tooltip>
                            }
                            >
                                <div className="d-inline-block ms-1">0.0 USDTe</div>
                            </OverlayTrigger>
                        </p> */}
                        <p className="mb-3">My wallet balance: 
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                     USDTe
                                </Tooltip>
                            }
                            >
                                <div className="d-inline-block ms-1">{usdtebalance? parseFloat(usdtebalance/1000000).toFixed(3):'0.0'}  USDTe</div>
                            </OverlayTrigger>
                        </p>
                    </div>

                    <InputGroup className='input-group-max input-group-max-lg mb-3'>
                        <FormControl
                            // disabled={true}
                            value={BondAmount}
                            type='number'
                            placeholder="0.00"
                            className="ps-1 pb-0"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            onChange={(e) => setBondAmount(e.target.value)}
                        />
                        <Button variant="outline-purple" className='btn-xs-d rounded' onClick={()=>callingMax()}>Max</Button>
                    </InputGroup>

                    {/* <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Amount {functname}ing (after fee)
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                                0.0 USDTe
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">0.0 USDTe</strong>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Fee
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                                0.0 USDTe
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">0.0 USDTe</strong>
                        </OverlayTrigger>
                    </div> */}
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">My total deposits
                            <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are Depositing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger>
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                             USDTe
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">{stakedAmount?parseFloat(stakedAmount/1000000).toFixed(3):'0.0'} USDTe</strong>
                        </OverlayTrigger>
                    </div>
                    <div className="mb-0 d-flex align-items-center justify-content-between">
                        <p className="mb-0 pe-2">Pool share
                            {/* <OverlayTrigger
                            key="left"
                            placement="left"
                            overlay={
                                <Tooltip id={`tooltip-left`}>
                                    The amount you are {functname}ing to the pool (after fee).
                                </Tooltip>
                            }
                            >
                                <svg className="ms-2" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                    <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                </svg>
                            </OverlayTrigger> */}
                        </p>

                        <OverlayTrigger
                            key="right"
                            placement="right"
                            overlay={
                            <Tooltip id={`tooltip-right`}>
                               Percentage
                            </Tooltip>
                        }
                        >
                            <strong className="text-white">{parseFloat((totalusdte/(totalusdce+totalusdte))*100).toFixed(2)} %</strong>
                        </OverlayTrigger>
                    </div>

                    <Row className="mt-4 mb-3">
                        <Col sm={6} className="mb-sm-0 mb-2">
                            <Button variant="blue" className="w-100" onClick={handleToggle}>Cancel</Button>
                        </Col>
                        <Col sm={6} className="mb-sm-0 mb-2">
                        {/* {appOpted ? (<> */}
                                <ButtonLoad loading={loader} variant="blue" className="w-100"
                             onClick={()=>depositOrwithdraw()} 
                             >{functname}</ButtonLoad>
                            {/* </>):(<>
                                <ButtonLoad loading={loader} className='btn btn-blue w-100' onClick={()=>appOptIn()}>
                            Opt-In App
                        </ButtonLoad>
                            </>)} */}
                        </Col>
                    </Row>

                    {/* <p className="text-muted text-center"><small>In bankrun situation, LPs might only be able to withdraw in the over-covered tokens.</small></p> */}
                </Modal.Body>
            </Modal>

            <div className="mb-24 accordion-item accordion-item-pool shadow">
                <div className="accordion-button accordion-button-no-arrow py-3 collapsed">
                    <div className='d-flex flex-md-row flex-column align-items-md-center w-100'>
                        <div class="acc-title me-2 mb-md-0 mb-3">
                            <div className="d-flex align-items-center justify-content-md-start justify-content-center mb-2">
                                <img src={elemlogo} alt="logo" /><span class="ms-3">USDTe</span>
                            </div>
                            <p className='mb-0 d-flex text-sm align-items-center justify-content-md-start justify-content-center'>
                                <span className='text-muted text-end'>Coverage <br />ratio</span> 
                                <h5 className="mb-0 ms-1 px-1">{swapstate.cashAdded?parseFloat(swapstate.cashAdded/swapstate.Liability).toFixed(3):'0.0'}</h5>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            The coverage ratio is the asset-to-liability ratio of a pool. It determines the swapping slippage, withdrawal and deposit fee in our protocol. Learn more about it in our documentation.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </p>
                        </div>
                        <div className="flex-grow-1 pe-md-4 mb-md-0 mb-3 justify-content-between d-flex align-items-center">
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">Pool deposits</h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                         {totalusdte ? parseFloat(totalusdte/1000000).toFixed(3):'0.0'}
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center"> {totalusdte ? parseFloat(totalusdte/1000000).toFixed(3):'0.0'}</h5>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                           USDTe
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0"> USDTe</h6>
                                </OverlayTrigger>
                            </div>
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">Volume </h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                        Total volume
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center">{parseFloat((totalusdce+totalusdte)/1000000).toFixed(3)}</h5>
                                </OverlayTrigger>
                                {/* <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                            14551.916605 USDC
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0">14.6k USDTe</h6>
                                </OverlayTrigger> */}
                            </div>
                            <div class="mr-1">
                                <h6 class="sub-heading text-xs mb-0">My deposits</h6>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                      Total deposited amount
                                        </Tooltip>
                                    }
                                    >
                                    <h5 class="mb-0 d-flex align-items-center">{stakedAmount?parseFloat(stakedAmount/1000000).toFixed(3):'0.0'}</h5>
                                </OverlayTrigger>
                                <OverlayTrigger
                                    key="left"
                                    placement="left"
                                    overlay={
                                        <Tooltip id={`tooltip-left`}>
                                            USDT
                                        </Tooltip>
                                    }
                                    >
                                    <h6 class="sub-heading text-xs mb-0">USDTe</h6>
                                </OverlayTrigger>
                            </div>
                        </div>
                        <Stack direction="horizontal" className="justify-content-center" gap={3}>
                        <ButtonLoad loading={loader1} onClick={()=>assetoptin()} disabled={!ptpptpoptin} variant="blue">Asset Opt-In</ButtonLoad>

                            <Button onClick={()=>clickevent("Deposit")}  disabled={ptpptpoptin} variant="blue">Stake</Button>
                            {stakedAmount>1?(<>  <Button variant="blue" 
                            disabled={ptpptpoptin}
                              onClick={()=>clickevent("Withdraw")} >Unstake</Button>
                              </>):(<>
                                <Button variant="blue" 
                            disabled={true}
                              onClick={()=>clickevent("Withdraw")} >Unstake</Button>
                              </>)}
                        </Stack>
                    </div>
                </div>
                <div className="accordion-body py-3">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="text-sm d-flex flex-wrap align-items-center">
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-2">Reward</span>
                                <img src={elemlogo} alt="logo" width={15} />
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Base APR</span>
                                <span className="me-1">{parseFloat(baseApr/100000000).toFixed(2)}%</span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Base APR of this pool for the users who have deposited and staked USDTe.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Median Boosted APR</span>
                                <span className="me-1">{parseFloat(BoostingApr).toFixed(2)}%</span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                            Base APR of this pool for the users who have deposited and staked USDTe.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                            <div className="d-flex align-items-center me-3">
                                <span className="text-muted me-1">Total APR</span>
                                <span className="me-1">{parseFloat((baseApr/1000000)+(BoostingApr/100)).toFixed(2)}%</span>
                                <OverlayTrigger
                                    key="right"
                                    placement="right"
                                    overlay={
                                        <Tooltip id={`tooltip-right`}>
                                             Total APR of pool.
                                        </Tooltip>
                                    }
                                    >
                                        <svg className="ms-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
                                        </svg>
                                    </OverlayTrigger>
                            </div>
                        </div>
                        <span className="text-muted me-1">My claimable reward:</span><span className="me-1">{claimamount && stakedAmount > 1?parseFloat(claimamount/1000000).toFixed(6):"0.0"}</span>

                        {claimamount/1000000 > 0.000001 && stakedAmount > 1 ?
                       (<>
                       <ButtonLoad loading={loader} variant="blue" 
                        // disabled={true}
                        onClick={()=>claim()}
                        >
                            Claim Reward
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg> */}
                        </ButtonLoad>
                       </>):(<>
                        <Button variant="blue" 
                        disabled={true}
                        onClick={()=>claim()}
                        >
                            Claim Reward
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="ms-2" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                            </svg> */}
                        </Button>
                       </>)}
                    </div>
                </div>
            </div>
        </> 
     );
}

export default PoolChild;