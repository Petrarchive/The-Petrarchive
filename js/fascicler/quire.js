import Folio from './folio'
import Charta from './charta'

export default Quire

function Quire(folios) {
    this.folios = []

    this.type

    if (folios) 
        this.addFolios(folios);
}

Quire.prototype.getType = function() {
    if (this.type)
        return this.type;

    const typeDict = {
        "2": "binion",
        "4": "quaternion"
    }

    return typeDict[this.getFolios().length]
}

Quire.prototype.setType = function(type) {
    this.type = type
}

Quire.prototype.getFolios = function() {
    return this.folios
}

Quire.prototype.addFolio = function(folio) {
    this.folios.push(
        this.assembleFolios(folio)
    )
}

Quire.prototype.addFolios = function(folios) {
    folios.forEach(function(f) {
        this.addFolio(f)
    }, this)
}

Quire.prototype.assembleFolios = function(folioSides) {
    const folio = new Folio()

    let chartaFirst = new Charta()
    chartaFirst.addSide(folioSides.shift())
    chartaFirst.addSide(folioSides.shift())

    let chartaSecond = new Charta()
    chartaSecond.addSide(folioSides.shift())
    chartaSecond.addSide(folioSides.shift())

    folio.addCharta(chartaFirst)
    folio.addCharta(chartaSecond)

    return folio
}

Quire.prototype.splitSides = function(sides) {
    return new Promise((resolve) => {
        let ancientMaterial = [],
            virtual = sides.slice(0);
    
        while (virtual.length) {
            let ancientPiece  = []

            ancientPiece.push(virtual.shift())
            ancientPiece.push(virtual.shift())

            let popped = []
            popped.push(virtual.pop())
            popped.push(virtual.pop())  

            Array.prototype.push.apply(ancientPiece, popped.reverse())

            ancientMaterial.push(ancientPiece)
        }

        resolve(ancientMaterial)
    })
}

Quire.prototype.applyGregorysLaw = function() {
    this.getFolios().forEach((folio,i,foliosArr) => {
        let surface = i % 2 ? 'fur' : 'flesh'

        let currentFolio = foliosArr[i]

        currentFolio.setExteriorSurface(surface)
    })
}
