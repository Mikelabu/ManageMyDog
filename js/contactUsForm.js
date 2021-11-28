
// This form requires validation. After submited a thank ypage will be displayed.

function validate(){
    let name = document.getElementById("name").value;
    let subject = document.getElementById("subject").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error_message");
    
    error_message.style.padding = "1rem";
    
    let text;
    if(name.length < 3){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 5){
      text = "Please Enter Correct Subject";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 5){
      text = "Please Enter More Than 50 Characters";
      error_message.innerHTML = text;
      return false;
    }
  
    function thankYou() {
      window.location.href = "../html/thankYou.html";
      
    }
    alert("A browser is required to view Thank You page " + thankYou());

    
    
   

    return true;
  }
 