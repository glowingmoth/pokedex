import React from 'react'

import findColour from '../utils/colourFinder.js'

const Type = ({types}) => {
    return <div className="type" style={findColour(types)}>{types}</div>
}

export default Type

// Just return this from my function and pass into the style above

// {background: 'linear-gradient(#3dc7ef 50%, #bdb9b8 50%)'}