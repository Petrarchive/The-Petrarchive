import $ from 'jquery'
import ko from 'knockout'

import util_browser from './utils/browser'
import PetrarchiveDocument from './petrarchivedocument'

export default NavUtil

function NavUtil() {  
  // fetch and store vizindex.html data in #shadow-data
  // Then we can query this list of links to compute prev/next hrefs.
  if (!document.querySelector('.vizindex')) {
    $.get('../vizindex.html', function(html) {
      let vizindex = $('<div class="vizindex convert-url"></div>')
      vizindex.appendTo('#shadow-data')
      vizindex.append(html)

      util_browser.convertUrl('content')
    })
  }

  if (util_browser.getParam('incomplete')) {
    this.current = new PetrarchiveDocument(undefined, util_browser.getParam('ch'))
  } else {
    this.current = new PetrarchiveDocument(document.URL)
  }

  this.previous = $('#page-nav a.previous')
  this.next = $('#page-nav a.next')

  this._theme = ko.observable('diplomatic')

  // url to xslt Document we are using
  this.xsl = './petrarchive.xsl'
  this.xslDoc

  this.events()
}

NavUtil.prototype.refresh = function() {
  if (util_browser.getParam('incomplete')) {
    this.current = new PetrarchiveDocument(undefined, util_browser.getParam('ch'))
  } else {
    this.current = new PetrarchiveDocument(document.URL)
  }

  this.setupPrevHref()
  this.setupNextHref()

  this.next.removeClass('hide')
  this.previous.removeClass('hide')
}

NavUtil.prototype.events = function() {
  const that = this

  $('.themeBox label').click(function(ev) {
    let newValue = $(ev.delegateTarget).children('input').attr('value')
    that._theme(newValue)

    let dict = {
      diplomatic: '../css/custom.css',
      edited: '../css/custom_norm.css'
    }

    let stylesheet = dict[that._theme()]
    document.getElementById('customcss').href=stylesheet
  })

  this.previous.click(function(ev) {
    that.navigateTo(that.previous.attr('href'))

    ev.preventDefault()
  })

  this.next.click(function(ev) {
    that.navigateTo(that.next.attr('href'))

    ev.preventDefault()
  })
}

NavUtil.prototype.navigateTo = function(href) {
  let newDoc = new PetrarchiveDocument(href)

  if (util_browser.getParam("facs")) {
    if (newDoc.hash) {
      href = newDoc.url.split('#')[0] + "?facs=active" + "#" + newDoc.hash
    } else {
      href += "?facs=active"
    }
  }
  
  if (newDoc.name == this.current.name) {
    history.pushState({}, null, href)
    $(document).trigger('Petrarchive:async-load')

    return
  }

  util_browser.turboXml(href, this.xsl).then(function(xmlResult) {
    let tei = $(xmlResult).find('#tei_wrapper #tei_main')
		
    $('#tei_wrapper #tei_main').html(tei.html())
    history.pushState({}, null, href)
    $(document).trigger('Petrarchive:async-load')
  })

}

NavUtil.prototype.setupPrevHref = function() {
  let firstSide = this.current.getFirstSide()

  if (firstSide.charta == '001' && firstSide.rv == 'r') {
    this.previous.attr('disabled', true)
    return null
  } else {
    this.previous.removeAttr('disabled')
  }

  let prevName = firstSide.getPrevSide(),
      prevHref = this.getHref(prevName);

  this.previous.attr('href', prevHref)
}

NavUtil.prototype.setupNextHref = function() {
  let nextName = this.current.getLastSide().getNextSide(),
      nextHref = this.getHref(nextName);

  this.next.attr('href', nextHref)
}

NavUtil.prototype.getHref = function(name) {
  let href = $('#shadow-data .vizindex a[data-charta="' + name + '"]').attr('href')
  
  return href.split('#')[0]
}

