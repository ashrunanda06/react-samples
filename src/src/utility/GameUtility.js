
const compareArray = (item1, item2) => {
    if (item1.value < item2.value) {
        return -1;
    }
    else if (item1.value > item2.value) {
        return 1;

    }
    return 0;
};

class GameUtility {

    static shuffleCard(shuffleCards) {
    for (let i = shuffleCards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffleCards[i], shuffleCards[j]] = [shuffleCards[j], shuffleCards[i]];
    }
     return shuffleCards;
    };

    static sortByRank(order, sortByRankCards) {
        if (order === 'asc')
        {
            return sortByRankCards.sort((item1, item2) => compareArray(item1, item2));
        }
        else if (order === 'desc')
        {
            return sortByRankCards.sort((item1, item2) => compareArray(item2, item1)) 
        }
        return sortByRankCards;
    };

    static deleteCard(cards, id) {
        let card = cards.find(item => item.id === id);
        cards.splice(cards.indexOf(card), 1);
        return cards;
    };

    static sortByType(cards, types) {
        const sortedArr = [];
        types.map(type => {
            cards.map(item => {
                if (item.type === type) {
                    sortedArr.push(item);
                }
            });
        });
        return sortedArr;
    }
}
export default GameUtility;