const H1=document.createElement("h1");
H1.textContent = "i like pizza.";
H1.id = "myH1";
H1.style.color = "tomato";
H1.style.textAlign="center";


document.getElementById("box1").append(H1);
//document.getElementById("box4").prepend(H1)

//document.body.pappend(H1); 

//const box2= document.getElementById("box2");
//document.body.insertBefore(H1,box4);

// if the elements dont have id then we will use query selector to select all 


//const boxes=document.querySelectorAll(".box");
//document.body.insertBefore(H1,boxes[0]);


//remove  element 

document.getElementById("box1").removeChild(H1);

