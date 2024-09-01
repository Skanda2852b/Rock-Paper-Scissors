let playerScore=0;
let compScore=0;

const images=document.querySelectorAll(".img");
let computerScore=document.querySelector("#compsco");
let userScore=document.querySelector("#plrsco");
let message=document.querySelector("#msg")

const randcompchoice=()=>{
    const choicear=["rock","paper","scissor"];
    const idx=Math.floor(Math.random()*3);
    return finalChoice=choicear[idx];
}
const playGame=(userChoice)=>{
    console.log("your choice",userChoice);
    const compChoice=randcompchoice();
    console.log("comp choice",compChoice);
    let userWin=true;
    if(userChoice===compChoice){
        console.log("draw");
        userWin=0;
    }else{
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        if(userChoice==="paper"){
            userWin=compChoice==="scissor"?false:true;
        }
        if(userChoice==="scissor"){
            userWin=compChoice==="rock"?false:true;
        }
    }
    if(userWin===true){
        console.log("you won");
        playerScore=playerScore+1;
        plrsco.innerText=playerScore;
        message.innerText=`You won this round,Computer chose ${compChoice}`;
    }else if(userWin===false){
        console.log("you lost");
        compScore=compScore+1;
        compsco.innerText=compScore;
        message.innerText=`You lost this round,Computer chose ${compChoice}`;
    }else{
        message.innerText=`Draw,Computer chose ${compChoice}`;
    }
}



images.forEach((img)=>{
    img.addEventListener("click",()=>{
        const userChoice=img.getAttribute("id");
        playGame(userChoice);

    });
});