import React from 'react';

const classContainer = (ComponentWrapper, classes) => {
    return props => (
        <div className={classes}>
            <ComponentWrapper {...props}/>
        </div>
    );
};

export default classContainer;