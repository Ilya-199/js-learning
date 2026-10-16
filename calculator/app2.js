function getPrice(type) {
  if (type === "landing") return 800;
  if (type === "shop") return 1500;
  if (type === "bot") return 1000;
  return null;
}
function isValidHours(hours) {
  if (!isNaN(hours) && hours > 0) return true;
  return false;
}
function applyDiscount(sum, precent) {
  return sum - sum * (precent / 100);
}
function applyUrgency(sum, urgent) {
  if (urgent) return sum * 1.5;
  return sum;
}
const button = document.querySelector("#calc");
const resultBox = document.querySelector("#result");
const history = [];

button.addEventListener("click", function () {
  const type = document.querySelector("#type").value;
  const hours = Number(document.querySelector("#hours").value);
  const discount = Number(document.querySelector("#discount").value);
  const urgent = document.querySelector("#urgent").checked;
  if (!isValidHours(hours)) {
    resultBox.textContent = "введи часы числом больше нуля ";
    return; 
  }
  const pricePerHour = getPrice(type);
  const sum = pricePerHour * hours;
  const afterDiscount = applyDiscount(sum, discount);
  const total = applyUrgency(afterDiscount, urgent);
  history.push(total);
  let proverka = "первый расчет";
  if (history.length > 1) {
    proverka = history[history.length - 2];
  }

  console.log(history);
  resultBox.textContent = `Расчет№ ${history.length} К оплате ${total} руб. Результат прошлого расчета ${proverka}`;
});
