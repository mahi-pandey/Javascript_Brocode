



//let buttons = document.querySelectorAll(".myButtons");
/*buttons.forEach(button=>{
    button.style.backgroundColor="green";
    button.textContent += "😍"

})*/


//click event listener

/*buttons.forEach(button =>{
    button.addEventListener("click", event =>{
        event.target.style.backgroundColor="tomato";

    });

});*/

//mouseover + mouseout event listener

/*buttons.forEach(button =>{
    button.addEventListener("mouseover", event =>{
        event.target.style.backgroundColor="green";


    });
})

buttons.forEach(button =>{
    button.addEventListener("mouseout", event =>{
        event.target.style.backgroundColor="rgb(60, 199, 183)";


    });
})*/

// add an element
/*const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList="myButtons";//adding classname to buttn 5

document.body.appendChild(newButton);


buttons = document.querySelectorAll(".myButtons");
console.log(buttons);*/ 

//remove an element

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach(button=>{
    button.addEventListener("click",event=>{

        event.target.remove();
        console.log(buttons);

    })
})

 







