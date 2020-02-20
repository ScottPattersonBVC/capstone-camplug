import React from 'react';

import MessageList from './MessageList';
import MessageForm from './MessageForm';


export default class MessageContainer extends React.Component {

  addMessage(message){
    const {mqtt} = this.props;
    mqtt.publish('@camplug/1', message);
    console.log("mqtt"+mqtt) //the client
  }

  render(){
    return (
      <div>
        <MessageList data={this.props.data} />
        {console.log("this.data   :"+this.data)}
        <MessageForm onSubmit={this.addMessage.bind(this)} />
      </div>
    )

  }
}
