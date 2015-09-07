$(document).ready(function() {
	jsonToDatalist('http://localhost:5000/registration/colleges', '#colleges');
	jsonToDatalist('http://localhost:5000/registration/majors', '#majors');

	// process the form: sends json of everything except resume via AJAX and separately uploads
	// file.
	$('form').submit(function(event) {

		// get the form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'email' 			: $('input[name=email]').val(),
			'password'			: $('input[name=password').val(),
			'confirm-password'	: $('input[name=confirm-password').val(),
			'firstname' 		: $('input[name=firstname]').val(),
			'lastname'			: $('input[name=lastname]').val(),
			'phone'				: $('input[name=phone]').val(),
			'sex'				: $('#sex :selected').val(),
			'school'			: $('input[name=colleges]').val(),
			'major'				: $('input[name=major]').val(),
			'year'				: $('#year :selected').val(),
			'first-hackathon'	: $('#first-hackathon option:selected').val(),
			'project-type'		: $('#project-type :selected').val(),
			'project'			: $('textarea#project').val(),
			'past-project'		: $('textarea#past-project').val(),
			'github'			: $('input[name=github]').val(),
			'linkedin'			: $('input[name=linkedin]').val(),
			'website'			: $('input[name=website]').val(),
			'diet'				: $('#diet :selected').val(),
			'shirt'				: $('#shirt :selected').val(),
			'other'				: $('textarea#other').val()
		};

		console.log(formData);

		// process the form
		$.ajax({
			type 		: 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url 		: 'http://localhost:5000/registration/add_hacker', // the url where we want to POST
			data 		: formData, // our data object
			dataType 	: 'application/json', // what type of data do we expect back from the server
			encode 		: true
		})
			// using the done promise callback
			.done(function(data) {

				// log data to the console so we can see
					console.log(data); 
				
				// here we will handle errors and validation messages
				if ( ! data.success) {
					alert("fail");
					
					// handle errors for name ---------------
					if (data.errors.firstname) {
						alert(data.errors.firstname)
						
					}
					
					/*
					// handle errors for email --------------- EXAMPLE
					if (data.errors.email) {
						$('#email-group').addClass('has-error'); // add the error class to show red input
						$('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
					}*/

				} else {
					alert("success");

					// ALL GOOD! just show the success message!
					//$('form').append('<div class="alert alert-success">' + data.message + '</div>');

					// usually after form submission, you'll want to redirect
					// window.location = '/thank-you'; // redirect a user to another page

				}
			})

			// using the fail promise callback
			.fail(function(data) {

				// show any errors
				// best to remove for production
				console.log(data);
			});

		// stop the form from submitting the normal way and refreshing the page
		event.preventDefault();
	});

});

//method used to populate datalists from a JSON array
function jsonToDatalist(url, id) {
	$.getJSON(url, function(data) {
		var options;
		$(data).each(function() {
			options = "<option value=\'" + this.name + "\'></option>";
			$(id).append(options);
		});
	});
}	

// Stuff added by Gela
//Disable and enable fields to edit
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

// Validate all the fields
function validateForm() {

    var is_valid;
    // An array of all the fields that must be filled out
    var required_fields = {
      var email = document.forms["hacker_profile"]["email"].value;
      var password = document.forms["hacker_profile"]["password"].value;
      var confirm-password = document.forms["hacker_profile"]["confirm-password"].value;
      var firstname = document.forms["hacker_profile"]["firstname"].value;
      var lastname = document.forms["hacker_profile"]["lastname"].value;
      var school = document.forms["hacker_profile"]["school"].value;
      var major = document.forms["hacker_profile"]["major"].value;
      var year = document.forms["hacker_profile"]["year"].value;
      var first-hackathon = document.forms["hacker_profile"]["first-hackathon"].value;
      var project-type = document.forms["hacker_profile"]["project-type"].value;
      var diet = document.forms["hacker_profile"]["diet"].value;
      var shirt = document.forms["hacker_profile"]["shirt"].value;
    }

    var counter = 0;

    for (var i = 0; i < required_fields.length; i++){
      console.log(required_fields[i].x); //Test to print it out
      if(x == null || x == "") 
      {
        ++counter;
        alert(required_fields[i].x + "must be field out.");
      }
      is_valid =  counter > 0 ? true : false;
    }

    if (document.forms["hacker_profile"]["password"] != document.forms["hacker_profile"]["confirm-password"]) {
      is_valid = false;
    }

    return is_valid;
}

//THIS WAS ABSTRACTED INTO jsonToDatalist
// setup colleges
  /*$.getJSON('http://localhost:5000/colleges', function(data) {
  	var collegeOptions;
      $(data).each(function() {
        collegeOptions = "<option value=\'" + this.name + "\'></option>";
        $('#colleges').append(collegeOptions);

      });
  });*/