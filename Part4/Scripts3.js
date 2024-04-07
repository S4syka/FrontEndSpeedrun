document.getElementById("registrationForm").addEventListener("submit", function(event){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var gender = document.getElementById("gender").value;
    var terms = document.getElementById("terms").checked;
    
    document.getElementById("usernameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("genderError").innerText = "";
    document.getElementById("termsError").innerText = "";
  
    var isValid = true;
    if (username.trim() === "") {
      document.getElementById("usernameError").innerText = "Please enter a username";
      isValid = false;
    }
    if (email.trim() === "") {
      document.getElementById("emailError").innerText = "Please enter an email";
      isValid = false;
    }
    if (gender === "") {
      document.getElementById("genderError").innerText = "Please select a gender";
      isValid = false;
    }
    if (!terms) {
      document.getElementById("termsError").innerText = "Please agree to the terms";
      isValid = false;
    }
    
    if(!isValid){
        prompt
    }
    if (isValid) {
      window.location.href = "thank-you.html";
    }
  });