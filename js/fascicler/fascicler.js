import Fascicle from './fascicle'

export default class Fascicler {
    
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
     * Plural implementation of the this.getFascicle()
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
}

