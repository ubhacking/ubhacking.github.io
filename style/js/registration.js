$(document).ready(function() {

  jsonToDatalist('/registration/colleges', '#colleges');
  jsonToDatalist('/registration/majors', '#majors');

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

  function jsonToDatalist(url, id) {
    $.getJSON(url, function(data) {
      $(data).each(function() {
        var options = "<option value=\'" + this.name + "\'></option>";
        $(id).append(options);
      });
    });
  }

});
