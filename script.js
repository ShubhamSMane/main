
//first get bulb element
let bulb = document.querySelector("#bulb");

//select button
let btn = document.querySelector("button");
let flag = 0;
btn.addEventListener("click", function (){

    if(flag == 0){
        console.log("button clicked");
        //make bulb on and change button lable to off
        bulb.style.backgroundColor = "Yellow";
        btn.innerText="OFF";
        flag = 1;

    }else{
        bulb.style.backgroundColor="transparent";
        btn.innerText="ON";
        flag = 0;
    }
});