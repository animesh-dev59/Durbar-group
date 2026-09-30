function calculateRemainingMoney(totalMoney, cakeCost, donutCost) {

    let moneyAfterCake = totalMoney - cakeCost;

  
    if (moneyAfterCake < 0) {
        return moneyAfterCake;
    }

    return moneyAfterCake % donutCost;
}