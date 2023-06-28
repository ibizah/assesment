function strongPasswordChecker(password) {
  //  missingTypes :
  //  It represents the number of character types (lowercase letters, 
  //  uppercase letters, and digits) that are missing from the password.
    let missingTypes = 3;
    if (/[a-z]/.test(password)) missingTypes--;
    if (/[A-Z]/.test(password)) missingTypes--;
    if (/\d/.test(password)) missingTypes--;

    let changes = 0;
    let oneRepeating = 0;
    let twoRepeating = 0;
    let i = 2;
  
  //  checks if the password contains at least one lowercase letter, 
  //  one uppercase letter, and one digit, and decrements  missingTypes  accordingly if any of these character types are present
    while (i < password.length) {
      if (
        password[i] === password[i - 1] &&
        password[i - 1] === password[i - 2]
      ) {
        let length = 2;
        while (i < password.length && password[i] === password[i - 1]) {
          length++;
          i++;
        }
  
        changes += Math.floor(length / 3);
        if (length % 3 === 0) oneRepeating++;
        if (length % 3 === 1) twoRepeating++;
      } else {
        i++;
      }
    }
  
    if (password.length < 6) {
      return Math.max(missingTypes, 6 - password.length);
    } else if (password.length <= 20) {
      return Math.max(missingTypes, changes);
    } else {
      let deleteCount = password.length - 20;
  
      changes -= Math.min(deleteCount, oneRepeating * 1) / 1;
      changes -= Math.min(Math.max(deleteCount - oneRepeating, 0), twoRepeating * 2) / 2;
      changes -= Math.max(deleteCount - oneRepeating - 2 * twoRepeating, 0) / 3;
  
      return deleteCount + Math.max(missingTypes, changes);
    }
  }
  
  // Testing the function with the provided examples
  console.log(strongPasswordChecker( "a")); // Output: 5
  console.log(strongPasswordChecker('aA1')); // Output: 3
  console.log(strongPasswordChecker('1337C0d3')); // Output: 0

  

  

  
