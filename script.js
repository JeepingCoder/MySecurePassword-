// Assignment Code - lay out variables used for the user input questions
var generateBtn = document.querySelector("#generate");
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "p", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numericChar = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "'", "{", "}", "[", "]", "|", ";", ":", "?", "<", ">", "/", "."];

//var allChar = [];

// click generate psswd button (make active) presensted with series of prompts for pswd criteria  need function
// and variables to be able to ask if else statements 
function generatePassword() {
  var allChar = [];
  var password = "";
  var userinput = window.prompt(" How many characters would you like your password? 8-128")
  console.log(userinput)

  //if else statement
  if (userinput < 8 || userinput > 128 ||  isNaN(userinput)) {
    //Alert user an error
    window.alert('Passowrd length needs to be a number between 8 and 128')
    //reset the question, which means restarting the function
     generatePassword()
  }
  //after meeting qualifier for amount of characters now ask bolean questions for the next 4 user inputs
   else { 
    var userLowCase = window.confirm(" Would you like to use lower case characters? ");
    var userUpCase = window.confirm (" would you like to use upper case characters ?");
    var userNumCase = window.confirm (" Would you like to use numbers? ");
    var userSpecChar = window.confirm (" Would you like to use special characters? ");

    //console logged user input to see if criteria is pushing through script correctly.
    console.log(userLowCase, userUpCase, userNumCase, userSpecChar)
    if(userLowCase){
      //push lowerCaseChar to allChar arr
      allChar.push(...lowerCaseChar)
    }
    if(userUpCase){
      //push lowerCaseuserUpCaseChar to allChar arr
      allChar.push(...upperCaseChar)
    }
    if(userNumCase){
      //push userNumCase to allChar arr
      allChar.push(...numericChar)
    }
    if(userSpecChar){
      //push userSpecChar to allChar arr
      allChar.push(...specialChar)
    }
    console.log(allChar)

    //if(allChar === )
  }
  //for Loop to start math for come up with random password using user
    for (var i = 0; i < userinput; i++){
      console.log("The password is" + allChar[i] + ".")
      //password = password.concat(math.floor-function(math.random-function]) 
    var randomIndex = Math.floor(Math.random() * (allChar.length));
    var randomCharVal = allChar[randomIndex];
  //pick random charrater
   //select random characters from allChar to create your random password
   // var password = Math.random() * (allChar.length);
    //var generatePassword = allChar[password];

    password += randomCharVal
   
    }
     return password; 
}
//The password is either displayed in alert or on the page 
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
