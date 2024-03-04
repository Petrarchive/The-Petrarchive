import $ from 'jquery'

import 'bootstrap'

import Petrarchive from './petrarchive'
import util_browser from './utils/browser'

import 'datatables.net-bs4'
import 'datatables.net-fixedheader-bs4'
import 'datatables.net-responsive-bs4'

let PT

// This is the 'init'/bootstrap function that gets everything started
$(document).ready(function() {  
  poemInit()

  // This takes care of loading xml and xslt document without 
  // complete page refresh. Idea is taken from TurboLinks library
  $(document).on('Petrarchive:async-load', () => {
    poemInit()
  })
})

function poemInit() {
  if (PT) 
    PT.refresh();
  else {
    PT = new Petrarchive()
    window.PT = PT
  }

  setupRvf()

  setupPageNum()
  setupTextindex()

  // Too many edge cases to address solely using CSS
  // using JS for some styling
  applyStyling()


  // When hash is clicked we need to give it a vertical cushion equal to 2x the sticky header.
  // This is because browser loads webpage right at <a> of respective hash tag and will be blocked
  // by sticy header
  if (window.location.hash) {
    setTimeout(function() {
     PT.scrollTo(window.location.hash)
    }, 0)
  } else {
    PT.scrollTo()
  }

  if (util_browser.getParam('ch')) {
    let charta = util_browser.getParam('ch')
    PT.scrollTo(charta)
  } 
}



function setupPageNum() {
  let pageNum,
      pages = PT.nav.current.getSides();

  if (pages.length == 1) {
    pageNum = 'charta ' + pages[0].getPrettyName()
  } 
  else if (pages.length > 1) {
    pageNum = 'chartae ' + pages[0].getPrettyName() + ' - ' + pages[pages.length-1].getPrettyName()
  }

  $('#sticky-header .charta-no').text(pageNum)
}

function setupTextindex() {
  let element = '#poem-textindex',
      textindex = $(element);
    
  if (textindex.attr('data-loaded') && textindex.attr('data-events-loaded')) {
    return
  } 

  if (!textindex.attr('data-events-loaded')) {
    // put this into petrarchive.xsl
    $.get('./textindex_poems.html', function(html) {
      let $html = $(html)

      //textindex.find('.modal-content').html('<table id="index"></table>')
      textindex.find('.modal-content').append($html)


      $('table#index').DataTable({
        "dom": '<"top"f>rt<"bottom"lp><"clear">',
        "paging": false,
        "scrollY": '60vh',
        //"fixedHeader": true,
        "scrollCollapse": true,
        "columnDefs": [
            { "type": "html-num-fmt", "targets": 0, },
            { "orderable": false, "targets": 1, }
        ]
      })

      //util_browser.convertUrl('content')

      PT.nav.refresh()
    })

    // Prevent full page reload / instead do async load
    textindex.click(function(ev, foobar) {
      if (ev.target.localName == 'a') {
        PT.nav.navigateTo($(ev.target).attr('href'))
        ev.preventDefault()
        $(element).modal('hide')
      }
    })

    textindex.attr('data-events-loaded', true)
  }

  $(element).on('shown.bs.modal', function () {
    if (textindex.attr('data-loaded'))
      return;

    textindex.attr('data-loaded', true) 

    let table = textindex.find('table')
    
    // Fix header and format it
    let header = textindex.find('thead')
    //header.css('position', 'fixed')
    //  .css('background', 'white')

    $(table.find('th:first-child')).click().click()

    // Scroll to current active charta
    let active = PT.nav.current.getFirstSide().getPrettyNameTextindex()

    let trArray = table.children('tr').toArray()
    let activeTr = trArray.find(function(tr) {
      let charta = $(tr).children('td:nth-child(2)')
      console.log(charta.text())
      return charta.text() == String(active)
    })

    let scrollTo = $(activeTr).offset().top - $(activeTr).height()
    $('.modal-content').scrollTop(scrollTo)
  })
}

function applyStyling() {
  // Apply indent to lg[type='dblvrs'] first line when pillcrow is first character  
  let lg = $("lg[type='dblvrs']")
  lg.each(function(i, el) {
    let l = el.querySelector('l'),
        hiFirstTest = recursiveSearch(l, 'hi');

    if (hiFirstTest) { 
      $(el).addClass('indent') 

      if (el.querySelector('.pilcrow'))
        $(el).addClass('pilcrow');
    }
  })

  // Apply indent to lg[type='trplvrs'] first line when pillcrow is first character  
  let tripl = $("lg[type='trplvrs']")
  tripl.each(function(i, el) {
    let l = el.querySelector('l'),
        hiFirstTest = recursiveSearch(l, 'hi');

    if (hiFirstTest) { 
      $(el).addClass('indent')
      
      if (el.querySelector('.pilcrow'))
        $(el).addClass('pilcrow');
    }
  })

  // Apply indent to l in sestina when pillcrow/h1 first character
  let sestinaL = $("lg[type='sestina'] l")
  sestinaL.each(function(i, el) {
    let hiFirstTest = recursiveSearch(el, 'hi')
    if (hiFirstTest) { 
      $(el).addClass('indent') 

      if (el.querySelector('.pilcrow'))
        $(el).addClass('pilcrow');
    }
  })

  //Custom blank/white space 
  let blankSpace = $("space[ana='#space-stop']"),
      blankSpaceExtent = blankSpace.attr('extent');
    
  blankSpace.css('height', (blankSpaceExtent * 1.8) + 'em')
}

function recursiveSearch(el, type) {
  if (!el)
    return null;

  type = type.toUpperCase()

  //is the first tag/element within the provided el 
  // of the type desired
  let typeReg = new RegExp("^<" + type, "i"),
      firstMatch = el.innerHTML.match(typeReg); 

  if (firstMatch) 
    return firstMatch;

  let firstEl = el.querySelector('*')

  if (!firstEl)
    return null;

  return recursiveSearch(firstEl, type)
}

function setupRvf() {
  if (util_browser.getParam('incomplete')) 
    return $('.rvf-range').text('');

  let rvf = $('lg[n]'),
      min = $(rvf[0]).attr('n'),
      max = $(rvf[rvf.length-1]).attr('n');
  
  $('.rvf-range').text('Rvf ' + min + '-' + max)
}
