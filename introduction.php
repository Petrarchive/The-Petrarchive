<!DOCTYPE HTML system "about:legacy-compat">
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>Petrarchive: Introduction</title>

	<script type="text/javascript" src="js/auxillary_page.js"></script>

    <link href="stylesheets/screen.css" media="screen, projection" rel="stylesheet" type="text/css" />
</head>
<body>
<?php include("nav.html"); ?>
<!-- number index, first line index, visual index, genre index -->

<div id="content">
<section> 

<h1 id="introduction">Introduction</h1>
<p>Awarded a New Frontiers Start-up Grant ($42,000) from Indiana University for 2013, the Petr<em>archive</em> Project has advanced significantly in its goals for offering a “rich text,” interactive edition of one of the icons of western literature, Petrarch’s <em>Rerum vulgarium fragmenta</em> (<em>Rvf</em>). Wayne Storey, Professor of Italian, has collaborated with John Walsh, Associate Professor of Information Science, to produce six sets of distinctive textual prototypes based on Storey’s new edition of the work’s 366 texts that comprise the author’s poetry book. Our prototypes consist of:
</p>
<ul>
	<li>TEI-encoded documents from which we can render both diplomatic transcriptions and edited views of the text;</li>
	<li>Web-based presentations providing both diplomatic and edited views of the text, implemented with the <a href="http://teiboilerplate.org/">TEI Boilerplate</a> system;</li>
	<li>Facsimile page images for Vat. Lat. 3195;</li>
	<li>A <a href="visindex_2up.php">visual index</a>, or map, to the <em>Rvf</em>
 as constituted in Vat. Lat. 3195.</li>
	</ul>

	<p>
	
With these prototypes now in place, the editors propose to complete work on all 366 poems in their digital edition of Petrarch’s work, using Storey’s edition and commentary and following the <a href="http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html">Text Encoding Initiative Guidelines</a>. This textual-visual project, the Petr<em>archive</em>, will supply a state-of-the-art scholarly tool for students, teachers, and scholars of Petrarch’s formative icon for book culture and Western poetry, and provide an interactive and open-access edition for specialized and general audiences.</p></section><section> 

<h1 id="prototypes">Prototypes</h1>
<p>During 2013, we have worked through six subsets of texts that demonstrate diverse kinds of editorial and encoding issues that we felt it necessary to establish as guides for future work. All the subsets also demonstrate the emblematic nexus between Petrarch’s visual poetics and the editing of texts from a problematic holograph first designed as a fair copy, and that then degenerates into an experimental work site.</p>
<div style="margin-left:2em; margin-right:2em; padding:.25em 1.5em 1em 1.5em; border:1px dotted black; font-size:80%;">
<h2>System requirements</h2>
<h3>Browser Support</h3>
<p>The prototypes make use of current Web technologies and require a relatively recent browser for proper display and functionality. Recent versions of Safari, Chrome, and Firefox should all work with the Petrarchive texts.</p>
<!--<h3>Fonts</h3>
<p>
The Petrarchive texts contain some uncommon characters that may not be available in standard system fonts. If certain characters are not displaying (for instance, ꝑ, the Latin small letter p with stroke through the descender), you may download and install the free <a href="http://www.mufi.info/fonts/Andron/AND_SCR_WEB_3.0.zip">Andron Scriptor Web</a> font, which includes these special characters.
</p>-->
</div>

<div class="subset"> 

<h2 id="subset1a:vatlat3195c.1v"><a href="content/c001v.xml">Subset 1A: Vatican Latino 3195, charta 1v</a></h2>

<img class="subsetvis" src="images/visindex/c001v.svg" alt="vat lat 3195 c. 1v"/><img class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-001v.jpg" alt="vat lat 3195 c. 1v"/> 

<p>Subset 1A establishes Petrarch’s first transcriptional and organizational principle for his 31-line canvas in his work: the four-sonnet construction of the manuscript leaf based on a 31-line transcriptional canvas. 62 of the 145 pages (62 sides of the 72 chartae) of Petrarch’s book follow this principle of four sonnets, each laid out on seven transcriptional lines, two verses per line, and read in a horizontal strategy. Each sonnet is separated from the next by a “separative blank line” space (thus 7+1+7+1+7+1+7 = 31). Encoders will use the encoding matrix for this principle for just over 42% of their work.</p>

</div><div class="subset">

<h2 id="subset1b:vatlat3195c.22r"><a href="content/c022r.xml">Subset 1B: Vatican Latino 3195, charta 22r</a></h2>

<img class="subsetvis" src="images/visindex/c022r.svg" alt="vat lat 3195 c. 22r"/><img class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-022r.jpg" alt="vat lat 3195 c. 22r"/>

<p>Subset 1B demonstrates the subtle visual poetics of the rare disruption of Petrarch’s first principle and the unique use of expectation in the manuscript to call attention to a dramatic shift in the work’s narrative. Up to charta 22r the reader has seen 13 out of 42 pages that follow Petrarch’s four-sonnet principle. On c. 22r, Petrarch has his copyist skip the final seven transcriptional lines as what we encode as a “divisional stop space” between <cite>Rvf</cite> 104 and 105. Petrarch’s scribe could easily have started the following poem, “Mai non vo’ più cantar com’io soleva” (<cite>Rvf</cite> 105), as he would numerous times, in the remaining space of c. 22r. Instead, the “divisional stop space” sets off <cite>Rvf</cite> 105 as a poetic manifest: “Never again do I want to sing [poetry] as I used to.” </p></div><div class="subset">

<h2 id="subset1c:vatlat3195cc.22v-23r"><a href="content/c022v-c023r.xml">Subset 1C: Vatican Latino 3195, cc. 22v-23r</a></h2>

<img class="subsetvis" src="images/visindex/c023r.svg" alt="vat lat 3195 c. 23r"/><img class="subsetvis" src="images/visindex/c022v.svg" alt="vat lat 3195 c. 22v"/><img style="margin-left:4px" class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-023r.jpg" alt="vat lat 3195 c. 23r"/><img class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-022v.jpg" alt="vat lat 3195 c. 22v"/><p>Subset 1C demonstrates the function of c. 22r’s divisional stop space to mark the macrotextual pause between sonnet <cite>Rvf</cite> 104 and the manifest of <cite>Rvf</cite> 105. The editorial innovation of the easy comparison of the edited version of <cite>Rvf</cite> 105 to the diplomatic transcription allows advanced users to note errors and lexical features in the manuscript that distinguish among authorized and unauthorized versions of the work that circulated. The “divisional stop space” plays an important role in our editing of the first poem of Part II of the <cite>Rvf</cite>, “I’ vo pensando” (<cite>Rvf</cite> 264), which is preceded by a divisional stop space of five blank pages (four ruled for transcription). Editorially the ruled space also functions as “potential writing space” prepared to receive text but left blank. </p></div><div class="subset">

<h2 id="subset2a:vatlat3195c.3v"><a href="content/c003v.xml">Subset 2A: Vatican Latino, c. 3v</a></h2>

<img class="subsetvis" src="images/visindex/c003v.svg" alt="vat lat 3195 c. 3v"/><img class="subsetvis" src="images/vat-lat3195-f/vat-lat3195-f-003v.jpg" alt="vat lat 3195 c. 3v"/><p>Subset 2A demonstrates Petrarch’s second organizing principle, which has a unique impact on the page’s and the work’s indexicality, visual poetics, and use of punctuational space: the counterbalance between the sonnet’s horizontal reading strategy (“Mille fiate, o dolce mia guerrera” [<cite>Rvf</cite> 21]) and the sestina’s vertical reading strategy (“A qualunque animale alberga in terra” [<cite>Rvf</cite> 22]), first down the left column and then back up to the top of the right column, but without spaces between the stanzas marked only by pilcrows. The contrast between the two genres and their reading strategies is immediately visible in the uneven lengths of sestina’s two columns and the blank five-seven lines in the left column that act as “descriptive space” for the sestina. </p></div><div class="subset"> 

<h2 id="subset2b:vatlat3195c.14v"><a href="content/c014v.xml">Subset 2B: Vatican Latino c. 14v</a></h2>

<img class="subsetvis" src="images/visindex/c014v.svg" alt="vat lat 3195 c. 14v"/><img class="subsetvis" src="images/vat-lat3195-f/vat-lat3195-f-014v.jpg" alt="vat lat 3195 c. 14v"/><p>Subset 2B demonstrates the reverse matrix for Petrarch’s second principle, the sestina “L’aere gravato et l’importuna nebbia” (<cite>Rvf</cite> 66) and the sonnet “Del mar Tirreno a la sinistra riva” (<cite>Rvf</cite> 67). Subset 2A and 2B will serve as an encoding guide for four other occurrences of the sonnet–sestina combination, and distinguish the scribal error in rendering the same combination on cc. 32r and 32v (<cite>Rvf</cite> 141–<cite>Rvf</cite> 142).</p></div><div class="subset"> 

<h2 id="subset3:vatlat3195c.69v-c.70r">Subsets 3A-3B: <a href="content/c069v-c070r.xml">Vatican Latino 3195, cc. 69v-70r</a>; Laurenziano Segniano 1, cc. 52v-53r)</h2>

<img class="subsetvis" src="images/visindex/c070r.svg" alt="vat lat 3195 c. 70r"/><img class="subsetvis" src="images/visindex/c069v.svg" alt="vat lat 3195 c. 69v"/><img style="margin-left:4px" class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-070r.jpg" alt="vat lat 3195 c. 70r"/><img class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-069v.jpg" alt="vat lat 3195 c. 69v"/><p>Subset 3A–3B investigates keen editorial problems in the 157 verses of the canzone “Quel’ antico mio dolce empio signore” (<cite>Rvf</cite> 356 [revised as 360]) as a common site of reordering, another of Petrarch’s revisionist principles. After the <cite>Rvf</cite> was in circulation, perhaps as late as 1373-1374, Petrarch experimented several times with reordering the last 31 poems of the work, using small numbers in the margins of cc. 66v–71v. These numbers were never applied to a new order for poems 336–366 until Mestica’s edition of 1896. Of even greater editorial difficulty is the “reconstruction” of the format for the canzone “Quel’ antico,” which Petrarch decided to include on a four-page insert (2 bifolia) in which he did not have enough space to write out the canzone according to his standard transcriptional format (equal to that of the canzone “Una donna assai più bella che ’l sole” [<cite>Rvf</cite> 119]). The poem’s reconstruction is imaged from different manuscripts and editions since Petrarch was forced by a lack of material space to distort the poem in his own final transcription. Our edition allows the reader to move among Petrarch’s dense diplomatic transcription and the modern, virtual reconstruction of the diplomatic text (based on MS Laurenziano Segniano 1), and the edited form of the poem from additional, authoritative manuscripts. </p></div><div class="subset"> 

<h2 id="subset4a:vatlat3195c.26r">Subsets 4A-4B: <a href="content/c026r.xml">Vatican Latino 3195, c. 26r</a> and <a href="content/c045r.xml">c. 45r</a></h2>

<img class="subsetvis" src="images/visindex/c026r.svg" alt="vat lat 3195 c. 26r"/><img class="subsetvis" src="images/vat-lat3195-f/vat-lat3195-f-026r.jpg" alt="vat lat 3195 c. 26r"/>

<img class="subsetvis" src="images/visindex/c045r.svg" alt="vat lat 3195 c. 45r"/><img class="subsetvis" src="images/vat-lat3195-f/vat-lat3195-f-045r.jpg" alt="vat lat 3195 c. 45r"/>

<p>Subsets 4A and 4B solve the editorial problem of communicating the roles of palimpsest and erasure in Petrarch’s <cite>Rvf</cite> and his visual poetics. The problem of the complex versioning of poems through extensive authorial erasure and emendation is addressed, reconstructing the layers of the poet’s revisions both in his own manuscript and in subsequent manuscripts that reflect earlier and later versions. This fourth subset will consist of: A) the four poems on c. 26r, in which Petrarch attempts to maintain the fair copy status of the manuscript, and B) the four sonnets of c. 45r in which Petrarch has abandoned fair copy practices. Subset 4A treats the poet’s own attempt to recycle the rubricated D of the previous poem (“Donna mi vene spesso ne la mente”), after erasing the rest of the poem, to insert the shorter madrigal “Or vedi, Amor” (<cite>Rvf</cite> 121). The user can move among diplomatic and edited versions to reread previous and current sequences of this section. In Subset 4B we have instead established encoding principles for Petrarch’s frequent use of multiple erasures and emendations now easily consultable without disturbing the user’s primary reading of the edited version.</p></div>

<div class="subset"> 

<h2 id="vatlat3195c.15rv"><a href="content/c015r-c018v.xml">Subsets 5A-5B: Vatican Latino, c. 15r–15v</a></h2>

<img class="subsetvis" src="images/visindex/c015v.svg" alt="vat lat 3195 c. 15v"/><img class="subsetvis" src="images/visindex/c015r.svg" alt="vat lat 3195 c. 15r"/><img style="margin-left:4px" class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-015v.jpg" alt="vat lat 3195 c. 15v"/><img class="subsetfacs" src="images/vat-lat3195-f/vat-lat3195-f-015r.jpg" alt="vat lat 3195 c. 15r"/><p>Subsets 5A and 5B reconstruct the complexities of textuality in diverse forms of longer poems (canzoni) in versions of the <cite>Rvf</cite> 70 (“Lasso me, ch’i’ non so in qual parte pieghi”), in which Petrarch singles out his quotations of other poets by isolating their verses on independent lines at the end of each stanza. This use of the play between transcription and space to highlight certain features central to the poetics of a given work will be borne out throughout the <cite>Rvf</cite>. In Subset 5A/5B the poet isolates the citation. Notably, in an authoritative copy of Latino 3195, Laurentian 41.10, the copyist literally underscores the cited verses.</p></div><div class="subset"> 

<h2 id="subset6:vatlat3195c.39r"><a href="content/c039r.xml">Vatican Latino 3195, c. 39r</a></h2>

<img class="subsetvis" src="images/visindex/c039r.svg" alt="vat lat 3195 c. 39r"/><img class="subsetvis" src="images/vat-lat3195-f/vat-lat3195-f-039r.jpg" alt="vat lat 3195 c. 39r"/><p>Subset 6 establishes editorial and encoding strategies for multiple strata of erasure as part of Petrarch’s visual poetics and compilational techniques that range from the elimination of an entire sonnet (the first composition on the page [“L’aura gentil” [<cite>Rvf</cite> 194]) to multiple layers of expulsions in individual poems (sonnets 3 and 4 = <cite>Rvf</cite> 196 and 197 [“L’aura serena” and “L’aura celeste”]).</p></div></section><section> 

</section>
</div>
<?php include("footer.html"); ?>
</body>
</html>
