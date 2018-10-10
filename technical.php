<!DOCTYPE HTML system "about:legacy-compat">
<html lang="en">
<head>
	<meta charset="utf-8" />
    <title>Petrarchive: Technical</title>
    
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

	<link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css" />
    <link rel="stylesheet" type="text/css" href="js/jquery-ui/jquery-ui.min.css" />

    
    <link href="css/teibp.css" media="screen, projection" rel="stylesheet" type="text/css" />  
    <link href="css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />  
    <link href="css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />      

    <link rel="stylesheet" type="text/css" href="css/stylesheets/screen.css" />
</head>

<body>
    <main class="container">
        <header>
            <?php include( "sticky_header.html"); ?>
        </header>

        <main class="row">
		<div id="content" class="col">
		<h1>Technical Architecture</h1>

		<p>Petrarchive documents are encoded in XML according to the Text Encoding Initiative (TEI) <cite><a href="http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html">P5: Guidelines for Electronic Text Encoding and Interchange</a></cite>. </p>

		<p><a href="http://teiboilerplate.org">TEI Boilerplate</a> is used to render both diplomatic transcriptions and edited views of the text. TEI Boilerplate code has been extensively modified to display diplomatic and edited views of the text and to accurately render the Petrarchan visual poetics of Vat. Lat. 3195.</p>

		<p>The TEI/XML content, XSLT, CSS, JavaScript, and other files are maintained, with version control, in a GitHub repository.</p>
		</div>
        </main>
    </main>

    <?php include "footer.html"; ?>


    <script src="https://use.fontawesome.com/57840704ee.js"></script>

    <script type="text/javascript" src="js/jquery/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui/jquery-ui.min.js"></script>
    
    <script type="text/javascript" src="js/tether/tether.min.js"></script>
    <script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>


    <script type="text/javascript" src="js/auxillary_page.js"></script>
</body>
</html>
