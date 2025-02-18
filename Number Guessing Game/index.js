const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attempt = 0;

document.getElementById("submitGuess").addEventListener("click", function () {
    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    let attemptsText = document.getElementById("attempts");

    if (isNaN(guess) || guess < minNum || guess > maxNum) {
        message.textContent = `Please enter a number between ${minNum} - ${maxNum}.`;
        message.style.color = "red";
    } 
    else {
        attempt++;
        if (guess < answer) {
            message.textContent = "Too low! Try again.";
            message.style.color = "blue";
        } 
        else if (guess > answer) {
            message.textContent = "Too high! Try again.";
            message.style.color = "orange";
        } 
        else {
            message.textContent = `🎉 Correct! The answer is ${answer}. You guessed it in ${attempt} attempts.`;
            message.style.color = "green";
            document.getElementById("submitGuess").disabled = true;
            document.getElementById("guessInput").disabled = true;
        }
        attemptsText.textContent = `Attempts: ${attempt}`;
    }
});
