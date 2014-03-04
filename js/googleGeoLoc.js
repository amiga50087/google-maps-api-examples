	var markers = [];
    var coordinata = [];
    var listaInfoWindow = [];
    var listaCoordinate = ["45.0781:7.6761",
                           "45.8566:9.4039",
                           "43.533333:13.616667",
                           "45.016667:7.466667",
                           "45.033333:7.35",
                           "45.483333:9.2",
                           "44.5:11.35",
                           "45.433333:12.316667",
                           "46.216667:10.166667",
                           "45.466667:12.35",
                           "44:8.1666",
                           "43.966667:8.15",
                           "43.766667:11.25",
                           "44.063333:12.580833",
                           "45.483333:10.6 "];
  	var listaContenuti = ["Torino","Lecco","Sirolo","Bruino","Giaveno","Milano","Bologna",
              "Venezia","Tirano","Isola di Murano", "Alassio", 
              "Laigueglia", "Firenze", "Rimini","Sirmione"];
	 
  	var encodedPoints = "ixmrGmm~m@{KwzAqW{DyByF\\yG}B}H`AyY~A{RhAyClEh@~ZrG`Z}HnU_hAlVpFb}@ad@lPwQxYmq@d_@~Ex[|x@xi@oc@~LyRlH{a@lBglAhGnFjGuAtDgQxEgJnd@za@toAddAfqAdaBzsAviBhZ|}ApQtAzErjAsI~c@b@vPlEvQ|FlEzSxJxMfQuAlj@dCpiAtp@~TrAx{AqC~BgAdE{Gph@DtTfL`]sLxiAdBbKeN|rAeJzVqMpRgT{Kc@mExEcm@ubAsi@vF`a@mPjf@aS|i@ua@~u@wJdIqM{K_Cog@hs@irB`O{h@e_@g\\csBaw@yJdA|@z^\\lHaIfaAsZuHaBwIeIcEqR`VgD~\\qc@eX_rAa{@mv@tLsw@cDcKci@uUa@pIwnCEm[cCqYmL?cH|H_i@|Ae[}[sWdQuQgJe_@si@gAwIfHyJ~BqKpFm[|Imq@hNg}@|Fc["; 

  	function initialize() {
        var center = new google.maps.LatLng(45.0781, 7.6761);

        var map = new google.maps.Map(document.getElementById('mappa'), {
          zoom: 8,
          center: center,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        });

       
        for (var i = 0; i < listaCoordinate.length; i++) {
          var str = listaCoordinate[i];
          coordinata = str.split(":");
          //alert(coordinata);
          var latLng = new google.maps.LatLng(parseFloat(coordinata[0]),
        		  parseFloat(coordinata[1]));
          var marker = new google.maps.Marker({
            position: latLng
          });

			
          var infowindow = new google.maps.InfoWindow({
  			content: listaContenuti[i]
  		  });

          listaInfoWindow.push(infowindow);
  		
	  		(function(i,marker){
	  			google.maps.event.addListener(marker, 'click', function(event) {
	  				listaInfoWindow[i].open(map,marker);
	  			});
	  		})(i,marker);
          
          markers.push(marker);
        }

        var markerCluster = new MarkerClusterer(map, markers);



        var decodedPoints= google.maps.geometry.encoding.decodePath(encodedPoints);
        var encodedPolyline= new google.maps.Polygon ({fillColor:"#000000", fillOpacity:0.7, strokeOpacity:0.4 ,strokeWeight:1.5 ,path:decodedPoints ,clickable:false} );

        encodedPolyline.setMap(map);
        
        }
      google.maps.event.addDomListener(window, 'load', initialize);