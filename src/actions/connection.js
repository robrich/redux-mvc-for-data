export function sendMessage(message) {
  return function (dispatch) {
    dispatch({
      type: 'DO_CONNECT',
      message
    });
  };
}
