
// Assignment Code
var generateBtn = document.querySelector("#generate");

// var passwordLength = prompt("Please enter amount of characters for password");
// var isSpecialCharacters = confirm("Do you want special characters?");
// var isNumbers = confirm("Do you want numbers?");
// var isUppercase = confirm("Do you want uppercase letters?");
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialCharacters = "!@#$%^&*\\/,.'}|[-+*";
var lowercase = "abcdefghijklmnopqrstuvwxyz";

function generatePassword() {
  //look up while loops, do while and for loops
  var completePassword = "";
  var passwordLength = prompt("Please enter amount of characters for password");
  if (passwordLength < 8) {
    window.alert("Password must be atleast 8 characters long");
    return;
  } else if (passwordLength > 128) {
    window.alert("Password must be less than 128 characters");
    return;
  }
  // var passwordLength = prompt("Please enter amount of characters for password");
  var isSpecialCharacters = confirm("Do you want special characters?");
  var isNumbers = confirm("Do you want numbers?");
  var isUppercase = confirm("Do you want uppercase letters?");
  // var numbers = "0123456789";
  // var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // var specialCharacters = "!@#$%^&*\\/,.'}|[-+*";
  // var lowercase = "abcdefghijklmnopqrstuvwxyz";
  // var completePassword = "";
  // for(var i = 0; i < passwordLength; i++){
  //   completePassword += isSpecialCharacters
  // }
  var allowablechars = "";
  //if isSpecialCharacters if its true ramdonly give the final password special character from special characters
  if (isSpecialCharacters) {
    allowablechars += specialCharacters;
  }
  if (isNumbers) {
    allowablechars += numbers;
  }
  if (isUppercase) {
    allowablechars += uppercase;
  } else {
    allowablechars += lowercase;
  }
  console.log(allowablechars)
  for (var i = 0; i < passwordLength; i++) {
    completePassword += allowablechars.charAt(Math.floor(Math.random() * allowablechars.length));
  }
  console.log(Math.random() * allowablechars.length);
  // }
  //     completePassword += specialCharacters.charAt(Math.floor(Math.random() * passwordLength));
  //   if (isSpecialCharacters) {
  //   }
  //   if (isNumbers) {
  //     completePassword += numbers.charAt(Math.floor(Math.random() * passwordLength ));
  //   }
  //   if (isUppercase) {
  //     completePassword += uppercase.charAt(Math.floor(Math.random() * passwordLength ));
  //   } 
  //   else {
  //     completePassword += lowercase.charAt(Math.floor(Math.random() * passwordLength ));
  //   }

  return completePassword;
}

//return final password
// return completePassword;
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// console.log (passwordLength);
// console.log (isSpecialCharacters);
// console.log (isNumbers); 
// console.log (isUppercase);


