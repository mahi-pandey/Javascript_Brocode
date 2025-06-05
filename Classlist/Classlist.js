//const myButton = document.getElementById("myButton");

//myButton.classList.add("hover");


/*myButton.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");

});


myButton.addEventListener("mouseout",event =>{
    event.target.classList.remove("hover");

});*/
//toggle function
/*myButton.addEventListener("mouseover",event=>{
    event.target.classList.toggle("hover");

});


myButton.addEventListener("mouseout",event =>{
    event.target.classList.toggle("hover");

});*/

//replace(oldclass,newclass)


const myButton = document.getElementById("myButton");
const myH1 = document.getElementById("myH1");



myButton.classList.add("enabled");
myButton.addEventListener("click",event=>{
    event.target.classList.replace("enabled","disabled");
});




