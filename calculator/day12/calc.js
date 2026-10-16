
const typer = "лендинг";
const time = 10;
const discount = 10;
const urgent = "да";
console.log("Тип сайта: " + typer);
console.log("Количество часов: " + time);
console.log("Скидка: " + discount);
console.log("Заказ срочный: " + urgent);
function price (type){
    if (type === "лендинг") return 800;
    if (type === "Магазин") return 1500;
    if (type === "бот") return 1000;
    return null;
}
function isValidHours(time){
    if (!isNaN(time) && time>0){
        return true;
    }return false;

}
function priceDiscount(type ,discount){
    return(type - type * (discount / 100));
}
function urgentPrice(urgent, type){
    if(urgent === "да") return type * 1.5;
    return type;
}
console.log(price("лендинг"));
console.log(price("Магазин"));
console.log(price("бот"));
console.log(price("ваб"));
console.log(isValidHours(0));
console.log(isValidHours("абв"));
console.log(priceDiscount(1000, 10));
console.log(urgentPrice("да",900));
const Hourtime = price(typer);
const timeprice = Hourtime * time;
const afterDiscount = priceDiscount(timeprice, discount);
const total = urgentPrice(urgent, afterDiscount);
console.log("цена", + Hourtime + "часов" +time + "скидка" + discount + "срочно" + urgent + "итого" + total);
