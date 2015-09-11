// make the title the size of the window

$(document).ready(function() {
  var height = $(window).height();
  var element = $("#title");
  element.height(height - $(".container").height());
});