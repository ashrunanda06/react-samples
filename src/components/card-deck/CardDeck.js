import React from 'react';
import Card from '../card-deck/card/Card';
import Aux from '../../hoc/Auxiliary';
import classContainer from '../../hoc/classContainer';
import './CardDeck.css';


const cardDeck = (props) => {
    if(props.cards!==undefined)
    {
        let cardsArr = (props.cards).map((card) => {
            return <Card
                url={card.url}
                key={card.id}
                deleteCard={() => props.deleteACard(card.id)} />
        });
        return (
            <Aux>
                <h3 className="cardDeckHeaderStyle">** click on card to remove from deck **</h3>
                {cardsArr}
            </Aux>
        )        
    }
    else{
        return(<Aux><span></span></Aux>);
    }  
};

export default classContainer(cardDeck,"col-sm-12");