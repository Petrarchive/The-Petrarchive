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
      <a href="http://frit.indiana.edu/faculty/storey.shtml" target="_blank">H. Wayne Storey</a>, 
      <a href="http://info.ils.indiana.edu/~jawalsh/" target="_blank">John A. Walsh</a> and 
      <a href="http://isamagni.com/" target="_blank">Isabella Magni</a>
    </div>
  </div>

  <div class="hidden-md-up show-sm-down">
    <div id="bannertitle">Petr<span class="archive">archive</span></div>
    <div id="bannersubtitle">An edition of Petrarch’s songbook</div>
    <div id="bannerrvf">Rerum vulgarium fragmenta</div>
    <div id="bannerresp">Edited by 
      <a href="http://frit.indiana.edu/faculty/storey.shtml" target="_blank">H. Wayne Storey</a>, 
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

<section>
  <main class="col-lg-8 col-md-12">
    <p class="">
      When you hear the words <em>sonnet</em>, <em>Renaissance</em>, 
      <em>western literature</em>, <em>love songs</em>, 
      you are hearing the direct influence of Francesco Petrarca 
      (Petrarch) and of his collection of lyric poems that he called 
      “Fragments in the Vernacular” (<cite>Rerum vulgarium 
      fragmenta</cite>).
    </p>

    <p class="">
      The Petrarchive is designed as a tool both to introduce Petrarch’s 
      collection—a collection that continues to influence modern cultures 
      in many languages—and to give advanced users access to 
      Petrarch’s “original” text and an extensive “material” 
      commentary for each poem. Within the Petrarchive you will find 
      edited and diplomatic transcriptions of Petrarch’s songbook; 
      visual maps illustrating Petrarch’s design, layout, and 
      visual poetics; and multi-layered commentary addressing prosodic, historic, 
      textual, and thematic issues along with an English translation 
      of the poems.
    </p>
  </main>

  <footer class="col-lg-8">

    <!-- Begin Mailchimp Signup Form -->
    <link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
    <style type="text/css">
      #mc_embed_signup{background:#fff; clear:left; font-family: 'andron_scriptor_webregular'; }
      /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
        We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
    </style>
    <div id="mc_embed_signup">
    <form action="https://petrarchive.us19.list-manage.com/subscribe/post?u=18ab6b9cf0816bc6f2a629d0a&amp;id=f29e24e329" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
        <div id="mc_embed_signup_scroll">
        <p>
          We are continually adding new content and features to The Petrarchive. If you'd like to 
          get updates on our progress, let's keep in touch!
        </p>
      <label for="mce-EMAIL">Subscribe to our mailing list</label>
      <input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_18ab6b9cf0816bc6f2a629d0a_f29e24e329" tabindex="-1" value=""></div>
        <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
        </div>
    </form>
    </div>

    <!--End mc_embed_signup-->
  </footer>
</section>
</main>

<?php include "footer.html"; ?>

<script src="https://use.fontawesome.com/57840704ee.js"></script>

<script type="text/javascript" src="dist/js/index.bundle.js"></script>

</body>
</html>
