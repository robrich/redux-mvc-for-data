
const initialState = {
  value: undefined
};

export default function helloReducer(state = initialState, action) {
  if (action.type === 'DO_CONNECT') {
    return {...state, message:action.message};
  }

  // ignore reducers we don't care about
  return state;
}
