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
function getHumanChoice()
{
   let input = prompt("Choose rock,paper or scissors","");
   if(input.toLowerCase()=="rock")
   {
    return "rock";
   }
   else if(input.toLowerCase()=="paper")
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
    if(playerChoice == ComputerChoice)
    {
        alert("Draw");
    }
    else{
     if(playerChoice=="rock"&&ComputerChoice=="scissors")
     {
        playerScore++;
        alert(`You win ${playerChoice} beats ${ComputerChoice}`);
     }
      else if(playerChoice=="rock"&&ComputerChoice=="paper")
     {
        ComputerScore++;
        alert(`You lose ${ComputerChoice} beats ${playerChoice}`);
     }
     else if(playerChoice=="paper"&&ComputerChoice=="rock")
     {
        playerScore++;
        alert(`You win ${playerChoice} beats ${ComputerChoice}`);
     }
     else if(playerChoice=="paper"&&ComputerChoice=="scissors")
     {
        ComputerScore++;
        alert(`You lose ${ComputerChoice} beats ${playerChoice}`);
     }
     else if(playerChoice=="scissors"&&ComputerChoice=="paper")
     {
        playerScore++;
        alert(`You win ${playerChoice} beats ${ComputerChoice}`);
     }
      else{
        ComputerScore++;
        alert(`You lose ${ComputerChoice} beats ${playerChoice}`);
      }
    }
 }
    
 
 function playgame()
 {
    for(let i=0;i<5;i++)
    {
        let playerChoice=getHumanChoice();
        let computerChoice=getComputerChoice();
        playRound(playerChoice,computerChoice);
    }
    if(playerScore>ComputerScore)
    {
        alert("You won the game");
    }
    else if(playerScore<ComputerScore)
    {
        alert("You lost the game");
    }
    else
    {
        alert("Draw");
    }
 }

 playgame();