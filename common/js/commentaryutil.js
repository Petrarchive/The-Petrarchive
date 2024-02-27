import $ from 'jquery'

export default CommentaryUtil

function CommentaryUtil() {
  var that = this

  this._active = undefined

  this.navMeta

  this.inited = false

  this.init()
  this.events()

  this.activate = function(rvf) {
    /*if (rvf[0] == '#') {
      rvf = rvf.substring(1)

      rvf = rvf.split('?')[0]
    } */

    $('body').addClass('commentary-active')
    var target = '#' + rvf + '-commentary'

    $(target).addClass('active')

    this._active = rvf

    this.refreshNavMeta()
  }
  this.deactivate = function() {
    $('body').removeClass('commentary-active')
    $('.commentary').removeClass('active')
    this._active = undefined
  }

  this.refreshNavMeta = function() {
    // This keeps the header/nav in the commentary UI
    // in line and looking good even if the user decides 
    // to resize and change their browser dimensions.
    this.navMeta = $('.commentary.active nav a').map(function() {
      var split = this.href.split('#')
      var hash = split[split.length - 1]

      return {
        hash: hash,
        top: document.querySelector('#' + hash).offsetTop
      }
    })
  }
}

CommentaryUtil.prototype.init = function() {  
  $('back').appendTo(".content-container").addClass('current')

  this._resize()
}

CommentaryUtil.prototype.refresh = function() {
  // check if we indeed need to refresh. On initial page load, we want to bypass,
  // because this refresh function will be called from Petrarchive.refresh()
  $('body.commentary-active').removeClass('commentary-active')
  $('.content-container back.current').remove()

  this.init()
  this.events()
}

CommentaryUtil.prototype._resize = function() {
  var wrapper = $('#tei_wrapper'),
    commentary = $('back'),
    h = $(window).height();

  if (!commentary.length) {
    // Don't need to resize for documents that don't yet 
    // have commentary
    return
  }

  if (!this._active) {
    wrapper.height(h)
  } else {
    wrapper.height(h * .65)
    commentary.height(h * .35)
  }
}

CommentaryUtil.prototype.events = function() {
  var that = this

  $('button.commentary-activate').click(function(ev) {
    var rvf = $(ev.delegateTarget).attr('id')
    
    if (that._active == rvf) {
      that.deactivate()
      that._resize()
      return
    }

    that.deactivate()
    that.activate(rvf)
    that._resize()
  })

  $('div.commentary header button.close').click(function(ev) {
    that.deactivate()
    that._resize()
  })

   // Navigation between different sections of commentary
  $('nav.commentary a').click(function(ev) {

    $('nav.commentary a').removeClass('active')

    $(ev.delegateTarget).addClass('active')
  })

  $(window).resize(function() {
    that.refreshNavMeta()
    that._resize()
  })

  $('.commentary main').scroll(function(ev) {
    // Find scroll position and update commentary header
    // this will increase navigability and provide sense of position
    var scrollTop = ev.target.scrollTop

    var filtered = that.navMeta.filter(function(i, el) {
      return scrollTop >= (el.top - 10)
    })

    var active = filtered[filtered.length - 1]

    $('nav.commentary a').removeClass('active')
    $('nav.commentary a[href="#' +  active.hash + '"]').addClass('active')
  })
}