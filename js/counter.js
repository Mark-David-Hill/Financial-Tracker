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
    // currency Properties
    baseValue: 0,
    count: 0,
    // Total cumulative value based on current count
    totalValue: 0,
    countContainer: 0,
    totalValueContainer: 0,

    // 
    // currency Methods
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
const currencyValues = [1, 5, 10, 50, 100, 500, 1000, 5000, 10000];

let allCurrencies = [];

// Function for creating currency objects
function createCurrency(value) {

    let myString = `Yen${value}`;
    let newCurrency = eval(myString = Object.create(currency));
    newCurrency.baseValue = value;
    newCurrency.count = 0;
    newCurrency.totalValue = 0;
    newCurrency.countContainer = document.getElementById(`yen${value}CountContainer`)
    newCurrency.totalValueContainer = document.getElementById(`yen${value}TotalValueContainer`)
    // Create event listener for the plus button for this currency
    document.getElementById(`yen${value}PlusButton`).addEventListener("click", function() {
        newCurrency.increment();
    });
    allCurrencies.push(newCurrency);
}

// Loop for creating all the currencies
for (var i = 0; i < currencyValues.length; i++) {
    let currentValue = currencyValues[i];
    let newCurrency = createCurrency(currentValue);
}

console.log(allCurrencies);

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