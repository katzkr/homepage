const display = document.getElementById("display");

const confetti = document.getElementById("confetti");

const blackout = document.getElementById("blackout");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function checkCode() {
  const validCodes = ["67", "07734", "404"];

  if (validCodes.includes(display.value)) {
    display.value = "UNLOCKED!";
    showConfetti();
  } else if (display.value === "007") {
    triggerBlackout();
  } else {
    display.value = "TRY AGAIN";
  }

  if (display.value !== "007") {
    setTimeout(() => {
      display.value = "";
    }, 2500);
  }
}

function showConfetti() {
  confetti.src = "confetti.gif";
  confetti.style.opacity = "1";

  setTimeout(() => {
    confetti.style.opacity = "0";
  }, 2000);
}

function triggerBlackout() {
  blackout.style.opacity = "1";
  blackout.style.pointerEvents = "all";

  setTimeout(() => {
    blackout.style.opacity = "0";
    blackout.style.pointerEvents = "none";
    display.value = "";
  }, 6000);
}
