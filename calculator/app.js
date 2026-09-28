const type = prompt("Тип сайта: лендинг, магазин или бот?");

let pricePerHour;
if (type === "лендинг"){
    pricePerHour = 800;
} else if (type === "магазин") {
    pricePerHour = 1500;
} else { pricePerHour =1000;

}
const hours =Number(prompt("сколько часов"));
let discount =Number(prompt("введите скидку в процентах"));
let total = pricePerHour * hours ;
let discountAmount = total * (discount/100);
const totalWithDiscount = total - discountAmount;
alert("цена за час работы " + pricePerHour + "руб");
alert("время работы " + hours + "часов");
alert("скидка " + discount + "%");
alert("Итого к оплате "+ totalWithDiscount + "руб");


    