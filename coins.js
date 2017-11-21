/*
Input: 0.67
Output:
{
  quarters: 2,
  dimes: 1,
  nickels: 1,
  pennies: 2
}
*/
let coinPurse = {
    quarters: 0,
    dimes: 0,
    nickels: 0,
    pennies: 0
};


function coinCounter(total){
    total = total * 100;

    coinPurse.quarters = Math.round(total/25);
    total = total%25;

    coinPurse.dimes = Math.round(total/10);
    total = total%10;

    coinPurse.nickels = Math.round(total/5);
    total = total%5;

    coinPurse.pennies = total;

    return coinPurse;
}
   

console.log(coinCounter(2.45));


