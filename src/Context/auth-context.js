import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { userCredReducer } from "../Reducer/auth-reducer";
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login") || false);
  const [userName, setUser] = useState("");
  const [userState, userDispatch] = useReducer(userCredReducer, {
    username: "",
    password: "",
    email: "",
  });
  const loginUser = async (name, pwd) => {
    try {
      // "https://api-supminn.herokuapp.com/login"
      const { data } = await axios.post("http://localhost:3001/login", {
        username: name.toLowerCase(),
        password: pwd,
      });
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(name);
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
    localStorage.removeItem("login");
  };

  const registerUser = async (username, password, email) => {
    try {
      // "https://api-supminn.herokuapp.com/login"
      const { data } = await axios.post("http://localhost:3001/signup", {
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
      });
      setLogin(true);
      setUser(username);
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
