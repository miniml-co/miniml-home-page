$(function() {
  

  initMap()
   
  // form validations
  var form = $(".contact-form");
  form.validate({
    rules: {
      name: {required: true},
      email: {required: true, email: true},
      message: {required: true}
    }
  });
  // form send function
  $( "#btn-contact" ).click(function() {
    if(form.valid()) {
      submitForm();
    }
  });
  
  
})






// submit form ajax post functions
function submitForm() {
  var mydata = $ (".contact-form").serialize();
  $.ajax({
    type: "POST",
    url: "../php/contact.php",
    data: mydata,
    success: function(response, textStatus, xhr) {
      console.log(response)
      $('.button-wrap img').addClass('sent')
      $('.button-wrap button').html('Sent')
      $(".contact-form").addClass('form-disabled')
    },
    error: function(xhr, textStatus, errorThrown) {
      console.log(errorThrown)
    }
  });
}






// google map init
var map;
function initMap() {
  var isDraggable = $(document).width() > 800 ? true : false;
  var myLatLng = {lat: 42.336185, lng: -83.053311};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 13,
    streetViewControl: false,
    mapTypeControl: false,
    scrollwheel: false,
    draggable: isDraggable,
  });
  var image = new google.maps.MarkerImage("../res/pin.png", null, null, null, new google.maps.Size(60,71));
  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
  var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];
  map.setOptions({styles: styles});
}