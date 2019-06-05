
const initialState = {
  loading: false,
  request: undefined,
  response: undefined,
  success: true
};

export default function authReducer(state = initialState, action) {
  if (action.type === 'AJAX_START') {
    return {...state, request: action.request, loading: true};
  }
  if (action.type === 'AJAX_SUCCESS') {
    return {...state, response: action.message, loading: false, success: true};
  }
  if (action.type === 'AJAX_FAIL') {
    return {...state, response: null, loading: false, success: false};
  }

  // ignore reducers we don't care about
  return state;
}
