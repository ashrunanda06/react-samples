import React from 'react';
import Aux from '../../hoc/Aux';
import classContainer from '../../hoc/classContainer';

const shuffle = (props) => (
    <Aux>
        <h3>shuffle</h3>
        <button className="btn btn-primary" onClick={props.shuffleCardClick}>shuffle</button>
   </Aux>
)

export default classContainer(shuffle,"col-sm-6");
    
