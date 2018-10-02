import $ from 'jquery'
import Charta from './charta'

export default PetrarchiveDocument

function PetrarchiveDocument(url, name) {
  if (url) {
    this.url = url
  } else {
    if (name[0] !== 'c') {
      name = 'c' + name
    }
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
  this.chartae
  this.rv = this.name.split('_')[0].substring(4,5)

  // When the name of the document is split by underscores,
  // the length will be longer than 1 if it is commentary since file names
  // should be c00x_with_commentary
  this.commentary = this.name.split('_').length > 1

  this.setupChartae()
}

PetrarchiveDocument.prototype.setupChartae = function() {
  let splitNames = this.name.split('-') //[0].substring(1,4)
  if (splitNames.length > 1) {
    this.chartae = [
      new Charta(splitNames[0]), 
      new Charta(splitNames[1])
    ]
  } else {
    this.chartae = [new Charta(splitNames[0])]
  }
}

PetrarchiveDocument.prototype.getChartae = function() {
  return this.chartae
}

PetrarchiveDocument.prototype.getChartaFirst = function() {
  return this.chartae[0]
}
PetrarchiveDocument.prototype.getChartaLast = function() {
  return this.chartae[this.chartae.length - 1]
}

// Get the charta and rvf in accordance to the textindex format
PetrarchiveDocument.prototype.getChartaTextindex = function() {
  let formatted  
 
  return formatted
} 

