const type="лендинг";
const time=10;
const discount=10;
const urgent="true";
function price(type){
    if(type === "лендинг")return 1000;
    if(type === "магазин")return 1500;
    if(type === "бот")return 800;
    return null;
}
function pricetime(price,time){
    return price * time;
}
function priceDiscount(pricetime,discount){
    return pricetime - pricetime * (discount/100);
}
function priceurgent(pricediscount,urgent){
    if(urgent==="true")return pricediscount * 1.5;
    return pricediscount;
}
function isValidhours(time){
    return(!isNaN(time)&&time>0);
}if(!isValidhours(time)){
    console.log("введи число корректно");
}else{const pricet=price(type);
    const priceTime=pricetime(pricet,time);
    const priced=priceDiscount(priceTime,discount);
    const priceurg=priceurgent(priced,urgent);
    console.log(
  `цена: 
    ${pricet} 
    часов: 
    ${time} 
    скидка: 
    ${discount} 
    тип сайта: 
    ${type} 
    итого: 
    ${priceurg},`
);

}

