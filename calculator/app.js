
const pricePerHour =Number(prompt("Цена за час работы"));
const hours =Number(prompt("сколько часов"));
let discount =Number(prompt("введите скидку в процентах"));
let total = pricePerHour * hours ;
let discountAmount = total * (discount/100);
const totalWithDiscount = total - discountAmount;
alert("цена за час работы " + pricePerHour + "руб");
alert("время работы " + hours + "часов");
alert("скидка " + discount + "%");
alert("Итого к оплате "+ totalWithDiscount + "руб");s