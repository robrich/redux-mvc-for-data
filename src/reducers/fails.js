
const initialState = {
  missing: false,
  propFail: false,
  double: 0
};

export default function failReducer(state = initialState, action) {
  if (action.type === 'MISSING_REDUCER_TYPO') {
    return {...state, missing: true};
  }

  if (action.type === 'PROP_FAIL') {
    return {...state, propFail: true};
  }

  if (action.type === 'DOUBLE_REDUCER') {
    return {...state, double: 1};
  }
  if (action.type === 'DOUBLE_REDUCER') {
    return {...state, double: 2};
  }

  // ignore reducers we don't care about
  return state;
}
