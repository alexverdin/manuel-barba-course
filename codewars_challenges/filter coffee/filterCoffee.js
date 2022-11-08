function search(budget, prices) {

// return array of prices that are within budget

  const intoBudget = prices.filter(shop => shop <= budget);
  return intoBudget.sort((a,b) => a-b).toString();
}
