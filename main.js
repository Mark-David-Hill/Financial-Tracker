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
    required = false,
    regularExpense = false,
    store = ""
};

// A type of object for storing specific items purchased
let item = {
    name: "",
    date: new Date(),
    category: "",
    required = false,
    regularExpense = false,
    store = ""
}

// A type of object for storing data from receipts
let receipt = {
    // A string pointing to the image of the receipt. e.g. 'imageFile = "myImage.jpg"' 
    imageFile: "",
    category: "",
    date: new Date(),
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
function createTransaction(index, cost, date, category, required, regularExpense, store) {
    const newTransaction = Object.create(transaction);
    newTransaction.cost = x;
    return newTransaction;
}

// Add new transaction to array. e.g. addTransaction(createTransaction(1, $5, 5/5/2021, 'groceries', true, false, 'seki'));
function addTransaction(newTransaction) {
    allTransactions.push(newTransaction);
    return allTransactions; 
}

function addItem();

function addReceipt();

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Add Functions