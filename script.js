let array = [];
const outputElement = document.getElementById("output");

function createArray() {
    const elementsInput = document.getElementById("arrayElements").value;
    array = elementsInput.split(",");
    array.sort();
    array.splice(1, 3);
    outputElement.textContent = array;
}