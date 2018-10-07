
<!DOCTYPE HTML system "about:legacy-compat">
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Petrarchive: Instructions</title>

  <link rel="stylesheet" type="text/css" href="../css/lib/bootstrap.min.css" />

  
  <link href="../css/teibp.css" media="screen, projection" rel="stylesheet" type="text/css" />  
  <link href="../css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />  
  <link href="../css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />      

  <link rel="stylesheet" type="text/css" href="../css/stylesheets/screen.css" />

  <style>
    entry {
      margin-bottom: 2rem;
    }

    main.glossary {
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
          overflow-y: auto;
      }

      main.glossary {
        padding-left: 2rem;
      }
    }
  </style>
</head>
<body>
  <main class="container">
    <header>
        <?php include( "../sticky_header.html"); ?>
    </header>

    <aside class="col-12 col-md-3 nav flex-column">
      <!-- 
        Populate this nav with <a> using Javascript below
      -->
    </aside>

    <main class="row col-12 col-md-9 ml-auto glossary">
      <header>
      </header>
    </main>
  </main>

	<?php include "../footer.html"; ?>

	<script src="https://use.fontawesome.com/57840704ee.js"></script>

    <script type="text/javascript" src="../dist/js/glossary.bundle.js"></script>

</body>
</html>
