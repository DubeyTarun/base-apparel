document.querySelector(".email-button").addEventListener("click", function() {
  emailValidator();
});


function emailValidator() {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var enteredEmail = document.querySelector(".email-input").value;
  console.log(enteredEmail);
  if (enteredEmail.match(validRegex)) {

  } else {
    document.querySelector(".email-input").classList.add("error-input");
    document.querySelector(".error-icon").classList.add("visibility-on");
    document.querySelector(".email-button").classList.add("error-button");
    document.querySelector(".error-message").classList.add("visibility-on");
    document.querySelector(".email-button").disabled = "true";
  }

}
