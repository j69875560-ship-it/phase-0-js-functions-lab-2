function calculateTax(amount) {
  return amount * 0.01;
}
function convertToUpperCase(str) {
  return str.toUpperCase();
}
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
function isPalindrome(str) {
  const cleanedStr = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleanedStr === cleanedStr.split("").reverse().join("");
}

function calculateDiscountedPrice(price, discount) {
  return price - price * (discount / 100);
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};