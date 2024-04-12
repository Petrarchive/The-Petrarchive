import Fascicle from './fascicle'

import * as d3 from 'd3'

import * as draw from './draw'

const defaultParams = {
    side: {
        thickness: 1
    },

    dimensions: {
        width: 100,
        height: 45,
        margin: 3
    }
}

export default class Fascicler {

    constructor(params) {
        if (!params)
            params = defaultParams;
        
        this.side = params.side
        this.dimensions = params.dimensions
    }
    
    /**
     * Plural implementation of the this.getFascicle()
     *
     * @param fascicleContainers DOM NodeList in which fascicles are conained
     * @param options The set of options that further specify foobar.
     * @returns (Array) of Fascicle
     */
    async getFascicles(fascicleContainers, options) {
        const containers = Array.prototype.slice.call(
            fascicleContainers
        )

        const containersArray = containers.map( async (container, i) => {            
            return await this.getFascicle(container, options)
        })

        let fascicles = await Promise.all(containersArray);

        return fascicles
    }

    /**
     * Get the Fascicle within the provided container
     *
     * @param fascicleContainer (DOM Node) in which the fascicle is conained
     * @param options The set of options that further specify foobar.
     * @returns (Fascicle)
     */
    async getFascicle(fascicleContainer, options) {
        const sides = Array.prototype.slice.call(
            fascicleContainer.querySelectorAll('img')
        )

        const fascicle = new Fascicle()

        if (options) {
            for (let key in options) {
                fascicle.setMeta(key, fascicleContainer.querySelector(options[key]).innerText)
            }
        }

        if (fascicleContainer.classList.contains('binion-sandwich')) {
            fascicle.setType('binion-sandwich')
        }

        await fascicle.assemble(sides)
        fascicle.applyGregorysLaw()

        return fascicle
    }

    drawSides(chartae) {
        let sides = chartae.selectAll('.side')
            .data((d) => {
                return d.getSides()
            })
            .enter().append('path')
            .attr('class', function(d, i) {
                return `side ${d.surface}`
            })
            .attr('fill', 'transparent')
            .attr('stroke-width', function() {
                let fascicle = d3.select(this.parentNode.parentNode.parentNode.parentNode)

                if (fascicle.classed('binion-sandwich')) {
                    let quire = d3.select(this.parentNode.parentNode.parentNode)

                    if (quire.classed('intra'))
                        return defaultParams.side.thickness * .8;
                }
                return defaultParams.side.thickness
            })
            .attr('data-charta', (d) => d.charta)
            .attr('data-side', (d) => d.rv)
            .attr('data-vis-url', (d) => {
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

        return sides
    }

    drawChartae(folios) {
        let chartae = folios.selectAll('charta')
          .data((d) => {
              return d.getChartae()
          })
          .enter().append('g')
          .attr('class', function (d,i) {
              let side = i % 2 ? 'right' : 'left'
              return `charta ${side}`
          });

        return chartae
    }

    drawFolios(quires) {
        const self = this
        const folios = quires.selectAll('.folio')
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
                let folioY = self.dimensions.height
                let folioMargin = i * self.side.thickness * 2.25

                if (quire.classed('extra'))
                    folioMargin = i * self.side.thickness * 2.25;
               
                folioY -= folioMargin

                return `translate(${self.dimensions.width / 2},${folioY})`
            });
        
            return folios
    }

    drawQuires(fascicles) {
        const self = this

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
                        return self.dimensions.width / 2.75
                    }
                }
                return self.dimensions.width 
            })
            .attr('height', function(d,i) {
                if (d3.select(this.parentElement).classed('binion-sandwich')) {
                    if (i > 0) {
                        return self.dimensions.height 
                    }
                }
                return self.dimensions.height 
            })
            .attr('data-quire-length', (d,i) => { return d.getFolios().length })
            .attr('transform', function(d, i) {
                let element = d3.select(this)
                
                if (element.classed('intra')) {
                    if (i == 1)
                        return `rotate(-35 40 35) translate(-5, -2)`;
                    if (i == 2)
                        return `rotate(35 60 35) translate(5, -2)`;
                }
            });

        return quires
    
    }

    drawFascicles(fasciclesContainerFoobar, data) {
        let nodes = [
            { size: 10 },
            { size: 40 },
            { size: 100}
        ]

        let links = [
            {
                source:0, target: 1
            },
            {
                source:0, target: 2
            }
        ]

        let fasciclesContainer = d3.select('#svg')

        let force = d3.forceSimulation()
            .nodes(nodes)
            .force('link', d3.forceLink(links).distance(10))
            .force('charge', d3.forceManyBody().strength(-10))
            .force('collide', d3.forceCollide().radius(2).strength(5))
            .force('x', d3.forceX(200).strength(0.1))
            .force('y', d3.forceY(200).strength(0.1));

        let node = fasciclesContainer
          .style('height', '600px').style('width', '900px')
            .selectAll('.node')
            .data(nodes)
          .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));
        
        let node_enter = node.enter().append('g')
            .attr('class', 'node');

        node_enter.append('circle')
            .attr('r', function(d){ return d.size })
            .attr('fill', '#000');
        
        let link = fasciclesContainer.selectAll('.link')
            .data(links)
            .enter().append('line')
            .attr('class', 'link')
            .attr('stroke-width', 1)
            .attr('stroke', '#000');

        force.on('tick', function(){
            fasciclesContainer.selectAll('.node')
                .attr('transform', function(d){
                    return 'translate(' + d.x + ',' + d.y + ')' })
            fasciclesContainer.selectAll('.link')
                .attr('x1', function(d){ return d.source.x })
                .attr('x2', function(d){ return d.target.x })
                .attr('y1', function(d){ return d.source.y })
                .attr('y2', function(d){ return d.target.y })
            })
        
        function dragstarted(d) {
            if (!d3.event.active) simulation.alphaTarget(0.3).restart();
            d.fx = d.x;
            d.fy = d.y;
            }
            
        function dragged(d) {
            d.fx = d3.event.x;
            d.fy = d3.event.y;
        }
        
        function dragended(d) {
            if (!d3.event.active) simulation.alphaTarget(0);
            d.fx = null;
            d.fy = null;
        }
              
    }

    drawFasciclesDiv(fasciclesContainer, data) {
        const fascicles = fasciclesContainer.selectAll("div.fascicle-container")
          .data(data)
          .enter().append('div')
            .attr('class', 'fascicle-container col-4')
          .append('svg')
            .attr('viewBox', (d,i) => {
                return `0 0 ${this.dimensions.width} ${this.dimensions.height}`
            })
            .attr('class', (d) => {
                return `fascicle ${d.type}`
            })
            .attr('data-meta-title', (d, i) => {
                for (let key in d.meta) {
                    return d.getMeta(key)
                }
            });

        return fascicles
  
    }
}

