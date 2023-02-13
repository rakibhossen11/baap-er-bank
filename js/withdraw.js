/* 

1. add evnent handler with the withdraw button
2. get the withdraw amount from the input field
2-5 also make sure to conver the input into a number by using parseFloat 
3. get previous withdraw total
4. calculate total withdraw amount 
4-5. set total withdraw amount 
5.get the previous balance total 
6. calculate new balance total
6-5. set the new balance total
7. clear the input field
*/

// step-1 

document.getElementById('withdraw-btn').addEventListener('click',function(){
    // step -2 
    const withdrwfield = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrwfield.value;
    const newwithdrawAmount = parseFloat(withdrawAmountString);

    // step - 3
    const totalwithdrawAmout = document.getElementById('total-withdrawAmout');
    const prewithdrawtotalstring = totalwithdrawAmout.innerText;
    const prewithdrawtotal = parseFloat(prewithdrawtotalstring);

    // step - 4
    const curenttotalwithdrawamount = prewithdrawtotal + newwithdrawAmount;
    totalwithdrawAmout.innerText = curenttotalwithdrawamount;

    // step - 5
    const balanceTotalelement = document.getElementById('balance-total');
    const previousbalancetotalstring = balanceTotalelement.innerText;
    const previousbalancetotal = parseFloat(previousbalancetotalstring);

    // step - 6
    const newbalance = previousbalancetotal - newwithdrawAmount;
    balanceTotalelement.innerText = newbalance;

    // step -7 clear input field 
    withdrwfield.value = '';

})