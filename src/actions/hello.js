export function sayHello(value) {
  return function (dispatch) {
    dispatch({
      type: 'HELLO_WORLD',
      payload: value
    });
  };
}
