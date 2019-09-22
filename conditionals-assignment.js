
function isOdd(n) {
    if ( n % 2 == 1){
        return true;
    }
    else {
        return false;
    }
    return n;
}


 
function generatePinNumber() {
    const min = 10000;
    const max = 99999;
  
    let pin = Math.round(Math.random() * (max - min) + min);
  
    if (isOdd(pin)) {
      pin = pin + 1;
    }
  
    return pin;
  }
  function greetLoggedInUser(user) {
    if (user.loggedIn) {
      return `Hello, ${user.givenName}!`;
    } else {
      return `Welcome, please log in`;
    }
  }
function calculateElectricBill(kwh) {
        const FIRST_400_RATE = 0.26;
        const NEXT_600_RATE = 0.32;
        const RATE_AFTER_600 = 0.37;
      
        let total = 0;
      
        if (kwh > 1000) {
          total = (kwh - 1000) * RATE_AFTER_600;
          kwh = 1000;
        }
      
        if (kwh > 400) {
          total = total + (kwh - 400) * NEXT_600_RATE;
          kwh = 400;
        }
      
        return total + kwh * FIRST_400_RATE;
      }
      

      function doesUserHaveCredit(userAccount) {
        const creditUsed = userAccount.creditTakenBeginningOfMonth
          + userAccount.totalChargesInMonth
          - userAccount.creditsAvailableInMonth;
      
        if (creditUsed > userAccount.creditLimit) {
          return 'Credit limit exceeded';
        } else {
          return 'Credit available';
        }
      }
      
      function isPalindromeNumber(num) {
        if (num > 99999 || num < 10000) {
          return 'Incorrect input';
        }
      
        const firstDigit = Math.trunc(num / 10000);
        const lastDigit = num % 10;
      
        if (firstDigit !== lastDigit) {
          return false;
        }
      
        // remove first digit
        num = num % 10000;
        // remove last digit
        num = Math.trunc(num / 10);
        // num is now 3 digits long
      
        const secondDigit = Math.trunc(num / 100);
        const secondToLastDigit = num % 10;
      
        if (secondDigit !== secondToLastDigit) {
          return false;
        }
      
        // all checks passed, we have a palindrome
        return true;
      }

