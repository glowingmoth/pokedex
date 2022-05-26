import React from 'react'

import findColour from '../utils/colourFinder.js'

const Type = ({types}) => {
    return <div className="type" style={{backgroundColor: findColour(types)}}>{types}</div>
}

export default Type

