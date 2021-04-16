import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { userCredReducer } from "../Reducer/auth-reducer";
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login") || false);
  const [userName, setUser] = useState(localStorage.getItem("username") || "");
  const [userState, userDispatch] = useReducer(userCredReducer, {
    username: "",
    password: "",
    email: "",
  });
  const loginUser = async (name, pwd) => {
    try {
      const { data } = await axios.post("https://api-supminn.herokuapp.com/login", {
        username: name.toLowerCase(),
        password: pwd,
      });
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(name);
      localStorage.setItem("username", name);
      userDispatch({ type: "CLEAR" });
      return data;
    } catch (err) {
      const errorResponse = JSON.stringify(err.response.data);
      console.error(errorResponse);
      return err.response.data;
    }
  };

  const logOutUser = () => {
    setLogin(false);
    setUser("");
    localStorage.removeItem("login");
    localStorage.removeItem("username");

  };

  const registerUser = async (username, password, email) => {
    try {
      const { data } = await axios.post("https://api-supminn.herokuapp.com/signup", {
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
      });
      setLogin(true);
      setUser(username);
      localStorage.setItem("username", username);
      userDispatch({ type: "CLEAR" });
      return data;
    } catch (err) {
      const errorResponse = JSON.stringify(err.response.data);
      console.error(errorResponse);
      return err.response.data;
    }
  };
  return (
    <AuthContext.Provider
      value={{
        login,
        loginUser,
        logOutUser,
        userState,
        userDispatch,
        registerUser,
        userName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
