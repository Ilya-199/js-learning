function total(price, count){
    return price * count;
}
function isEven(n){
    if (n % 2 === 0) return "четное";
    return "не четное";
}
function greet(name){
    return "Привет, " + name;
}
function priceWithtax(sum){
    return sum + sum * 0.2;
}
function discount0rNot(sum, isRegylar){
    if(isRegylar=== true){
       return sum - sum * 0.1;
    return sum; 
    }
    
}
console.log(greet("илья"));