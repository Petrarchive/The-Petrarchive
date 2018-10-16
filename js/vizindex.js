import $ from 'jquery'

import 'bootstrap'

import Fascicler from './fascicler/fascicler'
import * as draw from './fascicler/draw'

import * as d3 from 'd3'

const side = {
    thickness: 1
}

const dimensions = {
    width: 100,
    height: 45,
    margin: 3
}

$(document).ready(async function () {
    let fascicler = new Fascicler()

    registerEvents()
 
    let elements = document.querySelectorAll('div.fascicle')
    let options = {
        title: 'h1'
    }
    let fasciclesData = await fascicler.getFascicles(elements, options)

    let fasciclesNav = d3.select('.fascicles nav');

    const fascicles = fasciclesNav.selectAll("div.fascicle-container")
      .data(fasciclesData)
      .enter().append('div')
        .attr('class', 'fascicle-container col-sm-6 col-md-4 col-lg-3')
        .attr('width', 100)
        .attr('height', 0)
        .attr('padding-top', () => {
            return (dimensions.height / dimensions.width) * 100
        })
        .attr('position', 'relative')
      .append('svg')
        .attr('viewBox', (d,i) => {
            return `0 0 ${dimensions.width} ${dimensions.height}`
        })
        .attr('class', (d) => {
            return `fascicle ${d.type}`
        })
        .attr('data-fascicle-title', (d, i) => {
            console.log(d)
            return d.getMeta('title')
        });
    
    const quires = fascicles.selectAll('.quire')
      .data((d) => {
        return d.getQuires()
      }).enter().append("g")
        .attr("class", (d) => {
            return `quire ${d.getType()}`
        })
        .attr('width', function(d,i) {
            if (d3.select(this.parentElement).classed('binion-sandwich')) {
                if (i > 0) {
                    return dimensions.width / 2.75
                }
            }
            return dimensions.width 
        })
        .attr('height', function(d,i) {
            if (d3.select(this.parentElement).classed('binion-sandwich')) {
                if (i > 0) {
                    return dimensions.height * .8
                }
            }
            return dimensions.height 
        })
        .attr('data-quire-length', (d,i) => { return d.getFolios().length })
        .attr('transform', function(d, i) {
            let element = d3.select(this)
            
            if (element.classed('intra')) {
                if (i == 1)
                    return `translate(-13, -10)`;
                if (i == 2)
                    return `translate(13, -10)`;
            }
        })
        .each(drawQuire);
    
    function drawQuire(d, i) {
        if (d.getType() == 'binion extra') {
            drawFolios.call(this, d, i)
        } else {
            drawFolios.call(this, d, i)
        }
    }

    function drawFolios(d, i) {
        let folios = d3.select(this).selectAll('.folio')
          .data((d) => {
            return d.getFolios()
          })
          .enter().append('g')
            .attr('class', (d) => {
                let surface = d.getExteriorSurface()
                return `folio ${surface}-exterior`
            })
            .attr('data-folio-index', (d,i) => {return i})
            .attr('transform', function(d, i) {
                let quire = d3.select(this.parentNode)
                let folioY = dimensions.height
                let folioMargin = i * side.thickness * 2.25

                if (quire.classed('extra'))
                    folioMargin = i * side.thickness * 2.25;
               
                folioY -= folioMargin

                return `translate(${dimensions.width / 2},${folioY})`
            });
  
      
        let chartae = folios.selectAll('charta')
          .data((d) => {
              return d.getChartae()
          })
          .enter().append('g')
          .attr('class', function (d,i) {
              let side = i % 2 ? 'right' : 'left'
              return `charta ${side}`
          });
      
        let sides = chartae.selectAll('.side')
            .data((d) => {
                return d.getSides()
            })
            .enter().append('path')
            .attr('class', function(d, i) {
                return `side ${d.surface}`
            })
            .attr('fill', 'transparent')
            .attr('stroke-width', side.thickness)
            .attr('data-charta', (d) => d.charta)
            .attr('data-side', (d) => d.rv)
            .attr('data-viz-url', (d) => {
                return d.getViz()
            })
            .attr('d', function(d, i) {
                let charta = d3.select(this.parentNode)
                let folio = d3.select(this.parentNode.parentNode)
                let quire = d3.select(this.parentNode.parentNode.parentNode)
                let fascicle = d3.select(this.parentNode.parentNode.parentNode.parentNode)

                let dimensions = {
                    width: Number(quire.attr('width')),
                    height: Number(quire.attr('height')),
                    folioIndex: Number(folio.attr('data-folio-index')),
                    quireLength: Number(quire.attr('data-quire-length'))
                }                     

                if (fascicle.classed('binion-sandwich')) {
                    if (charta.classed('left')) {
                        if (quire.classed('extra'))
                            return draw.wrapSideLeft(d, i, dimensions);

                        if (quire.classed('intra'))
                            return draw.sideLeft(d, i, dimensions);
                    }
                    if (charta.classed('right')) {
                        if (quire.classed('extra'))
                            return draw.wrapSideRight(d, i, dimensions);

                        if (quire.classed('intra'))
                            return draw.sideRight(d, i, dimensions);
                    }
                }

                if (charta.classed('left'))
                    return draw.sideLeft(d,i, dimensions);
                if (charta.classed('right'))
                    return draw.sideRight(d,i, dimensions);
            }); 
    }

})

function registerEvents() {
    document.querySelector('.fascicles.container nav').addEventListener("click", (ev) => {
        let fascicle = ev.toElement.closest('.fascicle-container')
        let activeView = document.querySelector('.active-fascicle')


        activeView.querySelector('.container').innerHTML = fascicle.innerHTML
        activeView.querySelector('h1').innerHTML = activeView.querySelector('.fascicle').getAttribute('data-fascicle-title')

        let sides = activeView.querySelectorAll('.container .side')

        let min = sides[0],
            max = sides[sides.length -1];
        
        updateViz(min, min.getAttribute('data-viz-url'))

        activeView.querySelector('.chartae-range .min').textContent = min.getAttribute('data-charta') + min.getAttribute('data-side')
        activeView.querySelector('.chartae-range .max').textContent = max.getAttribute('data-charta') + max.getAttribute('data-side')
        
        d3.selectAll('.active-fascicle .container .side')
            .on('click', function() {
                updateViz(d3.select(this).node(), d3.select(this).attr('data-viz-url'))
            })
            .on('mouseover', function() {
                d3.select(this).classed('active', true)
            })
            .on('mouseout', function() {
                d3.select(this).classed('active', false)	
            }); 
    })
}

function updateViz(element, src) {
    if (document.querySelector('.click-active'))
        document.querySelector('.click-active').classList.remove('click-active');

    element.classList.add("click-active")
    document.querySelector('.active-fascicle img.viz').setAttribute('src', src)
}
