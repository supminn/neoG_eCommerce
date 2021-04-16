export const userCredReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USERNAME":
      return { ...state, username: payload };

    case "SET_PASSWORD":
      return { ...state, password: payload };

    case "SET_EMAIL":
      return { ...state, email: payload };

    default:
      return { username:"", password:"", email:"" };
  }
};
