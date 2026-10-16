function applyDiscount(sum, percent){
    return sum - sum * (percent / 100);
}
function applyUrgency(sum, urgen){
    if(urgen === "да") {
        return sum * 1.5;
    }
    return sum;
}
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
console.log(applyUrgency(9000, "да"));
console.log(applyUrgency(9000, "нет"));
console.log(getPrice("бот"));
console.log(getPrice("ерунда"));
console.log(isValidHours(10));
console.log(isValidHours("абв"));
console.log(isValidHours(0));