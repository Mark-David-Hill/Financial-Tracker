// 
// //
// Create Basic Objects
// //
// 


const yen1Value = 1;
const yen5Value = 5;
const yen10Value = 10;
const yen50Value = 50;
const yen100Value = 100;
const yen500Value = 500;
const yen1000Value = 1000;
const yen5000Value = 5000;
const yen10000Value = 10000;

let yen1Count = 0;
let yen5Count = 0;
let yen10Count = 0;
let yen50Count = 0;
let yen100Count = 0;
let yen500Count = 0;
let yen1000Count = 0;
let yen5000Count = 0;
let yen10000Count = 0;

let totalCoinValue = 0;

function updateTotal() {
    let total = 0;
    total = total + (yen1Count * yen1Value);
    total = total + (yen5Count * yen5Value);
    total = total + (yen10Count * yen10Value);
    total = total + (yen50Count * yen50Value);
    total = total + (yen100Count * yen100Value);
    total = total + (yen500Count * yen500Value);
    total = total + (yen1000Count * yen1000Value);
    total = total + (yen5000Count * yen5000Value);
    total = total + (yen10000Count * yen10000Value);

    return total;
}












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