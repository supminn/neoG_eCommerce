export const itemExists = (array, id) =>
  array.some((item) => item._id === id);