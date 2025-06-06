

function walkDog(){
   
    return new Promise((resolve,reject) =>{
          setTimeout(()=>{

            const dogwalked = true;
            if(dogwalked){
                resolve("you walk the dog ");

            }
            else{
                reject("you didnt walk the door")

            }
              
        

    },1500);

    })
    
}

function cleanKitchen(){

  
    return new Promise((resolve,reject) =>{
          setTimeout(()=>{

            const kitchenCleaned=true;

              
              if(kitchenCleaned){
                resolve("clean the kitchen ");
               

            }
            else{
                reject("you didnt clean kitchen");

            }
              
        

    },2500);

    })
    
}


function takeOutTrash(){

  
    return new Promise((resolve,reject) =>{
          setTimeout(()=>{
            const trashtaken=true;
            if(trashtaken){
                resolve("trash taken kitchen ");

            }

            else{
                reject("you didnot taken trash");
            }

    },500);

    })
    
}






walkDog().then(value=>{console.log(value);return cleanKitchen()})
         .then(value=>{console.log(value);return takeOutTrash()})
         .then(value=>{console.log(value);console.log("you finish all the chores")})
         .catch(error=>console.error(error));

