import * as d3 from 'd3'

export {sideLeft, sideRight, wrapSideLeft, wrapSideRight}

const side = {
    thickness: 1
}

let sideLeft = (d, i, dimensions) => {        
    let start,
        end;

    const margin = dimensions.height * .1,
          center = [0, 0];

    start = center
    end = [
        -((dimensions.width / 2) - 5), 
        -(dimensions.height - 20 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))
    ]

    // treat interior side
    if (i == 1) {
        start[0] += side.thickness * .5  
        start[1] -= side.thickness
        end[0] += side.thickness * .5
        end[1] -= side.thickness
    }
    
    let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
    return dString
}

let sideRight = (d, i, dimensions) => {
    let start,
        end;
    
    const margin = dimensions.height * .1,
        center = [0, 0];

    start = center
    end = [
        (dimensions.width / 2) - 5, 
        -(dimensions.height - 20 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))
    ]
    
    // Treat interior side
    if (i == 0) {
        start[0] -= side.thickness * .5
        start[1] -= side.thickness
        end[0] -= side.thickness * .5
        end[1] -= side.thickness
    }

    let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
    return dString
}

let wrapSideLeft = (d, i, dimensions) => {
    let start,
        end;

    const margin = dimensions.height * .1,
    center = [0, 0];

    start = center
    end = [
        -((dimensions.width / 2) - 5), 
        .6 * -(dimensions.height - 20 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))
    ]

    // Treat interior Side
    if (i == 1) {
        start[0] += side.thickness * .5
        start[1] -= side.thickness
        end[0] += side.thickness * .5
        end[1] -= side.thickness
    }
    
    let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
    return dString
}

let wrapSideRight = (d, i, dimensions) => {
    let start,
        end;

    const margin = dimensions.height * .1,
    center = [0, 0];

    start = center
    end = [
        ((dimensions.width / 2) - 5), 
        .6 * -(dimensions.height - 20 - (margin * (dimensions.quireLength - 1 - dimensions.folioIndex)))
    ]

    // Treat interior Side
    if (i == 0) {
        start[0] -= side.thickness * .5
        start[1] -= side.thickness
        end[0] -= side.thickness * .5
        end[1] -= side.thickness
    }
    
    let dString = `m ${start[0]} ${start[1]} L ${end[0]} ${end[1]}`
    return dString
}
