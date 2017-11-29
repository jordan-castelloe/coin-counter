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

    coinPurse.quarters = Math.floor(total/25);
    total = total%25;

    coinPurse.dimes = Math.floor(total/10);
    total = total%10;

    coinPurse.nickels = Math.floor(total/5);
    total = total%5;

    coinPurse.pennies = total;

    return coinPurse;
}
   

console.log(coinCounter(2.67));


