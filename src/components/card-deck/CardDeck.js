import React from 'react';
import Card from '../card-deck/card/Card';
import Aux from '../../hoc/Auxiliary';
import classContainer from '../../hoc/classContainer';
import './CardDeck.css'


const cardDeck = (props) => {
    let cardsArr = (props.cards).map((card) => {
        return <Card
            url={card.url}
            key={card.id}
            deleteCard={() => props.deleteACard(card.id)} />
    });
    return (
        <Aux>
            <h3 className="cardDeckHeaderStyle">** click on card to remove from deck **</h3>
            {/* <Card url="&#127195;"></Card> */}
            {cardsArr}
        </Aux>
    )
    
};

export default classContainer(cardDeck,"col-sm-12");