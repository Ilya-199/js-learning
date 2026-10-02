function getPrice(type){
    if(type === "лендинг") return 800;
    if(type === "магазин") return 1500;
    if(type === "бот") return 1000;
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
    if(urgent === "да")
        return sym * 1.5;
    return sym;
}

const type = prompt("Тип сайта лендинг магазин бот","");
const pricePerHours = getPrice(type);
const hours = Number(prompt("Сколько часов?",""));
if (!isValidHours(hours)){
    alert("Час нужно вводить числом больше нуля");
}else {
    const precent =Number(prompt("Скидка в процентах",""));
    const price = (pricePerHours * hours);
    const precentprice = applyDiscount(price, precent);
    const urgency = prompt("Заказ срочный да или нет","");
    const finalurgency = applyUrgency(precentprice, urgency);
    alert ("Сумма" + finalurgency + "руб" );

}