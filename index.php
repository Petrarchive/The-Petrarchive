<!DOCTYPE html>
<html lang="en">
<head>
 <!-- Required meta tags -->
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

	<title>Petrachive: An Edition of Petrarch’s Songbook</title>

  <link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="js/jquery-ui/jquery-ui.min.css" />

  <link rel="stylesheet" type="text/css" href="css/stylesheets/screen.css" />
  <link href="css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" type="text/css" href="css/stylesheets/index.css" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165728171-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165728171-1');
</script>
</head>
<body>

<main class="container">

<header class="flakey">
  <?php include("nav.html"); ?>
</header>

<header class="sticky hide">
  <?php include( "sticky_header.html"); ?>
</header>

<div class="row" id="banner">
  <div class="hidden-sm-down show-md-up">
    <div id="bannertitle">Petr<span class="archive">archive</span></div>
    <div id="bannersubtitle">An edition of Petrarch’s songbook</div>
    <div id="bannerrvf">Rerum vulgarium fragmenta</div>
    <div id="bannerresp">Edited by
      <a href="https://frit.indiana.edu/about/emeriti-faculty/storey-h.html" target="_blank">H. Wayne Storey</a>,
      <a href="http://info.ils.indiana.edu/~jawalsh/" target="_blank">John A. Walsh</a>, 
      <a href="https://www.sheffield.ac.uk/dhi/about-dhi/people/isabella-magni" target="_blank">Isabella Magni</a>
      and Francesco Marco Aresu
<br/>
	<span style="font-size:12pt;">with Chief Associate Editor Paolo Scartoni and Associate Editors Maria Teresa De Luca and Giulia Benghi</span></div>
  </div>

  <div class="hidden-md-up show-sm-down">
    <div id="bannertitle">Petr<span class="archive">archive</span></div>
    <div id="bannersubtitle">An edition of Petrarch’s songbook</div>
    <div id="bannerrvf">Rerum vulgarium fragmenta</div>
    <div id="bannerresp">Edited by
      <a href="https://frit.indiana.edu/about/emeriti-faculty/storey-h.html" target="_blank">H. Wayne Storey</a>,
      <a href="http://info.ils.indiana.edu/~jawalsh/" target="_blank">John A. Walsh</a> and
      <a href="http://isamagni.com/" target="_blank">Isabella Magni</a>
    </div>
  </div>
</div>

<div id="vizindex" class="container">
  <div class="row built-vizindex">
    <?php include("vizindex.html"); ?>
  </div>
</div>

<section class="row justify-content-center">
  <main class="col-lg-8 col-md-12">
    <p class="">
      Designed for students, casual readers and specialists, the Petr<em>archive</em> proposes a corrected diplomatic edition and a new edition of Petrarch’s songbook, the <em>Rerum vulgarium fragmenta</em> (<em>Canzoniere</em>), together with a new 13-part commentary of the material properties, prosody, syntax and early history of the work, a new translation, historical translations in English that demonstrate the influence of Petrarch’s vernacular poems in the history of Anglo-American literature, and multiple visual indexes to navigate, for the first time, Petrarch’s visual poetics and the material constructions of his songbook. We encourage users to first read our <a href="https://dcl.ils.indiana.edu/petrarchive/instructions.php">Instructions</a> and consult the <a href="https://dcl.ils.indiana.edu/petrarchive/content/glossary.xml">Glossary</a> for conceptual and pragmatic use in order to have an overview of the core principles of the edition as well as directions on how to navigate the site.
    </p>

  </main>
</section>
</main>

<?php include "footer.html"; ?>

<script src="https://use.fontawesome.com/57840704ee.js"></script>

<script type="text/javascript" src="dist/js/index.bundle.js"></script>

</body>
</html>
