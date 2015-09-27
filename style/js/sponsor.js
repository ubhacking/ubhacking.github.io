$(document).ready(function(){
    $('#resume-table').DataTable({
      "ajax" : '/sponsors/view_all',
      "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            }
        ],
      "createdRow": function ( row, data, index ) {
        $('td', row).click(function() {
          viewResume(data[0]);
        });
      }
    });

    function viewResume(uid) {
      window.location.href = "/sponsors/view_resume?uid=" + uid;
    }
});

