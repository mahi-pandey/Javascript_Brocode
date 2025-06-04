const myBox = document.getElementById("myBox");
const myButton=document.getElementById("myButton")


function changeColor(event){

    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "ouch";

}

myButton.addEventListener("click",event => {
    myBox.style.backgroundColor='tomato';
    myBox.textContent="ouch"; 
})


myButton.addEventListener("mouseover",event => {
    myBox.style.backgroundColor='yellow';
    myBox.textContent="dont try it "; 
});


myButton.addEventListener("mouseout",event => {
    myBox.style.backgroundColor='green';
    myBox.textContent="click me "; 
});