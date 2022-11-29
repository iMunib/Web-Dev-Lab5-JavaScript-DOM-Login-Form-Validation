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
  let email1 = email.value;
  let regexp = /\S+@\S+\.\S+/; 
  if (regexp.test(email1)) {
    CurrentStatus = "true";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}


// Checking if the value for username is less than 20 and not empty
function LoginValidation() {
  let login1 = login.value;
  let length = login1.length; 
  if (length > 20 || login1 == "") {
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
  let pass1 = FirstPassword.value;
  passUppercase = "";
  passLowercase = "";
  for (var i = 0; i < pass1.length; i++) {
    let char = pass1[i];
    c = char.toUpperCase();
    if (c == char) {
      passUppercase = "true";
    }
    c = char.toLowerCase();
    if (c == char) {
      passLowercase = "true";
    }
  }
  if (
    passLowercase === "true" &&
    passUppercase === "true" &&
    pass1.length >= 6 &&
    pass1 != ""
  ) {
    CurrentStatus = "True";
  } else {
    CurrentStatus = "false";
  }
  return CurrentStatus;
}

//Function to validate the second password entered by the user matches the first password
function PasswordValidation2() {
  let pass_2 = SecondPassword.value;
  if (pass_2 == FirstPassword.value && pass_2 != "") {
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
  //validating email address
  let emailValidation = EmailValidation();
  var liElements = document.querySelectorAll(".ewarning");
  if (liElements.length > 0) {
    document.querySelector(".ewarning").remove();
  }
  if (emailValidation == "false") {
    MessageShowing =
      "X Email address should be non-empty with the format xyz@xyz.xyz";
    let emailError = document.createElement("span");
    emailError.setAttribute("class", "ewarning");
    document.querySelectorAll(".main-form-email")[0].append(emailError);
    emailError.textContent = MessageShowing;
  }

  //validating login and removing warning
  var liElements = document.querySelectorAll(".bwarning");
  if (liElements.length > 0) {
    document.querySelector(".bwarning").remove();
  }
  let loginValidation = LoginValidation();
  if (loginValidation == "false") {
    MessageShowing = "X login should be non-empty,and within 20 characters long";
    let loginError = document.createElement("span");
    loginError.setAttribute("class", "bwarning");
    document.querySelectorAll(".main-form-username")[0].append(loginError);
    loginError.textContent = MessageShowing;
    console.log(MessageShowing);
  }
  var liElements = document.querySelectorAll(".cwarning");
  if (liElements.length > 0) {
    document.querySelector(".cwarning").remove();
  }
  //validating password
  let passValidation = PasswordValidation();
  if (passValidation == "false") {
    MessageShowing =
      "X password should be atleast 6 characters; 1 Uppercase, 1 Lowercase";
    let PassError = document.createElement("span");
    PassError.setAttribute("class", "cwarning");
    document.querySelectorAll(".main-form-firstpassword")[0].append(PassError);
    PassError.textContent = MessageShowing;
  }
  var liElements = document.querySelectorAll(".d2warning");
  if (liElements.length > 0) {
    document.querySelector(".d2warning").remove();
  }
  //validating second pass
  let pass2Validation = PasswordValidation2();
  if (pass2Validation == "false") {
    MessageShowing = "X please retype password.";
    let PassError = document.createElement("span");
    PassError.setAttribute("class", "d2warning");
    document.querySelectorAll(".main-form-secondpassword")[0].append(PassError);
    PassError.textContent = MessageShowing;
    console.log(MessageShowing);
  }
  var liElements = document.querySelectorAll(".last");
  if (liElements.length > 0) {
    document.querySelector(".last").remove();
  }
  //validating terms
  let termValidation = TermsValidation();
  console.log("no");
  if (termValidation == "false") {
    MessageShowing = "X please accept the terms and conditions.";
    let termError = document.createElement("span");
    termError.setAttribute("class", "last");
    document.querySelectorAll(".main-form-terms")[0].append(termError);
    termError.textContent = MessageShowing;
    console.log(MessageShowing);
  }
}
