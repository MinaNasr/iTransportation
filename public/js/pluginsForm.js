// datepicker
$( function() {
    $( "#pDate" ).datepicker();
  } );

// edit buttons
$('#edit1').click((e)=>{
  e.preventDefault();
  window.location.href = '/form/newRide/1';
});

$('#edit2').click((e)=>{
  e.preventDefault();
  window.location.href = '/form/newRide/2';
});

// second step submit
$('.submit').click((e)=>{
  e.preventDefault();
  $('#model').val(e.target.id);
  $('#selectCarForm').submit();
});

// Book another trip action
$('#book').click((e)=>{
  e.preventDefault();
  window.location.href = '/form/newRide/1';
});

// add Stop button
let stopNo = 1;
$('#addStop').click((e)=>{
  e.preventDefault();
  let html_stop = '<div id="stop_'+stopNo+'" class="form-row"><div class="col-md-6 offset-md-3"><input id="stop'+stopNo+'" type="text" class="form-control stops" placeholder="add your stop here" name="stops" required></div><div class="col-md-2 text-danger text-center"><h2><i id="delStop_'+stopNo+'" class="fa fa-times deleteStops" aria-hidden="true"></i></h2></div></div><script>$("#delStop_'+stopNo+'").click((e)=>{e.preventDefault();let id = $(e.target).attr("id");let arr = id.split("_");let stopNum = arr[1];$("#stop_"+stopNum).remove();});let input = document.getElementById("stop'+stopNo+'");let searchBox = new google.maps.places.SearchBox(input,{componentRestrictions:{country: "us"}});</script>';
  $( html_stop ).insertBefore( "#stopDiv" );
  stopNo++;
});
