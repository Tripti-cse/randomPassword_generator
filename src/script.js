const Password =document.getElementById("pswd");
const length =8;
const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const num= "0123456789";
const spclChar="@*_+~!";

const genPassword = upperCase+lowerCase+num+spclChar;


function createPassword(){
let psw ="";
psw+= upperCase[Math.floor(Math.random()* upperCase.length)];
psw+= lowerCase[Math.floor(Math.random()* lowerCase.length)];
psw+=num[Math.floor(Math.random()* num.length)];
psw+=spclChar[Math.floor(Math.random()*spclChar.length)];

while(psw.length < length){
psw+=genPassword[Math.floor(Math.random()*genPassword.length)];
}
Password.value =psw;
}
function copyPassword(){
    Password.select();
    document.execCommand("copy");
}