// all possible lowercase letters
var lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
// all possible uppercase letters
var upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// all possible numbers
var numbers = "1234567890";
// all possible special characters
var specialChars = " !\"#$%&'()*+,-.\/:;<=>?@[\\]^_`{|}~";


//this variable stores the password length passed by user
var passwordLength;
//this variable stores the boolean value true, if user wants to include lowercase character type in the password, false otherwise
var isLowerCaseNeeded;
//this variable stores the boolean value true, if user wants to include uppercase character type in the password, false otherwise
var isUpperCaseNeeded;
//this variable stores the boolean value true, if user wants to include numeric type in the password, false otherwise
var isNumericTypeNeeded;
//this variable stores the boolean value true, if user wants to include special character type in the password, false otherwise
var isSpecialCharNeeded;

/**
 * 
 * @returns a generated password based on the criterias selected by user
 */
function generatePassword() {

  var password = '';
  if (isValidPasswordConditions()) {
    var chars = getCharSet();


    for (let i = 0; i < passwordLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      password += chars.substring(randomNumber, randomNumber + 1);
    }
  }
  return password;
}

/**
 * 
 * @returns all the possible characters that can be used for generating the password
 */
function getCharSet() {

  let charSet = "";
  if (isLowerCaseNeeded) {
    charSet += lowerCaseLetters;
  }
  if (isUpperCaseNeeded) {
    charSet += upperCaseLetters;
  }
  if (isNumericTypeNeeded) {
    charSet += numbers;
  }
  if (isSpecialCharNeeded) {
    charSet += specialChars;
  }
  console.log("charset " + charSet)
  return charSet;
}
/**
 * takes the user through a series of questions where the user can chose the type of
 * characters needed in password
 * @returns true if the all the password conditions met and false otherwise
 */
function isValidPasswordConditions() {
  passwordLength = prompt("Enter the number of characters for your password. Minimum number is 8 and maximum is 128. ");

  if (passwordLength >= 8 && passwordLength <= 128) {
    isLowerCaseNeeded = confirm("To include lowercase character type in your password, click OK");
    isUpperCaseNeeded = confirm("To include uppercase character type in your password, click OK");
    isNumericTypeNeeded = confirm("To include numeric character type in your password, click OK");
    isSpecialCharNeeded = confirm("To include special character type in your password, click OK");

    if (!isLowerCaseNeeded && !isUpperCaseNeeded && !isNumericTypeNeeded && !isSpecialCharNeeded) {
      alert("Atleast one character type must be selected");
      return false;
    } else {
      return true;
    }
  } else {
    alert("Password length must not be less than 8 characters and not more than 128 characters");
    return false;
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
