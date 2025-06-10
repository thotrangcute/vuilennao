const resultText = document.querySelector(".result-text");
let currentInput = "0";
let previousInput = "";
let operator = "";
let resultDisplayed = false;

function press(value) {
  if (resultDisplayed) {
    currentInput = "";
    resultDisplayed = false;
  }
  switch (value) {
    case "X":
      value = "*";
      break;
    case "√":
      currentInput = Math.sqrt(parseFloat(currentInput)).toString();
      return;
    case "x²":
      currentInput = Math.pow(parseFloat(currentInput), 2).toString();
      return;
    case "1/x":
      currentInput = (1 / parseFloat(currentInput)).toString();
      return;
  }

  currentInput += value;
  currentInput = currentInput.replace(/^\+/, "");
  updateDisplay();
}
function clearEntry() {
  currentInput = "0";
  updateDisplay();
}
function clearAll() {
  currentInput = "0";
  previousInput = "";
  operator = "";
  updateDisplay();
}
function backspace() {
  if (currentInput.length > 1) {
    currentInput = currentInput.slice(0, -1);
  } else {
    currentInput = "0";
  }
  updateDisplay();
}
function toggleSign() {
  currentInput = currentInput.slice(1);
  updateDisplay();
}

function calculate() {
  try {
    const expression = currentInput.replace(/[^0-9+\-*/.()]/g, "");
    currentInput = eval(expression).toString();
    resultDisplayed = true;
    updateDisplay();
  } catch (e) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  resultText.textContent = currentInput;
}
