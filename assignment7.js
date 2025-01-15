const _ = require('lodash');

class Product {
    constructor(name, category, stock, pricePerUnit) {
        this.name = name;
        this.category = category;
        this.stock = stock;
        this.pricePerUnit = pricePerUnit;
    }
}

function addProduct(inventory, product) {
    inventory.push(product);
}

function removeProduct(inventory, productName) {
    _.remove(inventory, (product) => product.name === productName);
}

function updateProduct(inventory, productName, newDetails) {
    let product = _.find(inventory, (product) => product.name === productName);
    if (product) {
        Object.assign(product, newDetails);
    }
}

function findMostExpensiveProduct(inventory) {
    return _.maxBy(inventory, (product) => product.pricePerUnit);
}

function calculateTotalInventoryValue(inventory) {
    return _.sumBy(inventory, (product) => product.stock * product.pricePerUnit);
}

function filterProductsByCategory(inventory, category) {
    return _.filter(inventory, (product) => product.category === category);
}

let inventory = [
    new Product('Laptop', 'Elektronik', 10, 1500),
    new Product('Smartphone', 'Elektronik', 20, 700),
    new Product('Meja', 'Furniture', 5, 200),
    new Product('Sofa', 'Furniture', 15, 100)
];

addProduct(inventory, new Product('Monitor', 'Elektronik', 8, 300));

removeProduct(inventory, 'Sofa');

updateProduct(inventory, 'Laptop', { pricePerUnit: 1400, stock: 12 });

const mostExpensiveProduct = findMostExpensiveProduct(inventory);
console.log('Produk dengan harga tertinggi:', mostExpensiveProduct);

const totalValue = calculateTotalInventoryValue(inventory);
console.log('Total nilai inventaris:', totalValue);

const electronics = filterProductsByCategory(inventory, 'Elektronik');
console.log('Produk dalam kategori Elektronik:', electronics);

console.log('Inventaris akhir:', inventory);