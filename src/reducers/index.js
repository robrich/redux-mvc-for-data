import { combineReducers } from 'redux';

import hello from './hello';
import connection from './connection';
import ajax from './ajax';
import fails from './fails';


const reducers = combineReducers({
  hello,
  connection,
  ajax,
  fails
});

export default reducers;
