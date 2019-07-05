import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SortByType from '../../components/sort-by-type/SortByType';
import SortByRank from '../../components/sort-by-rank/SortByRank';
import GenFreshModel from '../../components/gen-fresh-model/GenFreshModel';
import Shuffle from '../../components/shuffle/Shuffle';
import CardDeck from '../../components/card-deck/CardDeck';
import GameUtility from '../../utility/GameUtility';
import classContainer from '../../hoc/classContainer';
import './ControlPanel.css';


class ControlPanel extends Component {
    state = {
        cards: [
            {
                id: '2C',
                type: 'C',
                value: 2,
                url: '\uD83C\uDCD2'
            },
            {
                id: '3C',
                type: 'C',
                value: 3,
                url: '\uD83C\uDCD3'
            },
            {
                id: '4C',
                type: 'C',
                value: 4,
                url: '\uD83C\uDCD4'
            },
            {
                id: '5C',
                type: 'C',
                value: 5,
                url: '\uD83C\uDCD5'
            },
            {
                id: '6C',
                type: 'C',
                value: 6,
                url: '\uD83C\uDCD6'
            },
            {
                id: '7C',
                type: 'C',
                value: 7,
                url: '\uD83C\uDCD7'
            },
            {
                id: '8C',
                type: 'C',
                value: 8,
                url: '\uD83C\uDCD8'
            },
            {
                id: '9C',
                type: 'C',
                value: 9,
                url: '\uD83C\uDCD9'
            },
            {
                id: '10C',
                type: 'C',
                value: 10,
                url: '\uD83C\uDCDA'
            },
            {
                id: '11C',
                type: 'C',
                value: 11,
                url: '\uD83C\uDCDB'
            },
            {
                id: '12C',
                type: 'C',
                value: 12,
                url: '\uD83C\uDCDC'
            },
            {
                id: '13C',
                type: 'C',
                value: 13,
                url: '\uD83C\uDCDD'
            },
            {
                id: '14C',
                type: 'C',
                value: 14,
                url: '\uD83C\uDCD1'
            },
            {
                id: '2H',
                type: 'H',
                value: 2,
                url: '\uD83C\uDCB2'
            },
            {
                id: '3H',
                type: 'H',
                value: 3,
                url: '\uD83C\uDCB3'
            },
            {
                id: '4H',
                type: 'H',
                value: 4,
                url: '\uD83C\uDCB4'
            },
            {
                id: '5H',
                type: 'H',
                value: 5,
                url: '\uD83C\uDCB5'
            },
            {
                id: '6H',
                type: 'H',
                value: 6,
                url: '\uD83C\uDCB6'
            },
            {
                id: '7H',
                type: 'H',
                value: 7,
                url: '\uD83C\uDCB7'
            },
            {
                id: '8H',
                type: 'H',
                value: 8,
                url: '\uD83C\uDCB8'
            },
            {
                id: '9H',
                type: 'H',
                value: 9,
                url: '\uD83C\uDCB9'
            },
            {
                id: '10H',
                type: 'H',
                value: 10,
                url: '\uD83C\uDCBA'
            },
            {
                id: '11H',
                type: 'H',
                value: 11,
                url: '\uD83C\uDCBB'
            },
            {
                id: '12H',
                type: 'H',
                value: 12,
                url: '\uD83C\uDCBC'
            },
            {
                id: '13H',
                type: 'H',
                value: 13,
                url: '\uD83C\uDCBD'
            },
            {
                id: '14H',
                type: 'H',
                value: 14,
                url: '\uD83C\uDCB1'
            },


            {
                id: '2T',
                type: 'T',
                value: 2,
                url: '\uD83C\uDCC2'
            },
            {
                id: '3T',
                type: 'T',
                value: 3,
                url: '\uD83C\uDCC3'
            },
            {
                id: '4T',
                type: 'T',
                value: 4,
                url: '\uD83C\uDCC4'
            },
            {
                id: '5T',
                type: 'T',
                value: 5,
                url: '\uD83C\uDCC5'
            },
            {
                id: '6T',
                type: 'T',
                value: 6,
                url: '\uD83C\uDCC6'
            },
            {
                id: '7T',
                type: 'T',
                value: 7,
                url: '\uD83C\uDCC7'
            },
            {
                id: '8T',
                type: 'T',
                value: 8,
                url: '\uD83C\uDCC8'
            },
            {
                id: '9T',
                type: 'T',
                value: 9,
                url: '\uD83C\uDCC9'
            },
            {
                id: '10T',
                type: 'T',
                value: 10,
                url: '\uD83C\uDCCA'
            },
            {
                id: '11T',
                type: 'T',
                value: 11,
                url: '\uD83C\uDCCB'
            },
            {
                id: '12T',
                type: 'T',
                value: 12,
                url: '\uD83C\uDCCC'
            },
            {
                id: '13T',
                type: 'T',
                value: 13,
                url: '\uD83C\uDCCD'
            },
            {
                id: '14T',
                type: 'T',
                value: 14,
                url: '\uD83C\uDCC1'
            },

            {
                id: '2P',
                type: 'P',
                value: 2,
                url: '\uD83C\uDCA2'
            },
            {
                id: '3P',
                type: 'P',
                value: 3,
                url: '\uD83C\uDCA3'
            },
            {
                id: '4P',
                type: 'P',
                value: 4,
                url: '\uD83C\uDCA4'
            },
            {
                id: '5P',
                type: 'P',
                value: 5,
                url: '\uD83C\uDCA5'
            },
            {
                id: '6P',
                type: 'P',
                value: 6,
                url: '\uD83C\uDCA6'
            },
            {
                id: '7P',
                type: 'P',
                value: 7,
                url: '\uD83C\uDCA7'
            },
            {
                id: '8P',
                type: 'P',
                value: 8,
                url: '\uD83C\uDCA8'
            },
            {
                id: '9P',
                type: 'P',
                value: 9,
                url: '\uD83C\uDCA9'
            },
            {
                id: '10P',
                type: 'P',
                value: 10,
                url: '\uD83C\uDCAA'
            },
            {
                id: '11P',
                type: 'P',
                value: 11,
                url: '\uD83C\uDCAB'
            },
            {
                id: '12P',
                type: 'P',
                value: 12,
                url: '\uD83C\uDCAC'
            },
            {
                id: '13P',
                type: 'P',
                value: 13,
                url: '\uD83C\uDCAD'
            },
            {
                id: '14P',
                type: 'P',
                value: 14,
                url: '\uD83C\uDCA1'
            },
        ]
    }

    shuffleHandler = () => {
        const data = [...this.state.cards];
        const shuffledCards = GameUtility.shuffleCard(data);
        this.setState({ cards: shuffledCards });
    }

    sortByRankHandler = (order) => {
       
        const data = [...this.state.cards];
        const sortedByRankCards = GameUtility.sortByRank(order, data);
        this.setState({ cards: sortedByRankCards });
    }

    deleteCardHandler=(id) => {
        const data =[...this.state.cards];
        const cardListWithAfterDelete = GameUtility.deleteCard(data, id);
        this.setState({ cards: cardListWithAfterDelete });
    }
    sortByTypeHandler = (types) => {
        const data = [...this.state.cards];
        const cardSortedByType = GameUtility.sortByType(data, types);
        this.setState({ cards: cardSortedByType });
    }

    render() {
        return (

            <Aux>
                <h1 className="controlPanelHeaderStyle">CONTROL PANEL</h1>
                <Shuffle
                    shuffleCardClick={this.shuffleHandler} />
                <SortByRank
                    sortByRankAscClick={this.sortByRankHandler} />
                <SortByType
                    sortByTypeClick={this.sortByTypeHandler}/>
                <GenFreshModel
                    selectItem={this.state.cards.length}/>
                <CardDeck
                    cards={this.state.cards}
                    deleteACard={this.deleteCardHandler} />
            </Aux>
        );
    }
}
export default classContainer(ControlPanel, "col-sm-12");