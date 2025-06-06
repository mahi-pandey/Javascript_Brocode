


const names=["spongebob","patric","squidward","sandy"];
const person = {
    "name" : "spongebob",
    "age": 30,
    "isEmployed" : true,
    "hobbies":["jellyfishing","karate","cooking"]

};

const people = [{"name" : "spongebob","age": 30,"isEmployed" : true},
                {"name" : "patrik","age": 37,"isEmployed" : false},
                {"name" : "squidward","age": 76,"isEmployed" : true},
                {"name" : "sandy","age": 72,"isEmployed" : false}];



const jsonString = JSON.stringify(people);
console.log(jsonString);
const jsonNames=`["spongebob","patric","squidward","sandy"]`;
const jsonPerson = `{"name" : "spongebob","age": 30,"isEmployed" : true,"hobbies":["jellyfishing","karate","cooking"]}`;
const jsonPeople = `[{"name" : "spongebob","age": 30,"isEmployed" : true},
                     {"name" : "patrik","age": 37,"isEmployed" : false},
                     {"name" : "squidward","age": 76,"isEmployed" : true},
                     {"name" : "sandy","age": 72,"isEmployed" : false}]`;


const parseData = JSON.parse(jsonPeople);
console.log(parseData); 

fetch("people.json")
     .then(response=> response.json())
     .then(values=>values.forEach(value=>console.log(value.isEmployed)))
     .catch(error=>console.log(error));




