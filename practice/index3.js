/*let numbers=[1,2,3,45,5];
let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(minimum);
console.log(maximum);


let username = "Mahima Pandey";

let letters=[...username].join("-  ");

console.log(letters)

let fruits=["apple","banana","mango"];
let veg=["potato","carrot"];

let food = [...fruits,...veg , "eggs" ,"apl"];
console.log(food);


function openfridge(...foods){
    console.log(...foods)
}




const food1='piza';
const food2='burger';
const food3='saminata';
const food4='aqride';


openfridge(food1,food2,food3,food4);*/



/*function sum(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }

    return result;
}



const total = sum(1,2,2,4,4,44);

console.log(`your total is ${total}`)*/



/*function getaverage(...numbers){
    let result=0;
    for(let number of numbers){
        result+=number;
    }

    return result/numbers.length;
}


const total = Math.floor(getaverage(23,56,78,78,78,78));

console.log(`${total}`)*/



/*sum1(displaypage,7,9);

function sum1 (callback,x,y){
    let result=x+y;

    callback(result);

    
}


function  displaypage(result){
    document.getElementById("myH1").innerHTML=result;
}*/



//FOR EACH FUNCTION
/*let numbers=[1,2,3,4,5];
numbers.forEach(cube);
numbers.forEach(display);


function double(element,index,array){
    array[index]=element*2;

}

function square(element,index,array){
    array[index]=Math.pow(element,2);
}
function cube(element,index,array){
    array[index]=Math.pow(element,3);
}
function display(element){

    console.log(element);

}*/

/*let fruits =['apple','orange','banana'];

fruits.forEach(capitalize);
fruits.forEach(display);




function upperCase(element,index,array){
   array[index]=element.toUpperCase();
}


function capitalize(element,index,array){
    array[index]=element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element){
    console.log(element);
}*/
//map function
/*const students = ['mahima', 'pandey', 'wild', 'animal'];

const studentsName = students.map(upperCase);
const studentsName1 = students.map(lowerCase);

document.getElementById("myH1").innerHTML = `
  Lowercase:<br>${studentsName1.join("-")}<br><br>
  Uppercase:<br>${studentsName.join("-")}
`;

function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}*/

/*
const dates =["2024-01-23","2025-04-08","2000-08-11"]
const formattedDates=dates.map(formatDates);

console.log(formattedDates);




function formatDates(element){
    const parts=element.split("-");
    return`${parts[2]}-${parts[1]}-${parts[0]}`;
}*/


//Filter Method-creates new array by filtering out elements


/*const words=['apple','banana','litchi','mango'];
const shortWords=words.filter(getShortWords);

console.log(shortWords);


function getShortWords(element){

//   return element.length<=5;

}*/


//Reduce function - reduce element of an array to single value 

/*const grades=[75,40,59,30,90];
const maximum=grades.reduce(getMax);
console.log(maximum);
function getMax(accumulator,element){
    return Math.max(accumulator + element)
}*/


//function expression

/*const hello = function(){
    return "hello";
    
}

document.getElementById("myH1").innerHTML=hello();


setTimeout(function(){      //example of function expression
    console.log("Goodbye");
},5000);*/

//Arrow Functions

/*const hello = () =>console.log("Hello");

hello();


// with one parameter
const hello1 = (name) => console.log(`Hello ${name}`)

hello1('Mahima');*/


// with two parameter

/*const hello2=(name,age)=>{ const message=`Hello ${name} you are ${age} old`
document.getElementById("myH1").innerHTML=message;

}

hello2('mahima',26)



const numbers=[1,2,3,3,4,5]
const square=numbers.map((element)=>Math.pow(element,2));
console.log(square);


const cube=numbers.map((element)=>Math.pow(element,3));
document.getElementById("myP").innerHTML=cube.join("-");*/

//Object properties
const person = {
      firstName: "Mahima",
      lastName: "Squarepants",
      age: 30,
      isEmployed: true,
      sayHello: function() {
        return "hi i am mahima";
      },
      eat:()=>console.log("my name is mahima"),
    
    }

    document.getElementById("myP").innerHTML = person.sayHello();

/*console.log(person.firstName);
console.log(person.lastName);

const person1={

    firstName:"Prashant",
    
    age:30,
    isEmployed:true,



}


document.getElementById("myH1").innerHTML=person1.firstName;*/
 































