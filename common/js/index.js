import $ from 'jquery'

import 'bootstrap'

import 'jquery-ui/themes/base/core.css'
import 'jquery-ui/themes/base/theme.css'
import 'jquery-ui/themes/base/tooltip.css'
import 'jquery-ui/ui/core'
import 'jquery-ui/ui/widgets/tooltip'

import util_browser from './utils/browser'

$(document).ready(indexInit)

// This function throttles the checking of the scrollposition to, once per 100ms
const debouncedStickyHeader = util_browser.debounce(function($window, $threshHold, $stickyHeader) {	
	let scroll = $window.scrollTop()
	if (scroll >= $threshHold) 
		return $stickyHeader.removeClass('hide')

	$stickyHeader.addClass('hide')
}, 100)
	
function indexInit() {
	let $window = $(window),
		$stickyHeader = $('header.sticky'),
		$threshHold = $('#vizindex').offset().top;

	$(window).scroll(() => {
		debouncedStickyHeader($window, $threshHold, $stickyHeader)
	})

	// Add on a facsimile preview tooltip functionality
	$(document).tooltip({
		items: $(".built-vizindex a"),
	/* hide: {
			effect: "explode",
			delay: 30000
		},*/
		content: function() {
			var a = $( this )
			var noFile = a.hasClass('no-file')

			var ch = a.find('img').attr('alt')
			
			var facsSrc = '"images/thumb-vat-lat3195-f/vat-lat3195-f-' + ch + '.jpg"'
			var img = '<img class="facs" src=' + facsSrc + ' />' 

			var prettyCh = prettify(ch)
			var p = '<p class="charta">' + prettyCh

			if (noFile) {
				p += ' <cite>Text encoding in progress</cite>'
			}

			p += '</p>'
			var html = p + img
			return html
		}
	})

	$('.built-vizindex img').each((i, el) => {
		let src = $(el).attr('data-src')

		$(el).attr('src', src)
	})
}

function prettify(ugly) {
	var base = 'charta' 
	var noZero = ugly.slice(0,3).replace(/^0+/, '')
	var rv

	if (ugly[3] == 'r') {
		rv = 'recto'
	} else {
		rv = 'verso'
	}

	return base + ' ' + noZero + ' ' + rv
}
