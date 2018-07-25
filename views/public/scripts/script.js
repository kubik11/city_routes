
	console.log('script.js has run!!');
	// map initialization 
	var map;
	var initPlace = {
		center: {lat: 46.8786893, lng: 32.0455366},
      	zoom: 15
	}
    map = new google.maps.Map(document.getElementById('map'), initPlace);
 	
 	var input = document.getElementById('place');
 	// Create the autocomplete helper, and associate it with
  	// an HTML text input box.
 	var autocomplete = new google.maps.places.Autocomplete(input);
  		autocomplete.bindTo('bounds', map);
	// Define routs rendering
	var directionsDisplay = new google.maps.DirectionsRenderer({
		map: map
	});
	document.getElementById('submit').addEventListener('click', function(event){
		event.preventDefault();
		var poz = navigator.geolocation.getCurrentPosition(function(position) {
			
			// var arr = [].map.call(document.querySelectorAll('.input-wrap'), function(block) {
			// 	return [].map.call(block.querySelectorAll('.form-control'), function(inp) {
			// 		return inp.value;
			// 	});
			// });
			console.log(position);
			// console.log(arr);
			// define start point
			var val = document.getElementById('place').value;
			var lat = position.coords.latitude;
			var lng = position.coords.longitude;

			// Geocoder.geocode( { : latLngObject }, callback);
			 // Set destination, origin and travel mode.
			var request = {
				destination: val,
				origin: {lat: lat, lng: lng},
				travelMode: 'DRIVING'
			};
			console.log(request);
			// Pass the directions request to the directions service.
			var directionsService = new google.maps.DirectionsService();
				directionsService.route(request, function(response, status) {
					if (status == 'OK') {
						// Display the route on the map.
						directionsDisplay.setDirections(response);
					}else{
						console.log('oh it\'s an error');
					}
			});
		});
		
	});

$.fn.extend({
    zlayer: function(options) {
        var defaults = {
            canvas: document,
            confine: '',
            force: 'push',
            mass: 10
        }
        // merge two objects into one 
        var options = $.extend(defaults, options);
        var o = options;
        var obj = $(this);
        var m = o.mass;
        var c = o.confine;
        return this.each(function() {
            $(o.canvas).mousemove(function(e) {
            	// console.log(e);
                var elm = obj.offset();
                if (o.right) {  
                	// console.log(o.right);
                	var x = e.clientX * 2 ;
                	var y = e.pageY - elm.top - obj.height() / 2;
                	obj.css({
                    // top: cal(y, 'y'),
               		   left: cal(x, 'x')
                	});
                }else{
                	var x = elm.left + e.clientX / 2;
                	var y = e.pageY - elm.top - obj.height() / 2;
	                obj.css({
	                    // top: cal(y, 'y'),
	                    left: cal(x, 'x')
	                });
                }
            });
        });
        function cal(a, t) {
            a = (o.force == 'pull') ? (c == t) ? a = 0 : a = a / m : (c == t) ? a = 0 : a = -a / m;
            return parseInt(a);
        }
    }
});
$(document).ready(function() {
    $('.bottle-1').zlayer({
        mass: 2,
        confine: 'y',
        canvas: 'body',
        force: 'pull',
    });
    $('.hand-offer').zlayer({
        mass: 2,
        confine: 'y',
        canvas: 'body',
        force: 'pull',
        right: true
    });
});
// var infoWindow = new google.maps.InfoWindow({map: map});
// finding the current position
// var poz = navigator.geolocation.getCurrentPosition(function(position) {
// 	console.log(position);
	// var lat = position.coords.latitude;
	// var lng = position.coords.longitude;

// });