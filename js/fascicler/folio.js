export default Folio

function Folio(chartae, sides) {
    this.chartae = chartae || []

    this.exteriorSurface
}

Folio.prototype.getChartae = function() {
    return this.chartae
}

Folio.prototype.getChartaFinal = function() {
    return this.chartae[this.chartae.length - 1]
}

Folio.prototype.addCharta = function(charta) {    
    this.chartae.push(charta)
}

Folio.prototype.getExteriorSurface = function() {
    return this.exteriorSurface
}

Folio.prototype.setExteriorSurface = function(surface) {
    this.exteriorSurface = surface

    if (surface == 'flesh') {
        this.chartae[0].getSides()[0].setSurface('flesh')
        this.chartae[0].getSides()[1].setSurface('fur')
        this.getChartaFinal().getSides()[0].setSurface('fur')
        this.getChartaFinal().getSides()[1].setSurface('flesh')
    }

    if (surface == 'fur') {
        this.chartae[0].getSides()[0].setSurface('fur')
        this.chartae[0].getSides()[1].setSurface('flesh')
        this.getChartaFinal().getSides()[0].setSurface('flesh')
        this.getChartaFinal().getSides()[1].setSurface('fur')
    }
}
