$(document).ready(function() {

  $('#edit').on('click', function() {
    disableFields(false);
    // deactivate edit
    $('#edit').prop('disabled', true);
    // activate submit and cancel
    $('#submit').prop('disabled', false);
    $('#cancel').prop('disabled', false);
  });

  $('#cancel').on('click', function() {
    disableFields(true);
    // deactivate submit cancel
    $('#submit').prop('disabled', true);
    $('#cancel').prop('disabled', true);
    // activate edit
    $('#edit').prop('disabled', false);
  });

  function disableFields(disabled) {
    $("#account-info input,textarea,select").prop("disabled", disabled);
  }

  // Initialize
  $('#cancel').click();

  var RETURNABLE_FIELDS = ["email", "firstname", "lastname", "college", "major", "year", "first-hackathon", "project-type", "diet", "shirt", "phone", "sex", "project", "past-project", "github", "linkedin", "website", "other", "status"];

  
  // Populate page
  $.get("/registration/get_hacker", function(data) {
    for(var i = 0; i<RETURNABLE_FIELDS.length; i++) {
      $('#' + RETURNABLE_FIELDS[i]).val(data[RETURNABLE_FIELDS[i]]);
    }
  });

});
