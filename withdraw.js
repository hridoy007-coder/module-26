/*
1. add event handle with the withdraw button
2. get the withdraw amount from the withdraw input field
2.5. also make sure to convert the input into a number by using parseFloat
3. get withdraw total
4. calculate total withdraw
5. get balance current total
6. calculate current total balance
6.5 set the new balance total

7. clear the deposit field
*/ 

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7: clear the deposit field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('please provide a valid number')
        return;
    }
    // step-3
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString =withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5:
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    

    if(newWithdrawAmount > previousBalanceTotal){
        alert('baap ar bank e eto taka nai');
        return;
    }

    // step-4: 
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    
    // step-6
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;

    

})