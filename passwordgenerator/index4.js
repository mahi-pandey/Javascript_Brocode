
function generatePassword(length, includeLowercase, includeUppercase,includeNumbers,includeSymbols){

    const lowercase='abcdefghijklmnopqrstuvwxyz';
    const uppercase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers='0123456789';
    const symbol='+_&*^%$#@!~';



let allowedChars='';
let password='';
allowedChars+=includeLowercase ? lowercase:'';
allowedChars+=includeUppercase ? uppercase:'';
allowedChars+= includeNumbers? numbers:'';
allowedChars+=includeSymbols ? symbol:'';



if(length<=0){

    return`(password should be of atleast 1 char)`}

if(length===0){
    return`(Please enter something)`}

for (let i=0;i<length;i++){

    const random=Math.floor (Math.random() * allowedChars.length )
    password += allowedChars[random]

}


return password;

}
const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;


const password = generatePassword(passwordLength,includeLowercase,includeLowercase,includeNumbers,includeSymbols);

console.log(`passsword:${password}`);








