//console.log("hello");
//console.log("i like pizza");
//window.alert(`this is an alert`);
//window.alert(`hello`);

//document.getElementById("myh1").textContent = `hello`;

//  document.getElementById("myp").innerHTML = `<b>hi everyone</b>`;


//let x = 123;
//console.log(x);


//let age = 28;
//let price = 10.99;




//let Name ="mahima";
//console.log(typeof Name);
//console.log( `your name is ${Name}`);


/*let fullName = "BRO CODE";
let age = 26;
let isstudent = false;

document.getElementById("p1").innerHTML = fullName;
document.getElementById("p2").innerHTML = age;
document.getElementById("p3").innerHTML = `i am a student: ${isstudent}`;

function exampleVar() {
  if (true) {
    var x = 5;
  }
  console.log(x); // ✅ Works, x is available here too
}*/

//let username;
//username = window.prompt("whats your username");
//console.log(username); 
//let username;
//document.getElementById("mysubmit").onclick=function(){
  //  username = document.getElementById("myText").value;
    //document.getElementById("myh1").textContent=`Hello ${username}`

//}

//let age = window.prompt("how old are you ")
//age=Number(age);
//age+=1;
//console.log(age,typeof age);


//const pi = 3.14159
//let radius;
/*let circumference;



document.getElementById("mysubmit").onclick = function(){
  radius=document.getElementById("text").value;
  radius= Number(radius);
  circumference = 2* pi * radius;

  document.getElementById("myh3").textContent= circumference ;
  
}*/

/*const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");

const countLabel= document.getElementById("countLabel");

let count=0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent= count;
}

decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent= count;
}

resetBtn.onclick = function(){
  count=0;
  countLabel.textContent= count;
}*/
// random number in js

/*let randomNum= Math.floor(Math.random()*5);
console.log(randomNum);*/


/*const myButton = document.getElementById("button1");
const Label1 = document.getElementById("Label1");
const Label2 = document.getElementById("Label2");
const Label3 = document.getElementById("Label3");

let randomNum1;
let randomNum2;
let randomNum3;


const min = 1;
const max = 6; 

myButton.onclick =  function(){
  randomNum1 = Math.floor(Math.random()*max) + min;
  randomNum2 = Math.floor(Math.random()*max) + min;
  randomNum3 = Math.floor(Math.random()*max) + min;
  Label1.textContent = randomNum1;
  Label2.textContent = randomNum2;
  Label3.textContent = randomNum3;

}*/

const myCheckbox = document.getElementById("myCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subresult= document.getElementById("subresult");
const paymentresult = document.getElementById("paymentresult");




mySubmit.onclick = function(){
     
       if(myCheckbox.checked){
          subresult.textContext = `you are subscribed`;}
       else {
           subresult.textContext = `you are subscribed`;}

        if(visaBtn.checked)   {
          paymentresult.textContent=`you are paying visa`;
        }

        else if(masterCardBtn.checked)   {
          paymentresult.textContent=`you are paying mastercard`;
        }

        else if(paypalBtn.checked)   {
          paymentresult.textContent=`you are paying paypal`;
        }


        else {
          paymentresult.textContent=`you must select a payment `;
        }


       }

       
      

    
    
















































