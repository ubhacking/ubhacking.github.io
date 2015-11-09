$(document).ready(function(){
    var table = $('#resume-table').DataTable({
      "ajax" : 'https://ubhacking.com/sponsors/view_all',
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
      table.rows().iterator('row', function (context, index){
        $(this.row(index).node()).addClass('selected')
      });
    });

    $('#select-none').click(function () {
      table.rows().every(function (index){
        $(this.row(index).node()).removeClass('selected');
      });
    });

    $('#download').click(function () {
      uids = [];
      table.rows().every(function(index){
        if($(this.row(index).node()).hasClass('selected')) {
          uids.push(table.row(index).data()[0]);
        }
      });
      console.log(uids);
      if (uids.length == 0) {
        window.alert("Please select at least one hacker");
        return;
      }
      window.location.href = "/sponsors/download?resumes=" + uids;
    });

    $('#download_attending').click(function () {
      window.location.href = "/sponsors/get_attending_hackers";
    });

    function viewResume(uid) {
      window.location.href = "/sponsors/view_resume?uid=" + uid;
    }
});

