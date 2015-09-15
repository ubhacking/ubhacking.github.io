// make the title the size of the window

$(document).ready(function() {
  var height = $(window).height();
  var element = $("#fullscreen");
  element.height(height - $(".container").height());
});