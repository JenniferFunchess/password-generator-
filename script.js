// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  return "this will be replaced by my generated password.";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// when click on "generate password" prompts will appear