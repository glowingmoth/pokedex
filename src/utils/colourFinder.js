// The first element in the array is always the top colour on types that are split horizontally

export default function findColour(type) {

    let colour = [];
    switch (type) {
        case 'Grass':
            colour = ['#9bcc50'];
            break;
        case 'Poison':
            colour = ['#b97fc9']
            break;
        case 'Fire':
            colour = ['#fd7d24']
            break;
        case 'Bug':
            colour = ['#729f3f']
            break;
        case 'Water':
            colour = ['#4592c3']
            break;
        case 'Normal':
            colour = ['#a4acaf']
            break;
        case 'Electric':
            colour = ['#eed535']
            break;
        case 'Fairy':
            colour = ['#fdb9e9']
            break;
        case 'Fighting':
            colour = ['#d56723']
            break;
        case 'Psychick':
            colour = ['#f366b9']
            break;
        case 'Rock':
            colour = ['#a38c21']
            break;
        case 'Steel':
            colour = ['#9eb7b8']
            break;
        case 'Ice':
            colour = ['#51c4e7']
            break;
        case 'Ghost':
            colour = ['#7b62a3']
            break;
        case 'Flying':
            colour = ['#3dc7ef', '#bdb9b8']
            break;
        case 'Ground':
            colour = ['#f7de3f', '#ab9842']
            break;
        case 'Dragon':
            colour = ['#53a4cf', '#f16e57']
            break;
        default:
            colour = ['F3FF00'] // Yellow to stand out and help flag a bug
    }
    return {background: `linear-gradient(${colour[0]} 50%, ${colour[1]} 50%)`}
}
