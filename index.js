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

const decreaseBtn = document.getElementById("decreaseBtn");
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
}



































