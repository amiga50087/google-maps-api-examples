var map;
var marker;
var infowindow;
var listaInfoWindow = new Array();

var coordinateLuoghi = [new google.maps.LatLng(45.0781, 7.6761),
                          new google.maps.LatLng(45.8566, 9.4039),
                          new google.maps.LatLng(43.533333,13.616667),
                          new google.maps.LatLng(45.016667, 7.466667),
                          new google.maps.LatLng(45.033333, 7.35),
                          new google.maps.LatLng(45.483333, 9.2),
                          new google.maps.LatLng(44.5, 11.35),
                          new google.maps.LatLng(45.433333, 12.316667),
                          new google.maps.LatLng(46.216667, 10.166667),
                          new google.maps.LatLng(45.466667,12.35),
                          new google.maps.LatLng(44,8.1666 ),
                          new google.maps.LatLng(43.966667, 8.15),
                          new google.maps.LatLng(43.766667,11.25 ),
                          new google.maps.LatLng(44.063333, 12.580833),
                          new google.maps.LatLng(45.483333,10.6 )];
var nomiLuoghi = ["Torino","Lecco","Sirolo","Bruino","Giaveno","Milano","Bologna",
            "Venezia","Tirano","Isola di Murano", "Alassio", 
            "Laigueglia", "Firenze", "Rimini","Sirmione"];
var descrizioneLuoghi = ["<strong>Torino</strong>: città natale",
                   "<strong>Lecco</strong>: città della mia ragazza",
                   "<strong>Sirolo</strong>: amici",
                   "<strong>Bruino</strong>: dove vivo",
                   "<strong>Giaveno</strong>: città natale della mia ragazza",
                   "<strong>Milano</strong>: amici",
                   "<strong>Bologna</strong>: parenti",
                   "<strong>Venezia</strong>: parenti",
                   "<strong>Tirano</strong>: di passaggio",
                   "<strong>Isola di Murano</strong>: parenti",
                   "<strong>Alassia</strong>: vacanza",
                   "<strong>Laigueglia</strong>: vacanza",
                   "<strong>Firenze</strong>: parenti",
                   "<strong>Rimini</strong>: vacanza",
                   "<strong>Sirmione</strong>: vacanza / terme"];



/************************************************************************************************
Luoghi visitati (default)
*************************************************************************************************/
  function initialize() {
	  
	  //crea HTML nell'HEADER
	  $('#header').html("");
	  $('#directionsPanel').html("");
	  $('#header').html(
	  		"<div style=\"text-align:center;color:#000000;font-size:25px;\">" +
	  		"<p>Cliccare su un <strong>ESEMPIO</strong> per caricare la nuova mappa e le nuove funzionalit&agrave;.</p>" +
	  		"</div>");
	  
    var centro = coordinateLuoghi[0];
    var myOptions = {
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.SATELLITE,
      center: centro,
      streetViewControl:true
    }
    map = new google.maps.Map(document.getElementById("mappa"), myOptions);

	for(var i=0; i<=coordinateLuoghi.length; i++){

		marker = new google.maps.Marker({
			position: coordinateLuoghi[i],
			map: map,
			title: nomiLuoghi[i]
		});
		
		infowindow = new google.maps.InfoWindow({
			content: "<div style=\"width:300px;\">"+descrizioneLuoghi[i]+"</div>"
		});

		listaInfoWindow.push(infowindow);
		
		(function(i,marker){
			google.maps.event.addListener(marker, 'click', function(event) {
				listaInfoWindow[i].open(map,marker);
			});
		})(i,marker);
	}
	return false;
  }

/************************************************************************************************
READY
*************************************************************************************************/
  $(document).ready(function() {
	  initialize();

	  
	//Twitter
		$( "#twitter_dialog" ).dialog({
			autoOpen: false,
			modal:true,
			draggable:false,
			resizable:false,
			width: 620
		});
		$( "#twitter_dialog_link" ).click(function( event ) {
			$( "#twitter_dialog" ).dialog( "open" );
			event.preventDefault();
		});

		//Calendar
		$( "#calendar_dialog" ).dialog({
			autoOpen: false,
			modal:true,
			draggable:false,
			resizable:false,
			width: 620
		});
		$( "#calendar_dialog_link" ).click(function( event ) {
			$( "#calendar_dialog" ).dialog( "open" );
			event.preventDefault();
		});

		//Attiva JavaScript
		$( "#attiva_javascript_dialog" ).dialog({
			autoOpen: false,
			modal:true,
			draggable:false,
			resizable:false,
			width: 620
		});
		$( "#attiva_javascript_dialog_link" ).click(function( event ) {
			$( "#attiva_javascript_dialog" ).dialog( "open" );
			event.preventDefault();
		});
		
		

  });