<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title> Petrarchive: Visual Index to Vat. lat. 3195 </title>
	
	<link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css" />
	
	<link href="css/teibp.css" media="screen, projection" rel="stylesheet" type="text/css" />  
	<link href="css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />  
	<link href="css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />      

	<link rel="stylesheet" type="text/css" href="css/stylesheets/screen.css" />

<!-- 	body {background-color:#251d03; margin:0;} 

#banner {width:100%;background-color:#a23725;}-->
	<style type="text/css">
	
	/* img {max-height:400px;max-width:291px;} */
	
	.fascicle-container {
        height: 0;             /* collapse the container's height */
        padding-top: 20%;
        position: relative;    /* create positioning context for svg */
	}

	.fascicle-container svg {
		position: absolute;
		top: 0;
		left: 0;
		cursor: pointer;
	}

	.fascicles nav .fascicle-container {
		border: 2px solid transparent;
	}
	.fascicles nav .fascicle-container.active {
		border: 2px solid #aaa;
	}
	.fascicles nav .fascicle-container:hover {
		background-color: #ddd;
	}

	.side:hover {
		cursor: pointer;
		opacity: .5;
	}

	#visindex div {
	}

	#content {
		width: 100%;
	}

	#vizindex a {
		max-width:100px !important;
		max-height:200px !important;
	}
	
	#visindex img {
		opacity: 1;
		max-width:100px !important;
		max-height:200px !important;
		float:left;
		width: 100px;
		margin: .2em .5em;
	}
	
	.carousel {
		width: 100%;
		display: flex;
		flex-wrap: nowrap; 
		overflow-x: auto;
	}
	
	.fascicle .fascicle  img {
		flex: 0 0 auto;
		border-bottom:1px dashed black;
		padding-bottom:.5em;
		padding-top:.5em;
		position:relative;
	}
	
	.clearfix:after { 
		content: "."; 
		visibility: hidden; 
		display: block; 
		height: 0; 
		clear: both;
	}
	
	
	#visindex h1 {
		border-bottom:none;
		margin-bottom:0;
		margin-top:1em;
		font-size: .8em;
		font-weight:100;
		letter-spacing:0.05em;
	}

	.side {
		stroke: black;
	}
	
	.side.fur {
		stroke: brown;
	}
	.side.flesh {
		stroke: orange;
	}


	.side.click-active {
		stroke-width: .5;
		stroke: black;
	}

	div.tooltip {	
		position: absolute;			
		text-align: center;			
		width: 60px;					
		height: 28px;					
		padding: 2px;				
		font: 12px sans-serif;		
		background: lightsteelblue;	
		border: 0px;		
		border-radius: 8px;			
		pointer-events: none;			
	}

	div.tooltip img {
		width: 250px;
	}
	
	</style>
</head>
<body>
<div id="" style="margin-left: 2em; margin-top: 5em; overflow-x: auto; overflow-y: hidden;">
	<header>
		<?php include( "sticky_header.html"); ?>
	</header>

	<main class="">

	<h1 style="margin-top: 5em;">
		A visual index to Petrarch's <cite>Rerum vulgarium fragmenta</cite>, Vat. Lat. 3195
	</h1>

	<svg id="svg"></svg>

	<div class="fascicles container" data-controller="fascicles">
		<header class="row justify-content-center">
			<nav class="row no-gutters col-md-6"
				data-action='click->fascicles#activateFascicle'>
			</nav>
		</header>

		<div data-fascicles-active="" class="active-fascicle row">
			<div class="col col-md-4 row">
				<h1 class="col-md-8" data-target="fascicles.title">
				</h1>

				<p class="col-md-4 chartae-range">
					<span data-target="fascicles.min"></span> -
					<span data-target="fascicles.max"></span>
				</p>

				<div class="col">
					<div class="col-lg-10">
						<img data-target="fascicles.viz" class="viz fit" />
					</div>	

					<p data-target="fascicles.singlePoemFirstLine" class="col">
					</p>

					<a data-target="fascicles.xmlLink" class="col"
					href="">
						View full Text <span data-target="fascicles.side"></span>
					</a>
				</div>
			</div>

			<div data-action="click->fascicles#activateSide"
			data-target="fascicles.single" class="container col-md-8">
				
			</div>
		</div>
	</div>

	<!--
		We hide this #visindex element to the user.
		IT is however the source/information that we 
		leverage to generate the visual fasciles above in 
		the .fascicles.container element
	-->
	<div id="visindex" class="hide">
		<div class="fascicle quaternion clearfix" style="margin-bottom:5px;">
			<h1 style="margin-bottom:.5em; border:none;">
				Fascicle I: quaternion
			</h1>
			<div class="carousel">
				<a href="content/c001r.xml"><img alt="vat. lat. 3195, c. 1r" src="images/visindex/c001r.svg" /></a> <a href="content/c001v.xml"><img alt="vat. lat. 3195, c. 1v" src="images/visindex/c001v.svg" /></a> <a href="content/c002r.xml"><img alt="vat. lat. 3195, c. 2r" src="images/visindex/c002r.svg" /></a> <a href="content/c002v.xml"><img alt="vat. lat. 3195, c. 2v" src="images/visindex/c002v.svg" /></a> <a href="content/c003r.xml"><img alt="vat. lat. 3195, c. 3r" src="images/visindex/c003r.svg" /></a> <a href="content/c003v.xml"><img alt="vat. lat. 3195, c. 3v" src="images/visindex/c003v.svg" /></a> <a href="content/c004r-c005r.xml#c004r"><img alt="vat. lat. 3195, c. 4r" src="images/visindex/c004r.svg" /></a> <a href="content/c004r-c005r.xml#c004v"><img alt="vat. lat. 3195, c. 4v" src="images/visindex/c004v.svg" /></a> <a href="content/c004r-c005r.xml#c005r"><img alt="vat. lat. 3195, c. 5r" src="images/visindex/c005r.svg" /></a> <a href="content/c005v-c007r.xml#c005v"><img alt="vat. lat. 3195, c. 5v" src="images/visindex/c005v.svg" /></a> <a href="content/c005v-c007r.xml#c006r"><img alt="vat. lat. 3195, c. 6r" src="images/visindex/c006r.svg" /></a> <a href="content/c005v-c007r.xml#c006v"><img alt="vat. lat. 3195, c. 6v" src="images/visindex/c006v.svg" /></a> <a href="content/c005v-c007r.xml#c007r"><img alt="vat. lat. 3195, c. 7r" src="images/visindex/c007r.svg" /></a> <a href="content/c007v.xml"><img alt="vat. lat. 3195, c. 7v" src="images/visindex/c007v.svg" /></a> <a href="content/c008r.xml"><img alt="vat. lat. 3195, c. 8r" src="images/visindex/c008r.svg" /></a> <a href="content/c008v-c009v.xml#c008v"><img alt="vat. lat. 3195, c. 8v" src="images/visindex/c008v.svg" /></a> 
			</div>	
		</div>
	
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle II: quaternion
			</h1>
			<div class="carousel">
				<a href="content/c008v-c009v.xml#c009r"><img alt="vat. lat. 3195, c. 9r" src="images/visindex/c009r.svg" /></a> <a href="content/c008v-c009v.xml#c009v"><img alt="vat. lat. 3195, c. 9v" src="images/visindex/c009v.svg" /></a> <a href="content/c010r.xml"><img alt="vat. lat. 3195, c. 10r" src="images/visindex/c010r.svg" /></a> <a href="content/c010v.xml"><img alt="vat. lat. 3195, c. 10v" src="images/visindex/c010v.svg" /></a> <a href="content/c011r-c011v.xml#c011r"><img alt="vat. lat. 3195, c. 11r" src="images/visindex/c011r.svg" /></a> <a href="content/c011r-c011v.xml#c011v"><img alt="vat. lat. 3195, c. 11v" src="images/visindex/c011v.svg" /></a> <a href="content/c012r-c012v.xml#c012r"><img alt="vat. lat. 3195, c. 12r" src="images/visindex/c012r.svg" /></a> <a href="content/c012r-c012v.xml#c012v"><img alt="vat. lat. 3195, c. 12v" src="images/visindex/c012v.svg" /></a> <a href="content/c013r-c013v.xml#c013r"><img alt="vat. lat. 3195, c. 13r" src="images/visindex/c013r.svg" /></a> <a href="content/c013r-c013v.xml#c013v"><img alt="vat. lat. 3195, c. 13v" src="images/visindex/c013v.svg" /></a> <a href="content/c014r.xml"><img alt="vat. lat. 3195, c. 14r" src="images/visindex/c014r.svg" /></a> <a href="content/c014v.xml"><img alt="vat. lat. 3195, c. 14v" src="images/visindex/c014v.svg" /></a> <a href="content/c015r-c018v.xml#c015r"><img alt="vat. lat. 3195, c. 15r" src="images/visindex/c015r.svg" /></a> <a href="content/c015r-c018v.xml#c015v"><img alt="vat. lat. 3195, c. 15v" src="images/visindex/c015v.svg" /></a> <a href="content/c015r-c018v.xml#c016r"><img alt="vat. lat. 3195, c. 16r" src="images/visindex/c016r.svg" /></a> <a href="content/c015r-c018v.xml#c016v"><img alt="vat. lat. 3195, c. 16v" src="images/visindex/c016v.svg" /></a> 
			</div>
		</div>
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle III: quaternion
			</h1>
			<div class="carousel">
				<a href="content/c015r-c018v.xml#c017r"><img alt="vat. lat. 3195, c. 17r" src="images/visindex/c017r.svg" /></a> <a href="content/c015r-c018v.xml#c017v"><img alt="vat. lat. 3195, c. 17v" src="images/visindex/c017v.svg" /></a> <a href="content/c015r-c018v.xml#c018r"><img alt="vat. lat. 3195, c. 18r" src="images/visindex/c018r.svg" /></a> <a href="content/c015r-c018v.xml#c018v"><img alt="vat. lat. 3195, c. 18v" src="images/visindex/c018v.svg" /></a> <a href="content/c019r.xml"><img alt="vat. lat. 3195, c. 19r" src="images/visindex/c019r.svg" /></a> <a href="content/c019v.xml"><img alt="vat. lat. 3195, c. 19v" src="images/visindex/c019v.svg" /></a> <a href="content/c020r.xml"><img alt="vat. lat. 3195, c. 20r" src="images/visindex/c020r.svg" /></a> <a href="content/c020v.xml"><img alt="vat. lat. 3195, c. 20v" src="images/visindex/c020v.svg" /></a> <a href="content/c021r.xml"><img alt="vat. lat. 3195, c. 21r" src="images/visindex/c021r.svg" /> <a href="content/c021v.xml"><img alt="vat. lat. 3195, c. 21v" src="images/visindex/c021v.svg" /></a> <a href="content/c022r.xml"><img alt="vat. lat. 3195, c. 22r" src="images/visindex/c022r.svg" /></a> <a href="content/c022v-c023r.xml"><img alt="vat. lat. 3195, c. 22v" src="images/visindex/c022v.svg" /></a> <a href="content/c022v-c023r.xml#c023r"><img alt="vat. lat. 3195, c. 23r" src="images/visindex/c023r.svg" /></a> <a href="content/c023v.xml"><img alt="vat. lat. 3195, c. 23v" src="images/visindex/c023v.svg" /> <a href="content/c024r.xml"><img alt="vat. lat. 3195, c. 24r" src="images/visindex/c024r.svg" /></a> <a href="content/c024v-c025v.xml#c024v"><img alt="vat. lat. 3195, c. 24v" src="images/visindex/c024v.svg" /></a> 
			</div>
		</div>
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle IV: quaternion
			</h1>
			<div class="carousel">
				<a href="content/c024v-c025v.xml#c025r"><img alt="vat. lat. 3195, c. 25r" src="images/visindex/c025r.svg" /></a> <a href="content/c024v-c025v.xml#c025v"><img alt="vat. lat. 3195, c. 25v" src="images/visindex/c025v.svg" /></a> <a href="content/c026r.xml"><img alt="vat. lat. 3195, c. 26r" src="images/visindex/c026r.svg" /></a> <a href="content/c026v.xml"><img alt="vat. lat. 3195, c. 26v" src="images/visindex/c026v.svg" /></a> <a href="content/c027r-c029v.xml#c027r"><img alt="vat. lat. 3195, c. 27r" src="images/visindex/c027r.svg" /></a> <a href="content/c027r-c029v.xml#c027v"><img alt="vat. lat. 3195, c. 27v" src="images/visindex/c027v.svg" /></a> <a href="content/c027r-c029v.xml#c028r"><img alt="vat. lat. 3195, c. 28r" src="images/visindex/c028r.svg" /></a> <a href="content/c027r-c029v.xml#c028v"><img alt="vat. lat. 3195, c. 28v" src="images/visindex/c028v.svg" /></a> <a href="content/c027r-c029v.xml#c029r"><img alt="vat. lat. 3195, c. 29r" src="images/visindex/c029r.svg" /></a> <a href="content/c027r-c029v.xml#c029v"><img alt="vat. lat. 3195, c. 29v" src="images/visindex/c029v.svg" /> <a href="content/c030r.xml"><img alt="vat. lat. 3195, c. 30r" src="images/visindex/c030r.svg" /></a> <a href="content/c030v-c031r.xml#c030v"><img alt="vat. lat. 3195, c. 30v" src="images/visindex/c030v.svg" /></a> <a href="content/c030v-c031r.xml#c031r"><img alt="vat. lat. 3195, c. 31r" src="images/visindex/c031r.svg" /></a> <a href="content/c031v.xml"><img alt="vat. lat. 3195, c. 31v" src="images/visindex/c031v.svg" /></a> <a href="content/c032r-c032v.xml#c032r"><img alt="vat. lat. 3195, c. 32r" src="images/visindex/c032r.svg" /></a> <a href="content/c032r-c032v.xml#c032v"><img alt="vat. lat. 3195, c. 32v" src="images/visindex/c032v.svg" /></a> 
			</div>
		</div>
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle V: quaternion
			</h1>
			<div class="carousel">
				<a href="content/c033r.xml"><img alt="vat. lat. 3195, c. 33r" src="images/visindex/c033r.svg" /></a> <a href="content/c033v.xml"><img alt="vat. lat. 3195, c. 33v" src="images/visindex/c033v.svg" /></a> <a href="content/c034r.xml"><img alt="vat. lat. 3195, c. 34r" src="images/visindex/c034r.svg" /></a> <a href="content/c034v.xml"><img alt="vat. lat. 3195, c. 34v" src="images/visindex/c034v.svg" /></a> <img alt="vat. lat. 3195, c. 35r" src="images/visindex/c035r.svg" /> <a href="content/c035v.xml"><img alt="vat. lat. 3195, c. 35v" src="images/visindex/c035v.svg" /></a> <a href="content/c036r.xml"><img alt="vat. lat. 3195, c. 36r" src="images/visindex/c036r.svg" /></a> <a href="content/c036v.xml"><img alt="vat. lat. 3195, c. 36v" src="images/visindex/c036v.svg" /></a> <a href="content/c037r.xml"><img alt="vat. lat. 3195, c. 37r" src="images/visindex/c037r.svg" /></a> <a href="content/c037v.xml"><img alt="vat. lat. 3195, c. 37v" src="images/visindex/c037v.svg" /></a> <img alt="vat. lat. 3195, c. 38r" src="images/visindex/c038r.svg" /> <a href="content/c038v.xml"><img alt="vat. lat. 3195, c. 38v" src="images/visindex/c038v.svg" /></a> <a href="content/c039r.xml"><img alt="vat. lat. 3195, c. 39r" src="images/visindex/c039r.svg" /></a> <img alt="vat. lat. 3195, c. 39v" src="images/visindex/c039v.svg" /> <img alt="vat. lat. 3195, c. 40r" src="images/visindex/c040r.svg" /> <img alt="vat. lat. 3195, c. 40v" src="images/visindex/c040v.svg" /> 
			</div>
		</div>
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle VI: quaternion
			</h1>
			<div class="carousel">
				<img alt="vat. lat. 3195, c. 41r" src="images/visindex/c041r.svg" /> <img alt="vat. lat. 3195, c. 41v" src="images/visindex/c041v.svg" /> <img alt="vat. lat. 3195, c. 42r" src="images/visindex/c042r.svg" /> <img alt="vat. lat. 3195, c. 42v" src="images/visindex/c042v.svg" /> <img alt="vat. lat. 3195, c. 43r" src="images/visindex/c043r.svg" /> <img alt="vat. lat. 3195, c. 43v" src="images/visindex/c043v.svg" /> <img alt="vat. lat. 3195, c. 44r" src="images/visindex/c044r.svg" /> <img alt="vat. lat. 3195, c. 44v" src="images/visindex/c044v.svg" /> <a href="content/c045r.xml"><img alt="vat. lat. 3195, c. 45r" src="images/visindex/c045r.svg" /></a> <img alt="vat. lat. 3195, c. 45v" src="images/visindex/c045v.svg" /> <img alt="vat. lat. 3195, c. 46r" src="images/visindex/c046r.svg" /> <img alt="vat. lat. 3195, c. 46v" src="images/visindex/c046v.svg" /> <img alt="vat. lat. 3195, c. 47r" src="images/visindex/c047r.svg" /> <img alt="vat. lat. 3195, c. 47v" src="images/visindex/c047v.svg" /> <img alt="vat. lat. 3195, c. 48r" src="images/visindex/c048r.svg" /> <img alt="vat. lat. 3195, c. 48v" src="images/visindex/c048v.svg" /> 
			</div>
		</div>
		<div class="fascicle binion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle VII: binion
			</h1>
			<div class="carousel">
				<img alt="vat. lat. 3195, c. 49r" src="images/visindex/c049r.svg" /> <img alt="vat. lat. 3195, c. 49v" src="images/visindex/c049v.svg" /> <img alt="vat. lat. 3195, c. 50r" src="images/visindex/c050r.svg" /> <img alt="vat. lat. 3195, c. 50v" src="images/visindex/c050v.svg" /> <img alt="vat. lat. 3195, c. 51r" src="images/visindex/c051r.svg" /> <img alt="vat. lat. 3195, c. 51v" src="images/visindex/c051v.svg" /> <img alt="vat. lat. 3195, c. 52r" src="images/visindex/c052r.svg" /> <img alt="vat. lat. 3195, c. 52v" src="images/visindex/c052v.svg" /> 
			</div>
		</div>
		<div class="fascicle quaternion clearfix">
			<h1 style="margin-bottom:.5em;">
				Fascicle VIII: quaternion
			</h1>
			<div class="carousel">
				<img alt="vat. lat. 3195, c. 53r" src="images/visindex/c053r.svg" /> <img alt="vat. lat. 3195, c. 53v" src="images/visindex/c053v.svg" /> <img alt="vat. lat. 3195, c. 54r" src="images/visindex/c054r.svg" /> <img alt="vat. lat. 3195, c. 54v" src="images/visindex/c054v.svg" /> <img alt="vat. lat. 3195, c. 55r" src="images/visindex/c055r.svg" /> <img alt="vat. lat. 3195, c. 55v" src="images/visindex/c055v.svg" /> <img alt="vat. lat. 3195, c. 56r" src="images/visindex/c056r.svg" /> <img alt="vat. lat. 3195, c. 56v" src="images/visindex/c056v.svg" /> <img alt="vat. lat. 3195, c. 57r" src="images/visindex/c057r.svg" /> <img alt="vat. lat. 3195, c. 57v" src="images/visindex/c057v.svg" /> <img alt="vat. lat. 3195, c. 58r" src="images/visindex/c058r.svg" /> <img alt="vat. lat. 3195, c. 58v" src="images/visindex/c058v.svg" /> <a href="content/c059r.xml"><img alt="vat. lat. 3195, c. 59r" src="images/visindex/c059r.svg" /></a> <img alt="vat. lat. 3195, c. 59v" src="images/visindex/c059v.svg" /> <img alt="vat. lat. 3195, c. 60r" src="images/visindex/c060r.svg" /> <img alt="vat. lat. 3195, c. 60v" src="images/visindex/c060v.svg" /> 
			</div>
		</div>
<div class="fascicle binion-sandwich clearfix" style="clear:none;">
    <h1 style="margin-bottom:.5em;">
        Fascicles IX, X and XI: two binions within a binion 
    </h1>
	<div class="carousel">
		<div class="extra-binion">
        	<img alt="vat. lat. 3195, c. 61r" src="images/visindex/c061r.svg" /> <img alt="vat. lat. 3195, c. 61v" src="images/visindex/c061v.svg" /> <img alt="vat. lat. 3195, c. 62r" src="images/visindex/c062r.svg" /> <img alt="vat. lat. 3195, c. 62v" src="images/visindex/c062v.svg" />
		</div>

		<div class="intra-binion">
			<img style="padding-right: .5em; padding-bottom: .5em; padding-left:.5em; border-left:1px dashed black;" alt="vat. lat. 3195, c. 63r" src="images/visindex/c063r.svg" /> <img alt="vat. lat. 3195, c. 63v" src="images/visindex/c063v.svg" /> <img alt="vat. lat. 3195, c. 64r" src="images/visindex/c064r.svg" /> <img alt="vat. lat. 3195, c. 64v" src="images/visindex/c064v.svg" /> <img alt="vat. lat. 3195, c. 65r" src="images/visindex/c065r.svg" /> <img alt="vat. lat. 3195, c. 65v" src="images/visindex/c065v.svg" /> <img alt="vat. lat. 3195, c. 66r" src="images/visindex/c066r.svg" /> <img style="padding-right: .5em; padding-bottom: .5em; padding-left:.5em; border-right:1px dashed black;" alt="vat. lat. 3195, c. 66v" src="images/visindex/c066v.svg" /> 
		</div>
		<div class="intra-binion">
			<img style="padding-right: .5em; padding-bottom: .5em; padding-left:.5em; border-left:1px dashed black;" alt="vat. lat. 3195, c. 67r" src="images/visindex/c067r.svg" /> <img alt="vat. lat. 3195, c. 67v" src="images/visindex/c067v.svg" /> <img alt="vat. lat. 3195, c. 68r" src="images/visindex/c068r.svg" /> <img alt="vat. lat. 3195, c. 68v" src="images/visindex/c068v.svg" /> <img alt="vat. lat. 3195, c. 69r" src="images/visindex/c069r.svg" /> <a href="content/c069v-c070r.xml"><img alt="vat. lat. 3195, c. 69v" src="images/visindex/c069v.svg" /></a> <a href="content/c069v-c070r.xml#c070r"><img alt="vat. lat. 3195, c. 70r" src="images/visindex/c070r.svg" /></a> <img style="padding-right:.5em; padding-bottom:.5em; padding-left:.5em; border-right:1px dashed black;" alt="vat. lat. 3195, c. 70v" src="images/visindex/c070v.svg" /> 
		</div>

		<div class="extra-binion">
			<img alt="vat. lat. 3195, c. 71r" src="images/visindex/c071r.svg" /> <img alt="vat. lat. 3195, c. 71v" src="images/visindex/c071v.svg" /> <img alt="vat. lat. 3195, c. 72r" src="images/visindex/c072r.svg" /> <img alt="vat. lat. 3195, c. 72v" src="images/visindex/c072v.svg" /> 
		</div>
	</div>
</div>
		<!--<div class="page-spacer" style="margin-left:.3em; min-width:291px; min-height:400px" /> -->
	</div>
	</main>

	</div>

	<section class="hide" id="shadow-data">	
		<div class="vizindex convert-url">
			<?php include "./vizindex.html"; ?>
		</div>

		<?php include "./textindex.html"; ?>
	</section>

	<?php include "footer.html"; ?>

<script src="https://use.fontawesome.com/57840704ee.js"></script>

<script type="text/javascript" src="dist/js/vizindex.bundle.js"></script>

</body>
</html>
