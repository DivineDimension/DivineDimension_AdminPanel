import React,{useEffect,useState,createContext} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import axios from 'axios';
import DashboardKyc from './KycDid/DashboardKyc'
import View from "./KycDid/View";
import Upcoming from "./KycDid/upcoming";
import CreateKyc from "./KycDid/CreateOrg";
// import Approvepage from "./KycDid/Approvepage";
import LauchpadApp from "./components/DashboardNew/Launchpad";
//import StableswapApp from './components/DashboardNew/Stableswap';
//import PoolNew from "./components/DashboardNew/poolNew";
import Home from './components/HomePageswap';
import SinglesideAmm from './components/HomePageswap';
import Analytics from './components/Dashboard/Analytics';
//import FaucetApp from './components/DashboardNew/Faucet';
import TopCollectionsNFTNplay from './components/DashboardNew/TopCollectionsNFTNplay';
import TopCollectionsNFTNmap from './components/DashboardNew/TopCollectionsNFTNmap';
import TopCollectionsNFTNavatarimages from './components/DashboardNew/TopCollectionsNFTNavatarimages';
import TopCollectionsNFTNlandimages from './components/DashboardNew/TopCollectionsNFTNlandimages';
import CreatedEvents from './components/DashboardNew/CreatedEvents';
import CreatedEventsApprovalpage from './components/DashboardNew/CreatedEventsApprovalpage';
import pool from './components/DashboardNew/poolNew';
// dashboard
//import HotCollectionsApp from './components/DashboardNew/HotCollections'
import GenesisMarketApp from './components/DashboardNew/GenesisMarket'
import MyNFTApp from './components/DashboardNew/MyNFT'
import NFTDetailsApp from './components/DashboardNew/NFTDetails'
import CreateArtistsApp from './components/DashboardNew/CreateArtists'
import MintNFTApp from './components/DashboardNew/MintNFT'
import MintNFTerc1155 from './components/DashboardNew/MintNFTerc1155'
// import EditArtists from "./components/DashboardNew/EditArtists";
import MyNFTCopy from "./components/DashboardNew/MyNFTCopy";
import ViewSpecialNFT from "./components/DashboardNew/ViewSpecialNFT"
import TopCollections from "./components/DashboardNew/TopCollections";
import TopCategories from "./components/DashboardNew/TopCategories";
import MyNFTCopy2 from "./components/DashboardNew/MyNFTCopy2";
import TopCollectionsFractional from "./components/DashboardNew/TopCollectionsFractional";
import NFTDetailsFra from "./components/DashboardNew/NFTDetailsFra";
import TopCollectionsNFTN from "./components/DashboardNew/TopCollectionsNFTN";
import TopCollectionsAuction from "./components/DashboardNew/TopCollectionsAuction"
import NFTDetailsNFT from "./components/DashboardNew/NFTDetailsNFT";
import NFTDetailsAuction from "./components/DashboardNew/NFTDetailsAuction";
//import Liquidity from "./components/DashboardNew/liquidity";
import DashboardNFT from "./components/DashboardNew/DashboardNFT";
//import DashboardAMM from "./components/DashboardNew/DashboardAMM";
import firebase from "./NFTFolder/firebase";

//stablecoin

//import FaucetStable from './components/DashboardNew/FaucetStable';
//import BuybackApp from './components/DashboardNew/Buyback'
//import RecollateralizeApp from './components/DashboardNew/Recollateralize'
//import StablecoinApp from './components/DashboardNew/Stablecoin';
//import RedeemApp from './components/DashboardNew/StablecoinRedeem';
import DashboardApp from './components/DashboardNew/Dashboard';
//import BondApp from './components/DashboardNew/Bonds';
import HomePage from "./components/HomePagecifi";
import CreateOrg from "./KycDid/CreateOrg";
import CreateTeam from "./KycDid/CreateTeam";
import CreateClub from "./KycDid/CreateClub";
import CreateToken from "./KycDid/CreateToken";
import MintNFTLimit from "./components/DashboardNew/MintNFTLimit";
import web3 from './components/DashboardNew/web3'
import TopCollectionsERC1155 from "./components/DashboardNew/TopCollectionsERC1155";
import NFTDetailsERC1155 from "./components/DashboardNew/NFTDetailsERC1155";
import PoolNew from "./components/DashboardNew/poolNew";

//Login, signup pages
import Login from "./components/DashboardNew/UserAuth/Login";
import LoginOTP from "./components/DashboardNew/UserAuth/LoginOtp";
import SignUp from "./components/DashboardNew/UserAuth/Signup";

export const DataContext = createContext();
function App() {    


  const[getValue,setValue]=useState([""]);      
  const [EAWalletbalances, setwalletbalance] = useState();  
  console.log("EBalnceApp",EAWalletbalances)
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };
    useEffect(()=>{
        const ReadBalance=async()=>{
          // let metamaskcheck= await isMetaMaskInstalled();
          // if(metamaskcheck){
          if(localStorage.getItem("EAWalletAddress") === null || localStorage.getItem("EAWalletAddress") === undefined || localStorage.getItem("EAWalletAddress") === ''){
          }else{
            let k1 =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${localStorage.getItem('EAWalletAddress')}/resource/0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`)
            let s1 = await k1.json();      
            localStorage.setItem('EAWalletBalance',(s1['data']['coin']['value']/100000000))
            setwalletbalance((s1['data']['coin']['value']/100000000))
            // setwalletbale((s1['data']['coin']['value']/100000000))
          //let url = `https://api.polygonscan.com/api?module=account&action=balance&address=${localStorage.getItem('EAWalletAddress')}&apikey=YourApiKeyToken`;                
          // const accounts =await web3.eth.getAccounts();                    
          // console.log("accBinanceApp",accounts[0])
          // let url="https://api-testnet.polygonscan.com/api?module=account&action=balance&address="+accounts[0]+"&tag=latest&apikey=YourApiKeyToken";      
          // await axios.get(`${url}`)
          // .then(async(url)=>{
          // console.log("EApp1",url)
          // const allnote=await (url.data.result/100000000);                                                  
          // localStorage.setItem('EAWalletBalance',allnote)                
          // await setwalletbalance(allnote)                                                    
          //window.location.reload(false)                                                
          // }).catch(error => console.error(`Error: ${error}`));                
          }
          // }else{
          //   window.open('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn', '_blank','noreferrer');      
          // }
        }
        ReadBalance();
  },[])  
  
  const dbcallProfile=async()=>{        
    let req = [];    
    //firebase.auth().signInAnonymously().then((response)=>{      
      firebase.database().ref("pinatakey").on("value", (data) => {
        if (data) {
          data.forEach((d) => {                
          let value=d.val();              
                req.push(            
                    {
                      pinataapikey:value.pinataapikey,
                      pinatasecretkey:value.pinatasecretkey,  
                  })                 
            });        
          }
          setValue(req);
        });                 
    //})                      
  }      
  useEffect(()=>{dbcallProfile()},[])      
  // value={getValue}
  return (  
    <DataContext.Provider value={EAWalletbalances}>
    <Router>
      <Switch> 
        {/* Login/Signup */}
        <Route path="/login">
          <Login />                    
        </Route> 
        <Route path="/sign-up">
          <SignUp />                    
        </Route>
        <Route path="/login-otp">
          <LoginOTP />                    
        </Route>
        {/* Stabecoin Start */} 
        <Route path="/dashboard">
          <DashboardApp />
        </Route>                    
        
        {/* <Route path="/hot-collections">
          <HotCollectionsApp />
        </Route>                        */}
        <Route path="/top-auctioncollection">
          <TopCollectionsAuction/>
        </Route>          
        <Route path="/top-erc1155collection">
          <TopCollectionsERC1155/>
        </Route>                               
        <Route path="/top-nftcollection">
          <TopCollectionsNFTN />
        </Route>                       
        <Route path="/top-fcollection">
          <TopCollectionsFractional />
        </Route>                       
        {/* <Route path="/top-collections">
          <TopCollections />
        </Route>                 */}
        <Route path="/top-categories">
          <TopCategories />
        </Route>                
        <Route path="/genesis-market">
          <GenesisMarketApp />
        </Route>                
        <Route path="/my-NFT">
          <MyNFTApp />
        </Route>                
        <Route path="/my-NFTcopy">
          <MyNFTCopy />
        </Route>                
        <Route path="/my-NFTcopyy">
          <MyNFTCopy2 />
        </Route>                        
        <Route path="/NFT-detailsfra">
          <NFTDetailsFra />
        </Route>                        
        <Route path="/NFT-details">
          <NFTDetailsApp />
        </Route>                        
        <Route path="/NFT-detailsauction">
          <NFTDetailsAuction />
        </Route>                        
        <Route path="/NFTn-details">
          <NFTDetailsNFT />
        </Route>          
        <Route path="/Erc1155-details">
          <NFTDetailsERC1155 />
        </Route>                 
        <Route path="/create-artists">
          <CreateArtistsApp />
        </Route>                
        <Route path="/Mint-NFT">
          <MintNFTApp />
        </Route>         
        <Route path="/Mint-NFT1155">
          <MintNFTerc1155 />
        </Route>                 
        <Route path="/MintSpecial-NFT">
          <MintNFTLimit />
        </Route> 
        <Route path="/viewsplnft">
          <ViewSpecialNFT/>
        </Route>                       
        <Route path="/launchpad">
          <LauchpadApp />
        </Route>                                                        
        {/* <Route path="/dashboardd">
          <DashboardKyc/>
        </Route>     
        <Route path="/viewkyc">
          <View/>
        </Route> 
        
        <Route path="/approvekyc">
          <Approvepage/>
        </Route>         */}
        <Route path="/createorg">
          <CreateOrg/>
        </Route> 
        <Route path="/createteam">
          <CreateTeam/>
        </Route> 
        <Route path="/createclub">
          <CreateClub/>
        </Route> 
        <Route path="/createtoken">
          <CreateToken/>
        </Route> 
        <Route path="/viewtoken">
          <View/>
        </Route> 
        <Route path="/upcoming">
          <Upcoming/>
        </Route> 
        <Route path="/kyc">
          <DashboardKyc />
        </Route>
        
        <Route path="/singlesideAmm">
          <SinglesideAmm />
        </Route>
        <Route path="/analytics">
          <Analytics />
        </Route>
        {/* <Route path="/faucet">
          <FaucetApp />
        </Route> */}
        <Route path="/dashboardnft">
          <DashboardNFT/>
        </Route>  
        {/* <Route path="/dashboardAMM">
          <DashboardAMM/>
        </Route>    */}
        {/* <Route path="/">
          <Home />                    
        </Route> */}
        <Route path="/play">
          <TopCollectionsNFTNplay />
        </Route> 
        <Route path="/map">
          <TopCollectionsNFTNmap />
        </Route> 
        <Route path="/stake">
          <PoolNew />
        </Route> 
        <Route path="/avatar">
          <TopCollectionsNFTNavatarimages />
        </Route> 
        <Route path="/land">
          <TopCollectionsNFTNlandimages />
        </Route> 
        <Route path="/created_events">
          <CreatedEvents />
        </Route>
        <Route path="/approval_page">
          <CreatedEventsApprovalpage />
        </Route> 
        <Route path="/home">
          <HomePage />                    
        </Route>  
        <Route path="/">
          <Login />                    
        </Route>

        

      </Switch>
    </Router>    
    </DataContext.Provider>  
  );
}

export default App;

{/* <DashboardKyc/> */}