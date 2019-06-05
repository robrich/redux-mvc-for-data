export function misnamed() {
  return function (dispatch) {
    dispatch({
      type: 'MISSING_REDUCER'
    });
  };
}

export function propFail() {
  return function (dispatch) {
    dispatch({
      type: 'PROP_FAIL'
    });
  };
}

export function tooMany() {
  return function (dispatch) {
    dispatch({
      type: 'DOUBLE_REDUCER'
    });
  };
}
