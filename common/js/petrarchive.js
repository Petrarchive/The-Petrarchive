import $ from 'jquery'
import Frame from './frame'

import NavUtil from './navutil'
import CommentaryUtil from './commentaryutil'

import util_browser from './utils/browser'

export default Petrarchive

function Petrarchive() {
  this.inited = false
  this.activeFacs = undefined

  this.header = $('#sticky-header')

  // Figurer out if document hsa more than one charta
  this.hasMultipleSides = function() {
    return $('.-teibp-pbFacs img').length > 1
  }

  this.chartae = []

  this.init()

  this.toggleElement = function(node, id, display) {    
    // If display parameter not supplied then go with default jQuery.toggle()
    if (!display) 
      $('#' + id).toggle()
    else
      $('#' + id).toggleClass('display-' + display)
  }

  this.switchCustomCSS = function (theme) {
    let  dict = {
      diplomatic: 'common/css/custom.css',
      edited: 'common/css/custom_norm.css'
    }

    let stylesheet = dict[theme]
    document.getElementById('customcss').href=stylesheet
  }
}

Petrarchive.prototype.init = function() {
  const that = this

  if (this.inited)
    return;
  
  this.inited = true

  this.nav = new NavUtil()
  this.commentary = new CommentaryUtil()
  

  util_browser.convertUrl('content')

  this.facsInited = false

  this.events()

  /* ----------------
   Setup Facs
   ----------------*/
  this.facs = new Frame({
    frame: $('#pt-facs'),
    recenter: false
  })

  let facs = this.facs,
      facsNav = $('#pt-facs nav');

  this.setupFacsThumb()


  facs.$frame.resizable(
    {
      create: function( event, ui ) {
        // Prefers another cursor with two arrows
        $(".ui-resizable-e").css("cursor","ew-resize")
      },

      stop: function( event, ui) {
        facs.refresh()
      },

      handles: 'w'
    }
  )

  facsNav.children('button.zoom').click(function(ev) {
    let  tgt = $(ev.delegateTarget)
    tgt.hasClass('in') ? facs.zoomImg(facs._zoom + .03) : facs.zoomImg(facs._zoom - .02)
    ev.stopPropagation()
  })

  facsNav.children('button.new-tab').click(function(ev) {
    // teibp.js TODO : transfer this somewhere else
    let r = confirm("Facsimile will open in a new tab. Is that okay?");

    if (r == true)
      showFacs();
    else
      return;
  })

  facsNav.children('button.facs-close').click(function(ev) {
    that.deactivateFacs()
  })

  $(window).resize(function() {
    that.onResize()
  })

  this.onResize()
}

Petrarchive.prototype.refresh = function() {
  this.nav.refresh()
  this.setupFacsThumb()

  this.commentary.refresh()

  this.onResize()
}

Petrarchive.prototype.events = function() {

}

Petrarchive.prototype.setupFacsThumb = function() {
  // Refresh the facs button and img
  let cloned = $($('.facs-thumb')[0])
  $('.facs-thumb').remove()

  cloned.removeClass('activeFacs').removeClass('activePb')
  $('#teibpToolbox').append(cloned)

  if (util_browser.getParam('incomplete')) {
    let baseDir = "../images/thumb-vat-lat3195-f/vat-lat3195-f-",
        ch = this.getCurrentDoc().getFirstSide().charta,
        rv = this.getCurrentDoc().getLastSide().rv,
        facsSrc = baseDir + ch + rv + ".jpg";

    $('#sticky-header .facs-thumb img').attr('src', facsSrc)
    
    $('#sticky-header .facs-thumb').attr('data-charta', "charta " + this.getCurrentDoc().getFirstSide().getPrettyName())

    $('.viz').attr('src', '../' + this.getCurrentDoc().getFirstSide().getViz())
  } else {
    // Setup the sticky header
    let thumb = $('.-teibp-thumbnail'),
        thumbCount = thumb.length;

    for (let i = 0; i < thumbCount; i++) {
      let imgSrc = $(thumb[i]).attr('src')

      if (i==0) {
        $('#sticky-header .facs-thumb img').attr('src', imgSrc)
      } else {
        $($('#sticky-header .facs-thumb')[i-1]).clone()
          .appendTo('#sticky-header #teibpToolbox')
          .children('img')
          .attr('src', imgSrc)
      }

      $($('.facs-thumb')[i]).attr('data-charta', $($('.-teibp-pageNum')[i]).text())
    }
  }

  let that = this

  $('button.facs-thumb').click(function(ev) {
    let img = $($(ev.delegateTarget).children('img')),
        charta = $(ev.delegateTarget).attr('data-charta');

    that.activateFacs(img, charta)
  })

  if (this.hasMultipleSides()) {
    $('.-teibp-pb:first-child').css('display', 'initial')

    // scroll to the pertinent chartae
    let pageBreaks = $.makeArray($('.-teibp-pageNum').map(function(i, el) {
      // must account for the the Y length that fixed header obscures
      return el.offsetTop - that.header.height() - $(el).height()
    }))

    let debouncedPbActivate = util_browser.debounce(function(ev) {
      let scrollTop = $(ev.delegateTarget).scrollTop()

    
      let filteredPbs = pageBreaks.filter(function(pb) {
        return scrollTop > pb
      })

      let activePbsIndex = filteredPbs.length - 1

      $('button.facs-thumb').removeClass('activePb')
      $($('button.facs-thumb')[activePbsIndex]).addClass('activePb')
    }, 80)
    
    $('.content-container').scroll(debouncedPbActivate)
  }
  this.facsIsActive = util_browser.getParam('facs') == 'active' ? true : false

  if (this.facsIsActive) {
    $('button.facs-thumb')[0].click() 
  }
}

Petrarchive.prototype.scrollTo = function(hash) {
  if (!hash) {
    $('.content-container').scrollTop(0)
    return
  }

  setTimeout(function() {
    if ($(hash).length == 0) return;

    $('.content-container').animate({
      scrollTop: $(hash).position().top
    }, 1200);
  }, 0)
}

Petrarchive.prototype.onResize = function() {
  let that = this
  setTimeout(function() { 
    let headerHeight = that.header.outerHeight()
    $('#pt-facs').css('top', headerHeight)

    let commentaryHeaderHeight = $('.commentary.active header').height()
    $('.commentary.active main').css('top', commentaryHeaderHeight * 1.2)
  }, 0)
}

Petrarchive.prototype.getCurrentDoc = function() {
  return this.nav.current
}

Petrarchive.prototype.activateFacs = function(img, charta) {
  console.log('foobar', img, charta)
  if (charta == this.activeFacs)
    return this.deactivateFacs();

  this.facs.loadImg(img)
  
  $('html > body').addClass('facs-active')

  this.facs.$frame.addClass('active')
  util_browser.setParam('facs', 'active')

  $('#pt-facs .meta').text(charta)  

  $('button.facs-thumb').removeClass('activeFacs')
  $('button.facs-thumb[data-charta="' + charta + '"]').addClass('activeFacs')

  if (!this.facsInited)
    this.facs.containImg();

  this.facsInited = true
  this.facsIsActive = true
  this.activeFacs = charta
}

Petrarchive.prototype.deactivateFacs = function() {
  $('html > body').removeClass('facs-active')

  this.facs.$frame.removeClass('active')
  util_browser.removeParam('facs')

  $('button.facs-thumb').removeClass('activeFacs')

  this.facs.img = undefined

  this.facsIsActive = false
  this.activeFacs = undefined
}

Petrarchive.prototype.showHide = function(maniculeId, idToShow, idToHide) {
  let hide = "#" + idToHide,
      show = "#" + idToShow,
      manicule = "#" + maniculeId,
      n = $(hide).attr("n") || $(show).attr("n");


  $(hide).siblings('.poem-number').text(n)
  $(show).siblings('.poem-number').text(n)

  $(hide).css("display","none")
    .siblings().css("display", "none");
  $(show).css("display","block")
    .siblings().css("display", "block");

  let newFunction = "PT.showHide('" + maniculeId + "','" + idToHide + "','" + idToShow + "');";
  $(manicule).attr("onclick", newFunction);
}
