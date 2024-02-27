/*
function init(){
	document.getElementById('pbToggle').onclick = function(){
		if(document.getElementById('pbToggle').checked){
			clearPageBreaks();
		}else{
			addPageBreaks();
		}
	};
	addPageBreaks();
	document.getElementById('pbToggle').checked = false;
}
*/
/*
//If W3C event model used, prefer that. Window events are fallbacks
if(document.addEventListener){
	//W3C event model used
	document.addEventListener("DOMContentLoaded", init, false);
	window.addEventListener("load", init, false);
} else if(document.attachEvent){
	//IE event model used
	document.attachEvent( "onreadystatechange", init);
	window.attachEvent( "onload", init);
}
*/

function switchThemes(theme) {
	document.getElementById('maincss').href=theme.options[theme.selectedIndex].value;
}

function switchCustomCSS(theme) {
	document.getElementById('customcss').href=theme.options[theme.selectedIndex].value;
}

function showFacs(num, url, id) {
	facsWindow = window.open ("about:blank")
	facsWindow.document.write("<html>")
	facsWindow.document.write("<head>")
	facsWindow.document.write("<title>TEI Boilerplate Facsimile Viewer</title>")
	facsWindow.document.write($('#maincss')[0].outerHTML)
	facsWindow.document.write($('#customcss')[0].outerHTML)
	facsWindow.document.write("<link rel='stylesheet' href='../js/jquery-ui/jquery-ui.min.css'>")
	if ($('#teibp-tagusage-css').length) {
	  facsWindow.document.write($('#teibp-tagusage-css')[0].outerHTML)
	}
	if ($('#teibp-rendition-css').length) {
	  facsWindow.document.write($('#teibp-rendition-css')[0].outerHTML)
	}
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery/jquery.min.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery-ui/jquery-ui.min.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/jquery/plugins/jquery.scrollTo-1.4.3.1-min.js'></script>")
	facsWindow.document.write("<script type='text/javascript' src='../js/teibp.js'></script>")
	facsWindow.document.write("<script type='text/javascript'>")
	facsWindow.document.write("$(document).ready(function() {")
	facsWindow.document.write("$('.facsImage').scrollTo($('#" + id + "'))")
	facsWindow.document.write("})")
	facsWindow.document.write("</script>")
	facsWindow.document.write("<script type='text/javascript'>	$(function() {$( '#resizable' ).resizable();});</script>")
	facsWindow.document.write("</head>")
	facsWindow.document.write("<body>")
	facsWindow.document.write("<nav style='padding-top:1em;'><a href='../index.html'>Petr<i>archive</i> home</a></nav>")
	facsWindow.document.write($("#page-nav").text())
	facsWindow.document.write("<div id='resizable'>")
	facsWindow.document.write("<div class='facsImage'>")
	$(".facs-thumb img").each(function() {
		facsWindow.document.write("<img id='" + $(this).parent().parent().parent().attr('id') + "' src='" + $(this).attr('src') + "' alt='facsimile page image'/>")
	})
	facsWindow.document.write("</div>")
	facsWindow.document.write("</div>")
	facsWindow.document.write($("footer")[0].outerHTML)
	
	facsWindow.document.write("</body>")
	facsWindow.document.write("</html>")
	facsWindow.document.close()
}
