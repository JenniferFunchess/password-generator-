// Assignment Code
var generateBtn = document.querySelector("#generate");

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialCharacters = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var numberOptions= ["1","2","3","4","5","6","7","8","9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var userApproval = confirm("Please confirm the criteria for this password");
  var characterLength = prompt("How long would you like your password to be?");
    console.log("Chosen character length: " + characterLength);

  if(characterLength < 8 ){
    alert("Needs to be more than 8 characters!")
  }
  else if (characterLength > 128){
    alert ("Needs to be under 128 characters!")
  }
 
  var userUpperCase = confirm("Would you like your password to contain Upper Case Letters?");
  var userLowerCase = confirm("Would you like your password to contain Lower Case Letters?");
  var userSpecialCharacter = confirm("Would you like your password to contain Special Characters?");
  var userNumbers = confirm("Would you like your password to contain Numbers?");
    if(userUpperCase === false && userLowerCase === false && userSpecialCharacter === false && userNumbers === false) {
      alert("You must choose at least one parameter");}

  return "this will be replaced by my generated password.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// when click on "generate password" prompts will appear

// function generatePassword() {
//   var length = 8,
//       charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//       retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//       retVal += charset.charAt(Math.floor(Math.random() * n));
//   }
//   return retVal;
// }