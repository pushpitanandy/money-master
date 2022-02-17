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