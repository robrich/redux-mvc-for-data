import React, { Component } from 'react';
import { connect } from 'react-redux';

import { ajaxStart } from '../actions/ajax';


class Ajaxify extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fail: false,
      message: ''
    };
  }

  handleChange(e) {
    if (e.target.type === 'checkbox') {
      this.setState({[e.target.id]: e.target.checked});
    } else {
      this.setState({[e.target.id]: e.target.value});
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const req = {
      fail: this.state.fail,
      message: this.state.message
    };
    this.props.ajaxStart(req);
    this.setState({message: ''});
    this.setState({fail: false});
  }

  render() {
    const { loading, success, response } = this.props.ajax;
    return (
      <div>
        <h2>Request</h2>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div>
            <label>
              <input type="checkbox" id="fail"
                checked={this.state.fail} onChange={e => this.handleChange(e)} />
                Fail Ajax Request
            </label>
          </div>
          <div>
            <input type="text" id="message" placeholder="message"
              value={this.state.message}
              onChange={e => this.handleChange(e)} />
          </div>
          <div>
            <button type="submit" disabled={loading}>Make Ajax Call</button>
          </div>
        </form>
        <h2>Response</h2>
        <div>
          <p>Success: {success ? 'true' : 'false'}</p>
          <p>Response: {response}</p>
        </div>
      </div>
    );
  }
}

const stateToProps = ({ajax}) => ({ajax});
const dispatchToProps = {ajaxStart};

export default connect(stateToProps, dispatchToProps)(Ajaxify);
