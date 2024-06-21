function solve(cardArray) {

    let cardsDeck = [];
    for (const card of cardArray) {
        let cardFace = card.slice(0, card.length - 1);
        let cardSuits = card.slice(card.length - 1);

        let validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        if (validCardFaces.indexOf(cardFace) == -1) {
            console.log(`Invalid card: ${card}`);
            return;
        }
        switch (cardSuits) {
            case 'S':
                cardsDeck.push(`${cardFace}\u2660`);
                break;
            case 'H':
                cardsDeck.push(`${cardFace}\u2665`);
                break;
            case 'D':
                cardsDeck.push(`${cardFace}\u2666`);
                break;
            case 'C':
                cardsDeck.push(`${cardFace}\u2663`);
                break;
            default:
                console.log(`Invalid card: ${card}`);
                return;
        }
    }

    console.log(cardsDeck.join(' ').trim());

}
solve(['5S', '3D', 'QD', '1C']);