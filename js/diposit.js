// step-1: add event listener to the diposit button
document.getElementById('diposit-btn').addEventListener('click',function(){
    // step-2 : get the diposit amount from the diposit input field 
    // for input field use .value to the value from input field 
    const dipositField = document.getElementById('dipsoit-field');
    const newdipositAmountstring = dipositField.value;
    const newdipositAmount = parseFloat(newdipositAmountstring);

    // step-3: get the current diposit amount total 
    // for non input (element other than input, textarea) use innerText to get the text 
    const dipositCurrent = document.getElementById('diposit-current');
    const previousdipositstring = dipositCurrent.innerText;
    const previousdiposit = parseFloat(previousdipositstring);

    // set the diposit total 
    const currenttotaldiposit = previousdiposit + newdipositAmount;

    // step-4: add numbers to set total deposit 
    dipositCurrent.innerText = currenttotaldiposit;

    // step-5: get ballance total
    const totalBalance = document.getElementById('balance-total');
    const preBalancetotalstring = totalBalance.innerText;
    const preBalancetotal = parseFloat(preBalancetotalstring);

    // step-6: calculate current total balance 
    const currentBalanceTotal = preBalancetotal + newdipositAmount;
    // set the total balance 
    totalBalance.innerText = currentBalanceTotal;

    // step-7 : clear the diposit field
    dipositField.value = '';
})