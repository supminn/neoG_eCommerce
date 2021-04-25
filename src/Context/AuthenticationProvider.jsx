import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { userCredReducer } from "../Reducer/auth-reducer";
const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const initialUserState = { name:"", username:"", password:"", email:"" };

export const AuthenticationProvider = ({ children }) => {
  const [login, setLogin] = useState(localStorage.getItem("login") || false);
  const [userState, userDispatch] = useReducer(userCredReducer, initialUserState);
  const [userData, setUser] = useState(JSON.parse(localStorage.getItem("userData")) || {});
  const [showLoader, setShowLoader] = useState(false);

  const loginUser = async (name, pwd) => {
    try {
      const { data } = await axios.post("https://api-supminn.herokuapp.com/users/login", {
        username: name.toLowerCase(),
        password: pwd,
      });
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
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
    localStorage.removeItem("userData");

  };

  const registerUser = async (name,username, password, email) => {
    try {
      const { data } = await axios.post("https://api-supminn.herokuapp.com/users/signup", {
        name,
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
      });
      setLogin(true);
      localStorage.setItem("login", login);
      setUser(data.user);
      localStorage.setItem("userData", JSON.stringify(data.user));
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
        userData,
        showLoader, 
        setShowLoader
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
