import fireDb from './NFTFolder/firebase';
export const createevent = async(name,desc,startdate,enddate,rewards,email,Img,date) =>{
    let k ;
    try{
        let ref2= await fireDb.database().ref(`createEvent/${localStorage.getItem('EAWalletAddress')}`);            
        const db = ref2.push().key;                                                
        ref2.child(db).set({
          "dbkey":db,
          "createdDate": date,
          "Name": name,                  
          "Description": desc,                  
          "Email": email,                  
          "StartDate": startdate,                  
          "EndDate": enddate,                  
          "Rewards": rewards,                            
          "WalletAddress": localStorage.getItem("EAWalletAddress"),                  
          "ImagePath": Img,            
          "kycStatus": "create",
          "approved":"false"                                
        });
        console.log("success"); 
        k = 1;  

    }catch(err){
        console.log("error",err)
        k =0;
    }
    
    return k;                       
}

export const getCreatedEvents = async() =>{
    let r=[]; 
    fireDb.database().ref("createEvent").child(localStorage.getItem('EAWalletAddress')).on("value", (data) => { 
        // let s =[];       
        if (data) {  
            try{
                // console.log("data",data.val()) 
                
                data.forEach((d)=>{
                    console.log("data",d.val().createdDate)
                    // r = d.val().createdDate
                    r.push({
                        "dbkey":d.val().dbkey,
                        "createdDate": d.val().createdDate,
                        "Name": d.val().Name,                  
                        "Description": d.val().Description,                  
                        "Email": d.val().Email,                  
                        "StartDate": d.val().StartDate,                  
                        "EndDate": d.val().EndDate,                  
                        "Rewards": d.val().Rewards,                            
                        "WalletAddress": d.val().WalletAddress,                  
                        "ImagePath": d.val().ImagePath,            
                        "kycStatus": d.val().kycStatus,
                        "approved":d.val().approved 
                    } )
                    // console.log("R",r)  
                    // s.push(r)
                })
                // console.log("R",r)               
                           
        }   catch(e){                      
        }
    }
})
// console.log("R",r)
return r
}
export const getCreatedEventsNotApproved = async() =>{
    let r=[]; 
    fireDb.database().ref("createEvent").on("value", (data) => { 
        // let s =[];       
        if (data) {  
            try{
                console.log("data",data) 
                
                data.forEach((d)=>{
                    console.log("data",d.val())
                    let value=d.val();
                Object.keys(value).map(async(k)=>{ 
                    console.log("values",value[k]) 
                    if(value[k].approved == "false"){
                        r.push({
                            "dbkey":value[k].dbkey,
                            "createdDate": value[k].createdDate,
                            "Name":value[k].Name,                  
                            "Description": value[k].Description,                  
                            "Email": value[k].Email,                  
                            "StartDate": value[k].StartDate,                  
                            "EndDate": value[k].EndDate,                  
                            "Rewards": value[k].Rewards,                            
                            "WalletAddress": value[k].WalletAddress,                  
                            "ImagePath": value[k].ImagePath,            
                            "kycStatus": value[k].kycStatus,
                            "approved":value[k].approved 
                        } )
                    }
                   
                })
                    // r = d.val().createdDate
                  
                    // console.log("R",r)  
                    // s.push(r)
                })
                // console.log("R",r)               
                           
        }   catch(e){                      
        }
    }
})
// console.log("R",r)
return r
}

export const updatecreateevent = async(data) =>{
    // console.log("data",data)
    let k ;
    try{
        let ref2=  fireDb.database().ref(`createEvent/${data.WalletAddress}`);            
        const db = ref2.child(data.dbkey).update({
          "dbkey":data.dbkey,
          "createdDate": data.createdDate,
          "Name": data.Name,                  
          "Description": data.Description,                  
          "Email": data.Email,                  
          "StartDate": data.StartDate,                  
          "EndDate": data.EndDate,                  
          "Rewards": data.Rewards,                            
          "WalletAddress": data.WalletAddress,                  
          "ImagePath": data.ImagePath,            
          "kycStatus": "create",
          "approved":"true"     
        })                                           
        // ref2.child(db).set({
        //   "dbkey":db,
        //   "createdDate": date,
        //   "Name": name,                  
        //   "Description": desc,                  
        //   "Email": email,                  
        //   "StartDate": startdate,                  
        //   "EndDate": enddate,                  
        //   "Rewards": rewards,                            
        //   "WalletAddress": localStorage.getItem("EAWalletAddress"),                  
        //   "ImagePath": Img,            
        //   "kycStatus": "create",
        //   "approved":"false"                                
        // });
        console.log("Updated successfully"); 
        k = 1;  

    }catch(err){
        console.log("error",err)
        k =0;
    }
    
    return k;                       
}

export const getApprovedImages = async() =>{
    let r=[]; 
    fireDb.database().ref("createEvent").on("value", (data) => { 
        // let s =[];       
        if (data) {  
            try{
                console.log("data",data) 
                
                data.forEach((d)=>{
                    console.log("data",d.val())
                    let value=d.val();
                Object.keys(value).map(async(k)=>{ 
                    console.log("values",value[k]) 
                    if(value[k].approved == "true"){
                        r.push({
                            "dbkey":value[k].dbkey,
                            "createdDate": value[k].createdDate,
                            "Name":value[k].Name,                  
                            "Description": value[k].Description,                  
                            "Email": value[k].Email,                  
                            "StartDate": value[k].StartDate,                  
                            "EndDate": value[k].EndDate,                  
                            "Rewards": value[k].Rewards,                            
                            "WalletAddress": value[k].WalletAddress,                  
                            "ImagePath": value[k].ImagePath,            
                            "kycStatus": value[k].kycStatus,
                            "approved":value[k].approved 
                        } )
                    }
                   
                })
                    // r = d.val().createdDate
                  
                    // console.log("R",r)  
                    // s.push(r)
                })
                // console.log("R",r)               
                           
        }   catch(e){                      
        }
    }
})
// console.log("R",r)
return r
}