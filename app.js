
// Assignment # 7 - Math Expressions

// Q7: Shopping Cart Checkout

var item1Price = 500;
var item2Price = 800;
var item1Quantity = 2;
var item2Quantity = 1;
var shippingCharges = 200;

var totalCost = (item1Price * item1Quantity) +
                (item2Price * item2Quantity) +
                shippingCharges;

console.log("Shopping Cart Receipt");

console.log("Price of item 1: " + item1Price + " PKR");
console.log("Quantity of item 1: " + item1Quantity);

console.log("Price of item 2: " + item2Price + " PKR");
console.log("Quantity of item 2: " + item2Quantity);

console.log("Shipping Charges: " + shippingCharges + " PKR");

console.log("Total Cost: " + totalCost + " PKR");
