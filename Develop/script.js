// Assignment code here

//when button is clicked
var btn = document.querySelector("#generate");

// a prompt appears asking for certain criteria
btn.addEventListener("click", function () {
  var numOfChar = prompt(
    "How many characters would you like ypur password to contain? (8-128)"
  );
  console.log(numOfChar);

  if (numOfChar >= 8 && numOfChar <= 128) {
    var hasSpecial = confirm(
      "Click OK to confirm including special characters."
    );
    console.log(hasSpecial);

    var hasNum = confirm("Click OK to include numeric characters.");
    console.log(hasNum);

    var hasLower = confirm(
      "Click OK to confirm including lowercase characters."
    );
    console.log(hasLower);

    var hasUpper = confirm(
      "Click OK to confirm including uppercase characters."
    );
    console.log(hasUpper);
  }
  else {
    window.alert("Please select a number betweeb 8 and 128!");

    
  }

  // when prompt is answered input should be validated and at least one character type should be selected
  while (hasSpecial === false && hasNum === false && hasLower === false && hasUpper === false) {
    alert("You must choose at least one parameter");
    return numOfChar;
  }


  if (hasSpecial === true) {
    getRandomSymbol();
    password.push(getRandomSymbol());
    console.log(getRandomSymbol());

    for (var i = 0; i < numOfChar; i++) {
      var writePassword = getRandomSymbol[Math.floor(Math.random() * getRandomSymbol.length)];
      password.push(getRandomSymbol());
      
    }
  
  } 

  if (hasNum === true) {
    getRandomNumber();
    password.push(getRandomNumber());
    console.log(getRandomNumber())

    for (var i = 0; i < numOfChar; i++) {
      var writePassword = getRandomNumber[Math.floor(Math.random() * getRandomNumber.length)];
      password.push(getRandomNumber());
  
  } 

  if (hasLower === true) {
    getRandomLower();
    password.push(getRandomLower());
    console.log(getRandomLower())

    for (var i = 0; i < numOfChar; i++) {
      var writePassword = getRandomLower[Math.floor(Math.random() * getRandomLower.length)];
      password.push(getRandomLower());
  
  } 

  if (hasUpper === true) {
    getRandomUpper();
    password.push(getRandomUpper());
    console.log(getRandomUpper())

    for (var i = 0; i < numOfChar; i++) {
      var writePassword = getRandomUpper[Math.floor(Math.random() * getRandomUpper.length)];
      password.push(getRandomUpper());
  
  } 

  

  var writePassword = password.join("");
    UserInput(writePassword);
    return writePassword;

    function UserInput(writePassword) {
    document.getElementById("password").textContent = writePassword;

}

}}}});

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

i = "";
var password = [];


// if uppercase is true
// get random value from uppercase array
// .push that value into password array
// then take value of password and assigning value to html placeholder

// Write password to the #password input
/*
function writePassword() {
  var password = document.getElementById("myText").placeholder;
  document.getElementById("demo").innerHTML = password;
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


*/

// once all prompts are answered then password is generated that matches criteria

// once password is generated, it is either displayed in a prompt  or written on the page

/*
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

//1. check to make sure that they arent all false

//2. check if each one is true, if they are, get random value and place into the password

//3 once completed populate html placeholder with placeholder value
