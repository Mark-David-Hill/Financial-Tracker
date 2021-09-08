// 
// //
// Create Basic Objects
// //
// 

// Template object for currencies
const currencyType = {
    baseValue: 0,
    count: 0,
    // Total cumulative value based on current count
    totalValue: 0,
    countContainer: 0,
    totalValueContainer: 0
}

// 
// Currency Objects
// 

// ￥1 Object
let yen1 = Object.create(currencyType);
// Set ￥1 properties
yen1.baseValue = 1;
yen1.count = 0;
yen1.totalValue = 0;
yen1.countContainer = document.getElementById("yen1CountContainer")
yen1.totalValueContainer = document.getElementById("yen1TotalValueContainer")

// ￥5 Object
let yen5 = Object.create(currencyType);
// Set ￥5 properties
yen5.baseValue = 5;
yen5.count = 0;
yen5.totalValue = 0;

// ￥10 Object
let yen10 = Object.create(currencyType);
// Set ￥10 properties
yen10.baseValue = 10;
yen10.count = 0;
yen10.totalValue = 0;

// ￥50 Object
let yen50 = Object.create(currencyType);
// Set ￥50 properties
yen50.baseValue = 50;
yen50.count = 0;
yen50.totalValue = 0;

// ￥100 Object
let yen100 = Object.create(currencyType);
// Set ￥100 properties
yen100.baseValue = 100;
yen100.count = 0;
yen100.totalValue = 0;

// ￥500 Object
let yen500 = Object.create(currencyType);
// Set ￥500 properties
yen500.baseValue = 500;
yen500.count = 0;
yen500.totalValue = 0;

// ￥1000 Object
let yen1000 = Object.create(currencyType);
// Set ￥1000 properties
yen1000.baseValue = 1000;
yen1000.count = 0;
yen1000.totalValue = 0;

// ￥5000 Object
let yen5000 = Object.create(currencyType);
// Set ￥5000 properties
yen5000.baseValue = 5000;
yen5000.count = 0;
yen5000.totalValue = 0;

// ￥10000 Object
let yen10000 = Object.create(currencyType);
// Set ￥10000 properties
yen10000.baseValue = 10000;
yen10000.count = 0;
yen10000.totalValue = 0;

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Create Basic Objects





// 
// //
// Initialize Arrays
// //
// 

// Currency Array
const allCurrencies = [yen1, yen5, yen10, yen100, yen500, yen1000, yen5000, yen10000];

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Initialize Arrays



// 
// //
// Initialize Variables
// //
// 

// Total Value for all currency types
let totalValue = 0;

// 
// HTMl Element Variables
// 

// Clear Button
let clearButton = document.getElementById("clearButton");

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Initialize Variables


// // Print base value of each type of currency
// allCurrencies.forEach(function (arrayItem) {
//     console.log(arrayItem.baseValue);
// });






// 
// //
// Click Events
// //
// 

// Clear All
clearButton.addEventListener("click", function() {
    yen1.count = 0;
    yen5.count = 0;
    
    // Update and display totals
    update1YenTotal();
    update5YenTotal();

    // Display new value
    document.getElementById("yen1CountContainer").innerText = yen1.count;
    // Update and display totals
    // Display new value
    document.getElementById("yen5CountContainer").innerText = yen5Count;

    updateTotal();
});

// Plus 1 yen
document.getElementById("yen1PlusButton").addEventListener("click", function() {
    // Increase by 1
    yen1.count = yen1.count + 1;
    // Display new value
    yen1.countContainer.innerText = yen1.count;
    // Update and display totals
    update1YenTotal();
    updateTotal();
});

// Increase by 1 function
// function incrementCurrency(currencytype) {

// }

// Minus 1 yen
document.getElementById("yen1MinusButton").addEventListener("click", function() {
    // Increase by 1
    yen1.count = yen1.count - 1;
    // Make sure it's not below 0
    if(yen1.count < 0) {
        yen1.count = 0;
    };
    // Display new value
    yen1.countContainer.innerText = yen1.count;
    // Update and display totals
    update1YenTotal();
    updateTotal();
});


// // // // // // // //
// // // // // // // // // // // // // // // //
// End Click Events



// Update Total Value of 1Yen 
function update1YenTotal() {
    yen1.totalValue = (yen1.count * yen1.baseValue);
    // Display New Total
    yen1.totalValueContainer.innerText = yen1.totalValue;
};


// Plus 5 yen
document.getElementById("yen5PlusButton").addEventListener("click", function() {
    // Increase by 1
    yen5Count = yen5Count + 1;
    // Display new value
    document.getElementById("5-yen-count").innerText = yen5Count;
    // Update and display totals
    update5YenTotal();
    updateTotal();
});


// Minus 5 yen
document.getElementById("yen5MinusButton").addEventListener("click", function() {
    // Reduce by 5
    yen5Count = yen5Count - 1;
    // Make sure it's not below 0
    if(yen5Count < 0) {
        yen5Count = 0;
    };
    // Display new value
    document.getElementById("5-yen-count").innerText = yen5Count;
    // Update and display totals
    update5YenTotal();
    updateTotal();
});

// Update Total Value of 5Yen 
function update5YenTotal() {
    yen5TotalValue = (yen5Count * yen5Value);
    // Display New Total
    document.getElementById("5-yen-total").innerText = yen5TotalValue;
};








// Update and display the overall Total
function updateTotal() {
    // Get new Total Value
    totalValue = (yen1.totalValue + yen5.totalValue + yen10.totalValue + yen50.totalValue + yen100.totalValue + yen500.totalValue + yen1000.totalValue + yen5000.totalValue + yen10000.totalValue);
    // Display updated Total Value
    document.getElementById("totalValueContainer").innerText = `Total: ￥${totalValue}`;
};























// 
// //
// Add Functions
// //
// 

// Create a new transaction
function createTransaction(index, cost, date, category, store, required, regularExpense) {
    const newTransaction = Object.create(transaction);
    newTransaction.cost = x;
    return newTransaction;
}

// Add new transaction to array. e.g. addTransaction(createTransaction(1, $5, 5/5/2021, 'groceries', 'seki', true, false));
function addTransaction(newTransaction) {
    allTransactions.push(newTransaction);
    return allTransactions; 
};

// function addItem();

// function addReceipt();

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Add Functions