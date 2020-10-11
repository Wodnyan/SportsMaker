import { Filters } from "../../types";

const initialState: Filters = {
  experience: "",
  sortBy: "relevance",
  typeOfSport: "",
}

type Action = {type: "UPDATE_FILTERS", payload: {
  name?: string;
  value: unknown;
}}

const filterReducer = (state: Filters = initialState, action: any) => {
  switch (action.type) {
    case "UPDATE_FILTERS":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    default:
      return state
  }
};
export default filterReducer;
