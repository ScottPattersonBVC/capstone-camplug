import React, { Component } from 'react';
import './App.css';
import { Connector } from 'mqtt-react';
import _MessageContainer from './MessageContainer.js';
import {subscribe} from 'mqtt-react';

const MessageContainer = subscribe({topic: '@camplug/1'})(_MessageContainer);

class App extends Component {
  render() {
    return (
      <Connector mqttProps="https://a3ieilx72a5bln-ats.iot.us-west-1.amazonaws.com">
      <div className="App">
          <h2>Connection to camplug/1</h2>
        <MessageContainer/> 
      </div>
      </Connector>
    );
  }
}

export default App;
