import firebases from "../../NFTFolder/firebase";
// export const pooladdress = "0x49a75817227efc2f0eaffadd24718a8ccbea35f8eafd6701d3817bf8a7dc2dae";
// export const deployeraddress = "0x94131d530356071fee873bb53e85fed9f7931fa879519d1112224e697119510a";
// export const tokencreator = "0xc41f1324b3b6863ea857e3ccb0c379c31b0cffa926cf1a0d8f7a7276b48da9ec"; 

// 
// export const pooladdress = "0x85b78f76efca2150862fe2c747105f0743e05f9925d6be349a03836b27200b73";
// export const deployeraddress = "0xcca6287187e64c1a5faa7a3b4e418914833e0e41ae3477ef2f9f3e1415e4533";
// export const tokencreator = "0xc41f1324b3b6863ea857e3ccb0c379c31b0cffa926cf1a0d8f7a7276b48da9ec"; 

// export const faucetpooladdress = "0xd69a2449d353036eaa404b5a15a8a123b76474a30be008881fbe0d97467fcd88";
// export const faucetdeployeraddress = "0x81b0f595a76332396a373e49ccf32e5831811c8a4a97b04771b5539341ca82a7";

// export const pooladdress = "0xca56557a6d662533eae60773530b68e768f416a905cafe13cfdce9d7a137ca9d";
// export const deployeraddress = "0xa3a69546841143c38953d18c4e52760e7ccc8ee20e0be297a1aab1b9ba23fe20";
// export const tokencreator = "0x128d38ae9358c863a42e4bf8d9d66ac371ba00da46ca471cb70a5ff8a5c329bc"; 

// export const faucetpooladdress = "0x8fa5185363b9749914049436d278cf350b67c9aefff5fd4aa73efbe3f69f3f87";
// export const faucetdeployeraddress = "0x182dcfa53a15847cc9d564ac9732db608a17eaa5735a7e0c80dff93a4dd0d6f9";

// export const pooladdress = "0x35bdfe2e0a213bf5d32ea37a977aec0a230592c93f4a4d7b579fe7a26724d5c7";
// export const deployeraddress = "0x688aa22993c9fcbf9620f5043e8c00df1b91792c59aaa9b4a57b17f523ed8ead";
// export const pooladdress = "0x212c47800250347951f3db792f7dcf298baa45e3949aed9f749d477955138e69";
// export const deployeraddress = "0x95dc54888e8a416d52c535d7c94570258462aab7c312ae5d28a6b7c96eb275a5";
export const pooladdress = "0x126c29e24a03d80fa5da95e3c94df77ff51e598495eda10b3363889762dee3cc";
export const deployeraddress = "0x3ede8ed84ab0a3e2e5a2da290fe6d32315beb02eadd057ecef270a8666ac655b";
export const tokencreator = "0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7"; 
export const pooladdress1 = "0xf1400c622690dc48ad6311b0018cbd1cb05f2690f72ffcacc5258b4ea9bde2c3";
export const deployeraddress1 = "0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3";
export const tokencreator1 = "0xcdeb42ad8c811615c25891963c1df21e84be300e27ac9ec9deafe77ddf7ef291"; 

export const faucetpooladdress = "0xb72ff176f79493d5bec86505a41b0f52784355c5b4072a734e0a0ce0619774fc";
export const faucetdeployeraddress = "0xbb5049778ef4d35e7abe975ceeacdbaf790f1dd6468b60145b3987e3347123f";


export const assetbalance = async (address,token) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${tokencreator}::TestCoins::${token}>`)
        // console.log("fetch",await k.json())
        let a = await k.json()
        return a.data.coin.value
    } 
    catch(error){
        return -1
        
    }
   
}
export const poolassetbalance = async (address,pooladdress,token) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${pooladdress}/resource/0x1::coin::CoinStore<${tokencreator}::TestCoins::${token}>`)
        // console.log("fetch",await k.json())
        let a = await k.json()
        return a.data.coin.value
    }
    catch(error){
        return 0
        
    }
   
}

export const lpassetbalance = async (address,token) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${deployeraddress}::pool::LP<${tokencreator}::TestCoins::${token}>>`)

        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("fetch",await k.json())
        let a = await k.json()
        return a.data.coin.value
    }
    catch(error){
        return 0
        
    }
   
}

export const liabilitycal = async (token) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${pooladdress}/resource/${deployeraddress}::pool::LiquidisedAsset<${tokencreator}::TestCoins::${token}>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("fetch",await k.json())
        let a = await k.json()
        return a.data.liability
    }
    catch(error){
        return 0
        
    }
   
}

export const poollpbalance = async (token) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${deployeraddress}/resource/0x1::coin::CoinInfo<${deployeraddress}::pool::LP<${tokencreator}::TestCoins::${token}>>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("poollpbalance",await k.json())
        let a = await k.json()

        // console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.supply.vec[0].integer.vec[0].value;
    }
    catch(error){
        return 0
        
    }
   
}

export const aptosbalance = async (address) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<0x1::aptos_coin::AptosCoin>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("poollpbalance",await k.json())
        let a = await k.json()

        // console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.coin.value;
    }
    catch(error){
        return 0
        
    }
   
}

export const lpstakingbalane = async (address,name) => {
    let typearg;
    if(name === "Liquidy"){
        typearg = "0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3::staking::Claim<0x5a97986a9d031c4567e15b797be516910cfcb4156312482efc6a19c0a30c948::lp_coin::LP<0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::USDC, 0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::MERCURY, 0x190d44266241744264b964a37b8f09863167a12d3e70cda39376cfb4e3561e12::curves::Uncorrelated>>"
      
      }
      else if(name === "Anime"){
        typearg = "0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3::staking::Claim<0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf::LPCoinV1::LPCoin<0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::USDC, 0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::MERCURY>>"
      }
      else{
        typearg = `0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3::staking::Claim<0x3ede8ed84ab0a3e2e5a2da290fe6d32315beb02eadd057ecef270a8666ac655b::pool::LP<0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::${name}>>`
      }
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/${typearg}`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("lpstakingbalane",await k.json())
        let a = await k.json()

        // console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.claimamount;
    }
    catch(error){
        return 0
        
    }
   
}

export const mebalance = async () => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3/resource/0x1::coin::CoinInfo<0xfc4161677bd8d6f73df53bd2d33d1bba388fd6612c0adf74073ccf08b35cfca3::staking::LP<0xcdeb42ad8c811615c25891963c1df21e84be300e27ac9ec9deafe77ddf7ef291::TestCoins::USDT>>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("mebalance",await k.json())
        let a = await k.json()

        console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.supply.vec[0].integer.vec[0].value;
    }
    catch(error){
        return 0
        
    }
   
}

export const animeswapswapbalance = async (address) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<0x796900ebe1a1a54ff9e932f19c548f5c1af5c6e7d34965857ac2f7b1d1ab2cbf::LPCoinV1::LPCoin<0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::USDC, 0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::MERCURY>>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("animeswapswapbalance",await k.json())
        let a = await k.json()

        // console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.coin.value;
    }
    catch(error){
        return 0
        
    }
   
}
export const liquidiswapbalance = async (address) => {
    try{
        let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<0x5a97986a9d031c4567e15b797be516910cfcb4156312482efc6a19c0a30c948::lp_coin::LP<0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::USDC, 0x954586b2e53518def690ae4b05e6ddaf538ff2eea1f855af7204b78212518df7::TestCoins::MERCURY, 0x190d44266241744264b964a37b8f09863167a12d3e70cda39376cfb4e3561e12::curves::Uncorrelated>>`)


        // let k =await fetch(`https://fullnode.testnet.aptoslabs.com/v1/accounts/${address}/resource/0x1::coin::CoinStore<${address}::pool::LP<${tokencreator}::Testcoins::${token}>>`)
        // console.log("liquidiswapbalance",await k.json())
        let a = await k.json()

        // console.log("poollpbalance",a.data.supply.vec[0].integer.vec[0].value)
        return a.data.coin.value;
    }
    catch(error){
        return 0
        
    }
   
}

export const createtpairhistory =(txhash,type,input)=>{
    // fireDb.auth().signInAnonymously().then(async(response)=>{           
    let ref2=firebases.database().ref(`AMMtxhistory/${localStorage.getItem("walletAddress")}`);
    const db = ref2.push().key;                                                                             
    ref2.child(db).set({
      key:db,txhashAddress:txhash,typeoftx:type,amount:input
    })
    .then(()=>{
      console.log("done")
    })
    // })
  }


export const uservisits =async(type)=>{
    const res = await fetch('https://geolocation-db.com/json/')
    // console.log("ipv4",await res.json())
    let k = (await res.json()).IPv4;
    console.log("ipv4",k)

    // fireDb.auth().signInAnonymously().then(async(response)=>{           
    let ref2=firebases.database().ref(`AMMuservisits/${localStorage.getItem("walletAddress")}`);
    const db = ref2.push().key;                                                                             
    ref2.set({
      key:db,WalletAddress:localStorage.getItem("walletAddress"),WalletType:type,ipAddress:k
    })
    .then(()=>{
      console.log("done")
    })
    // })
  }



  export const swappet = async (Payload)=>{
    if(localStorage.getItem("wallet")==="Petra"){
        const pendingTransaction = await (window).aptos.signAndSubmitTransaction(Payload);
        return pendingTransaction.hash
    }
   else if (localStorage.getItem("wallet") === "Martian"){
    const response = await window.martian.connect();
    const sender = response.address;
    const options = {
        max_gas_amount: "100000"
    }
    const transactionRequest = await window.martian.generateTransaction(sender, Payload, options);
      const txnHash = await window.martian.signAndSubmitTransaction(transactionRequest);
      return txnHash
   }
   else{
    let g = Math.floor(new Date().getTime()/1000.0)
    console.log("time",g+1000)
    const otherOptions = {
      max_gas_amount: '601012',
      gas_unit_price: '100',
      expiration_timestamp_secs: g+100,
      // sequence_number: '15'
    }
     let txnHash = await window.pontem.signAndSubmit(Payload, otherOptions);
     console.log("hash",txnHash.result.hash)
     return txnHash.result.hash;

   }
}