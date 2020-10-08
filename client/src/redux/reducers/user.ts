import { User } from "../../types";

type Action =
  | {
      type: "ADD_USER";
      payload: User;
    }
  | {
      type: "REMOVE_USER";
    };

const userReducer = (state: User | null = null, action: Action) => {
  switch (action.type) {
    case "ADD_USER":
      return action.payload;
    case "REMOVE_USER":
      return null;
    default:
      return state;
  }
};
export default userReducer;
