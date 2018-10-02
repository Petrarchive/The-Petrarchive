import $ from 'jquery'

import 'bootstrap'

import util_browser from './utils/browser'

import Charta from './charta'

import * as d3 from 'd3'

$(document).ready(async function () {
    const side = {
        thickness: 7
    }

    let drawSideLeft = (d, i) => {
        const surface = d.surface
        
        let start,
            end;

        const margin = (30 * i),
              center = [0, 0];

        start = center
        end = [start[0] - 150, start[1] - 250]

        if (surface == 'flesh') {
            start[0] += side.thickness * .5
            start[1] -= side.thickness
            end[0] += side.thickness * .5
            end[1] -= side.thickness
        }
        
        let dString = `m${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
        return dString
    }

    let drawSideRight = (d, i) => {
        const surface = d.surface

        let start,
            end;

        const margin = (30 * i),
            center = [0, 0];

        start = center
        end = [start[0] + 150, start[1] - 250]

        if (surface == 'flesh') {
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

    let payloads = await getPayloads(document.querySelectorAll('div.fascicle'))
    let payload = await getPayload(document.querySelector('div.fascicle'))
    console.log(payloads)
    console.log(d3.selectAll('.fascicle'))

    let fascicles = d3.selectAll('.fascicle')
        .data(payloads);

    let svg = fascicles.selectAll("svg")
      .data(payloads)
      .enter().append('svg')
        .attr('height', 500)
        .attr('width', 900);

    console.log(svg)
    
    let folios = svg.selectAll('.folio')
      .data((d) => {
          console.log(d)
          return d.folios
      })
      .enter().append('g')
        .attr('class', 'folio')
        .attr('transform', function(d, i) {
            return `translate(200,${500 - (i * side.thickness * 10)})`
        });

    
    let chartae = folios.selectAll('charta')
        .data((d) => {
            return d.chartae
        })
        .enter().append('g')
        .attr('class', function (d,i) {
            let side = i % 2 ? 'right' : 'left'
            return `charta ${side}`
        });
    
    let sides = chartae.selectAll('.side')
      .data((d) => {
          return d.sides
      })
      .enter().append('path')
        .attr('class', (d) => {
            return `side ${d.surface}`
        })
        .attr('fill', 'transparent')
        .attr('stroke-width', side.thickness)
        .attr('d', function(d, i) {
            let charta = d3.select(this.parentNode)
            if (charta.classed('left'))
                return drawSideLeft(d, i);
            if (charta.classed('right'))
                return drawSideRight(d, i);
        })
        .on('mouseover', function(d,i) {
            d3.select(this).classed('active', true)

            tooltip.transition()		
                .duration(200)		
                .style("opacity", .9);	

            tooltip.select('img').attr('src', d.img.src)

            tooltip.style("left", (d3.event.pageX) + "px")		
                .style("top", (d3.event.pageY - 28) + "px");	
        })
        .on('mouseout', function(d,i) {
            d3.select(this).classed('active', false)
            
            tooltip.transition()		
                .duration(500)		
                .style("opacity", 0);	
        });
        

})

function ancientSplit(virtual, depth) {
    return new Promise((resolve) => {
        let ancientMaterial = [],
            clonedVirtual = virtual.slice(0);
    
        while (clonedVirtual.length) {
            let ancientPiece  = []

            for (let i = 0; i < depth; i++) {
                ancientPiece.push(clonedVirtual.shift())
            }

            let popped = []
            for (let i = 0; i < depth; i++) {
                popped.push(clonedVirtual.pop())
            }

            Array.prototype.push.apply(ancientPiece, popped.reverse())

            ancientMaterial.push(ancientPiece)
        }

        resolve(ancientMaterial)
    })
}

function organizeFolio(folio) {
    let organized = {},
        chartaFirst = {},
        chartaSecond = {};

    chartaFirst.fur = folio.shift()
    chartaFirst.flesh = folio.shift()

    chartaSecond.flesh = folio.shift()
    chartaSecond.fur = folio.shift()

    organized.chartae = [
        {
            sides: [
                {
                    surface: 'fur',
                    img: chartaFirst.fur

                },
                {
                    surface: 'flesh',
                    img: chartaFirst.flesh
                }
            ] 
        },
        {
            sides: [
                {
                    surface: 'flesh',
                    img: chartaSecond.flesh

                },
                {
                    surface: 'fur',
                    img: chartaSecond.fur
                }
            ]
        }
    ]

    return organized
}

async function binionLoop(folios) {
    const binions = await ancientSplit(folios, 1)

    return binions
}

async function getPayloads(fascicleContainers) {
    const containers = Array.prototype.slice.call(
        fascicleContainers
    )

    const containersArray = containers.map( async (c) => {
        return await getPayload(c)
    })

    let payloads = await Promise.all(containersArray);

    return payloads
}

async function getPayload(fascicleContainer) {
    const sides = Array.prototype.slice.call(
        fascicleContainer.querySelectorAll('img')
    )

    const folios = await ancientSplit(sides, 2)

    const payload = {}
    payload.folios = folios.map((f) => {
        return organizeFolio(f)
    })

    return payload
}

function arrayClone( arr ) {
    var i, copy;

    if( Array.isArray( arr ) ) {
        copy = arr.slice( 0 );
        for( i = 0; i < copy.length; i++ ) {
            copy[ i ] = arrayClone( copy[ i ] );
        }
        return copy;
    } else {
        return arr;
    }
}
