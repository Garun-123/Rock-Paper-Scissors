const start=document.querySelector("#start");
start.addEventListener("click",playgame);
function getComputerChoice()
{
 let choice=Math.floor(Math.random()*3);
 if(choice==0)
 {
    return "rock";
 }
 else if(choice==1)
 {
    return "paper";
 }
 else
 {
    return "scissors";
 }
}

let playerScore=0;
let ComputerScore=0;

function playRound(playerChoice,ComputerChoice)
{
   
   const score=document.querySelector(".score");
   const currentResult=document.querySelector(".current-result");
   const container=document.querySelector(".container");
    if(playerChoice == ComputerChoice)
    {
        score.textContent=`Player Score:${playerScore} Computer Score:${ComputerScore}`;
        currentResult.textContent=`Player Choice:${playerChoice} Computer Choice:${ComputerChoice}`;
    }
    else
    {
     if(playerChoice=="rock"&&ComputerChoice=="scissors")
     {
        playerScore++;
        score.textContent=`Player Score:${playerScore} Computer Score:${ComputerScore}`;
        currentResult.textContent=`Player Choice:${playerChoice} Computer Choice:${ComputerChoice}`;  
     }
     
     else if(playerChoice=="paper"&&ComputerChoice=="rock")
     {
        playerScore++;
        score.textContent=`Player Score:${playerScore} Computer Score:${ComputerScore}`;
        currentResult.textContent=`Player Choice:${playerChoice} Computer Choice:${ComputerChoice}`;
     }

     else if(playerChoice=="scissors"&&ComputerChoice=="paper")
     {
        playerScore++;
        score.textContent=`Player Score:${playerScore} Computer Score:${ComputerScore}`;
        currentResult.textContent=`Player Choice:${playerChoice} Computer Choice:${ComputerChoice}`;
     }

     else
     {
        ComputerScore++;
        score.textContent=`Player Score:${playerScore} Computer Score:${ComputerScore}`;
        currentResult.textContent=`Player Choice:${playerChoice} Computer Choice:${ComputerChoice}`;
     }
    }
   container.appendChild(score);
   container.appendChild(currentResult);
   if(cnt==5)
   {
    const para=document.createElement("p");
    const result=document.querySelector(".result");
    if(playerScore>ComputerScore)
    {
        para.textContent="You won the game";

    }
    else if(playerScore<ComputerScore)
    {
        para.textContent="You lost the game";
    }
    else if(playerScore==ComputerScore)
    {
        para.textContent="IT'S A TIE";
    }
    result.appendChild(para);
   }
   
 }
    let cnt=0;
 
 function playgame()
   {    
      if(cnt>5)
      {
         alert("Game finished press on restart to restart the game");
      }
     const btn1=document.querySelector("#rock");
     btn1.addEventListener("click",()=>{
      cnt++;
      if(cnt<=5)
      playRound("rock",getComputerChoice());
     });
     const btn2=document.querySelector("#paper");
     btn2.addEventListener("click",()=>{
      cnt++;
      if(cnt<=5)
      playRound("paper",getComputerChoice());
     });
     const btn3=document.querySelector("#scissors");
     btn3.addEventListener("click",()=>{
      cnt++;
      if(cnt<=5)
      playRound("scissors",getComputerChoice());
     });
   }

   function restart()
   {
     window.location.reload();
   }
   const result=document.querySelector(".result");
   const rest=document.createElement("button");
   rest.textContent="Restart";
   result.appendChild(rest);
  rest.addEventListener("click",restart);

    
 

 



 