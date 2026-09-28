const type = prompt("Тип сайта: лендинг, магазин или бот?");

let pricePerHour;
if (type === "лендинг"){
    pricePerHour = 800;
} else if (type === "магазин") {
    pricePerHour = 1500;
} else { pricePerHour =1000;

}
const hours =Number(prompt("сколько часов"));
if (!isNaN(hours)&& hours >0) {
    let discount =Number(prompt("введите скидку в процентах"));
let total = pricePerHour * hours ;
let discountAmount = total * (discount/100);
let totalWithDiscount = total - discountAmount;
let urgent = prompt("Срочный заказ да или нет", "");
if (urgent=="да"){
     totalWithDiscount = totalWithDiscount * 1.5;
}
alert("цена за час работы " + pricePerHour + "руб");
alert("время работы " + hours + "часов");
alert("скидка " + discount + "%");
alert("Итого к оплате "+ totalWithDiscount + "руб");
}
