function types(type) {
    if (type === "лендинг") return 1000;
    if (type === "магазин") return 1500;
    if (type === "бот") return 800;
    return 0;
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
    if (urgent === true) return sum * 1.5;
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
    resultBox.textContent = `Расчет№${history.length} К оплате ${urgentprice} Прошлый расчет ${proverka}`;
});