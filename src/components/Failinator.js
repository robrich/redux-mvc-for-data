import React, { Component } from 'react';
import { connect } from 'react-redux';

import { misnamed, propFail, tooMany } from '../actions/fails';

/*
Other fails:
- forget to pass through actions or state
- call imported action instead of passed in action
- don't import reducer into store
*/

class Failinator extends Component {

  handleMisnamed(e) {
    e.preventDefault();
    this.props.misnamed();
  }

  handlePropFail(e) {
    e.preventDefault();
    this.props.propFail();
  }

  handleTooMany(e) {
    e.preventDefault();
    this.props.tooMany();
  }

  render() {
    return (
      <div>
        <h2>Fail Playground</h2>
        <button onClick={(e) => this.handleMisnamed(e)}>Action / Reducer name mismatch</button><br />
        <button onClick={(e) => this.handlePropFail(e)}>Prop name fail</button><br />
        <button onClick={(e) => this.handleTooMany(e)}>Two reducers</button>
        <h2>Results</h2>
        <p>missing: {this.props.fails.missing ? 'true' : 'false'}</p>
        <p>badProps: {this.props.fails.badProps ? 'true' : 'false'}</p>
        <p>double: {this.props.fails.double}</p>
      </div>
    );
  }
}

const stateToProps = ({fails}) => ({fails});
const dispatchToProps = {misnamed, propFail, tooMany};

export default connect(stateToProps, dispatchToProps)(Failinator);
