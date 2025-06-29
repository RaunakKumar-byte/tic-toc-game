let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");


let turn0=true;//playerx, playe4r0

const winturns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

];

boxes.forEach((box)  => {
    box.addEventListener("click",() =>{
        console.log("box was clicked");
        if(turn0) {
            //player0
            box.innerText="0";
            turn0=false;
        }
        else{
            //playerx
            box.innerText="X";
            turn0=true;
        }

        box.disabled=true;
    });
});