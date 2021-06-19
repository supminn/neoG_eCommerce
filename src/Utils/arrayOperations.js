export const itemExists = (array, id) =>
  array.some((item) => item._id === id);

export const distinct = (value, index, self) => self.indexOf(value) === index;

