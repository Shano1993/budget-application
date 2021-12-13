let expenses = document.getElementsByClassName('allExpenses');
let recipes = document.getElementsByClassName('allRecipe');
let totalExpenses = [];
let totalEx = document.getElementById('totalEx');
let totalRecipes = [];
let totalRec = document.getElementById('totalReci');
let result = document.getElementById('saving');
let suggestion = document.getElementById('suggest');
let total1 = 0;
let total2 = 0;
let total3 = 0;


function pushExpenses() {
    for (let i = 0; i < expenses.length; i++) {
        totalExpenses.push(parseFloat(expenses[i].value));
        total1 += totalExpenses[i];
        totalEx.innerHTML = total1 + " " + "Euros";
    }
}

function pushRecipes() {
    for (let i = 0; i < recipes.length; i++) {
        totalRecipes.push(parseFloat(recipes[i].value));
        total2 += totalRecipes[i];
        totalRec.innerHTML = total2 + " " + "Euros";
    }
}

document.getElementById('total1').addEventListener("click", function () {
    pushExpenses();
});

document.getElementById('total2').addEventListener("click", function () {
    pushRecipes();
})

document.getElementById('total3').addEventListener("click", function () {
    total3 = total2 - total1;
    result.innerHTML = total3 + " " + "Euros";
    saving();
})

function saving() {
    if (total3 > 0) {
        suggestion.innerHTML = 'Great ! You are positive' ;
    }
    if (total3 < 0) {
        suggestion.innerHTML = 'Warning ! You are in negative ...';
    }
}


