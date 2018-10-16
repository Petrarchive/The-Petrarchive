export default Side

function Side(rv, charta, surface) {
    this.rv = rv
    this.charta = charta

    this.surface = surface
}
  
Side.prototype.getPrettyName = function() {
    let charta = this.charta.replace(/^0+/, ''),
        prettyRV;

    if (this.rv == 'r') {
        prettyRV = 'recto'
    } else {
        prettyRV = 'verso'
    }

    return charta + ' ' + prettyRV
}
  
Side.prototype.getPrettyNameTextindex = function() {
    return this.charta.replace(/^0+/,'') + this.rv
}
  
Side.prototype.getNextSide = function() {
    let nextCh, nextRV, nextName;
  
    if (this.rv == 'r') {
      nextRV = 'v'
      nextCh = this.charta
    } else {
      nextRV = 'r'
  
      // Turn currentCh string into number then subtract 1
      nextCh = (+this.charta) + 1
    }
  
    // Then convert nextCh back to string with 3 decimal places
    let s = "00" + nextCh
    nextName = s.substr(s.length - 3) + nextRV
  
    return nextName
}
  
Side.prototype.getPrevSide = function() {
    let prevCh, prevRV, prevName;
  
    if (this.rv == 'r') {
      prevRV = 'v'
      prevCh = (+this.charta) - 1
    } else {
      prevRV = 'r'
      prevCh = this.charta
    }
  
    // Then convert nextCh back to string with 3 decimal places
    let s = "00" + prevCh
    prevName = s.substr(s.length - 3) + prevRV
  
    return prevName
}

Side.prototype.setSurface = function(surface) {
    this.surface = surface
}

Side.prototype.getViz = function() {
    return `images/visindex/c${this.charta}${this.rv}.svg`
}