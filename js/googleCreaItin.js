var map;
var poly;
var contaMarker = 1;
var listaInfoWindow = new Array();
var abilita_marker = 1;

/************************************************************************************************
Crea Itinerario
*************************************************************************************************/
  function itinerario(){
	  
	  //crea HTML nell'HEADER
	  $('#header').html("");
	  $('#header').html(
			"<div class=\"bordiRotondiOmbra1\" >" +
	  			"<strong>Funzionamento</strong>:<br>" +
	  			"1) Esiste una cartella immagini, con dentro 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg.<br>" +
	  			"2) Fare i click sulla mappa; Il <strong>numero di click <br>deve essere pari al numero di immagini salvate</strong> nella cartella<br>" +
	  			"3) Cliccate sulle varie immagini, si aprir&agrave; un InfoWindows<br>"+
	  		"</div>" +
	  		"<div id=\"testoMarkerContainer\" style=\"width:500px;margin:auto;\" class=\"bordiRotondiNoOmbra1\">" +
		  		"<div style=\"text-align:center;color:#000000;font-size:16px;\">Testo ULTIMO MARKER:</div>" +
	  			"<div  style=\"overflow:auto;\">" +
	  				"<textarea id=\"testoMarker\" style=\"width:220px;height:20px;resize:none;\">" +
	  				"</textarea>" +
	  				"<a href=\"#\" id=\"salva\" >SALVA</a>&nbsp;&nbsp;&nbsp;<a href=\"#\" id=\"resetta\" >RESETTA</a>" +
	  			"</div>" +
	  		"</div>");
	  
	  //crea eventi associati ai nuovi elementi
	  	$('#testoMarker').val("");

		$('#salva').click(function(){
			var indice = contaMarker-2;
			listaInfoWindow[indice].setContent("<p>TAPPA #"+(indice+1)+": "+$('#testoMarker').val()+"</p>");
			/*flag*/
			abilita_marker = 1;
			$('#testoMarkerContainer').removeClass("contornoVerdeOmbra");
			$('#testoMarker').val("");
			/*flag*/
		});
		
		$('#resetta').click(function(){
			$('#testoMarker').val("");
		});
	  
	  
	  contaMarker = 1;
		var italia = new google.maps.LatLng(41.94494045937866, 13.70257129687502);
		var myOptions = {
			zoom: 5,
			center: italia,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			rotateControl:false,
			panControl:false,
			zoomControl:false,
			mapTypeControl:true
			
		};
		map = new google.maps.Map(document.getElementById('mappa'), myOptions);

		var polyOptions = {
			strokeColor: '#000000',
			strokeOpacity: 1.0,
			strokeWeight: 3
		}
		poly = new google.maps.Polyline(polyOptions);
		poly.setMap(map);
		// Add a listener for the click event
		google.maps.event.addListener(map, 'click', addLatLng);
		
		listaInfoWindow = new Array();
  }
  
  function addLatLng(event) {

		if(abilita_marker==1){
		path = poly.getPath();
		path.push(event.latLng);

		var icona = new google.maps.MarkerImage("./images_itinerario/"+contaMarker+".jpg",new google.maps.Size(80,80), null, null, new google.maps.Size(80,80));
		var marker = new google.maps.Marker({
			position: event.latLng,
			title: '#' + path.getLength(),
			map: map,
			icon:icona
		});
		$('#testoMarker').val("Scrivi la descrizione della TAPPA #"+contaMarker+"");

		/*flag*/
		$('#testoMarkerContainer').addClass("contornoVerdeOmbra");
		abilita_marker = 0;
		/*flag*/
		
		var contentString = "<p id=\"descr"+contaMarker+"\" > Scrivi la descrizione della TAPPA #"+contaMarker+
							"</p>"; 
		var infowindow = new google.maps.InfoWindow({
			content: contentString
		}); 
		listaInfoWindow.push(infowindow);
		
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map,marker);
		}); 

		contaMarker++;
		}
	}

/************************************************************************************************
READY
*************************************************************************************************/
  $(document).ready(function() {
	  itinerario();
	  
	  
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