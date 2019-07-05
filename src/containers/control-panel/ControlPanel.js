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
import CardsModel from '../../model/CardsModel';


class ControlPanel extends Component {
    constructor(){
        super();
        this.state={
            cards:CardsModel.getCards()
        } ;
            
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

    deleteCardHandler = (id) => {
        const data =[...this.state.cards];
        const cardListWithAfterDelete = GameUtility.deleteCard(data, id);
        this.setState({ cards: cardListWithAfterDelete });
    }

    sortByTypeHandler = (types) => {
        const data = [...this.state.cards];
        const cardSortedByType = GameUtility.sortByType(data, types);
        this.setState({ cards: cardSortedByType });
    }

    genFreshModelHandler = (event) => {
      const generatedFreshData=GameUtility.generateFreshData(event.target.value); 
      this.setState({ cards: generatedFreshData });
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
                     genFreshModelChange={this.genFreshModelHandler}/>
                <CardDeck
                    cards={this.state.cards}
                    deleteACard={this.deleteCardHandler} />            
            </Aux>
        );
    }
}
export default classContainer(ControlPanel, "col-sm-12");