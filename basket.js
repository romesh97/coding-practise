function calculateBasketTotal(basket, prices) {
    const priceMap = new Map(prices.map(item => [item.product, item.price]));
    // let total = 0;
    // for(const item of basket){
    //     const price = priceMap.get(item.product) || 0;
    //     total += item.quantity * price
    //     console.log("prices are" + price)
    // }
    // return total;
    return basket.reduce((total, item) => {
        const price = priceMap.get(item.product) || 0;
        return total + (item.quantity * price);
    }, 0);
}

const basket = [
    { product: "apple", quantity: 3 },
    { product: "banana", quantity: 2 },
    { product: "orange", quantity: 5 }
];

const prices = [
    { product: "apple", price: 2 },
    { product: "banana", price: 4 },
    { product: "orange", price: 1 }
];

function showTotal() {
    const totalCost = calculateBasketTotal(basket, prices);
    document.getElementById('totalCost').innerText = `Total cost of the basket: $${totalCost}`;
}