//document.cookie = "firstName = Mahima; expires=Sun 1 january 2030 12:00:00 UTC;path=/";

//document.cookie = "lastName = Pandey; expires=Sun 1 january 2013   12:00:00 UTC;path=/";



// console.log(document.cookie);


const firstText = document.querySelector("#firstText");

const lastText = document.querySelector("#lastText");

const submitBtn = document.querySelector("#submitBtn");

const ccokieBtn = document.querySelector("#cookieBtn");

submitBtn.addEventListener("click" ,()=>{
    setCookie("firstName",firstText.value,365);
    setCookie("lastName",lastText.value,365);

});

cookieBtn.addEventListener("click" ,()=>{
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");

});





//setCookie("email","mahipa@gmail.com",365);
//console.log(document.cookie);
function setCookie(name,value,daysToLive){
    const date= new Date();
    date.setTime(date.getTime()+(daysToLive * 24*60*60*1000));
    let expires = "expires=" + date.toUTCString();
    document.cookie=`${name}=${value};${expires};path=/`;
}


/*function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;

    cArray.forEach(element => {
        const [key, value] = element.split("=");
        if (key === name) {
            result = value;
        }
    });

    return result;
}

console.log(getCookie("email")); // example*/



