//function to get the value from input fields
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const userInput = parseFloat(inputField.value);
    return userInput;
}
// calculate button event handler
document.getElementById('calculate-button').addEventListener('click', function () {

    //getting the values from input fields
    const userIncome = getInputValue('income-input');
    const foodExpense = getInputValue('food-input');
    const rentExpense = getInputValue('rent-input');
    const clothesExpense = getInputValue('clothes-input');

    //calculating total expense
    const totalExpense = foodExpense + rentExpense + clothesExpense;
    document.getElementById('total-expense').innerText = totalExpense;

    //calculating balance
    const balance = userIncome - totalExpense;
    document.getElementById('balance').innerText = balance;
});

//save button event handler
document.getElementById('save-button').addEventListener('click', function () {

    //getting values from input fields
    const percentageSaving = getInputValue('save-input');
    const userIncome = getInputValue('income-input');

    //calculating and setting saving amount
    let saving = (userIncome / 100) * percentageSaving;
    document.getElementById('saving-amount').innerText = saving;

    //calculating and setting remaining balance
    let currentBalance = parseFloat(document.getElementById('balance').innerText);
    const remainingBalance = currentBalance - saving;
    document.getElementById('remaining-balance').innerText = remainingBalance;
})