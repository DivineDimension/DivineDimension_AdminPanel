import BigInt from 'big-integer';
import { Base64Encoder } from "./encoder";
import axios from 'axios';
const A_PRECISION = BigInt(1000000);
let elem = 78044331;
let usdc =78045387;
let usdt = 88067314;
// let algousdclpasset= 85508602;
let mangerid = 85505808;

let tau = 78043454;
let usdcusdtlpasset = 89103123;
let tauusdclpasset = 89100847;
let tauusdtlpasset = 89102412;

export const greaterAsset = (Assetid1,Assetid2)=>{
    let asid1 = Assetid1 < Assetid2 ? Assetid1 : Assetid2;
    let asid2 = Assetid1 > Assetid2 ? Assetid1 : Assetid2;
    return[asid1,asid2];
};
export const AppDetails = (Assetid1,Assetid2)=>{
    let lpassetid,pairAppid,pairAddress;
    let Managerappid = mangerid;
    if(Assetid1 === usdc && Assetid2 === usdt){
        lpassetid = usdcusdtlpasset;
        pairAppid = 89102865;
        pairAddress = "R3FFHPGZP7NBZNLK2U7DIE2PKPAEZHTYHIEFLNVJQSDB52XS2OCMH46RHA";
    }
    
    else if(Assetid1 === tau && Assetid2 === usdc){
        lpassetid = tauusdclpasset;
        pairAppid = 89100205;
        pairAddress = "XUKZCJGC7R7T24LJBMVTK4LD4GBHZYLAWIW4TO24JUWKJ6SXKUB55ID4KY";
    }
    else if(Assetid1 === tau && Assetid2 === usdt){
        lpassetid = tauusdtlpasset;
        pairAppid = 89102096;
        pairAddress = "JEPXVJY6SEON2WI4OG4JXT3JCBTEOWLSP4R3WEL4BCP62FLPAVO5MKS4EU";
    }
    else{
        lpassetid = 0;
        pairAppid = 0;
        pairAddress = 0;
    }
   return[lpassetid,Managerappid,pairAppid,pairAddress] 
};

export function getD(tokenAmounts, amplificationFactor) {
    let N_COINS = tokenAmounts.length;
    let S = BigInt(0);
    let Dprev = BigInt(0);
    for (var _x of Array.from(tokenAmounts)) {
        S += BigInt(_x);
    }
    if (S == BigInt(0)) {
        return [0, 0];
    }
    let D = S;
    console.log("amp",amplificationFactor)
    let Ann = BigInt(amplificationFactor * Math.pow(N_COINS, N_COINS));
    for (var _i = 0; _i < 255; _i++) {
        var D_P = D;
        for (var _x of Array.from(tokenAmounts)) {
            D_P = D_P * D / (BigInt(_x) * BigInt(N_COINS));
        }
        Dprev = D;
        D = ((Ann * S / A_PRECISION + D_P * BigInt(N_COINS))
            * D
            / ((Ann - A_PRECISION) * D / A_PRECISION + BigInt(N_COINS + 1) * D_P));
        if (D > Dprev) {
            if (D - Dprev <= BigInt(1)) {
                return [Number(D), _i];
            }
        }
        else {
            if (Dprev - D <= BigInt(1)) {
                return [Number(D), _i];
            }
        }
    }
}
export function getY(i, j, x, tokenAmounts, d, amplificationFactor) {
    let N_COINS = tokenAmounts.length;
    let Ann = BigInt(amplificationFactor * Math.pow(N_COINS, N_COINS));
    let D = (d)
    console.log("values",Math.floor(D))
    let c = BigInt(D);
    let S = BigInt(0);
    let _x = BigInt(0);
    let y_prev = BigInt(0);
    for (var _i = 0; _i < N_COINS; _i++) {
        if (_i == i) {
            _x = BigInt(x);
        }
        else if (_i != j) {
           
            _x = BigInt((tokenAmounts[_i]));
        }
        else {
            continue;
        }
        S += _x;
        c = c * BigInt(D) / (BigInt((_x)) * BigInt(N_COINS));
    }
    c = c * BigInt(Math.floor(D)) * A_PRECISION / (Ann * BigInt(N_COINS));
    let b = S + BigInt(Math.floor(D)) * A_PRECISION / Ann;
    let y = BigInt(Math.floor(D));
    for (var _i = 0; _i < 255; _i++) {
        y_prev = y;
        y = (y * y + c) / (BigInt(2) * y + b - BigInt(Math.floor(D)));
        if (y > y_prev) {
            if (y - y_prev <= BigInt(1)) {
                return [Number(y), _i];
            }
        }
        else {
            if (y_prev - y <= BigInt(1)) {
                return [Number(y), _i];
            }
        }
    }
}
export const globalstate = async(algodClient,applicationId)=>{
    let response = await algodClient.getApplicationByID(applicationId).do();
    let results = {};
    response.params["global-state"].forEach(x => {
        results[Base64Encoder.decode(x.key)] = x.value.uint;
    });
    
    return results;
}
export const getvaluesfromnode = async(client)=>{
    let id =[];
    let printvalues=[];
    try{
        let ln = await axios.get(`${client}/v2/accounts/${localStorage.getItem("walletAddress")}/assets/${usdcusdtlpasset}`);
        console.log("first assets",ln.data['asset-holding']['amount'])
        printvalues.push([ln.data['asset-holding']['amount'],"USDC-USDT",usdc,usdt])
        console.log("printvalues",printvalues)
    }catch (err) {
    let ev = err.toString()
    let present = ev.indexOf("404")
    if(present > 1){
      console.error("err",err,present);
      let k = 0;
     let k1 = true;
    }
}
try{
    let ln1 = await axios.get(`${client}/v2/accounts/${localStorage.getItem("walletAddress")}/assets/${tauusdclpasset}`);
    console.log("three assets",ln1.data)
    printvalues.push([ln1.data['asset-holding']['amount'],"TAU-USDC",tau,usdc])
    console.log("printvalues",printvalues)
}catch (err) {
let ev = err.toString()
let present = ev.indexOf("404")
if(present > 1){
  console.error("err",err,present);
  let k = 0;
 let k1 = true;
}
}   
try{
    let ln2 = await axios.get(`${client}/v2/accounts/${localStorage.getItem("walletAddress")}/assets/${tauusdtlpasset}`);
    console.log("three assets",ln2.data)
    printvalues.push([ln2.data['asset-holding']['amount'],"TAU-USDT",tau,usdt])
    console.log("printvalues",printvalues)
}catch (err) {
let ev = err.toString()
// console.error("err",err,present);
let present = ev.indexOf("404")
if(present > 1){
  console.error("err",err,present);
  let k = 0;
 let k1 = true;
}
}
console.log("printvalues",printvalues)
 return printvalues;   
    //  console.log("lnvalue",s)
    
}

// export const swapcal = async(b1,b2)=>{
//     let price = b1/b2;

// }
