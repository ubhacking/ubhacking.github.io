$(document).ready(function(){
    var table = $('#team-table').DataTable({
      "ajax" : 'https://ubhacking.com/sponsors/view_all',
      "columnDefs": [
            {
                "targets": [ 0, 5, 6, 7, 8, 9 ],
                "visible": false,
                "searchable": false
            }
        ]
    });

    $('#team-table tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#check_in').click(function () {
      uids = [];
      table.rows().every(function(index){
        if($(this.row(index).node()).hasClass('selected')) {
          uids.push(table.row(index).data()[0]);
        }
      });
      // console.log(uids);
      if (uids.length == 0) {
        window.alert("Please select at least one hacker");
        return;
      }
      window.location.href = "/registration/check_in?uid="+uids
    });
});