let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");

let result = document.getElementById("result");
let comp = document.getElementById("compt-choice");

function launch(event) {
    console.log("Launch function called");

    const options = ["rock", "paper", "scissors"];
    let randomindx = Math.floor(Math.random() * options.length);

    let computer = options[randomindx];
    console.log("Computer choice:", computer);

    comp.innerHTML = `<img src="pictures/${computer}.jpg">`;

    let userChoice = event.currentTarget.id;  // Use event.currentTarget.id instead of event.target.id
    document.getElementById("user-choice").innerText = userChoice;
    console.log("User choice:", userChoice);

    if (computer === userChoice) {
        result.textContent = "it's a tie";
        console.log("Result: it's a tie");
    } else if (
        (computer === "rock" && userChoice === "paper") || 
        (computer === "paper" && userChoice === "scissors") || 
        (computer === "scissors" && userChoice === "rock")
    ) {
        result.textContent = "you won!";
        console.log("Result: you won!");
    } else {
        result.textContent = "you lost!";
        console.log("Result: you lost!");
    }
}
