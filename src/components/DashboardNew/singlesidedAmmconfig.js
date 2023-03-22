import { Base64Encoder } from "../encoder";
import axios from "axios";
import configfile from "../../NFTFolder/config.json"

export const PtpstakingAppId = configfile.PtpstakingAppId;
export const PtpstakingAppAdress = configfile.PtpstakingAppAdress;
export const lpstakingAppId = 108818636;
export const lpstakingAppAdress = "E3VHDFIOCXPHWCWUBMUKVCXHEFGRRKQXXOW4LRPTJK6J3UDLANVO52JU4U";
export const swapAppId = 110212513;
export const swapAppAdress = "3XSSLQKGLIA6QLINJJO5XQIJ2UX5YULUFBAPTVKKOPUDHZPI5FO7FMR62I";
// export const USDC = 108466398 ;
// export const USDT = 108466539;
// export const USDCE = 108466691;
// export const USDTE = 108466806;
export const PTP = configfile.PTP;
export const VEPTP = configfile.VEPTP;

// Newupdated
export const UsdtAppId =configfile.UsdtAppId;
export const UsdtAppAdress = configfile.UsdtAppAdress
export const UsdcAppId = configfile.UsdcAppId;
export const UsdcAppAdress = configfile.UsdcAppAdress
export const MianAppId = configfile.MianAppId;
export const MainAppAdress = configfile.MainAppAdress
export const TauAppId = configfile.TauAppId;
export const TauAppAdress = configfile.TauAppAdress
export const Usdc = configfile.Usdc;
export const Usdt = configfile.Usdt;
export const USDCE = configfile.USDCE;
export const USDTE = configfile.USDTE;
export const TAU = configfile.TAU;
export const TAUE = configfile.TAUE;
export const usdcStakingappid = configfile.usdcStakingappid
export const usdcStakingappaddress = configfile.usdcStakingappaddress
export const usdtStakingappid = configfile.usdtStakingappid
export const usdtStakingappaddress = configfile.usdtStakingappaddress
export const TauStakingappid = configfile.TauStakingappid
export const TauStakingappaddress = configfile.TauStakingappaddress
export const oldveptp = configfile.oldVEPTP;

// App details

export const globalstate = async(algodClient,applicationId)=>{
    let response = await algodClient.getApplicationByID(applicationId).do();
    let results = {};
    response.params["global-state"].forEach(x => {
        results[Base64Encoder.decode(x.key)] = x.value.uint;
    });
    
    return results;
}

export const localstate = async(algodClient,appid) =>{
    try{
        let ln = await axios.get(`${algodClient}/v2/accounts/${localStorage.getItem("walletAddress")}/apps-local-state?application-id=${appid}`);
        console.log("local",ln.data['apps-local-states']['0']['key-value']['0']['value']['uint'])
        return (ln.data['apps-local-states']['0']['key-value']['0']['value']['uint']);
    }
    catch(err){
    return 0;
    }
}


//staking contract configuration



