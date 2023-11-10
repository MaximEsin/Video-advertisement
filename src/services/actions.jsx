export function addNumber(value) {
  return function (dispatch) {
    dispatch({
      type: "ADD_NUMBER",
      value: value,
    });
  };
}

export function setFocus() {
  return function (dispatch) {
    dispatch({
      type: "SET_FOCUS",
    });
  };
}
