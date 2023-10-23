export function addNumber(value) {
  return function (dispatch) {
    dispatch({
      type: "ADD_NUMBER",
      value: value,
    });
  };
}
