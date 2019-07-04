import React from 'react';
import Aux from '../../hoc/Aux';
import classContainer from '../../hoc/classContainer';



const genFreshModel = (props) => {
    let selectCardNumArr = [];
    for (let i = 1; i <= props.selectItem; i++){
        selectCardNumArr.push(<option key={i} value={i}>{i}</option>);
    }
    return (
        <Aux>
            <h3>generate fresh model</h3>
            <select>
                {selectCardNumArr}
            </select>
        </Aux>
    );
    
}


export default classContainer(genFreshModel,"col-sm-6");