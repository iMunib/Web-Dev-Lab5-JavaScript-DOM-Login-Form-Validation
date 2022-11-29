//Storing the values in the local storage
let email = document.querySelector("#email");
let login = document.querySelector("#login");
let FirstPassword = document.querySelector("#pass");
let SecondPassword = document.querySelector("#pass2");
let termAndConditions = document.querySelector("#terms");
let NewsletterCheck = document.querySelector("#newsletter");
let CurrentStatus = "";
let MessageShowing = "";
let resetButton = document.getElementById("reset-button");

// function to validate the email address entered by the user with reg expression for format
function EmailValidation() {
  let emailvalue = email.value;
  let regexp = /\S+@\S+\.\S+/;
  if (regexp.test(emailvalue)) {
    CurrentStatus = "true";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}

// Checking if the value for username is less than 20 and not empty
function LoginValidation() {
  let loginValue = login.value;
  let length = loginValue.length;
  if (length > 20 || loginValue == "") {
    CurrentStatus = "false";
  } else {
    CurrentStatus = "true";
  }
  return CurrentStatus;
}

// Function to check if the user has checked the terms and conditions and newsletter checkbox
function TermsValidation() {
  if (termAndConditions.checked && NewsletterCheck.checked) {
    CurrentStatus = "true";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}

//Function to validate the password entered by the user
function PasswordValidation() {
  let firstPasswordValue = FirstPassword.value;
  passUppercase = "";
  passLowercase = "";
  for (var i = 0; i < firstPasswordValue.length; i++) {
    let characterOfPassword = firstPasswordValue[i];
    c = characterOfPassword.toUpperCase();
    if (c == characterOfPassword) {
      passUppercase = "true";
    }
    c = characterOfPassword.toLowerCase();
    if (c == characterOfPassword) {
      passLowercase = "true";
    }
  }
  if (
    passLowercase === "true" &&
    passUppercase === "true" &&
    firstPasswordValue.length >= 6 &&
    firstPasswordValue != ""
  ) {
    CurrentStatus = "True";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}

//Function to validate the second password entered by the user matches the first password
function PasswordValidation2() {
  let secondPasswordValue = SecondPassword.value;
  if (secondPasswordValue == FirstPassword.value && secondPasswordValue != "") {
    CurrentStatus = "true";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}

// Function to alert the user of spam warning
function SpamAlert() {
  alert("Be alert from Spams");
}

// Function to remove the error message when pressing reset button
function resetButtonPressed() {
  const allSpan = document.querySelectorAll("span");
  allSpan.forEach(function (even) {
    even.remove();
  });
}
resetButton.addEventListener("click", resetButtonPressed);

// Function to validate the form and using the functions above to validate the form
function validate() {
  //validating email address and removing warning so they dont stack
  let emailValidation = EmailValidation();
  var insertedElement = document.querySelectorAll(".warningemail");
  if (insertedElement.length > 0) {
    document.querySelector(".warningemail").remove();
  }

  if (emailValidation == "false") {
    MessageShowing =
      "Email address should be not empty with the format like xyz@xyz.xyz";
    let emailError = document.createElement("span");
    emailError.setAttribute("class", "warningemail");
    document.querySelectorAll(".main-form-email")[0].append(emailError);
    emailError.textContent = MessageShowing;
  }

  //validating login and removing warning so they dont stack
  var insertedElement = document.querySelectorAll(".warningLogin");
  if (insertedElement.length > 0) {
    document.querySelector(".warningLogin").remove();
  }
  let loginValidation = LoginValidation();
  if (loginValidation == "false") {
    MessageShowing =
      "Login should be not-empty and smaller than 20 characters long";
    let loginError = document.createElement("span");
    loginError.setAttribute("class", "warningLogin");
    document.querySelectorAll(".main-form-username")[0].append(loginError);
    loginError.textContent = MessageShowing;
  }
  var insertedElement = document.querySelectorAll(".warningFirstPassword");
  if (insertedElement.length > 0) {
    document.querySelector(".warningFirstPassword").remove();
  }
  //validating the password and removing warning so they dont stack
  let passValidation = PasswordValidation();
  if (passValidation == "false") {
    MessageShowing =
      "Password should be atleast 6 characters; 1 Uppercase, 1 Lowercase";
    let ErrorForPassword = document.createElement("span");
    ErrorForPassword.setAttribute("class", "warningFirstPassword");
    document.querySelectorAll(".main-form-firstpassword")[0].append(ErrorForPassword);
    ErrorForPassword.textContent = MessageShowing;
  }
  var insertedElement = document.querySelectorAll(".warningsecondPassword");
  if (insertedElement.length > 0) {
    document.querySelector(".warningsecondPassword").remove();
  }
  //validating second password and removing warning so they dont stack
  let secondPassValidation = PasswordValidation2();
  if (secondPassValidation == "false") {
    MessageShowing = "Please retype password.";
    let ErrorforPass2 = document.createElement("span");
    ErrorforPass2.setAttribute("class", "warningsecondPassword");
    document.querySelectorAll(".main-form-secondpassword")[0].append(ErrorforPass2);
    ErrorforPass2.textContent = MessageShowing;
  }
  var insertedElement = document.querySelectorAll(".last");
  if (insertedElement.length > 0) {
    document.querySelector(".last").remove();
  }
  //validating terms and removing warning so they dont stack
  let termValidation = TermsValidation();

  if (termValidation == "false") {
    MessageShowing = "Please accept the terms and conditions.";
    let termError = document.createElement("span");
    termError.setAttribute("class", "last");
    document.querySelectorAll(".main-form-terms")[0].append(termError);
    termError.textContent = MessageShowing;
  }
}
