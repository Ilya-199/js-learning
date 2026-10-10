function getPrice(type){
    if(type === "landing") return 800;
    if(type === "shop") return 1500;
    if(type === "bot") return 1000;
    return null;
}
function isValidHours(hours) {
    if(!isNaN(hours) && hours>0)return true;
    return false;
}
function applyDiscount(sym, precent ){
    return(sym - sym * (precent / 100));
}
function applyUrgency(sym, urgent){
    if(urgent)
        return sym * 1.5;
    return sym;}
const button = document.querySelector("#calc");
const resultBox = document.querySelector("#result");

button.addEventListener("click", function () {
  const type = document.querySelector("#type").value;
  const hours = Number(document.querySelector("#hours").value);
  const discount = Number(document.querySelector("#discount").value);
  const urgent = document.querySelector("#urgent").checked;
  if (!isValidHours(hours)){
    resultBox.textContent = "введи часы числом больше нуля ";
    return;
  }
  const pricePerHour = getPrice(type);
  const sum = pricePerHour * hours;
  const afterDiscount = applyDiscount(sum,discount);
  const total = applyUrgency( afterDiscount , urgent);
  resultBox.textContent = `К оплате ${total} руб.`;
});