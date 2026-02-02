let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.getElementById("userScore");
const compScoreEl = document.getElementById("compScore");

const gameDraw = () => {
    
    msg.textContent = "Game was draw! play Agian.";
    msg.style.backgroundColor = "#081b31";
}

const gameCompChoice = () =>{
    const options = ["rock", "paper", "scissors"];
    const randomIndx = Math.floor(Math.random() * 3);
    return options[randomIndx];

}

choices.forEach((choice) =>{
    
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
        
    })
})

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        userScore++;
        userScoreEl.textContent = userScore;
        console.log("You Win.");
        msg.textContent = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        console.log("You Lose.");
        compScore++;
        compScoreEl.textContent = compScore;
        msg.textContent = `You Lose! ${compChoice} beats ${userChoice}`;
         msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
        
        const compChoice = gameCompChoice();
        

        if(userChoice === compChoice){
            gameDraw();
        }else{
            let userWin = true;
            if(userChoice === "rock"){
                // "paper", "scissors"
                userWin = compChoice === "paper" ? false : true;
            }
            else if(userChoice === "paper"){
                // 
                userWin = compChoice === "scissors" ? false : true;
            }
            else{
                userWin = compChoice === "rock" ? false : true;
            }
            showWinner(userWin,userChoice,compChoice);
        }

}

