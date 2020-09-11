// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// TODO: Create the generatePassword function returns the final password.

// TODO: Create a prompt to ask the length of the password and save it to a VAR

// TODO: Create a confirm to ask the user if they want lowercase char
// TODO: Create a confirm to ask the user if they want uppercase char
// TODO: Create a confirm to ask the user if they want numbers
// TODO: Create a confirm to ask the user if they want special char

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
