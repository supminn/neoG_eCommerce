import { initialUserState } from "../Context/auth-context";

export const userCredReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NAME":
      return { ...state, name: payload };


    case "SET_USERNAME":
      return { ...state, username: payload };

    case "SET_PASSWORD":
      return { ...state, password: payload };

    case "SET_EMAIL":
      return { ...state, email: payload };

    default:
      return { ...initialUserState};
  }
};