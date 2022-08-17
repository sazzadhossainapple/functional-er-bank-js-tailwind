/*
1. get the element by id
2. valid check element amount of input field
3. get previous deposit total by id
4. calculate new deposit total
5. set deposit total value
6. get previous balance by using the function
*/

document.getElementById("btn-deposit").addEventListener("click", function () {
  const newDepositAmount = getInputFieldValueById("deposit-field");

  if (isNaN(newDepositAmount)) {
    alert("Please provid a valid number");
    return;
  }

  const previousDepositTotal = getTextElementValueById("deposit-total");

  const newDepositTotal = previousDepositTotal + newDepositAmount;

  setTextElementValueById("deposit-total", newDepositTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
