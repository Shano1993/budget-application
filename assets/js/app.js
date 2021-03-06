let expenses = document.getElementsByClassName('allExpenses');
let recipes = document.getElementsByClassName('allRecipe');
let totalExpenses = [];
let totalEx = document.getElementById('totalEx');
let totalRecipes = [];
let totalRec = document.getElementById('totalReci');
let result = document.getElementById('saving');
let suggestion = document.getElementById('suggest');
let randomSuggestion = document.getElementById('randomSuggest');
let random = "";
let total1 = 0;
let total2 = 0;
let total3 = 0;
let arrayPositive = ['a cars.', 'a game.', 'a house.', 'a salon.', 'a fridge.'];
let arrayNegative = ['the outing !', 'the phone !', ' the internet !', 'a credit !'];
let img1 = document.getElementById('yes');
let img2 = document.getElementById('no');

//function to add the value of the inputs to an empty array (Expenses)
function pushExpenses() {
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses.push(parseFloat(expenses[i].value));
        total1 += totalExpenses[i]; //calculate all the value in the array
        totalEx.innerHTML = total1 + " " + "Euros";
    }
}

//function to add the value of the inputs to an empty array (Recipes)
function pushRecipes() {
    for (let i = 0; i < recipes.length; i++) {
        totalRecipes.push(parseFloat(recipes[i].value));
        total2 += totalRecipes[i]; //calculate all the value in the array
        totalRec.innerHTML = total2 + " " + "Euros";
    }
}

document.getElementById('total1').addEventListener("click", function () {
    pushExpenses();
});

document.getElementById('total2').addEventListener("click", function () {
    pushRecipes();
});

document.getElementById('total3').addEventListener("click", function () {
    total3 = total2 - total1;
    result.innerHTML = total3 + " " + "Euros";
    saving();
});



//condition depending on the result of the final total
function saving() {
    if (total3 > 0) {
        suggestion.innerHTML = 'Great ! You are positive.' ;
        random = arrayPositive[Math.floor(Math.random() * arrayPositive.length)];
        randomSuggestion.innerHTML = 'You can buy yourself :' + " " + random;
        img1.style.display = 'block';
    }
    if (total3 < 0) {
        suggestion.innerHTML = 'Warning ! You are in negative...';
        random = arrayNegative[Math.floor(Math.random() * arrayNegative.length)];
        randomSuggestion.innerHTML = 'Pay attention to :' + " " + random;
        img2.style.display = 'block';
    }
    if (total3 === 0) {
        suggestion.innerHTML = 'You have nothing left, but you are not in negative!';
    }
}


