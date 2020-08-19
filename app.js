var userScore = 0;
var computerScore = 0;

const userScore_span = document.getElementById("user-score")
const computerScore_span = document.getElementById("computer-score")
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock")
const scissors_div = document.getElementById("scissor")
const paper_div = document.getElementById("paper")


function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);
    return randomNumber
}

function convertToWord(letter) {
    if (letter === "0") return " rock"
    else if (letter == "1") return " paper"
    else return "scissor"
}

function win(userChoice, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = userChoice + " (user) beats " + compChoice + "^_^"
}

function lose(userChoice, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore
    computerScore_span.innerHTML = computerScore
    result_p.innerHTML = compChoice + "(user) lose " + userChoice + " :("
}



function game(UserChoice) {
    const computerChoice = getComputerChoice()
    switch (UserChoice) {
        case "rock":
            switch (computerChoice) {
                case 0:
                    break;
                case 1:
                    lose(UserChoice, "paper")
                    break;
                case 2:
                    win(UserChoice, "scissor")
                    break;
            }
            break;
        case "scissor":
            switch (computerChoice) {
                case 0:
                    lose(UserChoice, "rock")
                    break;
                case 1:
                    win(UserChoice, "paper")
                    break;
                case 2:
                    break;
            }
            break;
        case "paper":
            switch (computerChoice) {
                case 0:
                    win(UserChoice, "rock")
                    break;
                case 1:

                    break;
                case 2:
                    lose(UserChoice, "scissor")
                    break;
            }
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game("rock")
    })
    scissors_div.addEventListener('click', function() {
        game("scissor")
    })
    paper_div.addEventListener('click', function() {
        game("paper")
    })
}

main()