export default Charta

function Charta(ch) {
    this.rv = ch.substring(4,5)
    this.charta = ch.substring(1,4)
}
  
Charta.prototype.getPrettyName = function() {
    let charta = this.charta.replace(/^0+/, ''),
        prettyRV;

    if (this.rv == 'r') {
        prettyRV = 'recto'
    } else {
        prettyRV = 'verso'
    }

    return charta + ' ' + prettyRV
}
  
Charta.prototype.getPrettyNameTextindex = function() {
    return this.charta.replace(/^0+/,'') + this.rv
}
  
Charta.prototype.getNextCh = function() {
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
  
Charta.prototype.getPrevCh = function() {
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