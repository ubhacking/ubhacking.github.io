// $(document).ready(function(){
//     $('#resume-table').DataTable({
//       "ajax" : '/sponsors/view_all',
//       "columnDefs": [
//             {
//                 "targets": [ 0 ],
//                 "visible": false,
//                 "searchable": false
//             }
//         ],
//       "createdRow": function ( row, data, index ) {
//         $('td', row).click(function() {
//           viewResume(data[0]);
//         });
//       }
//     });

//     function viewResume(uid) {
//       window.location.href = "/sponsors/view_resume?uid=" + uid;
//     }
// });

$(document).ready(function(){
    var table = $('#resume-table').DataTable({
      "ajax" : '/sponsors/view_all',
      "columnDefs": [
            {
                "targets": [ 0 ],
                "visible": false,
                "searchable": false
            }
        ]
    });

    $('#resume-table tbody').on( 'click', 'tr', function () {
        $(this).toggleClass('selected');
    });

    $('#select-all').click(function () {
      $('#resume-table tbody > tr').addClass('selected');
    });

    $('#select-none').click(function () {
      $('#resume-table tbody > tr').removeClass('selected');
    });

    $('#download').click(function () {
      // uids = [];
      // table.rows( {selected:true} ).each(function() {
      //   uids.push(table.row(this).data()[0]);
      // });
      console.log("uids");
      //window.location.href = "http://stackoverflow.com";
    });

    function viewResume(uid) {
      window.location.href = "/sponsors/view_resume?uid=" + uid;
    }
});

