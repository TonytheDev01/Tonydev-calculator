// Grab display
const display = document.getElementById("display");

// Attach click event for all buttons
document.querySelectorAll(".key").forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;

    if (key === "AC") {
      clearDisplay();
    } else if (key === "DEL") {
      deleteLast();
    } else if (key === "=") {
      calculate();
    } else {
      appendToDisplay(key);
    }
  });
});

// Functions
function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  display.value = display.value.length > 1 ? display.value.slice(0, -1) : "0";
}

function appendToDisplay(key) {
  if (display.value === "0" && !isNaN(key)) {
    display.value = key; // replace leading zero with number
  } else {
    display.value += key;
  }
}

function calculate() {
  try {
    display.value = eval(display.value); // ⚠️ For learning only!
  } catch {
    display.value = "Error";
  }
}