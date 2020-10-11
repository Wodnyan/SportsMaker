import { Entry } from "../../types";

type Action = { type: "ADD_ENTRY"; payload: Entry };

const entriesReducer = (state: Entry[] | [] = [], action: Action) => {
  switch (action.type) {
    case "ADD_ENTRY":
      return [...state, action.payload];
    default:
      return state;
  }
};
export default entriesReducer;
