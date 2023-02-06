/*!
* Start Bootstrap - Small Business v5.0.5 (https://startbootstrap.com/template/small-business)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-small-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


document.getElementById("enviar").addEventListener("click", function (event) {
  event.preventDefault();

  var email = document.getElementById("email").value;
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var isValidEmail = emailPattern.test(email);

  if (!isValidEmail) {
    document.getElementById("alertMessage").classList.remove("d-none");
  } else {
    document.getElementById("alertMessage").classList.add("d-none");
    // Add your form submit code here
  }

  var message = document.getElementById('message').value;

  if (message.length < 1) {
    document.getElementById("alertMessage2").classList.remove("d-none");
  }
  else {
    document.getElementById("alertMessage2").classList.add("d-none");
    // Add your form submit code here
  }


});

