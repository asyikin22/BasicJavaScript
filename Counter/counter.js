const minusButton = document.getElementById("minusButton");
const resetButton = document.getElementById("resetButton");
const plusButton = document.getElementById("plusButton");
const countLabel = document.getElementById("countLabel");

let count = 0;

plusButton.onclick = function() {
    count++;
    countLabel.textContent = count;
}

minusButton.onclick = function() {
    count--;
    countLabel.textContent = count;
}

resetButton.onclick = function() {
    count = 0;
    countLabel.textContent = count;
}

