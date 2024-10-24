/*let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame=()=>{
    msg.innerText="Game was Draw .Play again";
    msg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++
        compScorePara.innerText=compScore;
        msg.innerText=`You lose !  ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};

const playGame=(userChoice)=>{
    const compChoice=gencompChoice();

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
        userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
});*/

let userScore= 0;
let compScore= 0;

let choices= document.querySelectorAll(".choice");
let msg= document.querySelector("#msg");

let userScorePara= document.querySelector("#user-score");
let compScorePara= document.querySelector("#comp-score");

let gencompChoice=()=>{
    const options=["rock","paper","scissers"]
    const randIdx= Math.floor(Math.random()*3)
    return options[randIdx]
}

const drawGame=()=>{
    msg.innerText= `Game was drow!!! Play again`
    msg.style .backgroundColor= "#081b31"
};

const showWinner=(userWin,userChoice,compChoice)=>{
   if(userWin){
    userScore++
    userScorePara.innerText= userScore;
    msg.innerText=`You win! Your ${userChoice} beats ${compChoice}`
    msg.style.backgroundColor= "green"
   }else{
    compScore++
    compScorePara.innerText= compScore;
    msg.innertext= `You lost ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor= "red"
   };
};

const playGame=(userChoice)=>{
    const compChoice=gencompChoice();
    
    if(userChoice === compChoice){
        drawGame()
    }else{
        let userWin= true;
        if(userChoice === "rock"){
            userWin = compChoice === "paper"? false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"? false:true;
        }else{
            userChoice = compChoice === "rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    };
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
})    


