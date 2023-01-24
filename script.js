const dice = document.querySelector("#dice");
const adviceNum = document.querySelector("#advice-number");
const advice = document.querySelector("#advice-text");

window.onload = showAdvice();

dice.addEventListener("click", function () {
  showAdvice();
});

function showAdvice() {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => data.slip)
    .then((data) => {
      adviceNum.textContent = data.id;
      advice.textContent = data.advice;
    })
    .catch((error) => {
      alert(`error: ${error}`);
    });
}
