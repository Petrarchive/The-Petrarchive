import $ from 'jquery'

import 'bootstrap/dist/js/bootstrap'

import Fascicler from './fascicler/fascicler'

import * as d3 from 'd3'

import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

$(document).ready(async function () {
    await drawFascicles()

    document.querySelector('.fascicles.container nav .fascicle-container').click()
})

async function drawFascicles() {
    let fascicler = new Fascicler()

    let elements = document.querySelectorAll('div.fascicle')
    let options = {
        title: 'h1'
    }
    let fasciclesData = await fascicler.getFascicles(elements, options)
    let fasciclesContainer = d3.select('.fascicles nav')
    
    let fascicles = fascicler.drawFasciclesDiv(fasciclesContainer, fasciclesData)
    
    let quires = fascicler.drawQuires(fascicles)
    let folios = fascicler.drawFolios(quires)
    let chartae = fascicler.drawChartae(folios)
    let sides = fascicler.drawSides(chartae)
}