<!DOCTYPE html>
<html>
<head>
<title>API Google Maps - PastuWeb</title>
	<meta name="keywords" content="PastuWeb, www.pastuweb.com, Francesco Pasturenzi, API Google Maps" />
	<meta name="author" content="Pasturenzi Francesco, www.pastuweb.com" />
	<meta name="description" content="API Google Maps - PastuWeb" />
	
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<link rel="stylesheet" type="text/css" href="stile1.css" />

<link rel="stylesheet" type="text/css" href="http://code.jquery.com/ui/1.9.1/themes/base/jquery-ui.css" />
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.js"></script>
<script type="text/javascript" src="http://code.jquery.com/ui/1.9.1/jquery-ui.js"></script>

<!-- Mappa Google -->
<link href="http://code.google.com/apis/maps/documentation/javascript/examples/default.css" rel="stylesheet" type="text/css" />
<script type="text/javascript" src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
<script type="text/javascript" src="./js/googleCreaItin.js"></script>

<?php include '../social.php';?>

</head>

<body>
	<?php include_once("../analyticstracking.php") ?>
	<div id="centrato">
		<?php require 'intestazione.php';?>
	
		<div id="corpo" >
		
			<div id="colonna-2" >
				<h1 style="margin-top:-15px;z-index:30;">Utilizzo delle <span style="color:#FF0000;">API Google Maps</span></h1>
    			<?php include '../pulsanti_social_orizz.php';?>
    			
    			<div style="margin:auto;width:810px;" class="content">
	    			<div class="ui-widget-content ui-corner-all" style="border:2px solid #48AA4E;width:250px;height:620px;float:left;">
	    				<br><br><br><br><br>
	    				<p><strong>Esempi:</strong></p>
	    				<ul>
	    					<li><a style="color:#0066FF;"  href="./index.php"> Luoghi visitati</a></li>
	    					<li><a style="color:#FF0000;"  href="./creaItinerario.php"> Creazione itinerario</a></li>
	    					<li><a style="color:#0066FF;"  href="./calcolaPercorso.php"> Calcola percorso</a></li>
	    					<li><a style="color:#0066FF;"  href="./geoLocalizzazione.php"> Geo Localizzazione</a></li>
	    				</ul>
	    				<div style="padding:10px;text-align:justify;font-size:13px;">
	    					In questo esempio viene mostrata la <strong>creazione di un Itinerario attraverso la gestione degli eventi click sulla Mappa Google</strong>.<br><br>
	    					<strong>Ad ogni click</strong> viene creto un marker personalizzato e un InfoWindow con il contenuto della TextArea successivamente riempita.<br>
	    					<strong>NON</strong> si possono creare nuovi marker se non è stata specificata una descrizione di quello precedente; questo è l'unico vincolo che ho scelto.
	    				</div>
	    				
	    			</div>
	    			<div style="width:540px;float:left;">
		    			<div id="header" style="width:540px;height:200px;margin-left:10px;">
	    			
	    				</div>
	    				<br>
		    			<div id="mappa" class="ui-widget-content ui-corner-all" style="width:540px;height:400px;margin-left:10px;text-align:center;"> 
		    			
		    				<img src="../images/loading.gif" />
		    	
		    			</div>
		    		</div>
	    			<div style="clear:left;"></div>
	    		</div>
    			<br/>
    			
					<br>
    			<div id="pie-di-pagina">
					<?php require 'frm_footer.php';?>
				</div>
					<noscript>
					<p class="Avvisi" style="color:#000">
					<strong>Attenzione: </strong>Il tuo JavaScript NON E' ATTIVO! <br />
					Alcune cose potrebbero non funzionare.
					</p>
					</noscript>
			</div>
		</div>
	</div>
	
	<?php require '../frm_dialogs.php';?>
	
</body>
</html>
