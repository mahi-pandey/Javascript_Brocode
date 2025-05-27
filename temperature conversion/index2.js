const textbox=document.getElementById("textbox");
const tofahrenheit=document.getElementById("tofahrenheit");
const tocelsisus=document.getElementById("tocelsisus");
const result=document.getElementById("result");
let temp;




function convert()
{

    if(tofahrenheit.checked){
        temp = Number(textbox.value);
        temp = temp*9/5 + 32;
        result.textContent = temp.toFixed(1) +"\u00B0F"
       

    }


    else if (tocelsisus.checked) {

        temp = Number(textbox.value);
        temp = (temp-32)*(5/9);
        result.textContent = temp.toFixed(1) +"\u00B0C"



       

    }


    else{
        result.textContent="select a unit";
    }








}