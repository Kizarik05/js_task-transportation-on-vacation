/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  const price = 40;
  const priceSevenDaySales = 50;
  const priceThreeDaySales = 20;

  if (days >= 7) {
    return days * price - priceSevenDaySales;
  }

  if (days >= 3) {
    return days * price - priceThreeDaySales;
  }

  return days * price;
}

module.exports = calculateRentalCost;
