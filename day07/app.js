const type = prompt("Какой тип сайта лендинг магазин или бот", "");
let pricePerHours;

if (type === "лендинг") {
  pricePerHours = 800;
} else if (type === "магазин") {
  pricePerHours = 1000;
} else {
  pricePerHours = 1500;
}

let hours = Number(prompt("сколько часов работы", ""));

if (!isNaN(hours) && hours > 0) {
  const total = pricePerHours * hours;
  const discount = Number(prompt("Сколько скидка в процентах", ""));
  let totalWithDiscount = total - total * (discount / 100);
  const urgent = prompt("Срочный заказ да или нет", "");

  if (urgent === "да") {
    totalWithDiscount *= 1.5;
  }
  alert("цена за час работы" + pricePerHours + "руб");
  alert("кол-во часов" + hours);
  alert("Скидка в процентах" + discount);
  alert("Итого к оплате" + totalWithDiscount + "руб");
}
