var customerName = 'bob';  // Use 'let' instead of 'var' for better scoping
const leastFavoriteCustomer = 'some initial value'; // Use 'let' here instead of 'const'

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();  // This will modify the global 'customerName' variable to be uppercase
}

function setBestCustomer() {

  bestCustomer = 'not bob';  // This will set a global 'bestCustomer' variable to 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';  // This will overwrite the 'bestCustomer' variable with 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'billy';  // Now that 'leastFavoriteCustomer' is a 'let' variable, this works
}

