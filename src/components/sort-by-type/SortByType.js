import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classContainer from '../../hoc/classContainer';

const sortByType = (props) => (
    <Aux>
        <h3>sort by type</h3>
        <div className="btn-group">
            <button className="btn btn-primary" onClick={() => props.sortByTypeClick(['C','H','T','P'])}>C-H-T-P</button>
            <button className="btn btn-primary" onClick={() => props.sortByTypeClick(['H', 'C', 'T', 'P'])}>H-C-T-P</button>
            <button className="btn btn-primary" onClick={() => props.sortByTypeClick(['H', 'T', 'C', 'P'])}>H-T-C-P</button>
            <button className="btn btn-primary" onClick={() => props.sortByTypeClick(['H', 'T', 'P', 'C'])}>H-T-P-C</button>
        </div>
        
    </Aux>
);

export default classContainer(sortByType,"col-sm-6");