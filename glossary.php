<!DOCTYPE HTML system "about:legacy-compat">
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Petrarchive: Instructions</title>

  <link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="js/jquery-ui/jquery-ui.min.css" />

  
  <link href="css/teibp.css" media="screen, projection" rel="stylesheet" type="text/css" />  
  <link href="css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />  
  <link href="css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />      

  <link rel="stylesheet" type="text/css" href="css/stylesheets/screen.css" />

  <style>
    ol {
      list-style-type: decimal;
      margin-left: 3rem;
      padding-right: 3rem;
    }

    ol li {
      margin-bottom: 1rem;
    }

    li > ol {
      margin-left: 2rem;
    }

    ol[type="a"] {
      list-style-type: lower-alpha;
    }

    ol[type="A"] {
      list-style-type: upper-alpha;
    }

    section {
      margin-top: 1.5rem;
    }

    main.instructions {
      margin-top: 5.5rem;
    }

    aside.nav a {
      text-decoration: none;
      margin-left: 1rem;
      text-transform: capitalize;
    }

    @media (min-width: 768px) {
      aside.nav {
          position: -webkit-sticky;
          position: sticky;
          top: 6rem;
          z-index: 1000;
          height: calc(100vh - 6rem);
      }
    }
  </style>
</head>
<body>
  <main class="container  ">
    <header>
        <?php include( "sticky_header.html"); ?>
    </header>

    <aside class="col-12 col-md-3 nav flex-column">
      <!-- 
        Populate this nav with <a> using Javascript below
      -->
    </aside>

    <main class="row col-12 col-md-9 glossary">
    </main>
  </main>

	<?php include "footer.html"; ?>

	<script src="https://use.fontawesome.com/57840704ee.js"></script>

  <script type="text/javascript" src="dist/js/glossary.bundle.js"></script>

</body>
</html>
