/* 
1. get the element by id withdraw field
2. valid check element amount of input field
3. get previous withdraw total by id
4. calculate new withdraw total
5. set deposit total value
6. get previous balance by using the function
*/

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputFieldValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please provid a valid number");
    return;
  }

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

  setTextElementValueById("withdraw-total", newWithdrawTotal);

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);
});
