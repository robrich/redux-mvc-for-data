import React from 'react';
import Eventer from './Eventer';
import Subscriber from './Subscriber';

export default () => (
  <div>
    <h2>Dispatch</h2>
    <Eventer />
    <h2>Subscribe</h2>
    <Subscriber />
  </div>
);
