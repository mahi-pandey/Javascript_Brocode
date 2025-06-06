

function walkDog(){
   
    return new Promise((resolve,reject) =>{
          setTimeout(()=>{

            const dogwalked = false;
            if(dogwalked){
                resolve("you walk the dog ");

            }
            else{
                reject("you didnt walk the dog")

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


async function doChores(){
    try{ const walkDogResult = await walkDog();
    console.log(walkDogResult );

    const cleanKitchenResult = await cleanKitchen();
    console.log( cleanKitchenResult);

    const takeOutTrashResult = await takeOutTrash();
    console.log( takeOutTrashResult);

    console.log("you finished all chores");
}

catch(error){
    console.error(error);
}
}
   




doChores();

