// Assignment code here
var passwordCriteria = {
  pwdLength: 0,
  characterTypes: {
    upperCase: true,
    lowerCase: true,
    numeric: true,
    specialCharacters: true
  }
}
var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l',
                  'm','n','o','p','q','r','s','t','u','v','w','x',
                  'y','z',];

var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L',
                  'M','N','O','P','Q','R','S','T','U','V','W','X',
                  'Y','Z',];

var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialChar = ['!','#','$','%','&','*','?','@',];

//validate user password options
function validateCheckboxGroup(){
  var charTypes = document.getElementsByName("charTypes");
  var numCheckedItems = 0;

  for(var i=0; i < charTypes.length; i++){
    if(charTypes[i].checked)
    {
      numCheckedItems++;
    }
  }
  if(numCheckedItems == 0){
    alert("You must choose at least 1 Character Type!")
  }

  writePassword();
}

// Validate user password length
var pwdLength = document.querySelector("#numChar");
pwdLength.addEventListener('input', () => {
  
  if(pwdLength.value > 128) {
    alert("Password cant exceed 128 characters!")
    pwdLength.value = '';
  }; 
});




//retrun the generated password
function generatePassword(){
  //get password length requirement
  var requiredChars = [];
  var password = [];
  if(passwordCriteria.characterTypes.lowerCase)
  {
    requiredChars.push(lowercase);
  }
  if(passwordCriteria.characterTypes.upperCase){
    requiredChars.push(uppercase);
  }
  if(passwordCriteria.characterTypes.numeric){
    requiredChars.push(numeric);
  }
  if(passwordCriteria.characterTypes.specialCharacters)
  {
    requiredChars.push(requiredChars);
  }

  for (var i = 0; i != passwordCriteria.pwdLength; i++) {
    password.push(requiredChars[randomChar(requiredChars.length)]);
  }

  if(validateString(password.join(""))){
    console.log(password.join(""));
    return password.join("");
  }
  generatePassword();

  //build array based on character requirements

  //loop through array to add randomized characters based on user requirements

  //validate the password meets the character requirements

  //ifPassed return password

  //!ifPassed call generate password again

}

function randomChar(max) {
  return Math.floor(Math.random() * max);
}

function validateString(str) {
  console.log(str);
  // O(n) complexity
  const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/;

  return regex.test(str);
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  passwordCriteria.pwdLength = document.getElementById("numChar");
  passwordCriteria.characterTypes.lowerCase = document.getElementById("lowercase");
  passwordCriteria.characterTypes.upperCase = document.getElementById("uppercase");
  passwordCriteria.characterTypes.numeric = document.getElementById("number");
  passwordCriteria.characterTypes.specialCharacters = document.getElementById("specialchar");
  
  console.log(password);
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

