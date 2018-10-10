import $ from 'jquery'

import 'bootstrap'

import util_browser from './utils/browser'

$(document).ready(function() {
  
  insertIntoNav('main.glossary entry', 'aside.nav', 'orth')

  $('aside.nav a').click(function(ev) {
    $('aside.nav a').removeClass('active')
    
    let headerHeight = $('#sticky-header').height()
    setTimeout(function() {
      $(window).scrollTop($(window).scrollTop() - (headerHeight * 1.4))
    }, 10)

    $(ev.delegateTarget).addClass('active')

    // wait for click even to go through and then readjust the scroll 
    // so that the sticky header does not cover content
    return true
  })

  util_browser.convertUrl()
})

function insertIntoNav(queryString, nav, navTextQuery) {
  let elements = $(queryString)
  console.log(elements)
  elements.each(function(i, el) {
    let navText,
        $el = $(el),
        href = $el.attr('id');
    
    if (navTextQuery)
      navText = $el.find(navTextQuery)[0] ? $el.find(navTextQuery)[0].innerHTML : undefined;
    
    if (!navText)
      navText = $el.attr('id');
    
    let html = `<a href="#${href}">${navText}</a>`
    $(nav).append(html)
  })
}