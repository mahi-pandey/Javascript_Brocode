

/*const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor ="yellow";
myHeading.style.textAlign="center";*/

//const fruits = document.getElementsByClassName("fruits");


//fruits[0].style.backgroundColor = "yellow";

const h4Elements = document.getElementsByTagName("h4");


const liElements= document.getElementsByTagName("li")


for(let h4Element of h4Elements){
    h4Element.style.backgroundColor="yellow";
}

for(let liElement of liElements){
    liElement.style.backgroundColor="lightgreen";
}




