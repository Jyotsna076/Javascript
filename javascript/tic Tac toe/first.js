let msgContainer=document.querySelector(".msg-container");
let boxes=document.querySelectorAll(".box");
let msg=document.querySelector("#msg");
let resetBtn=document.querySelector("#ResetBtn");
let newBtn=document.querySelector("#new-btn");
let turnO="0";
let count="0";

let winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    turnO=true;
    count="0";
    anableboxes()
    msgContainer.classList.add("hide");
};

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        };
        box.disabled=true;
        count++
        let isWinner=checkWinner();
        if (count===9 && !isWinner){
            gameDrow();
        };
    });
});

const gameDrow=()=>{
    msg.innerText=`Game was Drow!!!`;
    msg.style.backgroundColor="darkred";
    msgContainer.classList.remove("hide");
    disableboxes();
};

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    };
};

const anableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    };
};

const showWinner=(winner)=>{
    msg.innerText=`Congractulation winner is ${winner}`;
    msg.style.backgroundColor="darkgreen";
    msgContainer.classList.remove("hide")
    disableboxes();
};

const checkWinner=()=>{
    for(let pattern of winPattern){
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        if(pos1Val != "" && pos2Val!="" && pos3Val!=""){
            if(pos1Val===pos2Val && pos2Val===pos3Val){
                showWinner(pos1Val);
            };
        };
    };
};

newBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);