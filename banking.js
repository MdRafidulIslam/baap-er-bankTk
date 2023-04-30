
function getInput(id) {

    const inputFeild = document.getElementById(id);
    const inputAmountText = inputFeild.value;
    const amountValue = parseFloat(inputAmountText);

    inputFeild.value = '';
    return amountValue;
}


function updateTotalFeild(id, newAmount) {
    const totalElement = document.getElementById(id);
    const previousTotal = parseFloat(totalElement.innerText);
    const totalAmount = previousTotal + newAmount;
    totalElement.innerText = totalAmount;

}
function getCurrentbalance() {
    const balanceAmount = document.getElementById('balance-amount');
    const tkAmount = parseFloat(balanceAmount.innerText);
    return tkAmount;
}

function totalTaka(newAmount, isAdd) {
    const balanceAmount = document.getElementById('balance-amount');
    const tkAmount = getCurrentbalance();

    if (isAdd == true) {
        balanceAmount.innerText = tkAmount + newAmount;
    }
    else {
        balanceAmount.innerText = tkAmount - newAmount;
    }

}


document.getElementById('deposit-button').addEventListener('click', function () {

    const newAmount = getInput('deposit-input');

    if (newAmount > 0) {
        updateTotalFeild('deposit-amount', newAmount);
        totalTaka(newAmount, true);
    }
})


document.getElementById('withdraw-button').addEventListener('click', function () {

    const newAmount = getInput('withdraw-input');
    const totalBalance = getCurrentbalance();
    if (newAmount > 0 && newAmount < totalBalance) {
        updateTotalFeild('withdraw-amount', newAmount);
        totalTaka(newAmount, false);
    }
})