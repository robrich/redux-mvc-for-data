import React, { Component } from 'react';
import { connect } from 'react-redux';

import { sendMessage } from '../actions/connection';


class Eventer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  handleChange(event) {
    this.setState({input: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.sendMessage(this.state.input);
    this.setState({input: ''});
  }

  render() {
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <input type="text"
          value={this.state.input}
          onChange={e => this.handleChange(e)} /><br />
        <button type="submit">Send Message</button>
      </form>
    );
  }
}

const stateToProps = null;
const dispatchToProps = {sendMessage};

export default connect(stateToProps, dispatchToProps)(Eventer);
