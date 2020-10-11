export const addFilter = (value: unknown, name?: string) => ({
  type: "UPDATE_FILTERS",
  payload: {
    name,
    value
  },
});