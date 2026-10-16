const type = "лендинг";
const time = 0;
const discount = 10;
const urgent = true;
function price(type) {
  if (type === "лендинг") return 1000;
  if (type === "магазин") return 1500;
  if (type === "бот") return 800;
  return null;
}
function TimePrice(time, price) {
 return price * time;
}
function priceDiscount(price, discount) {
  return price - price * (discount / 100);
}
function urgentPrice(price, urgent) {
  if (urgent === true) return price * 1.5;
  return price;
}
function isValidHours(time){
    return(!isNaN(time) && time>0);
}if(!isValidHours(time)){
    console.log("введи часы корректно");
}
else{const Price = price(type);
const Time = TimePrice(time, Price);
const Discount = priceDiscount(Time, discount);
const Urgent = urgentPrice(Discount, urgent);
console.log(
  "цена:" +
    Price +
    "часов:" +
    time +
    "скидка:" +
    discount +
    "тип сайта:" +
    type +
    "итого:" +
    Urgent,
);

}