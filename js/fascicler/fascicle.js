import Side from './side'
import Quire from './quire'

export default Fascicle

function Fascicle(quires) {
    this.quires = []

    this.type
    this.meta = {}

    if (quires)
        this.addQuires(quires);
}

Fascicle.prototype.setType = function(type) {
    this.type = type
}

Fascicle.prototype.setMeta = function(key, val) {
    this.meta[key] = val
}

Fascicle.prototype.getMeta = function(key) {
    return this.meta[key] || undefined
}

Fascicle.prototype.getQuires= function() {
    return this.quires
}

Fascicle.prototype.addQuire = function(quire) {    
    this.quires.push(new Quire(quire))
}

Fascicle.prototype.addQuires = function(quires) {
    quires.forEach(function(q) {
        this.addQuire(q)
    }, this)

    if (this.type == 'binion-sandwich') {
        this.quires[0].type = "binion extra"
        this.quires[1].type = "binion intra"
        this.quires[2].type = "binion intra"
    }
}

// input an array of 'writing surfaces/sides' and Fascicle will 
// assemble the whole ancient document. The type fascicle's 
// type must be set prior
Fascicle.prototype.assemble = async function(sides) {
    const lengthDict = {
        "8": "binion",
        "16": "quaternion",
    }

    let quires
    const processedSides = await this.splitSides(sides)

    if (this.type == 'binion-sandwich') {
        const intraBinionFirst = await this.splitSides(sides.slice(4,12))
        const intraBinionSecond = await this.splitSides(sides.slice(12,20))

        let extraBinion = processedSides.slice(0,2)
        Array.prototype.push.apply(extraBinion, processedSides.slice(6,8))
        
        this.addQuires([extraBinion, intraBinionFirst, intraBinionSecond])
    } else {
        this.addQuire(processedSides)
        this.setType(lengthDict[sides.length])
    }
}

Fascicle.prototype.splitSides = function(sides, doNotSplit) {
    return new Promise((resolve) => {
        let ancientMaterial = [],
            virtual = sides.slice(0);
    
        while (virtual.length) {
            let ancientPiece  = []

            ancientPiece.push( initSide(virtual.shift()) )
            ancientPiece.push( initSide(virtual.shift()) )

            if (!doNotSplit) {
                let popped = []
                popped.push( initSide(virtual.pop()) )
                popped.push( initSide(virtual.pop()) )

                Array.prototype.push.apply(ancientPiece, popped.reverse())
            } else {
                ancientPiece.push( initSide(virtual.shift()) )
                ancientPiece.push( initSide(virtual.shift()) )
            }

            ancientMaterial.push(ancientPiece)
        }

        resolve(ancientMaterial)
    })

    function initSide(side) {
        let urlSplit = side.src.split('/')
        let doc = urlSplit[urlSplit.length - 1]
        let name = doc.split('.')[0]

        return new Side(name.substring(4,5), name.substring(1,4))
    }
}

Fascicle.prototype.applyGregorysLaw = function() {
    this.getQuires().forEach((quire,i,quiresArr) => {
        quire.applyGregorysLaw()
    })
}
