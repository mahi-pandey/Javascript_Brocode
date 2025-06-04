


const mybox= document.getElementById("mybox")



/*document.addEventListener("keydown",event=>{
    mybox.textContent='😍';
    mybox.style.backgroundColor="tomato";
  
})


document.addEventListener("keyup",event=>{
    mybox.textContent='😒';
    mybox.style.backgroundColor="green";
    
})*/



const moveAmount = 10;
let x = 0;
let y = 0;

// Set initial styles
mybox.style.position = "absolute";
mybox.style.top = "0px";
mybox.style.left = "0px";

document.addEventListener("keydown", event => {
    mybox.textContent = '😍';
    mybox.style.backgroundColor = "tomato";

    if (event.key.startsWith("Arrow")) {
        event.preventDefault();

        switch (event.key) {
            case "ArrowUp":
                y -= moveAmount;
                break;
            case "ArrowDown":
                y += moveAmount;
                break;
            case "ArrowLeft":
                x -= moveAmount;
                break;
            case "ArrowRight":
                x += moveAmount;
                break;
        }

        mybox.style.top = `${y}px`;
        mybox.style.left = `${x}px`;
    }
});

document.addEventListener("keyup", event => {
    mybox.textContent = '😒';
    mybox.style.backgroundColor = "green";
});