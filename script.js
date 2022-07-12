
// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword () {
  //look up while loops, do while and for loops
  var passwordLength = prompt("Please enter amount of characters for password");
  var isSpecialCharacters = confirm("Do you want special characters?");
  var isNumbers = confirm("Do you want numbers?");
  var isUppercase = confirm("Do you want uppercase letters?");
  var numbers = "0123456789";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*\\/";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var completePassword = "";
  for(var i = 0; i < passwordLength; i++){
    if 
   //if isSpecialCharacters if its true ramdonly give the final password special character from special characters
}
//return final password
}
  
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


