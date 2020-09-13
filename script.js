// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


var ranLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var ranUpp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
var ranNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var ranSym = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var master = []
var final = ""

function generatePassword() {
  // create variable and give prompt that parses for integer: sets password length
  var wantLength = parseInt(prompt("choose length of password between 8 and 128"))
  // if password is less than 8 or more than 128 returns error prompt
  if (wantLength < 8 || wantLength > 128) {
    prompt("number must be between 8 and 128")
  }

  // create variable and give confirmation prompt for numbers
  var wantNumber = confirm("Would you like numbers?")
  // if that checks if user confirmed
  if (wantNumber) {
    // for loop that runs random amount of times: need to change ranNum length?
    for (var i = 0; i < ranNum.length; i++) {
      // for (i = 0; i < Math.floor(Math.random() * ranNum.length; i++) {
      // push to master array
      master.push(ranNum[Math.floor(Math.random() * ranNum.length)])


      console.log(master)
    }
  }

  // create variable and give confirmation prompt for lowercase
  var wantLower = confirm("Would you like lowercase?")
  // if that checks if user confirmed
  if (wantLower) {
    // for loop that runs random amount of times
    for (var i = 0; i < ranLow.length; i++) {
      // push to master array
      master.push(ranLow[Math.floor(Math.random() * ranLow.length)])
      console.log(master)
    }
  }

  // create variable and give confirmation prompt for uppercase
  var wantUpper = confirm("Would you like Uppercase?")
  // if that checks if user confirmed
  if (wantUpper) {
    // for loop that runs random amount of times
    for (var i = 0; i < ranUpp.length; i++) {
      // push to master array

      master.push(ranUpp[Math.floor(Math.random() * ranUpp.length)])
      console.log(master)
    }
  }

  // create variable and give confirmation prompt for special characters
  var wantSpecial = confirm("Would you like special characters?")
  // if that checks if user confirmed
  if (wantSpecial) {
    // for loop that runs random amount of times
    for (var i = 0; i < ranSym.length; i++) {
      // push to master array
      master.push(ranSym[Math.floor(Math.random() * ranSym.length)])
      console.log(master)
    }
  }

  var finalPass = final

  // run for loop 1 less than want length times 

  for (var i = 0; i < wantLength; i++) {
    finalPass += master[Math.floor(Math.random() * master.length)];
  }
  final = ""

  return finalPass
}




