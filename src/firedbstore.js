// import firebase from "firebase";

import fireDb from '../src/NFTFolder/firebase';
// import {getDatabase, ref, query, orderByChild} from 'firebase';
import axios from 'axios';

export const postdata =async(asid1,asid2,asid3,name1,name2,escaddress,tvl,vl,fee,addr)=>{
    // let ref2=fireDb.database().ref(`createLiquidity/${localStorage.getItem('walletAddress')}`);                    
    fireDb.auth().signInAnonymously().then((response)=>{
    let ref2=fireDb.database().ref(`LpPairs`);                    
    let dateset=new Date().toDateString();
    const db = ref2.push().key;
    
    ref2.child(db).set({
        id:db,
    AssetId1:parseInt(asid1),AssetId2:parseInt(asid2),AssetId3:parseInt(asid3),AssetName1:name1,AssetName2:name2,escrow:escaddress,tvl:tvl,
volume:vl,fees:fee,address:addr,multipleusers:[""]})
    .then(()=>{             
     //console.log("created")
    }).catch((err) => {                                                        
      //console.log(err);
    });
})
}

export const deletedata =async(id,add)=>{

    fireDb.auth().signInAnonymously().then((response)=>{
        fireDb.database().ref(`LpPairs/${add}`).child(id).remove().then(()=>{
          //console.log("Removed")
        })                   
    })
}

export const getpostdata = async(addr)=>{
    fireDb.auth().signInAnonymously().then((response)=>{
        let r=[];
      //console.log("data")  
        try {         
        fireDb.database().ref("LpPairs").child(addr).on("value", (data) => {          
          if (data) { 
            data.forEach((d) => {                
                let value=d.val();   
                        
              r.push({
                id:value.id,
    AssetId1:value.AssetId1,AssetId2:value.AssetId2,AssetId3:value.AssetId3,
    AssetName1:value.AssetName1,AssetName2:value.AssetName2,escrow:value.escrow,tvl:value.tvl,
volume:value.volume,fees:value.fees,address:value.address,multipleusers:value.multipleusers
              })   
            })             
          }
          else{
              
          }
        //console.log("getpostdata",r)  
        });                  
      } catch (error) {
        //console.log('error occured during search', error);    
      }    
    })            
   
}
// export const getpostdataall = async(addr)=>{
//     fireDb.auth().signInAnonymously().then((response)=>{
//         let r=[];
//         console.log("data")  
//         try {         
//         fireDb.database().ref("LpPairs").on("value", (data) => {          
//           if (data) { 
//             data.forEach((d) => {                
//                 let value=d.val();   
//                    console.log("data vlaues",value)     
// //               r.push({
// //                 id:value.id,
// //     AssetId1:value.AssetId1,AssetId2:value.AssetId2,AssetId3:value.AssetId3,
// //     AssetName1:value.AssetName1,AssetName2:value.AssetName2,escrow:value.escrow,tvl:value.tvl,
// // volume:value.volume,fees:value.fees,address:value.address,multipleusers:value.multipleusers
// //               })   
//             })             
//           }
//           else{
              
//           }
//           console.log("getpostdata",r)  
//         });                  
//       } catch (error) {
//         //console.log('error occured during search', error);    
//       }    
//     })            
   
// }
export const getpostdataall = async()=>{
  let r=[];
  let rv =[];
  fireDb.auth().signInAnonymously().then(async(response)=>{       
      // console.log("data")  
      try {         
      fireDb.database().ref("LpPairs").on("value", (data) => {          
        if (data) { 
          data.forEach((d) => { 
              // console.log("value",d.val())                
              let value=d.val();  
               Object.keys(value).map(async(k)=>{
                  // console.log("value",value)                                                       
                      r.push({
                          id:value[k].id,
                          AssetId1:value[k].AssetId1,AssetId2:value[k].AssetId2,AssetId3:value[k].AssetId3,
                          AssetName1:value[k].AssetName1,AssetName2:value[k].AssetName2,escrow:value[k].escrow,tvl:value[k].tvl,
                          volume:value[k].volume,fees:value[k].fees,address:value[k].address,multipleusers:value[k].multipleusers
                        }) 
                        //  rv = r.reverse()
                        rv = (r.reverse())
                        console.log("reverser",rv)  
                        
              // console.log("rdatafinal",r) 
              })                          
        })
        console.log("val",rv)  

           
        return rv        
      }         
      });  
                   
    } catch (error) {
      //console.log('error occured during search', error);    
    } 
  //   console.log("data",r[0],r) 
   
  })
 
 
}

export const checkdb = (id1,id2) =>{
  var ref = fireDb.database().ref("LpPairs");
  ref.orderByChild("AssetId2").equalTo(0).on("child_added", function(snapshot) {
    if(parseInt(snapshot.val().AssetId1) === id1){
      console.log("mathch",snapshot.val())
      // return true;
    }
    // console.log(snapshot.val());
  });
fireDb.database().ref('LpPairs').on('value', snapshot => {
  let k=[];
 k=(snapshot.val())
 
  // k[0].map((r)=>{
  //   console.log("kva",r)
  // })
  snapshot.val().forEach(c => {
    let i = c;
    console.log(c)
    if(parseInt(i.AssetId2) === id2 && i.AssetId1  === id1){
      console.log(i.AssetId1)
      return true;
    }
   else{
     console.log("not")
   }
    })
})
  
//   fireDb.database().ref('LpPairs').orderByChild('AssetId1').on('value', snapshot => {
//     snapshot.forEach(c => {
//       let i = c.val();
//       if(i.AssetId1 === 77339092){
//         console.log(i.AssetId1)
//       }
//      else{
//        console.log("not")
//      }
//       })
// })
  // console.log("snapshot");
  // let r =[];
  // ref.on("child_added", function(snapshot){
  //   var value = snapshot.val();
   
  //   console.log(value);
  //   Object.keys(value).map(async(k)=>{
  //     let s = value[k];
  //     // r.push({
  //     //   id:s.id,
  //     //   AssetId1:s.AssetId1,AssetId2:s.AssetId2,AssetId3:s.AssetId3,
  //     //   AssetName1:s.AssetName1,AssetName2:s.AssetName2,escrow:s.escrow,tvl:s.tvl,
  //     //   volume:s.volume,fees:(s.fees ),address:s.address,multipleusers:s.multipleusers
  //     //   })
  //       console.log("FilterPost3",r) 
  //       let ref2=fireDb.database().ref(`LpPairs`);                   
   
    
  //   ref2.child(s.id).set({
  //     id:s.id,
  //     AssetId1:s.AssetId1,AssetId2:s.AssetId2,AssetId3:s.AssetId3,
  //     AssetName1:s.AssetName1,AssetName2:s.AssetName2,escrow:s.escrow,tvl:s.tvl,
  //     volume:s.volume,fees:(s.fees ),address:s.address,multipleusers:s.multipleusers    
  //   })
  //   .then(()=>{             
  //      console.log("created")
  //   }).catch((err) => {                                                        
  //       console.log(err);
  //   });
  //   })
    
   
  // });
  // fireDb.database().ref("LpPairs").on("value", (data) => {          
  //   if (data) {
  //    console.log("data le",data)  
  //     data.forEach((d) => { 

  //     })
  //   }
  // })
}

export const getpostdatafilter = async(id1,id2,tvl,vl,fees)=>{

    let r=[];
    let t1,t2;
    if(id1 > id2){
      t1 = id1;
      t2 = id2;
    }
    else{
      t2 = id1;
      t1 = id2;
    }
    fireDb.auth().signInAnonymously().then(async(response)=>{
       
        // console.log("data")  
        let ref2;
        try {  
          var ref = fireDb.database().ref("LpPairs");
          ref.orderByChild("AssetId2").equalTo(id2).on("child_added", function(snapshot) {
          if(parseInt(snapshot.val().AssetId1) === id1){
          console.log("mathch",snapshot.val())
          let i = snapshot.val();
          ref2=fireDb.database().ref(`LpPairs`); 
              console.log("idvalues",i.id)  
              ref2.child(i.id).update({
                id:i.id,
                      AssetId1:i.AssetId1,AssetId2:i.AssetId2,AssetId3:i.AssetId3,
                      AssetName1:i.AssetName1,AssetName2:i.AssetName2,escrow:i.escrow,tvl:tvl,
                      volume:vl,fees:(i.fees + fees),address:i.address,multipleusers:i.multipleusers
              })
              .then(()=>{             
              console.log("updated")
              }).catch((err) => {                                                        
            //console.log(err);
              }); 
          // return true;
          }
          // console.log(snapshot.val());
          });       
        // fireDb.database().ref('LpPairs').on('value', snapshot => {
        //  let k = snapshot.val()
        //   k.forEach(c => {
        //     let i = c;
        //     let s = i;
        //   //console.log("ids",i.AssetId1,i.AssetId2,id1,id2)
        //     if((i.AssetId2) === t2 && (i.AssetId1) === t1){
        //     //console.log(i.AssetId1)
              
              
        //       ref2=fireDb.database().ref(`LpPairs`); 
        //     //console.log("idvalues",i.id)  
        //       ref2.child(i.id).update({
        //         id:i.id,
        //               AssetId1:i.AssetId1,AssetId2:i.AssetId2,AssetId3:i.AssetId3,
        //               AssetName1:i.AssetName1,AssetName2:i.AssetName2,escrow:i.escrow,tvl:tvl,
        //               volume:vl,fees:(i.fees + fees),address:i.address,multipleusers:i.multipleusers
        //       })
        //       .then(()=>{             
        //     //console.log("updated")
        //       return true;
        //      window.location.reload();
        //       }).catch((err) => {                                                        
        //     //console.log(err);
        //       }); 
             
        //     }
        //    else{
        //    //console.log("not")
        //    }
        //     })
        // })
      } catch (error) {
        //console.log('error occured during search', error);    
      } 
     
      
     
    })            
       
}

export const createstableswap =async(asid1,asid2,asid3,name1,name2,pairaddr,pairappid,tvl,vl,fee,addr)=>{
  // let ref2=fireDb.database().ref(`createLiquidity/${localStorage.getItem('walletAddress')}`);                    
  fireDb.auth().signInAnonymously().then((response)=>{
  let ref2=fireDb.database().ref(`stableswapPairs`);                    
  let dateset=new Date().toDateString();
  const db = ref2.push().key;
  
  ref2.child(db).set({
      id:db,
  AssetId1:parseInt(asid1),AssetId2:parseInt(asid2),AssetId3:parseInt(asid3),AssetName1:name1,AssetName2:name2,pairAppId:pairappid,PairAddress:pairaddr,tvl:tvl,
volume:vl,fees:fee,address:addr,multipleusers:[""]})
  .then(()=>{             
   //console.log("created")
  }).catch((err) => {                                                        
    //console.log(err);
  });
})
}
export const postdatastableswap = async(appid,tvl,vl,fees)=>{

  let r=[];
  
  fireDb.auth().signInAnonymously().then(async(response)=>{
     
      // console.log("data")  
      let ref2;
      try {  
        var ref = fireDb.database().ref("stableswapPairs");
        ref.orderByChild("pairAppId").equalTo(appid).on("child_added", function(snapshot) {
        // if(parseInt(snapshot.val().AssetId1) === id1){
      //console.log("mathch",snapshot.val())
        let i = snapshot.val();
        ref2=fireDb.database().ref(`stableswapPairs`); 
          //console.log("idvalues",i.id)  
            ref2.child(i.id).update({
              id:i.id,
                    AssetId1:i.AssetId1,AssetId2:i.AssetId2,AssetId3:i.AssetId3,
                    AssetName1:i.AssetName1,AssetName2:i.AssetName2,pairAppId:i.pairAppId,PairAddress:i.PairAddress,tvl:tvl,
                    volume:vl,fees:(i.fees + fees),address:i.address,multipleusers:i.multipleusers
                
            })
            .then(()=>{             
          //console.log("updated")
            }).catch((err) => {                                                        
          //console.log(err);
            }); 
        // return true;
        // }
        // console.log(snapshot.val());
        });       
      // fireDb.database().ref('LpPairs').on('value', snapshot => {
      //  let k = snapshot.val()
      //   k.forEach(c => {
      //     let i = c;
      //     let s = i;
      //   //console.log("ids",i.AssetId1,i.AssetId2,id1,id2)
      //     if((i.AssetId2) === t2 && (i.AssetId1) === t1){
      //     //console.log(i.AssetId1)
            
            
      //       ref2=fireDb.database().ref(`LpPairs`); 
      //     //console.log("idvalues",i.id)  
      //       ref2.child(i.id).update({
      //         id:i.id,
      //               AssetId1:i.AssetId1,AssetId2:i.AssetId2,AssetId3:i.AssetId3,
      //               AssetName1:i.AssetName1,AssetName2:i.AssetName2,escrow:i.escrow,tvl:tvl,
      //               volume:vl,fees:(i.fees + fees),address:i.address,multipleusers:i.multipleusers
      //       })
      //       .then(()=>{             
      //     //console.log("updated")
      //       return true;
      //      window.location.reload();
      //       }).catch((err) => {                                                        
      //     //console.log(err);
      //       }); 
           
      //     }
      //    else{
      //    //console.log("not")
      //    }
      //     })
      // })
    } catch (error) {
      //console.log('error occured during search', error);    
    } 
   
    
   
  })            
     
}
export const postvaluesupdate =async(i,tvl,vl,fees)=>{
  let ref2=fireDb.database().ref(`LpPairs`); 
//console.log("idvalues",i.id)  
  ref2.child(i.id).update({
    id:i.id,
          AssetId1:i.AssetId1,AssetId2:i.AssetId2,AssetId3:i.AssetId3,
          AssetName1:i.AssetName1,AssetName2:i.AssetName2,escrow:i.escrow,tvl:tvl,
          volume:vl,fees:(i.fees + fees),address:i.address,multipleusers:i.multipleusers
  })
  .then(()=>{             
//console.log("updated")
 window.location.reload();
  }).catch((err) => {                                                        
//console.log(err);
  }); 
}
export const getpostdatafilterwithupdate = async(dval)=>{
    fireDb.auth().signInAnonymously().then((response)=>{
        let r=[];
      //console.log("data") 
        let ref2=fireDb.database().ref(`LpPairs/${dval.address}`);   
        ref2.child(dval.id).update(dval)
        .then(()=>{             
         //console.log("updated")
        }).catch((err) => {                                                        
          //console.log(err);
        });    
    })            
   
}
export const getmultiplefilter = async(id1,id2,tvl,vl,fees,multiple)=>{
    let r=[];
    fireDb.auth().signInAnonymously().then(async(response)=>{       
      //console.log("data")  
        try {         
        fireDb.database().ref("LpPairs").on("value", (data) => {          
          if (data) { 
            data.forEach((d) => { 
              //console.log("value",d.val())                
                let value=d.val();  
                 Object.keys(value).map(async(k)=>{
                    // console.log("value",value[k].AssetId1) 
                    if(value[k].AssetId1 === id1 && value[k].AssetId2 === id2){
                        console.log("values1",value[k].AssetId1)
                        console.log("values2",value[k].AssetId2)
                        // let multi = [];
                        // multi.push(value[k].multipleusers)
                        // multi.push(multiple)
                        // let setname = new Set()
                        // if(value[k].multipleusers){
                        //     setname.add(value[k].multipleusers)
                        // }
                        
                        // setname.add(multiple)
                        let uniqueChars1;
                        if(value[k].multipleusers === 0 || value[k].multipleusers=== "" || value[k].multipleusers === undefined || value[k].multipleusers === null || value[k].multipleusers === 'undefined'){
                            uniqueChars1 = multiple;
                        }
                        else{
                            //slet allarr22=value[k].multipleusers.concat(multiple)
                            let a= [];
                            a.push(value[k].multipleusers)
                            a.push(multiple)
                            uniqueChars1 = a
                            console.log("Arraya",a)
                        }
                        console.log("uni1",uniqueChars1);
                        //console.log("multi",multiple)                                                                       
                        r.push({
                            id:value[k].id,
                            AssetId1:value[k].AssetId1,AssetId2:value[k].AssetId2,AssetId3:value[k].AssetId3,
                            AssetName1:value[k].AssetName1,AssetName2:value[k].AssetName2,escrow:value[k].escrow,tvl:tvl,
                            volume:vl,fees:fees,address:value[k].address,multipleusers:uniqueChars1
                          }) 
                          console.log("rdatafinal",r)
                          
                          
                    }
                 })    
                })
                            
          }
          else{
              
          }
         
           
        });  
        await getpostdatafilterwithupdate(r[0])                
      } catch (error) {
        //console.log('error occured during search', error);    
      } 
    //   console.log("data",r[0],r) 
     
    })            
       
}
export const uservisit =async(type)=>{
  let datavalues=[];
  const res = await axios.get('https://geolocation-db.com/json/')
  //console.log(res.data.IPv4);
    fireDb.auth().signInAnonymously().then((response)=>{
      let ref2=fireDb.database().ref(`UserVisits/${localStorage.getItem("walletAddress")}`);                    
      const db = ref2.push().key;
      
      ref2.set({
          id:db,
          AlgoAddress:localStorage.getItem("walletAddress"),WalletType:type,ipAddress:res.data.IPv4
      })
      .then(()=>{             
       //console.log("Uservisits updated")
      }).catch((err) => {                                                        
        //console.log(err);
      });
  }) 
     
}