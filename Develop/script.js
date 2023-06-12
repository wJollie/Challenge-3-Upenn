// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordElement = document.getElementById("password");

// Write password to the #password input
function writePassword() {
  // Asking what type of password you want to make
  const includeLowercase = confirm("Include lowercase letters?");
  const includeUppercase = confirm("Include uppercase letters?");
  const includeNumbers = confirm("Include numbers?");
  const includeSpecial = confirm("include special characters?");
  // Getting the length you want
  let length = parseInt(
    prompt(
      "Enter the length of the password (between 8 and 128 characters long): "
    )
  );
  // Making sure the length fits the parameters
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Incorrect Length Choice, Enter a new length: "));
  }
  // Checking character type
  while (
    !(includeLowercase || includeUppercase || includeNumbers || includeSpecial)
  ) {
    alert("You must select at least one character type!");
    const includeLowercase = confirm("Include lowercase letters?");
    const includeUppercase = confirm("Include uppercase letters?");
    const includeNumbers = confirm("Include numbers?");
    const includeSpecial = confirm("include special characters?");
  }
  // setting character types
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const special = "!@#$%^&*()_+~`|{}[]:;?<>,./-=";

  let available = "";

  if (includeLowercase) {
    available += lowerCase;
  }
  if (includeUppercase) {
    available += upperCase;
  }
  if (includeNumbers) {
    available += numbers;
  }
  if (includeSpecial) {
    available += special;
  }

  let password = "";
  // generating password
  for (let a = 0; a < length; a++) {
    const random = Math.floor(Math.random() * available.length);
    password += available[random];
  }
  passwordElement.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
