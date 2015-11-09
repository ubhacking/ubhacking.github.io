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

    $('#create_team').click(function () {
      uids = [];
      table.rows().every(function(index){
        if($(this.row(index).node()).hasClass('selected')) {
          uids.push(table.row(index).data()[0]);
        }
      });
      // console.log(uids);
      // if (uids.length == 0) {
      //   window.alert("Please select at least one hacker");
      //   return;
      // }

      // var form = document.getElementById('form');
      var team_members = 'team_members=' + uids
      var team_name = 'team_name=' + $('#team_name').val();
      var location = 'location=' + $('#location').val();
      // console.log("/teams/create_team?" + team_members + '&' + team_name + '&' + location)

      // var hiddenField = document.createElement("input");
      // hiddenField.setAttribute("type", "hidden");
      // hiddenField.setAttribute("name", "uid");
      // hiddenField.setAttribute("value", uids);

      // form.appendChild(hiddenField);
      // form.submit();
      window.location.href = "/teams/create_team?" + team_members + '&' + team_name + '&' + location
    });
});

