// Assignment Code
var generateBtn = document.querySelector("#generate");
// Below are the 4 different array options for the password
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var specialCharacters = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var numberOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  // below are all of the questions and prompts to ask the user
  var userApproval = confirm("Please confirm the criteria for this password");
  var characterLength = parseInt(
    prompt("How long would you like your password to be?")
  );
  console.log("Chosen character length: " + characterLength);

  // condition to make sure characters are between 8 and 128
  if (characterLength < 8) {
    alert("Needs to be 8 or more characters!");
    return;
  } else if (characterLength > 128) {
    alert("Needs to be 128 or less characters!");
    return;
  }

  var userUpperCase = confirm(
    "Would you like your password to contain Upper Case Letters? \n Yes = OK No = Cancel"
  );
  console.log("Upper case: " + userUpperCase);

  var userLowerCase = confirm(
    "Would you like your password to contain Lower Case Letters?\n Yes = OK No = Cancel"
  );
  console.log("Lower Case: " + userLowerCase);

  var userSpecialCharacter = confirm(
    "Would you like your password to contain Special Characters?\n Yes = OK No = Cancel"
  );
  console.log("Special Characters: " + userSpecialCharacter);

  var userNumbers = confirm(
    "Would you like your password to contain Numbers?\n Yes = OK No = Cancel"
  );
  console.log("Numbers: " + userNumbers);

  if (
    userUpperCase === false &&
    userLowerCase === false &&
    userSpecialCharacter === false &&
    userNumbers === false
  ) {
    alert("You must choose at least one parameter");
    return;
  }

  // below is the object for user answers
  var userChoices = {
    lengthChoice: characterLength,
    specialCharacterChoice: userSpecialCharacter,
    numberChoice: userNumbers,
    lowerCaseChoice: userLowerCase,
    upperCaseChoice: userUpperCase,
  };

  return userChoices;
}

// this function is to take the previous information into the random generator
function randomGenerator() {
  var options = generatePassword();
  var passwordPool = [];

  // below is pulling all chosen options into the empty arrary
  if (options.specialCharacterChoice) {
    passwordPool = passwordPool.concat(specialCharacters);
  }

  if (options.numberChoice) {
    passwordPool = passwordPool.concat(numberOptions);
  }
  if (options.lowerCaseChoice) {
    passwordPool = passwordPool.concat(lowerCase);
  }
  if (options.upperCaseChoice) {
    passwordPool = passwordPool.concat(upperCase);
  }

  var chosenAnswers = [];

  // random generator formula for the new array
  for (let i = 0; i < options.lengthChoice; ++i) {
    var randomPicker = Math.floor(
      Math.random() * Math.floor(passwordPool.length)
    );
    chosenAnswers.push(passwordPool[randomPicker]);
  }

  console.log(chosenAnswers);

  // this is where it states the new password on the webpage
  var password = chosenAnswers.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", randomGenerator);

// when click on "generate password" prompts will appear
