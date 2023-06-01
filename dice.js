class Die {
    constructor(sides) {
        this.sides = sides;
        this.value = null; //emtpy value at the start, then it will take new value once program start

    }

    roll() {
        this.value = Math.floor(Math.random() * this.sides) + 1;
        return this.value;
    }

    getValue() {
        return this.value;
    }

}

const dice = [];
const numDice = 5;
const numSides = 6;

for (let i = 0; i <numDice; i++) {
    const die = new Die(numSides);
    dice.push(die);
}


function rollDice() {
    
    const status = document.getElementById("status");

    let diceTotal = 0
    
    for (let i = 0; i < dice.length; i++) {
        const die = dice[i];
        const rollValue = die.roll();
        diceTotal += rollValue;
        const dieElement = document.getElementById("die" + (i+1));
        dieElement.innerHTML = rollValue;
    }

    const totalElement = document.createElement("div");
    totalElement.textContent = "Total: " + diceTotal;
    totalElement.classList.add("total");

    status.innerHTML = "";
    status.appendChild(totalElement);

    if (dice.every(die => die.getValue() === dice[0].getValue())) {
        const yahtzeeElement = document.createElement("span");
        yahtzeeElement.textContent = "Yahtzee!";
        yahtzeeElement.classList.add("yahtzee");
        status.appendChild(yahtzeeElement);
    }
    
}    