<!DOCTYPE HTML system "about:legacy-compat">
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Petrarchive: Instructions</title>

  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

  <link rel="stylesheet" type="text/css" href="css/lib/bootstrap.min.css" />
  <link rel="stylesheet" type="text/css" href="js/jquery-ui/jquery-ui.min.css" />


  <link href="css/teibp.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="css/custom.css" media="screen, projection" rel="stylesheet" type="text/css" />
  <link href="css/auxillaryPage.css" media="screen, projection" rel="stylesheet" type="text/css" />

  <link rel="stylesheet" type="text/css" href="css/stylesheets/screen.css" />
  <link rel="stylesheet" type="text/css" href="css/auxillaryPage.css" />
  <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-165728171-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-165728171-1');
</script>
</head>
<body class="container-fluid">

  <main class="container row">
    <header>
        <?php include( "sticky_header.html"); ?>
    </header>

    <aside class="col-12 col-md-3 nav flex-column">
      <!--
        Populate this nav with <a> using Javascript below
      -->
    </aside>

    <main class="row col-12 col-md-9 instructions">
    <section class="col-12" id="access">
      <p>
       Welcome! You’ve reached the instruction page of the Petr<i>archive</i> through the dropdown menu on the home page. From the home page you can access the texts of Petrarch’s <i>Rerum vulgarium fragmenta (Rvf)</i> by clicking on the ever-growing number of active “chartae”, or pages, of Petrarch’s manuscript, Vatican Latino 3195. From the drop-down list you can access the poems through the <a href="./textindex.php"><i>Rvf</i> TextIndex</a> arranged by their physical order in Latino 3195, or by their first verse that can be reorganized in alphabetical order or by their genre (sonnet, ballata, canzone, madrigal, sestina). For greater material contextualization, you can access the poems in the drop-down list by selecting the Visual Index and scrolling down to the <a href="./visindex_fascicles.php">Visual Index Arranged by Fascicles</a>. Clicking on the charta in one of the manuscript’s eleven fascicles will put you in the <i>Rerum vulgarium fragmenta</i>.
      </p>
    </section>

    <section class="col-12" id="overview">
    <h1>Overview</h1>

    <p>
    This site does not reproduce in OCR other editions of Petrarch’s <i>Rerum vulgarium fragmenta ([Rvf] Canzoniere)</i> but offers in TEI and John Walsh’s TEIBoilerplate new editions of
    </p>

    <ol>
     <li>the diplomatic form of Vatican Library, Latino 3195.</li>
     <li>the edited form of the complete <i>Rvf</i> and its discoverable palimpsests edited by H. Wayne Storey with Isabella Magni, John Walsh, and Abraham Kim.</li>
     <li>high-definition images of each charta (manuscript page) in John Walsh’s TEIBoilerplate Image Reader.</li>
    </ol>

    <h2>
    The Petr<i>archive</i> also includes
    </h2>

    <ol type="1">
      <li>
        Indices arranged and searchable by
        <ol type="a">
          <li>
            poem number (in the physical order of Petrarch’s last version)
          </li>
          <li>
            alphabetical order of the poems (including retrievable palimpsests)
          </li>
          <li>
            genres (sonnets, sestinas, canzoni, ballate and madrigals)
          </li>
          <li>
            line graph of each charta
          </li>
        </ol>
      </li>

      <li>
        A visual index of the external order and internal arrangement in line graph form of each charta
      </li>
      <li>
        A visual index of the chartae arranged by the fascicle structure of Vatican Latino 3195
      </li>
      <li>
        The structure of the First (Rubricated) Project for the Rvf copied by Giovanni Malpaghini and completed by Petrarch himself (<i>Rvf</i> 1–199 and <i>Rvf</i>  264–321 [cc. 1r–39v and 53r–62v])
      </li>
      <li>
        A glossary (to which terms are constantly being added) containing helpful vocabulary, definitions and statistics
      </li>
      <li>
        Prototypes of the thirteen-part material commentary and translation for each poem
      </li>
    </ol>

    <p>
      In the future we anticipate the following features will be added to the Petr<i>archive</i>:
    </p>

    <ol>
      <li>Complete eleven-part material commentary and translation for each poem</li>
      <li>Historically important translations of selected poems</li>
      <li>A reconfigured Timeline of Petrarch’s life and the <i>Rvf</i></li>
      <li>Studies of manuscripts and editions of the <i>Rvf</i></li>
      <li>Studies of Petrarch’s visual poetics</li>
    </ol>
    </section> <!-- #overview -->

    <section id="digital-design" class="col-12">
    <h1>Digital-Material Design</h1>

    <p>
    While the criteria for the editions will be treated in the introductions to the editions, users of these editions are invited to consider not just the texts of both the diplomatic and edited forms of the poems, but the wider conceptual and pragmatic orientations and applications that are essential to these ‘rich-text’ editions. The digital construction of the site is designed to reflect the following operational concepts.
    </p>

    <p>
    The first principle of the Petr<i>archive</i> is simplicity and ease of use. As we add various components to the editions and the site, we strive to maintain this norm so that the site will be intuitive and accessible to different kinds of users, from novice to specialist.
    </p>

    <p>
    Poems are displayed according to the material construction of Petrarch’s ‘canvas’, the individual manuscript charta. In the statistical majority of the cases, the individual charta contains four sonnets that will often constitute a poetic grouping as part of Petrarch’s by now well-established visual poetics. The individual charta is also a key orientation for the dynamic poetics of Petrarch’s <i>sestine</i>, which — except for the double sestina of part II (<i>Rvf</i> 332) — are always presented in contrast to a sonnet on the same charta (see <i>Glossary</i> “Sestina”). Given this orientation to the physical/material construction of the partial holograph (Latino 3195), the ordinal numbering of the poems in the editions and commentary follows the physical order in which they appear sequentially in today’s assembly of the manuscript. This numbering, originally followed by early scholars (such as Nino Quarta [1902], Arnaldo Foresti [1927], and Ernest Wilkins [1951]), of the order of the poems in different manuscripts, is especially important in the case of the final 31 poems of the <i>Rvf</i>, that Petrarch changed using small numbers in the margins of what would become Fascicles IX, X and XI (today on cc. 66–71r). Thus, for example, <i>Rvf</i> 336 (the sonnet Tornami a mente on c. 66v) is renumbered as 1 and remains throughout <i>Rvf</i> 336. But the sonnet which follows it on c. 66v, Questo nostro caduco et fragil bene, which is referred to by its ordinal position, <i>Rvf</i> 337, was — after several experiments with different positions indicated in the margin — definitively renumbered by Petrarch as “15”, becoming <i>Rvf</i> 350. Thus <i>Questo nostro caduco et fragil bene</i> is listed throughout as <i>Rvf</i> 337[rev.350]. The fourth final sonnet on c. 66v, <i>Rvf</i> 338, <i>O Tempo, o ciel volubil, che fuggendo</i>, has been — again, after at least one other experiment in reordering — repositioned by the marginal number “20”, thus indicated as <i>Rvf</i> 338[rev.355].
    </p>

    <p>
    The poetic contrasts and organization of the individual charta, however, change in Petrarch’s deployment of the long poetic form of the canzone, which often spans more than one side, or <i>facciata</i>, of a charta (exceptions: <i>Rvf</i> 125 [c. 26v], <i>Rvf</i> 126 [c. 27r], <i>Rvf</i> 206 [c. 40v], and <i>Rvf</i> 355–rev359 [c. 69r]). The material function of canzoni is no less dynamic. Significantly it is the sole genre used to bridge the first four fascicles, cc. 1-32, at cc. 8–9 (<i>Rvf</i> 37), cc. 16–17 (<i>Rvf</i> 72) and cc. 24–25 (<i>Rvf</i> 119). This unifying material feature in the macrotext will be secondary to those users who wish to read or study the individual poems <i>Sì è debile il filo a cui s’attene</i> (<i>Rvf</i> 37) or <i>Una donna più bella assai che ’l sole</i> (<i>Rvf</i> 119). To preserve the poetic unity of these poems and the surrounding sonnets that occasionally engage them, multiple chartae have been encoded to construct a single presentation. In these cases, users can still reference the chartae (in the upper left header) that were utilized by the copyist to transcribe the poem(s).
    </p>

    <p>
    With this left-header feature, users can now move internally in the <i>Rvf</i> from charta to charta and poem to poem without returning to one of the indices. On the right side of the header the user can toggle between the diplomatic and edited forms of the poems and, clicking on the image(s) associated with the poem(s), can consult the visual representation of the charta(e).
    </p>

    <p>
    Another conceptual feature that has pragmatic implications is wrapped up in the question of the reporting of erasure. Almost all medieval manuscripts have had letters, sometimes even entire sections and pages, scraped away to insert a correction or new text. With the advent of the use of ultraviolet light and, subsequently, examination under other forms of color-sensitive rays of light, what was once intended by a copyist or copyist-author to be hidden from us can now in some cases — but not all — again be seen. In the case of Petrarch’s partially holograph manuscript Latino 3195, we also find editorial punctuation in the form of promemoria intended to guide future editorial interventions, from insertions of text to where to erase (or scrape away) the parchment. Especially in the case of these marks and even annotations, copyist probably did not intend for the reading public to see this kind of editorial mark up.
    </p>

    <p>
    Two additional kinds of alteration to the surface of a manuscript raise similar questions. On the one hand, the ravages of time, weather and light on ancient manuscripts ultimately claim text that can only be reconstructed through technology. On the other, some manuscripts exhibit subsequent interventions by known and unknown hands that have become part of the reportable surface of a codex either in a diplomatic or even an edited version of the work.
    </p>

    </section> <!-- #digital-design -->

    <section id="reportable-surfaces">
    <h1>Reportable Surfaces</h1>
    <p>
    The sum of all three categories amounts to the larger and more vexing problem of what constitutes the “reportable surface” of a work. Digital markup would seem to alleviate some of the editor’s doubts. What isn’t represented on the surface can be marked up as “below the surface”. But “surface” does not always equate to the object of “primary representation”, or even the dreaded “intention”. Those letters that have, for example, faded and then been re-inked by a later hand — presumably to make the letters again legible — has the odd effect of drawing attention to that part of the text that is potentially least authentic. In some cases it is difficult — if not still today impossible — to verify the accuracy of the unknown hands that have intervened in the text. Nor can we know when certain erasures were undertaken (nor by whom) and when damage to the parchment occurred. The microscopic erasure of the lower half of the “S” of “Se cio” and substitution of “Ee cio” of <i>Rvf</i> 179.9 (c. 37r [cf Belloni 2004, p. 104]), rather than Contini’s erroneous hapax of “E.cciò” and Trovato’s later misreading, postdates Petrarch’s own late interventions in the poem (<i>Geri, quando talor meco s’adira</i>). The fascicles of Latino 3195 had already served to create an interim exemplar for Laurenziano 41.10 and the copy from which the antegraph of the late fifteenth-century copy 1393 Verona manuscript (now Beinecke M706) would be made before the erasure and erroneous “E” was added. If we knew more about the process of preparing the 1472 Valdezoco edition, which utilized our very manuscript (Latino 3195) for its text, we would be able to say with more certainty that the “S” of “Se cio” was still visible when the unknown editor was preparing the copy-text (1470–1472) for the printed edition. In fact virtually the entire manuscript and print tradition until Contini 1964, including Zingarelli’s 1926 edition based on the then recent affirmation of Lat. 3195 as Petrarch’s ideograph, report “Se cio”. Notably, convinced that the intervention is Petrarch’s, Mestica’s 1896 critical edition (p. 258) reports the altered initial “E” we all see on c. 37r, but then erroneously reads a “c” where there is an “e”, perhaps the origin of Contini’s error as well. Mestica’s critical edition resolves the reading uniquely in the emendation: “E ciò”.
    </p>

    <p>
    Strike-throughs and what we can describe in English as “scansion erasure dots”, the latter that appear as dots under individual letters to designate its elimination usually to perfect the prosodic scansion of a verse, are by necessity reported in the diplomatic edition as “surface text” even when designed to be eliminated in the act of reading the verse. The edited text incorporates the editorial solutions suggested by the parchment’s surface and the commentary discusses each occurrence.
    </p>

    <p>
    The colored initials reflect exactly the alternation of red and blue initials in the manuscript, produced by an anonymous rubricator/miniaturist in Milano in the summer of 1368. Thus this feature marks the text of the fair copy of the 257 poems (199+58) that constitute the 1368 First Project of the <i>Rvf</i> (<i>Rvf</i> 1–199 [<i>Voi ch’ascoltate – O bella man</i>] and <i>Rvf</i> 264–321 [<i>È questo ’l nido</i>]). The unrubricated sections in Petrarch’s hand (cc. 39v–52v and 62v–72v) constitute the “service copy” section of the manuscript, documenting 109 additional poems: <i>Rvf</i> 200–263 (<i>Non pur quell’una bella ignuda mano – Arbor victoriosa triumphale</i>) and <i>Rvf</i> 322–366 (<i>Mai non vedranno le mie luci asciutte – Vergine bella, che di sol vestita</i>). Given their structural and textual functions, the initials carry over to the edited form as well. The colored pilcrows are an interpretative representation of the medieval stanza markers in MS Latino 3195 and follow exactly their alternation in color until the two sections that constitute Petrarch’s service copy (cc. cc. 39v–49r, 49r–52v and 62v–72v). Since they are textual in nature, they are represented in the diplomatic and edited forms of the edition and noted in the commentary.
    </p>

    <p>
    This long description demonstrates two of the most basic problems in the interpretation of an at times problematic surface of the parchment: A) the identification of the hand; and B) the over-reliance on erroneous but “authoritative” readings rather than on direct observation of the codex.
    </p>

    <ol>
      <li>
        In each case in which there is doubt about the origin of the copyist’s hand, the surface of the manuscript is reported in the diplomatic edition with extensive annotations in the material commentary. Each case is resolved in the edited form of the text through assessments of erasures, tracings, etc.
      </li>
      <li>
        Text written over erasure is identified in the diplomatic edition in light gray lettering. Erasures that no longer carry any text but that show signs of what was erased will be noted in the commentary.
      </li>
      <li>
        Letters obscured by overwrites will again report the top surface, in most cases the final letter of the overwrite is reported in the diplomatic edition with annotations in the commentary and the final reading in the edited form.
      </li>
      <li>
        Letters traced by a subsequent hand are reported in bold type in the diplomatic edition when Malpaghini’s or Petrarch’s original cannot be verified. In these cases the edited form relies upon the early tradition for its reading.
      </li>
      <li>
        Smaller guide-letters that are repeated in the 1368 rubrication are not reported except in the commentary when there is an abnormality. Notably Petrarch abandons rubricated letters on cc. 39v–49r (the end of Part I) and again on cc. 62–71v (the end of Part II), distinguishing the fair copy of the First Project from the working, or service, copy section of the MS.
      </li>
      <li>
        Due to the nature of Petrarch’s supervised and executed uses of initials, and in a departure from recent Italian editorial practice, all of Petrarch’s initials are conveyed in the diplomatic and edited forms of the edition, including at the beginning of verses, in Petrarch’s rare and noteworthy mid-verse uses, as well as Malpaghini’s and, in some cases, Petrarch’s small caps, invariably used—according to medieval scribal standards—after the colored initial at the beginning of a poem (while seemingly inconsequential, the “small-cap usage” and Petrarch’s abandonment of it in certain sections of the codex seem to confirm Petrarch’s intentionality in the nature of the copy he is preparing). The maintenance of these capitals is designed to convey their integration into Petrarch’s poetic syntax and his structuring of verses within diverse poetic genres.
      </li>
    </ol>

    <p>
      One of the more vexing problems of the surface of Latino 3195 is the reporting and, at times, interpretation of punctuation. While Malpaghini’s use of both micro- and macro-punctuation is relatively regular and consistent, Petrarch’s use and symbols can differ significantly from his primary copyist’s. (Micro-punctuation are those marks and symbols to which we commonly refer as brief, medial and long pauses in phrasing and syntactic structure of verses. Macro-punctuation engages the use of space in the manuscript to mark parts, sections and groupings of poems as well as larger pauses within the compositional structure of the <i>Rvf</i>.) Moreover, we should keep in mind that there are at least two additional forms of punctuation that was probably never intended by Petrarch to be seen by nor transmitted to subsequent readers in fair copies:
    </p>

    <p>
      1. “Editorial punctuation”, such as: crosses, marginal numbers to count sonnets and canzoni in various parts of the MS, various marginalia both present and erased of uncertain origin, the remnants of <i>promemoria</i> designed to indicate which letters should be erased (shaved off with a pen-knife). The small marginal numbers on cc. 66v–71v that reorder the last 31 poems are also considered ‘editorial’ in nature and designed to be implemented in a subsequent fair copy. Catch-words as well are noted in the diplomatic edition, treated in the commentary, but are not represented in the edited form of the work given Petrarch’s strong inclination to not construct his work according to visibly editorial demarcations such as fascicles. The erased catch-word on c. 51v can be found in the commentary but not in the diplomatic nor the edited forms of the work. Instead the post-Petrarchan but still partially visible colophon to Part I on c. 49v is represented in the diplomatic edition and discussed in the commentary.
    </p>

    <p>
      2. Thanks originally to Guido Capovilla (1989), we know that sporadic punctuation also marks prosodic and rhythmic indicators (the origins of these markers are uncertain). While these marks disappear in the edited form, their presence and utility will be spelled out in the commentary and in the high-resolution photographs.
    </p>

    <p>
      3. Of uncertain functionality, beginning in Fascicles V, VI and VII (cc. 35v–49r), and again midway in Fascicle VIII (cc. 56r–60v) and throughout Fascicles IX, X and XI (cc. 61r–71r), Malpaghini and then Petrarch will mark the beginning of v. 9 of most — but not all — sonnets with a tick, a tilde, or a <i>punctus</i>. Similar markings are found more rarely in the left margin at vv. 1, 3 13, and even more rarely in the right margin at vv. 2, 4, and 8. While the mostly regular dot/line in Petrarch’s transcriptions at v. 9 of sonnets is noted in the diplomatic edition, all uses throughout the manuscript are noted in the commentary. The question of the more regular use by Petrarch at v. 9 for many — but not all — sonnets in his hand was debated by some of the curators of the 2004 Vatican–Antenore facscimile and commentary without final consensus. The inconsistency of the usage, even in Petrarch’s own hand, and virtual absence of the graphological habit in Malpaghini’s suggest that the symbol was not used to distinguish the ninth verse but possibly as an editorial promemoria to signal approval or completion by the poet.
    </p>

    <p>
      If the thicker pen strokes of many individual letters have faded or been damaged over time becoming — in some cases — virtually illegible and even inviting subsequent hands to retrace them, the single thin pen strokes and ticks of ink that constitute punctuation marks have been even more widespread victims of deterioration and, in some cases, subsequent erasure, but also of addition by later hands. Forty-five of Modigliani’s 61 additions (<i>Aggiunte</i>) and 11 of 24 corrections (<i>Correzioni</i>) to his own diplomatic edition (1904) correct his original reading/interpretation of punctuation marks alone (including several erasure dots). Many of these additions demonstrate the relative ease with which faded punctuation can be overlooked even by a professional paleographer of Modigliani’s caliber. But there is little doubt that the diplomatic edition’s imperative to “report the parchment’s surface” must also negotiate the diachronic layers both during the manuscript’s years as a Malpaghini–Petrarch work site but also as the recipient of readings and attention from subsequent owners and handlers of the codex. In the Petr<i>archive</i> the most complete accounting will be found in the commentary.
    </p>

    <p>
      It is here where my own discussions with some of our most trusted collaborators who checked my transcription work over the years have been, perhaps, the most intense. Examinations of Latino 3195 under high-power magnification and ultraviolet have often led to more uncertainty and some marks that were not syntactic. Users can turn to the high-resolution photos to investigate beyond the diplomatic edition and to fuller discussions in the material commentary. Alternately the Vatican Library’s own digital photographs of the individual chartae under ultraviolet light can be consulted at: <a href="https://digi.vatlib.it/view/MSS_Vat.lat.3195">https://digi.vatlib.it/view/MSS_Vat.lat.3195</a>.
    </p>

    <p>
      As pieces of the Commentary are added to the poems, we will be following the same layout as the prototypes, designed to allow multiple sources of information to remain open while consulting the text in either diplomatic or edited form. The eleven categories of commentary are tabbed in five groups with subsections for four of the five:
    </p>

    <ol>
      <li>
        <ol type="A"><li>introduction</li> <li>prosody</li></ol>
      </li>

      <li>
        <ol type="A">
          <li>genesis of the poem</li>
          <li>diplomatic condition</li>
          <li>material commentary</li>
        </ol>
      </li>

      <li>
        <ol type="A">
          <li>syntax</li>
          <li>variants</li>
          <li>languagey</li>
        </ol>
      </li>

      <li>
        <ol type="A">
          <li>thematics</li>
        </ol>
      </li>

      <li>
        <ol type="A">
          <li>translation</li>
          <li>selected historical translations</li>
        </ol>
      </li>
    </ol>

    <p>
      Through the tabbed interface, users will be able to consult simultaneously the editions, images and those parts of the Commentary that the user finds useful.
    </p>
    </section> <!-- #reportable-surfaces -->

    <section id="timeline">
    <h1>The Timeline</h1>

    <p>
      Timelines, their assessments of chronology and our acceptance of those chronologies, can be problematic. The timeline’s apparently pure linearity, stripped of methodological nuance and historical evidence, can lead us from conventionally repeated conjecture or hearsay to accepted historical fact without ever questioning the relative weight and probability of the evidence that supports — if at all — this very linear history’s claims of legitimacy. Our methodology in building the interactive timeline focuses on and distinguishes among the degrees of probability documentable in material evidence both in internal and external sources rather than on accumulated critical accretions inherent in a cumulative history. The core principle of this new digital approach is transparency in sources and results: going back to the material witnesses, often over-interpreted letters and marginal notes in Petrarch’s drafts (Vat. Lat. 3196), chronicles and material traces of historical events.
    </p>

    <p>
      The Petr<i>archive</i>’s digital interactive timeline is designed as a tool to encourage users to reconsider the nature of the evidence upon which we often build the chronologies and narratives of timelines, and to re-think Petrarch’s life and works in the cultural and historical contexts of that evidence in order to study and visualize non-linear relationships of events in time and space. Our primary objective is to create clear distinctions among the categories of A) what is clearly dated in documented sources (certainty), what is datable with a fair amount of probability, and what can only be conjectured. This three-fold construction allows for the reassessment of sources to establish a timeline that includes:
    </p>

    <ol type="a">
      <li>
        biography of Petrarch and history of his work (integrated by a recollection of main historical and cultural events of the time)
      </li>

      <li>
        reconstructed narrative within the songbook itself, dictated by the anniversary poems.
      </li>
    </ol>

    <p>
      Starting from what is material, verifiable and datable, we distinguish between three levels of certainty:
    </p>

    <ol>
      <li>certainty (<i>dated</i>)</li>
      <li>probability (<i>datable</i>)</li>
      <li>conjecture (<i>conjectured</i>)</li>
    </ol>

    <p>
      Carefully structured TEI standards for documenting such editorial decisions allows transparency and precision of information while experimenting with new interactive ways of presenting and researching geo-temporal information (Bodenhamer 2014; Corrigan 2014).
    </p>

    <p>
      This new rigorous methodological approach clearly distinguishes between history and narrative, between material resources and unreliable anecdotal accounts, an issue that goes beyond Petrarchan studies. The timeline is therefore designed to promote further research, exploration and verification of even widely accepted conjectured reconstructions, such as Wilkins’ theory of the forms for the genesis of the <i>Fragmenta</i>. Exemplary is the letter <i>Varia</i> 9 (and its revision as Sen. XIII 11) to Pandolfo Malatesta and its over-interpretation that led to Wilkins’ invention of the “Malatesta form” (1371-1373) for the songbook. While the letter can be dated with a fair amount of certainty to January 4th, 1373, there is no material evidence nor any subsequent documentation that can justify the existence of a form or even a completed manuscript, allegedly redacted for Pandolfo.
    </p>
    </section> <!-- #timeline -->
    </main>
  </main>

	<?php include "footer.html"; ?>

	<script src="https://use.fontawesome.com/57840704ee.js"></script>

	<script type="text/javascript" src="js/jquery/jquery.min.js"></script>

	<script type="text/javascript" src="js/tether/tether.min.js"></script>
	<script type="text/javascript" src="js/bootstrap/bootstrap.min.js"></script>


  <script>
    $(document).ready(function() {
      insertIntoNav('main.instructions section', 'aside.nav', 'h1')

      $('aside.nav a').click(function(ev) {
        $('aside.nav a').removeClass('active')

        var headerHeight = $('#sticky-header').height()
        setTimeout(function() {
          $(window).scrollTop($(window).scrollTop() - (headerHeight * 1.4))
        }, 10)

        $(ev.delegateTarget).addClass('active')

        // wait for click even to go through and then readjust the scroll
        // so that the sticky header does not cover content
        return true
      })
    })

    function insertIntoNav(queryString, nav, navTextQuery) {
      var elements = $(queryString)
      elements.each(function(i, el) {
        var navText,
            $el = $(el),
            href = $el.attr('id');

        if (navTextQuery)
          navText = $el.find(navTextQuery)[0] ? $el.find(navTextQuery)[0].innerHTML : undefined;

        if (!navText)
          navText = $el.attr('id');

        var html = `<a href="#${href}">${navText}</a>`
        $(nav).append(html)
      })
    }
  </script>
</body>
</html>
