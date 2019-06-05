
const initialState = {
  value: undefined
};

export default function helloReducer(state = initialState, action) {
  if (action.type === 'HELLO_WORLD') {
    return {...state, value:action.payload};
  }

  // ignore reducers we don't care about
  return state;
}
