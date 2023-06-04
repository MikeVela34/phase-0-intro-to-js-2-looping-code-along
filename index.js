// Code your solutions in this file
/*const gifts = ["teddy bear", "drone", "doll"]
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bowl`);
        debugger;
    }

    return gifts;
}
wrapGifts(gifts);
*/

function writeCards(namesArray, event) {
    const cards = []
    for (let i = 0; i < namesArray.length; i++) {
        cards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}

function countDown(num) {
    while (num > -1) {
        console.log(num--);
    }
}
