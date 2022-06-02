// The first element in the array is always the top colour on types that are split horizontally
// A pokemon can have more than 1 type, some have 2

export default function findColour(types) { // this is an array or 1 or 2 strings
    console.log(types) // Array of types 1 or 2 strings
    let colour = [];
    types.forEach( type => {

        switch (type) {
            case 'grass':
                colour.push('#9bcc50');
                break;
            case 'poison':
                colour.push('#b97fc9')
                break;
            case 'fire':
                colour.push('#fd7d24')
                break;
            case 'bug':
                colour.push('#729f3f')
                break;
            case 'water':
                colour.push('#4592c3')
                break;
            case 'normal':
                colour.push('#a4acaf')
                break;
            case 'electric':
                colour.push('#eed535')
                break;
            case 'fairy':
                colour.push('#fdb9e9')
                break;
            case 'fighting':
                colour.push('#d56723')
                break;
            case 'psychick':
                colour.push('#f366b9')
                break;
            case 'rock':
                colour.push('#a38c21')
                break;
            case 'teel':
                colour.push('#9eb7b8')
                break;
            case 'ice':
                colour.push('#51c4e7')
                break;
            case 'ghost':
                colour.push('#7b62a3')
                break;
            case 'flying':
                colour.push('#3dc7ef', '#bdb9b8')
                break;
            case 'ground':
                colour.push('#f7de3f', '#ab9842')
                break;
            case 'dragon':
                colour.push('#53a4cf', '#f16e57')
                break;
            default:
                colour.push('F3FF00')// Yellow to stand out and help flag a bug
        }
        console.log('My colour array', colour)
    })

    if (colour.length > 1) {
        return {background: `linear-gradient(${colour[0]} 50%, ${colour[1]} 50%)`}
    }
    return {background: `linear-gradient(${colour[0]} 50%, ${colour[0]} 50%)`}
}
