import Side from './fascicler/side'

export default PetrarchiveDocument

function PetrarchiveDocument(url, name) {
  if (url) {
    this.url = url
  } else {
    if (name[0] !== 'c')
      name = 'c' + name;

    this.url = '/' + name + '.xml'
  }

  let urlSplit = this.url.split('/')

  if (this.url.match(/#/)) {
    this.hash = this.url.split('#')[1]
    this.doc = urlSplit[urlSplit.length - 1].split('#')[0]
  } else [
    this.doc = urlSplit[urlSplit.length - 1]
  ]

  this.name = this.doc.split('.')[0]

  this.setupSides()
  console.log(this)
}

PetrarchiveDocument.prototype.setupSides = function() {
  let splitNames = this.name.split('-') //[0].substring(1,4)
  if (splitNames.length > 1) {
    this.sides = [
      new Side(splitNames[0].substring(4,5), splitNames[0].substring(1,4)), 
      new Side(splitNames[1].substring(4,5), splitNames[1].substring(1,4))
    ]
  } else {
    this.sides = [new Side(splitNames[0].substring(4,5), splitNames[0].substring(1,4))]
  }
}

PetrarchiveDocument.prototype.getSides = function() {
  return this.sides
}

PetrarchiveDocument.prototype.getFirstSide = function() {
  return this.sides[0]
}
PetrarchiveDocument.prototype.getLastSide = function() {
  return this.sides[this.sides.length - 1]
}

// Get the charta and rvf in accordance to the textindex format
PetrarchiveDocument.prototype.getChartaTextindex = function() {
  let formatted  
 
  return formatted
} 

