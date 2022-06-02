import React from 'react'
import Type from './Type'

const Types = ({types}) => {
    console.log(types)
    let newTypes = types.map(pokemon => {
        return <Type name={pokemon.name} types={[pokemon.type1, pokemon.type2]}/>
    })
    // This should iterate through a loop and return type components
    return <div className='types'>
        {newTypes}
    </div>
}

export default Types