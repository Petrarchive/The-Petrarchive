import $ from 'jquery'

import 'bootstrap'

import util_browser from './utils/browser'

import Fascicle from './fascicle'

import * as d3 from 'd3'

$(document).ready(async function () {
    const side = {
        thickness: 10
    }

    const dimensions = {
        width: 900,
        height: 500,
        margin: 30
    }

    function getSideLeft(dimensionsParam) {
        if (!dimensionsParam)
            dimensionsParam = dimensions;

        const dp = dimensionsParam

        return {
            x: -((dp.width / 2) - dp.margin * 5),
            y: -(dp.height - dp.margin * 10)
        }
    }

    function getSideRight(dimensionsParam) {
        if (!dimensionsParam)
            dimensionsParam = dimensions;

        const dp = dimensionsParam

        return {
            x: ((dp.width / 2) - dp.margin * 5),
            y: -(dp.height - dp.margin * 10)
        }
    }

    let drawSideLeft = (d, i, dimensions) => {        
        let start,
            end;


        const margin = dimensions.height * .1,
              center = [0, 0];

        start = center
        end = [-((dimensions.width / 2) - 50), -(dimensions.height - 200 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))]

        // treat interior
        if (i == 1) {
            start[0] += side.thickness * .5
            start[1] -= side.thickness
            end[0] += side.thickness * .5
            end[1] -= side.thickness
        }
        
        let dString = `m${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
        return dString
    }

    let drawSideRight = (d, i, dimensions) => {
        let start,
            end;
        
        const margin = dimensions.height * .1,
            center = [0, 0];

        start = center
        end = [(dimensions.width / 2) - 50, -(dimensions.height - 200 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))]
        // Treat interior
        if (i == 0) {
            start[0] -= side.thickness * .5
            start[1] -= side.thickness
            end[0] -= side.thickness * .5
            end[1] -= side.thickness
        }
        console.log(dimensions, i, end)
        let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
        return dString
    }

    let drawWrapSideLeft = (d, i, dimensions) => {
        let start,
            end;

        const margin = dimensions.height * .1,
        center = [0, 0];

        start = center
        end = [-(   (dimensions.width / 2) - 50), .6 * -(dimensions.height - 200 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))]

        // Treat interior
        if (i == 1) {
            start[0] += side.thickness * .5
            start[1] -= side.thickness
            end[0] += side.thickness * .5
            end[1] -= side.thickness
        }
        
        let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
        return dString
    }

    let drawWrapSideRight = (d, i, dimensions) => {
        let start,
            end;

        const margin = dimensions.height * .1,
        center = [0, 0];

        start = center
        end = [((dimensions.width / 2) - 50), .6 * -(dimensions.height - 200 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))]
    
        // Treat interior
        if (i == 0) {
            start[0] -= side.thickness * .5
            start[1] -= side.thickness
            end[0] -= side.thickness * .5
            end[1] -= side.thickness
        }
        
        let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
        return dString
    }


    let tooltip = d3.select("body").append("div")	
        .attr("class", "tooltip")				
        .style("opacity", 0);
    tooltip.append('img')

    let fasciclesData = await getFascicles(document.querySelectorAll('div.fascicle'))
    console.log(fasciclesData)

    let fasciclesContainer = d3.select('.fascicles nav');

    const fascicles = fasciclesContainer.selectAll("svg.fascicle")
      .data(fasciclesData)
      .enter().append('svg')
        .attr('class', (d) => {
            return `fascicle ${d.type}`
        })
        .attr('width', dimensions.width)
        .attr('height', dimensions.height);
    
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
                    return `translate(-85, -100)`;
                if (i == 2)
                    return `translate(85, -100) `;
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
                            return drawWrapSideLeft(d, i, dimensions);

                        if (quire.classed('intra'))
                            return drawSideLeft(d, i, dimensions);
                    }
                    if (charta.classed('right')) {
                        if (quire.classed('extra'))
                            return drawWrapSideRight(d, i, dimensions);

                        if (quire.classed('intra'))
                            return drawSideRight(d, i, dimensions);
                    }
                }

                if (charta.classed('left'))
                    return drawSideLeft(d,i, dimensions);
                if (charta.classed('right'))
                    return drawSideRight(d,i, dimensions);
            })
            .on('mouseover', function(d,i) {
                d3.select(this).classed('active', true)
    
                tooltip.transition()		
                    .duration(200)		
                    .style("opacity", .9);	
    
                tooltip.select('img').attr('src', d.getViz())

                console.log(d3.event)
    
                tooltip.style("left", (d3.event.pageX) + "px")		
                    .style("top", (d3.event.pageY - 28) + "px");	
            })
            .on('mouseout', function(d,i) {
                d3.select(this).classed('active', false)
                
                tooltip.transition()		
                    .duration(500)		
                    .style("opacity", 0);	
            });
    }

    
        

})

async function getFascicles(fascicleContainers) {
    const containers = Array.prototype.slice.call(
        fascicleContainers
    )

    const containersArray = containers.map( async (c) => {
        return await getFascicle(c)
    })

    let fascicles = await Promise.all(containersArray);

    return fascicles
}

async function getFascicle(fascicleContainer) {
    const sides = Array.prototype.slice.call(
        fascicleContainer.querySelectorAll('img')
    )

    const fascicle = new Fascicle()

    if (fascicleContainer.classList.contains('quaternion')) {
        fascicle.setType('quaternion')
    }

    if (fascicleContainer.classList.contains('binion')) {
        fascicle.setType('binion')
    }

    if (fascicleContainer.classList.contains('binion-sandwich')) {
        fascicle.setType('binion-sandwich')
    }

    await fascicle.assemble(sides)
    fascicle.applyGregorysLaw()

    return fascicle
}
