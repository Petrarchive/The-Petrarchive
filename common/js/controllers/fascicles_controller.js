import { Controller } from "stimulus"
import util_browser from '../utils/browser'
import $ from 'jquery'

import NavUtil from '../navutil'

export default class extends Controller {
  static targets = ['title', 'single', 
                    'vis', 'min', 'max',
                    'xmlLink', 'singlePoemFirstLine'
                   ]
  
  connect() {
      util_browser.convertUrl('content')

      this.textindex = $('#shadow-data .textindex')
  }

  activateFascicle(ev) {
    if (document.querySelector('.fascicle-container.active'))
        document.querySelector('.fascicle-container.active').classList.remove('active');
    
    let fascicle = ev.target.closest('.fascicle-container')
    fascicle.classList.add('active')

    this.singleTarget.innerHTML = fascicle.innerHTML
    this.titleTarget.innerHTML = this.fetchMeta('title')

    let sides = this.singleTarget.querySelectorAll('.container .side')

    let min = sides[0],
        max = sides[3];
    
    this.minTarget.textContent = min.getAttribute('data-charta') + min.getAttribute('data-side')
    this.maxTarget.textContent = max.getAttribute('data-charta') + max.getAttribute('data-side')

    this.activateSide(null, min)
  }

  fetchMeta(key) {
    let metaAttr = `data-meta-${key}`
    let query = `[${metaAttr}]`

    let element = this.singleTarget.querySelector(query)
    return element.getAttribute(metaAttr)
  }

  activateSide(ev, element) {
    let side = element || ev.target.closest('.side') 

    if (!side)
      return;

    if (document.querySelector('.click-active'))
      document.querySelector('.click-active').classList.remove('click-active');

    side.classList.add('click-active')

    this.visTarget.setAttribute('src', side.getAttribute('data-vis-url'))
    let name = `${side.getAttribute('data-charta')}${side.getAttribute('data-side')}`
    let navUtil = new NavUtil()
    let href = navUtil.getHref(name)

    this.xmlLinkTarget.setAttribute('href', href)

   // let poemFirstLine = document.querySelector('#shadow-data .textindex a[data-charta')

    let table = this.textindex.find('table')
    /*
    // Scroll to current active charta
    let active = 'asdfoij'
    console.log('what')

    let trArray = table.children('tr').toArray()
    console.log(table.children('tr'), this.textindex.find('table'))
    let activeTr = trArray.find(function(tr) {
      let charta = $(tr).children('td:nth-child(2)')
      console.log(charta)
      return charta.text() == String(active)
    })
    */


    //his.singlePoemFirstLineTarget.textContent = poemFirstLine
  }
}
