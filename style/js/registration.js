$(document).ready(function() {

	jsonToDatalist('http://localhost:5000/registration/colleges', '#colleges');
	jsonToDatalist('http://localhost:5000/registration/majors', '#majors');

	// process the form: sends json of everything except resume via AJAX and separately uploads
	// file.
	/*$('form').submit(function(event) {

		// get the- form data
		// there are many ways to get this data using jQuery (you can use the class or id also)
		var formData = {
			'email' 			: $('input[name=email]').val(),
			'password'			: $('input[name=password]').val(),
			'confirm-password'	: $('input[name=confirm-password]').val(),
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
					
					
					// handle errors for email --------------- EXAMPLE
					if (data.errors.email) {
						$('#email-group').addClass('has-error'); // add the error class to show red input
						$('#email-group').append('<div class="help-block">' + data.errors.email + '</div>'); // add the actual error message under our input
					}

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
	});*/
});

//method used to populate datalists from a JSON array
function checkPasswordsMatch() {

	if ($('input[name=password]').val() === $('input[name=confirm-password]').val()) {
		$("#confirm-password-header").text("Passwords match :)");
	}

	else {
		$("#confirm-password-header").text("Passwords do not match :(");
	}

}

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