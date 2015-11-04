$(document).ready(function() {

  $("#password,#confirm-password").keyup(checkPasswordsMatch);
  
  //method used to populate datalists from a JSON array
  function checkPasswordsMatch() {
    if ($('#password').val() === $('#confirm-password').val()) {
      $("#confirm-password-warning").text("Passwords match");
      $('#submit').removeAttr('disabled');
    } else {
      $("#confirm-password-warning").text("Passwords do not match");
      $('#submit').attr('disabled', 'disabled');
    }
  }

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1]; // || 0;
  }

  var token = $.urlParam('u');
  console.log(token);

  var form = document.getElementById('form');

  var hiddenField = document.createElement("input");
  hiddenField.setAttribute("type", "hidden");
  hiddenField.setAttribute("name", "token");
  hiddenField.setAttribute("value", token);

  form.appendChild(hiddenField);
  
  // add to document
  // document.body.appendChild(form);
});