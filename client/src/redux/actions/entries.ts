import { Entry } from "../../types";

export const addEntry = (entry: Entry) => ({
  type: "ADD_ENTRY",
  payload: entry,
});
