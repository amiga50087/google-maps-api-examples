var map;

  /************************************************************************************************
  Calcola Percorso
  *************************************************************************************************/
    var directionDisplay;
    var directionsService;
    var stepDisplay;
    var markerArray = [];
    var destinazione = "Corso Duca degli Abruzzi 35, Torino";
    function percorso() {
  	  
  	//crea HTML nell'HEADER
    	  $('#header').html("");
    	  $('#header').html(
    	  		"<div style=\"text-align:center;color:#000000;font-size:25px;\">" +
    	  		"<p>Inserire un luogo, città, indirizzo per calcolarne il percorso e i tempi di viaggio.</p>" +
    	  		"<b>Partenza: </b>"+
  			"<input id=\"start\" size=\"50\" type=\"text\"/> <input type=\"button\" id=\"mostra\" value=\"Vedi percorso\" />"+
  			"<div id=\"errore\"></div>"+
    	  		"</div>");
    	  
    	  $("#mostra").click(function(){
			  calcRoute();
		  });
		$("#start").change(function(){
			  calcRoute();
		  });
  	    // Instantiate a directions service.
  	    directionsService = new google.maps.DirectionsService();
  	    
  	    var torino = new google.maps.LatLng(45.0667, 7.7000);
  	    var myOptions = {
  	      zoom: 15,
  	      mapTypeId: google.maps.MapTypeId.HYBRID,
  	      center: torino,
  	      streetViewControl:true
  	    }
  	    map = new google.maps.Map(document.getElementById("mappa"), myOptions);
  	    
  	    // Create a renderer for directions and bind it to the map.
  	    var rendererOptions = {
  	      map: map
  	    }
  	    directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
  	    directionsDisplay.setPanel(document.getElementById("directionsPanel"));
  	    
  	    // Instantiate an info window to hold step text.
  	    stepDisplay = new google.maps.InfoWindow();
  	  }

  	  function calcRoute() {
  	  
  	    // First, remove any existing markers from the map.
  	    for (i = 0; i < markerArray.length; i++) {
  	      markerArray[i].setMap(null);
  	    }
  	    // Now, clear the array itself.
  	    markerArray = [];
  	    // Retrieve the start and end locations and create
  	    // a DirectionsRequest using DRIVING directions.
  	    var start = document.getElementById("start").value;
  	    var end = destinazione;
  	    var request = {
  	        origin: start,
  	        destination: end,
  	        travelMode: google.maps.DirectionsTravelMode.DRIVING
  	    };

  	    // Route the directions and pass the response to a
  	    // function to create markers for each step.
  	    directionsService.route(request, function(response, status) {
  	      if (status == google.maps.DirectionsStatus.OK) {
  	        directionsDisplay.setDirections(response);
  	        showSteps(response);
  	      }else{
  	    	  var err = document.getElementById("errore");
  	    	  err.innerHTML = "<b>Errore digitazione!!!</b>";
  	      }
  	    });
  	  }

  	  function showSteps(directionResult) {
  	    // For each step, place a marker, and add the text to the marker's
  	    // info window. Also attach the marker to an array so we
  	    // can keep track of it and remove it when calculating new
  	    // routes.
  	    var myRoute = directionResult.routes[0].legs[0];

  	    for (var i = 0; i < myRoute.steps.length; i++) {
  	      var marker = new google.maps.Marker({
  	        position: myRoute.steps[i].start_point, 
  	        map: map
  	      });
  	      attachInstructionText(marker, myRoute.steps[i].instructions);
  	      markerArray[i] = marker;
  	    }
  	  }

  	  function attachInstructionText(marker, text) {
  	    google.maps.event.addListener(marker, 'click', function() {
  	    	stepDisplay.setContent(text);
  	    	stepDisplay.open(map, marker);
  	      //}
  	    });
  	  }
/************************************************************************************************
READY
*************************************************************************************************/
  $(document).ready(function() {
	  percorso();
	  
	  
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