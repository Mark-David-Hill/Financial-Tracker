// 
// //
// Create Basic Objects
// //
// 

// A type of object for storing transactions
let transaction = {
    cost: 0, 
    date: new Date(), 
    category: "",
    store = ""
};

// A type of object for storing specific items purchased
let item = {
    name: "",
    cost: "",
    date: new Date(),
    category: "",
    store = ""
}

// A type of object for storing data from receipts
let receipt = {
    // A string pointing to the image of the receipt. e.g. 'imageFile = "myImage.jpg"' 
    imageFile: "",
    date: new Date(),
    category: "",
    store = ""
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
}

function addItem();

function addReceipt();

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Add Functions