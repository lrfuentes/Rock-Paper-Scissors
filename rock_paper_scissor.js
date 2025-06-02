
function getComputerChoice(){
    let random = Math.random() * 10;
    if (random >= 0 && random <= 3) {
        return "Rock";
    }
    else if (random <= 6) {
        return "Paper";
    }
    else {
        return "Scissor";
    }
}

let result = getComputerChoice();