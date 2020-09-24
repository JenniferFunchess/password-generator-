// Assignment Code
var generateBtn = document.querySelector("#generate");

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
  var userApproval = confirm("Please confirm the criteria for this password");
  var characterLength = parseInt(
    prompt("How long would you like your password to be?")
  );
  console.log("Chosen character length: " + characterLength);

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

  var userChoices = {
    lengthChoice: characterLength,
    specialCharacterChoice: userSpecialCharacter,
    numberChoice: userNumbers,
    lowerCaseChoice: userLowerCase,
    upperCaseChoice: userUpperCase,
  };

  return userChoices;
}

function randomGenerator() {
  var options = generatePassword();
  var passwordPool = [];

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

  for (let i = 0; i < options.lengthChoice; ++i) {
    var randomPicker = Math.floor(
      Math.random() * Math.floor(passwordPool.length)
    );
    chosenAnswers.push(passwordPool[randomPicker]);
  }

  console.log(chosenAnswers);

  var password = chosenAnswers.join("");
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", randomGenerator);

// when click on "generate password" prompts will appear
