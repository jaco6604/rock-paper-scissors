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

//console.log(getComputerChoice());

/* function getHumanChoice(){
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
*/




function playGame(){

    let humanScore = 0;
    let computerScore = 0;
    const div = document.createElement("div");
    document.body.appendChild(div);
    function playRound(humanChoice, computerChoice){
        let message = '';

        if (humanChoice === computerChoice){
            message = "Tie!";
        }
        else if( (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        message = "You win!";
        humanScore++;
    } else{
        message = "You lose!";
        computerScore++;
    }
    div.textContent = `${message} | You: ${humanScore} Computer: ${computerScore}`;
    if(humanScore === 5){
        div.textContent = `You won the game! | You: ${humanScore} Computer: ${computerScore}`;
    } else if (computerScore === 5){
        div.textContent = `You have lost the game! | You: ${humanScore} Computer: ${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
    }

    }
    
    const rock = document.createElement('button');
    rock.textContent = "Rock";
    document.body.appendChild(rock);

    const paper = document.createElement('button');
    paper.textContent = "Paper";
    document.body.appendChild(paper);

    const scissors = document.createElement("button");
    scissors.textContent = "Scissors";
    document.body.appendChild(scissors);

    rock.addEventListener("click", function(){
        playRound("rock", getComputerChoice());
    });

    paper.addEventListener("click", function(){
        playRound("paper", getComputerChoice());
    });

    scissors.addEventListener("click", function(){
        playRound("scissors", getComputerChoice());
    });
    
    /*let humanChoice = getHumanChoice();
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
    playRound(humanChoice, computerChoice); */





    
}

playGame();