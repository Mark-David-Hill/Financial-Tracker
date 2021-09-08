// 
// //
// Create Basic Objects
// //
// 

// Values for the currency types
const yen1Value = 1;
const yen5Value = 5;
const yen10Value = 10;
const yen50Value = 50;
const yen100Value = 100;
const yen500Value = 500;
const yen1000Value = 1000;
const yen5000Value = 5000;
const yen10000Value = 10000;

// Count for each currency type
let yen1Count = 0;
let yen5Count = 0;
let yen10Count = 0;
let yen50Count = 0;
let yen100Count = 0;
let yen500Count = 0;
let yen1000Count = 0;
let yen5000Count = 0;
let yen10000Count = 0;

// Total Value for each currency type
let yen1TotalValue = 0;
let yen5TotalValue = 0;
let yen10TotalValue = 0;
let yen50TotalValue = 0;
let yen100TotalValue = 0;
let yen500TotalValue = 0;
let yen1000TotalValue = 0;
let yen5000TotalValue = 0;
let yen10000TotalValue = 0;

// Total Value for all currency types
let totalValue = 0;

// 
// Click Events
// 

// Plus 1 yen
document.getElementById("1-yen-plus-button").addEventListener("click", function() {
    // Increase by 1
    yen1Count = yen1Count + 1;
    // Display new value
    document.getElementById("1-yen-count").innerText = yen1Count;
    // Update and display totals
    update1YenTotal();
    updateTotal();
});

// Minus 1 yen
document.getElementById("1-yen-minus-button").addEventListener("click", function() {
    // Reduce by 1
    yen1Count = yen1Count - 1;
    // Make sure it's not below 0
    if(yen1Count < 0) {
        yen1Count = 0;
    };
    // Display new value
    document.getElementById("1-yen-count").innerText = yen1Count;
    // Update and display totals
    update1YenTotal();
    updateTotal();
});

// Update Total Value of 1Yen 
function update1YenTotal() {
    yen1TotalValue = (yen1Count * yen1Value);
    // Display New Total
    document.getElementById("1-yen-total").innerText = yen1TotalValue;
};


// Plus 5 yen
document.getElementById("5-yen-plus-button").addEventListener("click", function() {
    // Increase by 1
    yen5Count = yen5Count + 1;
    // Display new value
    document.getElementById("5-yen-count").innerText = yen5Count;
    // Update and display totals
    update5YenTotal();
    updateTotal();
});


// Minus 5 yen
document.getElementById("5-yen-minus-button").addEventListener("click", function() {
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
    totalValue = (yen1TotalValue + yen5TotalValue + yen10TotalValue + yen50TotalValue + yen100TotalValue + yen500TotalValue + yen1000TotalValue + yen5000TotalValue + yen10000TotalValue);
    // Display updated Total Value
    document.getElementById("total-value").innerText = `Total: ￥${totalValue}`;
};












// A type of object for storing transactions
let transaction = {
    totalCost: 0, 
    transactionItems: [],
    date: new Date(), 
    category: "",
    store: "",
    receipt: "",
    note: ""
};

const testTransaction = Object.create(transaction);
testTransaction.totalCost = 700;
testTransaction.category = "Groceries";
testTransaction.store = "Seki";
testTransaction.note = "This is a test";

// A type of object for storing specific items purchased.
let item = {
    name: "",
    cost: "",
    // Reference to containing transaction
    parentTransaction: "",
    // Get date from parent transaction
    date: new Date(),
    category: "",
    store: "",
    itemImage: ""
}

// A type of object for storing data from receipts
let receipt = {
    // A string pointing to the image of the receipt. e.g. 'imageFile = "myImage.jpg"' 
    imageFile: "",
    // Reference to containing transaction
    parentTransaction: "",
    // Get date from parent transaction
    date: new Date(),
    category: "",
    store: ""
}
// // // // // // // //
// // // // // // // // // // // // // // // //
// End Create Basic Objects




// 
// //
// Initialize Arrays
// //
// 

// Initializes blank arrays for storing different types of objects
const allTransactions = [];
const allItems = [];
const allReceipts = [];

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Initialize Arrays




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