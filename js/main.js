var config = {
    apiKey: "AIzaSyDitQNz2waSp1awNdW4P3fbJrZ0_ZCzZa0",
    authDomain: "reservation-site-1ae54.firebaseapp.com",
    databaseURL: "https://reservation-site-1ae54.firebaseio.com",
    projectId: "reservation-site-1ae54",
    storageBucket: "reservation-site-1ae54.appspot.com",
    messagingSenderId: "986852162339"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  var reservationData = {};

  $('.reservation-day li').on('click', function() {
  	reservationData.day = $(this).text();
  	$('#day-btn').text(reservationData.day);
  });

  $('.reservations').on('submit', function(e){
  	e.preventDefault();
  	reservationData.name = $('.reservation-name').val();
  	
  	var reservationsRef = database.ref('reservations');
  	reservationsRef.push(reservationData);
  	getReservations();
  });

function getReservations() {
	firebase.database().ref().on('value', function(snapshot){
		var source = $('#entry-template').html();
		var template = Handlebars.compile(source);
		var data = {
			name: reservationData.name,
			day: reservationData.day
		};
		var newReservation = template(data);
		$('.reservation-list').append(newReservation);
	});
}

function initMap() {
		var monks = {lat: 40.8054491, lng: -73.9654415};
        var map = new google.maps.Map(document.getElementById('map'), {
          center: monks,
          zoom: 12,
          scrollwheel: false
        });
        var marker = new google.maps.Marker({
          position: monks,
          map: map,
          title: "Monks Cafe"
        });
      }
