import { postAjax } from '../services/ajax';

export function ajaxStart({fail, message}) {
  return async function (dispatch) {
    const response = await postAjax({fail, message});
    if (response.success) {
      dispatch(ajaxSuccess(response));
    } else {
      dispatch(ajaxFail());
    }
  }
}
export function ajaxSuccess(response) {
  return {
    type: 'AJAX_SUCCESS',
    ...response
  };
}
export function ajaxFail() {
  return {
    type: 'AJAX_FAIL'
  };
}
