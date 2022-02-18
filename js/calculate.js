//function to get the value from input fields
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const userInput = parseFloat(inputField.value);
    return userInput;
}

//alert message for error
function alert(placeId, message) {
    //get the place to show message
    let alertPlaceholder = document.getElementById(placeId);

    //create a message 
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

    //append to the place
    alertPlaceholder.append(wrapper)
}

// calculate button event handler
document.getElementById('calculate-button').addEventListener('click', function () {

    //getting the values from input fields
    const userIncome = getInputValue('income-input');
    const foodExpense = getInputValue('food-input');
    const rentExpense = getInputValue('rent-input');
    const clothesExpense = getInputValue('clothes-input');

    //condition for checking strings and negative numbers in the input fields 
    if ((userIncome > 0 && foodExpense > 0 && rentExpense > 0 && clothesExpense > 0) && (isNaN(userIncome) == false && isNaN(foodExpense) == false && isNaN(rentExpense) == false && isNaN(clothesExpense) == false)) {
        //calculating total expense
        const totalExpense = foodExpense + rentExpense + clothesExpense;
        document.getElementById('total-expense').innerText = totalExpense;

        //checking if total expense is less than income
        if (totalExpense < userIncome) {
            //calculating balance
            const balance = userIncome - totalExpense;
            document.getElementById('balance').innerText = balance;
        }
        else {
            alert('calculate-btn-placeholder', 'Your expense is more than your income');
            document.getElementById('balance').innerText = '00';
        }
    }
    else {
        alert('calculate-btn-placeholder', 'Please provide a valid number');
    }
});

//save button event handler
document.getElementById('save-button').addEventListener('click', function () {

    //getting values from input fields
    const percentageSaving = getInputValue('save-input');
    const userIncome = getInputValue('income-input');

    //condition for checking strings and negative numbers in the input fields 
    if ((percentageSaving > 0 && userIncome > 0) && (isNaN(percentageSaving) == false && isNaN(userIncome) == false)) {

        //calculating and setting saving amount
        let saving = (userIncome / 100) * percentageSaving;
        document.getElementById('saving-amount').innerText = saving;

        //calculating and setting remaining balance
        let currentBalance = parseFloat(document.getElementById('balance').innerText);

        //checking if saving is less than current balance
        if (saving < currentBalance) {
            const remainingBalance = currentBalance - saving;
            document.getElementById('remaining-balance').innerText = remainingBalance;
        }
        else {
            alert('save-btn-placeholder', 'You cannot save more than your current balance');
            document.getElementById('remaining-balance').innerText = '00';
        }
    }
    else {
        alert('save-btn-placeholder', 'Please provide a valid number');
    }

});