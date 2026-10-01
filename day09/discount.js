function applyDiscount(sum, percent){
    return sum - sum * (percent / 100);
}
function applyUrgency(sum, urgen){
    if(urgen === "да") {
        return sum * 1.5;
    }
    return sum;
}
console.log(applyUrgency(9000, "да"));
console.log(applyUrgency(9000, "нет"));