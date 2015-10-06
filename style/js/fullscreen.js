// make the title the size of the window

$(document).ready(function() {
  var height = $(window).height();
  var element = $("#fullscreen");
  element.height(height - $(".container").height());
});

$('.nav a').on('click', function(){
    $('.btn-navbar').click(); //bootstrap 2.x
    $('.navbar-toggle').click() //bootstrap 3.x by Richard
});
