import firebase from '../NFTFolder/firebase';
export const getpostdataall=async()=>{
console.log("RrvalueFirst")                          
        let r=[];
        try {         
        firebase.auth().signInAnonymously().then((response)=>{      
        firebase.database().ref("ProData").on("value", (data) => {          
          if (data) {                      
            
            r.push({
                PinataId1:data.val().PinataId,
                PinataId2:data.val().PinataId2,
                FAppId:data.val().FAppId,
                AAppId:data.val().AAppId,
                RAppId:data.val().RAppId,
                NAppId:data.val().NAppId,
                Extra1:data.val().Extra1,
                Extra2:data.val().Extra2,
                Extra3:data.val().Extra3,
                Extra4:data.val().Extra4,
                Extra5:data.val().Extra5,
            })            
          }
          console.log("Rrvalue",r)                          
        });    
        return r;
        })              
      } catch (error) {        
      }                

}
