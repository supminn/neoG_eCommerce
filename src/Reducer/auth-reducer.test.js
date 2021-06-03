import { userCredReducer } from "./auth-reducer";

describe("testing user authentication reducer", () => {
  test("should set the name to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_NAME",
      payload: "Supriya",
    };

    const initialUserState = {
      name: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      name: "Supriya",
    });
  });

  test("should set the username to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_USERNAME",
      payload: "Supminn",
    };

    const initialUserState = {
      username: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      username: "Supminn",
    });
  });

  test("should set the password to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_PASSWORD",
      payload: "secret",
    };

    const initialUserState = {
      password: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      password: "secret",
    });
  });

  test("should set the email to user provided value", () => {
    //Arrange
    const action = {
      type: "SET_EMAIL",
      payload: "admin@supminn.com",
    };

    const initialUserState = {
      email: "",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      email: "admin@supminn.com",
    });
  });

  test("should set the state to initial value", () => {
    //Arrange
    const action = {
      type: "CLEAR",
    };

    const initialUserState = {
      username: "Supminn",
      name: "Supriya",
      email: "admin@supminn.com",
      password: "secret",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
      username: "",
      name: "",
      email: "",
      password: "",
    });
  });

  test("should not modify the state data", () => {
    //Arrange
    const action = {
      type: "DEFAULT_CASE",
    };

    const initialUserState = {
      username: "Supminn",
      name: "Supriya",
      email: "admin@supminn.com",
      password: "secret",
    };

    //Act
    const state = userCredReducer(initialUserState, action);
    expect(state).toEqual({
        username: "Supminn",
        name: "Supriya",
        email: "admin@supminn.com",
        password: "secret",
      });
  });
});
