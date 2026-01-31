console.log("linked");

function getComputerChoice(){
    
    let choice = Math.random();

    if (choice <= 0.33){
        return "rock"; 
    }
    else if (choice > 0.33 && choice <= 0.66){
        return "paper";
    }
    else{
        return "scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice(){
    let human = prompt("Please enter rock, paper or scissors")
    
    if(human == "rock"){
        return "rock";
    }
    else if(human == "paper"){
        return "paper";
    }
    else if(human == "scissors"){
        return "scissors"
    }

    }

console.log(getHumanChoice());





function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase();
    
        if(humanChoice === "rock" && computerChoice === "paper"){
            console.log("You lose! Paper beats rock!");
            computerScore++;
        }
        if(humanChoice === "rock" && computerChoice === "scissors"){
            console.log("You win! Rock beats scissors!");
            humanScore++;
        }
        if(humanChoice === "rock" && computerChoice === "rock"){
            console.log("Tie");
        }
        if(humanChoice === "paper" && computerChoice === "rock"){
            console.log("You win! Paper beats rock!");
            humanScore++;
        }
        if(humanChoice === "paper" && computerChoice === "paper"){
            console.log("Tie!");
        }
        if(humanChoice === "paper" && computerChoice === "scissors"){
            console.log("You lose! Scissors beats paper!");
            computerScore++;
        }
        if(humanChoice === "scissors" && computerChoice === "rock"){
            console.log("You lose! Rock beats scissors!");
            computerScore++;
        }
        if(humanChoice === "scissors" && computerChoice === "paper"){
            console.log("You win! Scissors beat paper!");
            humanScore++;
        }
        if(humanChoice === "scissors" && computerChoice === "scissors"){
            console.log("Tie!");
        }
    
    }
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

    if(humanScore > computerScore){
        console.log("You win!");
    } 
    else if(humanScore < computerScore){
        console.log("You lose!");
    }
    else{
        console.log("Tie!");
    }
}

playGame();