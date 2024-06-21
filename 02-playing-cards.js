function solve(cardFace, cardSuits) {
    let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

    if (validCardFaces.indexOf(cardFace) == -1) {
        throw Error();
    }
    switch (cardSuits) {
        case 'S':
            return `${cardFace}\u2660`;
        case 'H':
            return `${cardFace}\u2665`;
        case 'D':
            return `${cardFace}\u2666`;
        case 'C':
            return `${cardFace}\u2663`;
        default:
            throw Error();
    }
}
let res = solve('1', 'H');
console.log(res);