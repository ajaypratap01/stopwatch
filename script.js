let timer; // Timer variable
let time = 0; // Time in seconds
let running = false; // Flag to check if the stopwatch is running

function start() {
  if (!running) {
    running = true;
    timer = setInterval(updateDisplay, 1000);
  }
}

function stop() {
  if (running) {
    running = false;
    clearInterval(timer);
  }
}

function reset() {
  stop();
  time = 0;
  updateDisplay();
}

function updateDisplay() {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = time % 60;

  // Add leading zeros if necessary
  let displayHours = ("0" + hours).slice(-2);
  let displayMinutes = ("0" + minutes).slice(-2);
  let displaySeconds = ("0" + seconds).slice(-2);

  document.getElementById("display").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
  time++;
}
