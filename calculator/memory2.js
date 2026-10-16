const button = document.querySelector("#calc");
const resultbox = document.querySelector("#result");
button.addEventListener("clic",function(){
    const type = Number(document.querySelector("#type").value);
    const hours = Number(document.querySelector("#hours").value);
    const discount = Number(document.querySelector("#discount").value);
    const urgent = document.querySelector("#urgent").checked;
resultBox.textContent `цена ${type}, часов ${hours} , скидка ${discount}, срочность ${urgent}`
})