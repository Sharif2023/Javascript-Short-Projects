const diceSound = new Audio("sounds/dice-roller.mp3"); // Preload sound

function rollDice() {
    const numOfDice = document.getElementById("numOfDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const historyList = document.getElementById("historyList");
    const values = [];
    const images = [];

    // Show rolling animation before showing result
    diceImages.innerHTML = '<p>🎲 Rolling...</p>';

    setTimeout(() => {
        for (let i = 0; i < numOfDice; i++) {
            const value = Math.floor(Math.random() * 6) + 1;
            values.push(value);
            images.push(`<img src="dice_images/${value}.png" alt="Dice ${value}" class="dice-animation">`);
        }

        playDiceSound(); 
        diceResult.textContent = `🎲 Dice rolled: ${values.join(', ')}`;
        diceImages.innerHTML = images.join('');

        const listItem = document.createElement("li");
        listItem.innerHTML = `🎲 ${values.join(', ')} <small>${new Date().toLocaleTimeString()}</small>`;
        
        listItem.style.opacity = "0";
        historyList.prepend(listItem);
        setTimeout(() => {
            listItem.style.opacity = "1";
            listItem.style.transition = "opacity 0.5s ease-in-out";
        }, 100);
    }, 1000); // 1 second delay for animation
}

function playDiceSound() {
    diceSound.currentTime = 0; 
    diceSound.play().catch(error => console.warn("Sound error:", error));
}
