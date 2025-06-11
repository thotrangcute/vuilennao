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
      if (!currentInput.startsWith("√")) {
        currentInput = "√" + currentInput;
      }
      updateDisplay();
      return;
    case "x²":
      if (!currentInput.endsWith("^2")) {
        currentInput += "^2";
      }
      updateDisplay();
      return;
    case "1/x":
      if (!currentInput.endsWith("^(-1)")) {
        currentInput += "^(-1)";
      }
      updateDisplay();
      return;
  }

  if (currentInput === "0" && /[0-9]/.test(value)) {
    currentInput = value;
  } else {
    currentInput += value;
  }
  currentInput = currentInput.replace(/^\+/, "");
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
    let expression = currentInput;
    expression = expression.replace(
      /(\d+(?:\.\d+)?)\^2/g,
      (match, num) => `(${num}*${num})`
    );
    expression = expression.replace(
      /(\d+(?:\.\d+)?)\^\(-1\)/g,
      (match, num) => `(1/(${num}))`
    );
    expression = expression.replace(
      /√(\d+(?:\.\d+)?)/g,
      (match, num) => `Math.sqrt(${num})`
    );
    expression = expression.replace(/[^0-9+\-*/.()Mathsqrt]/g, "");
    currentInput = eval(expression).toString();
    resultDisplayed = true;
    updateDisplay();
  } catch (e) {
    currentInput = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  let display = currentInput.replace(/\^2/g, "<sup>2</sup>");
  display = display.replace(/\^\(-1\)/g, "<sup>-1</sup>");
  display = display.replace(/√/g, "&radic;");
  resultText.innerHTML = display;
}
function clearEntry() {
  currentInput = "0";
  updateDisplay();
}
