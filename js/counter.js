// 
// //
// // // // // // // //Objects, Arrays, and Variables
// //
// 



// // // // The countContainer is getting set for most of these, but the totalValueContainer is only getting set for yen1 for some reason.



// 
// //
//  Objects
// //
// 

// Template object for currencies
const currency = {
    // Properties
    baseValue: 0,
    count: 0,
    // Total cumulative value based on current count
    totalValue: 0,
    countContainer: 0,
    totalValueContainer: 0,
    // 
    // Methods
    // 

    // Update total values for this currency and the overall total.
    updateTotals() {
        // Set this currency's new total value
        this.totalValue = (this.count * this.baseValue);
        // Calculate and set new total value for all currencies combined
        overallTotalValue = (yen1.totalValue + yen5.totalValue + yen10.totalValue + yen50.totalValue + yen100.totalValue + yen500.totalValue + yen1000.totalValue + yen5000.totalValue + yen10000.totalValue);
    },

    // Display values for this currency and total
    displayTotals() {
        // Display new total for this currency
        this.totalValueContainer.innerText = this.totalValue;
        // Display new overall total
        document.getElementById("totalValueContainer").innerText = `Total: ￥${overallTotalValue}`;
    },

    // Increment currency count up by 1
    increment() {
        // Increase by 1
        this.count = this.count + 1;
        // Display new value
        this.countContainer.innerText = this.count;
        // Update and display totals
        this.updateTotals();
        this.displayTotals();
    },
    // Decrement currency count down by 1
    decrement() {
        // Decrease by 1
        this.count = this.count - 1;
        // Make sure it's not below 0
        if(this.count < 0) {
            this.count = 0;
        };
        // Display new value
        this.countContainer.innerText = this.count;
        // Update and display totals
        this.updateTotals();
        this.displayTotals();
    },

    // Clear total values and update display
    clear() {
        // Set to 0
        this.count = 0;
        this.displayTotals();
    }
};

// 
// Currency Objects
// 


// Function for creating currency objects

function createCurrency(value) {
    let myString = `newYen${value}`;
    let newCurrency = eval(myString = Object.create(currency));
    console.log(newCurrency);
    newCurrency.baseValue = value;
    newCurrency.count = 0;
    newCurrency.totalValue = 0;
    newCurrency.countContainer = document.getElementById(`yen${value}CountContainer`)
    newCurrency.totalValueContainer = document.getElementById(`yen${value}TotalValueContainer`)
    // Create event listener for the plus button for this currency
    document.getElementById(`yen${value}PlusButton`).addEventListener("click", function() {
        newCurrency.increment();
    });
}





// console.log(newYen1);

// // ￥1 Object
// let yen1 = Object.create(currency);
// // Set ￥1 properties
// yen1.baseValue = 1;
// yen1.count = 0;
// yen1.totalValue = 0;
// yen1.countContainer = document.getElementById("yen1CountContainer")
// yen1.totalValueContainer = document.getElementById("yen1TotalValueContainer")

// ￥5 Object
let yen5 = Object.create(currency);
// Set ￥5 properties
yen5.baseValue = 5;
yen5.count = 0;
yen5.totalValue = 0;
yen5.countContainer = document.getElementById("yen5CountContainer")
yen5.totalValueContainer = document.getElementById("yen5TotalValueContainer")

// ￥10 Object
let yen10 = Object.create(currency);
// Set ￥10 properties
yen10.baseValue = 10;
yen10.count = 0;
yen10.totalValue = 0;
yen10.countContainer = document.getElementById("yen10CountContainer")
yen10.totalValueContainer = document.getElementById("yen10TotalValueContainer")

// ￥50 Object
let yen50 = Object.create(currency);
// Set ￥50 properties
yen50.baseValue = 50;
yen50.count = 0;
yen50.totalValue = 0;
yen50.countContainer = document.getElementById("yen50CountContainer")
yen50.totalValueContainer = document.getElementById("yen50TotalValueContainer")

// ￥100 Object
let yen100 = Object.create(currency);
// Set ￥100 properties
yen100.baseValue = 100;
yen100.count = 0;
yen100.totalValue = 0;
yen100.countContainer = document.getElementById("yen100CountContainer")
yen100.totalValueContainer = document.getElementById("yen100TotalValueContainer")

// ￥500 Object
let yen500 = Object.create(currency);
// Set ￥500 properties
yen500.baseValue = 500;
yen500.count = 0;
yen500.totalValue = 0;
yen500.countContainer = document.getElementById("yen500CountContainer")
yen500.totalValueContainer = document.getElementById("yen500TotalValueContainer")

// ￥1000 Object
let yen1000 = Object.create(currency);
// Set ￥1000 properties
yen1000.baseValue = 1000;
yen1000.count = 0;
yen1000.totalValue = 0;
yen1000.countContainer = document.getElementById("yen1000CountContainer")
yen1000.totalValueContainer = document.getElementById("yen1000TotalValueContainer")

// ￥5000 Object
let yen5000 = Object.create(currency);
// Set ￥5000 properties
yen5000.baseValue = 5000;
yen5000.count = 0;
yen5000.totalValue = 0;
yen5000.countContainer = document.getElementById("yen5000CountContainer")
yen5000.totalValueContainer = document.getElementById("yen5000TotalValueContainer")

// ￥10000 Object
let yen10000 = Object.create(currency);
// Set ￥10000 properties
yen10000.baseValue = 10000;
yen10000.count = 0;
yen10000.totalValue = 0;
yen10000.countContainer = document.getElementById("yen10000CountContainer")
yen10000.totalValueContainer = document.getElementById("yen10000TotalValueContainer")



// // // // // // // //
// // // // // // // // // // // // // // // //
// End Objects





// 
// //
// Initialize Arrays
// //
// 

// Currency Array
// const allCurrencies = [yen1, yen5, yen10, yen100, yen500, yen1000, yen5000, yen10000];

// // // // // // // //
// // // // // // // // // // // // // // // //
// End Initialize Arrays



// 
// //
// Initialize Variables
// //
// 

// Total Value for all currency types
let overallTotalValue = 0;

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
    overallTotalValue = 0;
    yen1.clear();
    yen5.clear();
    yen10.clear();
    yen50.clear();
    yen100.clear();
    yen500.clear();
    yen1000.clear();
    yen5000.clear();
    yen10000.clear();
});

// 
// // Plus Buttons
// 

// Plus 1 yen
    document.getElementById("yen1PlusButton").addEventListener("click", function() {
    yen1.increment();
});
// Plus 5 yen
    document.getElementById("yen5PlusButton").addEventListener("click", function() {
    yen5.increment();
});
// Plus 10 yen
    document.getElementById("yen10PlusButton").addEventListener("click", function() {
    yen10.increment();
});
// Plus 50 yen
    document.getElementById("yen50PlusButton").addEventListener("click", function() {
    yen50.increment();
});
// Plus 100 yen
    document.getElementById("yen100PlusButton").addEventListener("click", function() {
    yen100.increment();
});
// Plus 500 yen
    document.getElementById("yen500PlusButton").addEventListener("click", function() {
    yen500.increment();
});
// Plus 1000 yen
    document.getElementById("yen1000PlusButton").addEventListener("click", function() {
    yen1000.increment();
});

// 
// // Minus Buttons
//

// Minus 1 yen
    document.getElementById("yen1MinusButton").addEventListener("click", function() {
    yen1.decrement();
});
// Minus 5 yen
    document.getElementById("yen5MinusButton").addEventListener("click", function() {
    yen5.decrement();
});
// Minus 10 yen
    document.getElementById("yen10MinusButton").addEventListener("click", function() {
    yen10.decrement();
});
// Minus 50 yen
    document.getElementById("yen50MinusButton").addEventListener("click", function() {
    yen50.decrement();
});
// Minus 100 yen
    document.getElementById("yen100MinusButton").addEventListener("click", function() {
    yen100.decrement();
});
// Minus 500 yen
    document.getElementById("yen500MinusButton").addEventListener("click", function() {
    yen500.decrement();
});
// Minus 1000 yen
    document.getElementById("yen1000MinusButton").addEventListener("click", function() {
    yen1000.decrement();
});
// Minus 5000 yen
    document.getElementById("yen5000MinusButton").addEventListener("click", function() {
    yen5000.decrement();
});
// Minus 10000 yen
    document.getElementById("yen10000MinusButton").addEventListener("click", function() {
    yen10000.decrement();
});



// // // // // // // //
// // // // // // // // // // // // // // // //
// End Click Events





// 
// //
// Add Functions
// //
// 



// // // // // // // //
// // // // // // // // // // // // // // // //
// End Add Functions