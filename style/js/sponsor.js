$(document).ready(function(){
    $('#resume-table').DataTable({
      "ajax" : '/sponsors/view_all'
    });
});