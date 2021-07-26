import { createContext, useContext, useReducer, useState } from "react";
import axios from "axios";
import { userCredReducer } from "../Reducer/auth-reducer";
import jwt_decode from "jwt-decode";
import { API_URL } from "../services/apiDetails";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const initialUserState = {
  name: "",
  username: "",
  password: "",
  email: "",
};

export const AuthenticationProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(
    JSON.parse(localStorage.getItem("login")) || false
  );
  const [userState, userDispatch] = useReducer(
    userCredReducer,
    initialUserState
  );

  const [showLoader, setShowLoader] = useState(false);

  const loginUser = async (name, pwd) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/login`, {
        username: name.toLowerCase(),
        password: pwd,
      });
      const decoded = jwt_decode(data.token);
      const loginData = { token: `Bearer ${data.token}`, user: decoded.name };
      setLogin(loginData);
      localStorage.setItem("login", JSON.stringify(loginData));
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
    localStorage.clear();
    navigate("/");
  };

  const registerUser = async (name, username, password, email) => {
    try {
      const { data } = await axios.post(`${API_URL}/users/signup`, {
        name,
        username: username.toLowerCase(),
        password,
        email: email.toLowerCase(),
      });
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
        showLoader,
        setShowLoader,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
