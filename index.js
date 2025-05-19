function rollDice() {
    const numberofDice = document.getElementById("numofDice").value;
    const diceresult = document.getElementById("dice_result");
    const diceimages = document.getElementById("dice_images");

    const values = [];
    const images = [];

    for (let i = 0; i < numberofDice; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src="dice/${value}.png" alt="Dice ${value}">`);
    }

    diceresult.textContent = `Dice: ${values.join(', ')}`;
    diceimages.innerHTML = images.join(' ');
}
