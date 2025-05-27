/*let username="Mahima";
username=username.padStart(15,"i");
let username1=username.padEnd(20,'e')
console.log(username);
console.log(username1);



/*const fullname="mahiama";
let firstname=fullname.slice(0,3);
let lastname=fullname.slice(4,6); 
let firstChar=fullname.slice(0,1);
let lastChar=fullname.slice(-1);

console.log(lastname);
console.log(firstname);
console.log(firstChar);
console.log(lastChar);*/

/*const fullname="Mahima Pandey";
let firstname = fullname.slice(0,fullname.indexOf(" "));
let lastname = fullname.slice(fullname.indexOf(" ")+1);
console.log(firstname);
console.log(lastname);*/


/*const email="mahipandey@gmail.com";
let username = email.slice(0,email.indexOf("@"));
let extension = email.slice(email.indexOf("@")+1);

console.log(username);
console.log(extension);*/


/*let loggedIn = false;
let username;
let password;

while(!loggedIn){
    username = window.prompt('enter your username');
    password = window.prompt('enter your password');


    if(username === "myUsername" && password === "myPassword"){


        loggedIn = true;

        console.log("you are logged in1!");

    }


    else{
        console.log("invalid credentials")
    }


    }*/
const minNum=50;
const maxNum= 100;
const answer= Math.floor(Math.random() * (maxNum-minNum +1) + minNum);
console.log(answer); 


let attempts = 0;
let guess;
let running=true;



while(running){

    guess= window.prompt(`Guess a number between ${minNum} - ${maxNum}`)
    console.log(typeof guess,guess);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }

    else if ( guess<minNum || guess>maxNum){
        window.alert("please enter a valid number")
    }

    else{
        attempts++;
        if(guess<answer){
            window.alert("too low try again")
        }

        else if(guess>answer){
             window.alert("too high try again")

        }


        else{
            window.alert(`correct the anwer was ${answer} . it took you ${attempts} to guess`)
             running = false;

        }

    }


   
}













