const button = document.querySelector("#calc");
const resultBox = document.querySelector("#result");

button.addEventListener("click", function () {
  const type = document.querySelector("#type").value;
  const hours = Number(document.querySelector("#hours").value);
  const discount = Number(document.querySelector("#discount").value);
  const urgent = document.querySelector("#urgent").checked;

  resultBox.textContent = `Тип: ${type}, часов: ${hours}, скидка: ${discount}, срочно: ${urgent}`;
});