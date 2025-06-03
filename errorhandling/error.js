

try{
    console.log(x);//it is error because x is not defined

    //network errors
    //promise rejection
    //security errors
}

catch(error){
    console.error(error);
}


finally{

    //close files
    //close connections
    //release resources
    console.log("finally-this always executes")
}


console.log("you have reached the end")  
// example 2

try{
    const dividend=Number(window.prompt("enter a number"));
    const divisor=Number(window.prompt("enter a divisor"));

    if(divisor==0){
        throw new Error("you cant divide by zero");
    }


      if(isNaN(divisor)==0 ||isNaN(dividend)==0 ){
        throw new Error("values must be a number");
    }

    const result=dividend/divisor;
    console.log(result);

} 



catch(error){
    console.error(error);
}

console.log("you have reached the end")

   

















