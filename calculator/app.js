const prices= {
    "лендинг": {price: 1000, days: 5},
    "магазин": {price: 1500, days: 14},
    "бот": { price: 800, days: 3},
    "визитка": {price: 600, days: 2}
};
const settings={
    "urgentRate": 1.5
};
function types(type) {
    if(prices[type]===undefined)return 0;
    return prices[type].price;
}
function getDays(day) {
    return prices[day].days;
}

function isValidhours(hours) {
    if (!isNaN(hours) && hours > 0) return true;
    return false;
}

function pricePerhours(hours, pricePerHour) {
    return hours * pricePerHour;
}

function discounts(discount, sum) {
    return sum - sum * (discount / 100);
}

function urgents(sum, urgent) {
    if (urgent === true) return sum * settings.urgentRate;
    return sum;
}

const button = document.querySelector("#calc");
const resultBox = document.querySelector("#result");
const history = [];

button.addEventListener("click", function () {
    const type = document.querySelector("#type").value;
    const hours = Number(document.querySelector("#hours").value);
    const discount = Number(document.querySelector("#discount").value);
    const urgent = document.querySelector("#urgent").checked;
    const srok = getDays(type);

    if (!isValidhours(hours)) {
        resultBox.textContent = "введи время корректно";
        return;
    }

    const prisetype = types(type);
    const priceandhours = pricePerhours(hours, prisetype);
    const discoutprice = discounts(discount, priceandhours);
    const urgentprice = urgents(discoutprice, urgent);

    history.push(urgentprice);

    let proverka = "первый расчет";
    if (history.length > 1) {
        proverka = history[history.length - 2];
    }

    console.log(history);
    resultBox.textContent = `Расчет№${history.length} К оплате ${urgentprice} Срок ${srok} Прошлый расчет ${proverka}`;
});