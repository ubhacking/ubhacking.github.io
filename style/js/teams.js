$(document).ready(function(){
    var table = $('#team-table').DataTable({
      "ajax" : 'https://ubhacking.com/sponsors/view_all',
      "columnDefs": [
            {
                "targets": [ 0, 4, 5, 6, 7, 8 ],
                "visible": false,
                "searchable": false
            }
        ]
    });

    $('#team-table tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    // $('#select-all').click(function () {
    //   table.rows().iterator('row', function (context, index){
    //     $(this.row(index).node()).addClass('selected')
    //   });
    // });

    // $('#select-none').click(function () {
    //   table.rows().every(function (index){
    //     $(this.row(index).node()).removeClass('selected');
    //   });
    // });

    $('#create_team').click(function () {
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
      window.location.href = "https://google.com"
    });

    // function viewResume(uid) {
    //   window.location.href = "/sponsors/view_resume?uid=" + uid;
    // }
});

