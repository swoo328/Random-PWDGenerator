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
  //Prompt the user for the length of the password
  //the statment is gonna continue until the user input a number between 8-128
    while(passwordLength < 8 || passwordLength > 128 || passwordLength == ""){
      var passwordLength = prompt("Choose a password with a length between 8 and 128");
    }
    //Confirmation choices if you want uppercase, lowercase, special character or numbers for the password
    var pickUpperCase = confirm("Do you want uppercase in your password");
    var pickLowerCase = confirm("Do you want lowercase in your password");
    var pickSpecialChar = confirm("Do you want special character in your password");
    var pickNum = confirm("Do you want numbers in your password");


    //If i didn't pick any uppercase, lowercase, special character or numbers for the password
    if(pickUpperCase === false && pickLowerCase === false && pickSpecialChar === false && pickNum === false){
      // var passwordLength = prompt("Choose a password with a length between 8 and 128");
      // var pickUpperCase = confirm("Do you want uppercase in your password");
      // var pickLowerCase = confirm("Do you want lowercase in your password");
      // var pickSpecialChar = confirm("Do you want special character in your password");
      // var pickNum = confirm("Do you want numbers in your password");
      alert("Please try again?");
      }
    //variable to store the values of uppercase, lowercase, special character and numbers into the array
    var validPass = [];
    //If confirm is true all the values of upper case in the array are gonna be stored into an empty array
    if(pickUpperCase === true){
      validPass = validPass.concat(upperCase);
    }
    //If confirm is true all the values of lower case in the array are gonna be stored into an empty array
    if (pickLowerCase === true){
      validPass = validPass.concat(lowerCase);
    }
    //If confirm is true the values of special character case in the array are gonna be stored into an empty array
    if (pickSpecialChar === true){
      validPass = validPass.concat(specialChar);
    }
    //If confirm is true all the values of number in the array are gonna be stored into an empty array
    if (pickNum === true){
      validPass = validPass.concat(num);
    }
    //testing to see whatever we confirm is true in store into an empty array
    console.log(validPass);
    
    //randomPassword variable is use to store the password that is being generated
    var randomPassword = "";
    //the for statement is gonna randomized each value of the input the user gives us and generates the password
    for (var i = 0; i < passwordLength; i++){
      randomPassword += validPass[Math.floor(Math.random() * validPass.length)];
    }
    return randomPassword;
}
  
