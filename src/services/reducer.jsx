import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("state", serializedState);
  } catch (err) {
    console.log(err);
  }
};

const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("state");
    if (!serializedState) return undefined;
    else return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const persistedStore = loadState();

const initialState = {
  number: ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUMBER": {
      const indexToChange = state.number.findIndex((x) => x === "_");

      if (action.value === "Del") {
        if (indexToChange === -1) {
          return {
            ...state,
            ...(state.number[9] = "_"),
          };
        }
        return {
          ...state,
          ...(state.number[indexToChange - 1] = "_"),
        };
      } else {
        state.number[indexToChange] = action.value;

        return {
          ...state,
          number: [...state.number],
        };
      }
    }
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  dataReducer,
});

const store = createStore(
  rootReducer,
  persistedStore,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;
