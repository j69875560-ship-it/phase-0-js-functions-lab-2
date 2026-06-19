function calculateTax( amount) {
  return amount * 0.01;
}
function convertToUpperCase( text) {
  return text.toUpperCase();
}
function findMaximum(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}
function isPalindrome( word) { String reversedWord = new StringBuilder(word).reverse().toString();
    if (word === reversedWord) {
        return true;
    } else {
        return false;
    }
}
        


function calculateDiscountedPrice(originalPrice, discountPercentage) {
  let discountedPrice = originalPrice * (discountPercentage / 100);
  return originalPrice - discountedPrice;
}

// This is required for the test to function properly
module.exports = {
  calculateTax,
  convertToUpperCase,
  findMaximum,
  isPalindrome,
  calculateDiscountedPrice,
};