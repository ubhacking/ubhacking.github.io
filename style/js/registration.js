$(document).ready(function() {

  jsonToDatalist('/registration/colleges', '#colleges');
  jsonToDatalist('/registration/majors', '#majors');
  
  //method used to populate datalists from a JSON array
  function checkPasswordsMatch() {
    if ($('input[name=password]').val() === $('input[name=confirm-password]').val()) {
      $("#confirm-password-header").text("Passwords match :)");
    } else {
      $("#confirm-password-header").text("Passwords do not match :(");
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

  // Stuff added by Gela
  // Disable and enable fields to edit
  function disable_fields() {
    x=document.getElementById("email")
    x.disabled = !x.disabled;

    x=document.getElementById("password")
    x.disabled = !x.disabled;

    x=document.getElementById("confirm-password")
    x.disabled = !x.disabled;

    x=document.getElementById("firstname")
    x.disabled = !x.disabled;

    x=document.getElementById("lastname")
    x.disabled = !x.disabled;

    x=document.getElementById("phone")
    x.disabled = !x.disabled;

    x=document.getElementById("sex")
    x.disabled = !x.disabled;

    x=document.getElementById("school")
    x.disabled = !x.disabled;

    x=document.getElementById("major")
    x.disabled = !x.disabled;

    x=document.getElementById("year")
    x.disabled = !x.disabled;

    x=document.getElementById("first-hackathon")
    x.disabled = !x.disabled;

    x=document.getElementById("project-type")
    x.disabled = !x.disabled;

    x=document.getElementById("project")
    x.disabled = !x.disabled;

    x=document.getElementById("past-project")
    x.disabled = !x.disabled;

    x=document.getElementById("github")
    x.disabled = !x.disabled;

    x=document.getElementById("linkedin")
    x.disabled = !x.disabled;

    x=document.getElementById("website")
    x.disabled = !x.disabled;

    x=document.getElementById("diet")
    x.disabled = !x.disabled;

    x=document.getElementById("shirt")
    x.disabled = !x.disabled;

    x=document.getElementById("other")
    x.disabled = !x.disabled;
  }

});
