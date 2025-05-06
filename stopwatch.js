let startTime;
let elapsedTime = 0;
let timerInterval;
const display = document.getElementById("time");
const lapsList = document.getElementById("laps");

function timeToString(time) {
  const date = new Date(time);
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  const seconds = String(date.getUTCSeconds()).padStart(2, '0');
  const milliseconds = String(date.getUTCMilliseconds()).padStart(3, '0');
  return `${minutes}:${seconds}.${milliseconds}`;
}

function print(txt) {
  display.textContent = txt;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    print(timeToString(elapsedTime));
  }, 10);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  print("00:00.000");
  elapsedTime = 0;
  lapsList.innerHTML = '';
}

function lap() {
  if (elapsedTime === 0) return;
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement("li");
  li.textContent = `Lap ${lapsList.children.length + 1}: ${lapTime}`;
  lapsList.appendChild(li);
}

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);