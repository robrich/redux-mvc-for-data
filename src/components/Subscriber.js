import React from 'react';
import { connect } from 'react-redux';

const Subscriber = props => (
  <p>message: {props.connection.message}</p>
);

const stateToProps = ({connection}) => ({connection});
const dispatchToProps = {};

export default connect(stateToProps, dispatchToProps)(Subscriber);
