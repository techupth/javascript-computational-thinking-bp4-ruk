//Start coding here
function calculateTax(income) {
  let taxPercentage;
  let taxAmount;

  if (income > 50000) {
    taxPercentage = 0.3;
    taxAmount = income * taxPercentage;
    return taxAmount;
  }
  
  taxPercentage = 0.2;
  taxAmount = income * taxPercentage;
  return taxAmount;
}

let result1 = calculateTax(60000);
console.log("Tax to be paid: $" + result1);

let result2 = calculateTax(30000);
console.log("Tax to be paid: $" + result2);