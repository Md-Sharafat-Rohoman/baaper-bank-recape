function getInputFieldValueById(inputId) {
    const inputField = document.getElementById(inputId);
    const inputFieldString = inputField.value;
    const inputfieldValue = parseFloat(inputFieldString);
    inputField.value = ''
    return inputfieldValue;
}

function getElementValueById(elementId) {
    const textEement = document.getElementById(elementId);
    const textElementValueString = textEement.innerText;
    const textEementValue = parseFloat(textElementValueString);
    return textEementValue;
}

function setTextElementValueById(elementId, newValue) {
    const textEement = document.getElementById(elementId);
    textEement.innerText = newValue;
}


document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field')
    const previousDepositTotal = getElementValueById('deposit-total')
    // console.log(newDepositAmount , previousDepositTotal)

    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // console.log(newDepositTotal)
    setTextElementValueById('deposit-total', newDepositTotal)

    const previoueBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previoueBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('withdraw-field')
    const previousDepositTotal = getElementValueById('withdraw-total')
    // console.log(newDepositAmount , previousDepositTotal)

    const newDepositTotal = newDepositAmount + previousDepositTotal;
    // console.log(newDepositTotal)
    setTextElementValueById('withdraw-total', newDepositTotal)

    const previoueBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previoueBalanceTotal - newDepositAmount;
    setTextElementValueById('balance-total',newBalanceTotal);

})