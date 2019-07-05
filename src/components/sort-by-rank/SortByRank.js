import React from 'react';
import Aux from '../../hoc/Auxiliary';
import classContainer from '../../hoc/classContainer';

const sortByRank = (props) => (
    <Aux className="col-md-">
        <h3>sort by rank</h3>
        <div className="btn-group">
            <button className="btn btn-primary" onClick={() => props.sortByRankAscClick('asc')}>asc</button>
            <button className="btn btn-primary" onClick={() => props.sortByRankAscClick('desc')}>desc</button>
        </div>
       
  </Aux>
);

export default classContainer(sortByRank,"col-sm-6");