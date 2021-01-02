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

function generatePassword(){
  //created variable names for uppercase, lowercase, special characters, and numbers as arrays
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var specialChar = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", ">", "=", "?", "@", "^", "_", "~"];
    var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var passwordLength = false;

    while(passwordLength < 8 || passwordLength > 129 || passwordLength == ""){
      var passwordLength = prompt("Choose a password with a length between 8 and 128");
    }
    var pickUpperCase = confirm("Do you want uppercase in your password")
    var pickLowerCase = confirm("Do you want lowercase in your password")
    var pickSpecialChar = confirm("Do you want special character in your password")
    var pickNum = confirm("Do you want numbers in your password")


    //
    if(pickUpperCase === false && pickLowerCase === false && pickSpecialChar === false && pickNum === false){
        var pickAgain = prompt("Please pick combination again");
      }
    //variable to store the password
    var validPass = [];
    if(pickUpperCase === true){
      validPass = validPass.concat(upperCase);
    }
    if (pickLowerCase === true){
      validPass = validPass.concat(lowerCase);
    }
    if (pickSpecialChar === true){
      validPass = validPass.concat(specialChar);
    }
    if (pickNum === true){
      validPass = validPass.concat(num);
    }
    console.log(validPass);
    
    var password = "";

}
  
