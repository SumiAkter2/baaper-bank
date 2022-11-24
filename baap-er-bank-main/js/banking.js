// function doubleIt(num){
//     const result =num *2;
//     return result;
// }
// const first = doubleIt(5);
// const second = doubleIt(7);
// console.log(first);
// console.log(second);

function getInputValue(inputId){
    const depositInput = document.getElementById(inputId);
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
   // clear the deposit input field
    depositInput.value = '';
    return newDepositAmount;
}

function updateTotalField(totalFeildId,amount){
   
    const depositTotal = document.getElementById(totalFeildId);
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    depositTotal.innerText = previousDepositAmount + amount;
   
}
function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(newDepositAmount, isAdd){
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
const previousBalanceTotal=getCurrentBalance();
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    if(isAdd==true){
        const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; 
    }
    else{
        const newBalanceTotal = previousBalanceTotal - newDepositAmount;
        balanceTotal.innerText = newBalanceTotal;
    }
}



// handle deposit button event
document.getElementById('deposit-button').addEventListener('click', function () {
   
const newDepositAmount=getInputValue('deposit-input');
if(newDepositAmount>0) {
    updateTotalField('deposit-total', newDepositAmount);
    updateBalance(newDepositAmount, true);
     // get the amount deposited
    // const depositInput = document.getElementById('deposit-input');
    // const newDepositAmountText = depositInput.value;
    // const newDepositAmount = parseFloat(newDepositAmountText);
}

    // update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const previousDepositText = depositTotal.innerText;
    // const previousDepositAmount = parseFloat(previousDepositText);
    // const newDepositTotal = previousDepositAmount + newDepositAmount;

    // depositTotal.innerText = newDepositTotal;

    // update account balance 

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    // balanceTotal.innerText = newBalanceTotal;
    
  
});

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function (){

    const newWithdrawAmount=getInputValue('withdraw-input');
    const currentBalance=getCurrentBalance();
    if(newWithdrawAmount>0 && newWithdrawAmount<currentBalance){
        updateTotalField('withdraw-total',newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
    if(newWithdrawAmount >currentBalance){
        console.log('you can not withdraw more')
    }
   




    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const newWithdrawAmount = parseFloat(withdrawAmountText);
    // console.log(newWithdrawAmount);


    // set withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawText);

    // const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotal.innerText = newWithdrawTotal;

   


    // update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const previousBalanceText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceText);
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;

    // balanceTotal.innerText = newBalanceTotal;

    // // clear withdraw input
    // withdrawInput.value = '';
   
})