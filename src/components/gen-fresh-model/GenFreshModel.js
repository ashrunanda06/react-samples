import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classContainer from '../../hoc/classContainer';



const genFreshModel = (props) => {
    
    return (
        <Aux>
            <h3>generate fresh model</h3>
            <input type="number" min={'1'} max={'52'} />
        </Aux>
    );
    
}


export default classContainer(genFreshModel,"col-sm-6");