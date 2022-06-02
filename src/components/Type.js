import React from 'react'
import findColour from '../utils/colourFinder.js'

const Type = ({types}) => { // At this point it's an array of either 1 or 2 strings in lower case

    return <div className="type" style={findColour(types)}></div>
}

export default Type

// Just return this from my function and pass into the style above

// {background: 'linear-gradient(#3dc7ef 50%, #bdb9b8 50%)'}