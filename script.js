function getCompChoice() {
    const num = Math.floor(1 + Math.random()*3);
    if (num === 1) {
        return "rock";
    } else if (num === 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getResult(playerChoice, compChoice) {
    if ((playerChoice === "rock" && compChoice === "scissors") ||
    (playerChoice === "paper" && compChoice === "rock") ||
    (playerChoice === "scissors" && compChoice === "paper")) {
        return "win";
    } else if (playerChoice === compChoice) {
        return "draw";
    } else {
        return "loss";
    }
}

let wins = 0;
let losses = 0;
let draws = 0;
const resultText = document.getElementById("result-text");

function displayResult(result, compChoice) {
    const tracker = document.getElementById(result);
    

    switch (result) {
        case "win":
            resultText.innerHTML = `Karen chose ${compChoice}. You win!`;
            wins += 1;
            break;
        case "draw":
            resultText.innerHTML = `Karen chose ${compChoice}. It's a draw!`;
            draws += 1;
            break;
        case "loss":
            resultText.innerHTML = `Karen chose ${compChoice}. You lose!`;
            losses += 1;
            break;
    }
}

function updateTrackers() {
    document.getElementById("win").innerHTML = `Wins: ${wins}`;
    document.getElementById("loss").innerHTML = `Losses: ${losses}`;
    document.getElementById("draw").innerHTML = `Draws: ${draws}`;
}

function reset() {
    wins = 0;
    losses = 0;
    draws = 0;
    updateTrackers();
    resultText.innerHTML = "";
}

function playGame(playerChoice) {
    const compChoice = getCompChoice();
    const result = getResult(playerChoice, compChoice);

    displayResult(result, compChoice);
    updateTrackers();
}