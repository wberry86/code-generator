// Assignment code here

//when button is clicked
var btn = document.querySelector("#generate");

// a prompt appears asking for certain criteria

// prompt: length of password between 8 and 128 characters
btn.addEventListener("click", function () {
  prompt(
    "How many characters would you like ypur password to contain? (8-128)"
  );
  

  if (true) {
    confirm("Click OK to confirm including special characters.");

    if (true) {
      confirm("Click OK to include numeric characters.");

      if (true) {
        confirm("Click OK to confirm including lowercase characters.");

        if (true) {
          confirm("Click OK to confirm including uppercase characters.");
        }
      }
    }
  }
});

// for random # generator
for (let i = 0; i < 10; i++) {
let p = Math.floor(Math.random() * 10) + 1;
console.log(p);
}

//do while # generator
let i = 0;
do {
  let p = Math.floor(Math.random() * 10) +1;
  console.log(p);

  i++;
} while (i < 10);

//generator functions
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) +97);
} 

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) +65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}


console.log(getRandomLower);
console.log(getRandomUpper);
console.log(getRandomNumber);
console.log(getRandomSymbol);
// prompt: types of characters to include (lowercase, uppercase, numeric, and/or special characters)

// when prompt is answered input should be validated and at least one character type should be selected

// once all prompts are answered then password is generated that matches criteria

// once password is generated, it is either displayed in a prompt  or written on the page

/* Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);*/
