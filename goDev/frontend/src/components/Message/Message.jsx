import React, { Component } from "react";
import "./Message.scss";

class Message extends Component {
  constructor(props) {
    super(props);
    let temp = JSON.parse(this.props.message);
    this.state = {
      message: temp
    };
  }

  render() {
    console.log("this.state.message = " + JSON.stringify(this.state.message))
    return <div className="Message">{this.state.message.body}</div>;
  }
}

export default Message;
