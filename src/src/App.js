import React from 'react';
import Controlpanel from './containers/control-panel/ControlPanel';
import './App.css';
import classContainer from './hoc/classContainer';


function App() {
  return (
    <div>
      <Controlpanel/>
    </div>
  );
}

export default classContainer(App,"container");
