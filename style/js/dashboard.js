$(document).ready(function() {

  $('#teams_edit').on('click', function() {
    $("#location").prop("disabled", false);
    // deactivate edit
    $('#teams_edit').prop('disabled', true);
    // activate submit and cancel
    $('#update_location').prop('disabled', false);
    $('#teams_cancel').prop('disabled', false);
  });

  $('#teams_cancel').on('click', function() {
    // disableFields(true);
    $("#location").prop("disabled", true);
    // deactivate submit cancel
    $('#update_location').prop('disabled', true);
    $('#teams_cancel').prop('disabled', true);
    // activate edit
    $('#teams_edit').prop('disabled', false);
  });

  $('#teams_cancel').click();

  $.get('/teams/get_team_members', function(data){
    // var something = ['steve', 'roger']
    var member_list = data['team_members'];
    for (member in member_list) {
      $('#team_members').append('<p>' + member_list[member] + '</p>')
    }
  });

  $.get('/teams/get_location', function(data){
    $('#location').val(data['location']);
  });
  // --------------------------------------------------------------------------

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

  $('#view').click(function() {
    var rs = Math.random();
    window.location.href = "/registration/view_resume?rs=" + rs;
  });

  $('#element2').hide();

  $('#update').click(function() {
    $('#element2').toggle(400);
  });

  function disableFields(disabled) {
    $("#account-info input,textarea,select").prop("disabled", disabled);
  }

  // Initialize
  $('#cancel').click();

  var RETURNABLE_FIELDS = ["email", "firstname", "lastname", "college", "major", "year", "first-hackathon", "project-type", "diet", "shirt", "phone", "sex", "project", "past-project", "github", "linkedin", "website", "other", "status", "rsvp"];

  
  // Populate page
  $.get("/registration/get_hacker", function(data) {
    for(var i = 0; i<RETURNABLE_FIELDS.length; i++) {
      if(RETURNABLE_FIELDS[i] == 'status') {
        $('#status').text(data['status']);
      } 

      else if (RETURNABLE_FIELDS[i] == 'rsvp') {
        $('#rsvp').text(data['rsvp']);
      } 

      else {
        $('#' + RETURNABLE_FIELDS[i]).val(data[RETURNABLE_FIELDS[i]]);
      }
    }
  });

});
