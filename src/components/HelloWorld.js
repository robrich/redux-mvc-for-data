import React, { Component } from 'react';
import store from '../store';

const dispatch = store.dispatch;

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
    dispatch({
      type: 'HELLO_WORLD',
      payload: this.state.input
    });
    this.setState({input: ''});
  }

  render() {
    const storeState = store.getState();
    return (
      <div>
        <h2>Dispatch</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" placeholder="world"
            value={this.state.input}
            onChange={e => this.handleChange(e)} /><br />
          <button type="submit">Say Hello</button>
        </form>
        <h2>Subscribe</h2>
        <p>Hello {storeState.hello.value}</p>
      </div>
    );
  }
}

export default Eventer;
