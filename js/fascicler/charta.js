export default Charta

function Charta() {
    this.charta
    this.sides = []
}

Charta.prototype.getSides = function() {
    return this.sides
}
  
Charta.prototype.getNextCh = function() {
    let nextCh = (+this.charta) + 1
  
    // Then convert nextCh back to string with 3 decimal places
    let s = "00" + nextCh
    nextName = s.substr(s.length - 3)
  
    return nextName
}
  
Charta.prototype.getPrevCh = function() {
    let prevCh = (+this.charta) - 1
   
    // Then convert nextCh back to string with 3 decimal places
    let s = "00" + prevCh
    prevName = s.substr(s.length - 3)
  
    return prevName
}

Charta.prototype.addSide = function(side) {
    this.sides.push(side)
}