import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(localStorage.getItem("login") || false);

  const loginUser = async (name, pwd, state) => {
    try {
      // "https://api-supminn.herokuapp.com/login"
      const {data} = await axios.post(
        "http://localhost:3001/login",
        {
          username: name,
          password: pwd
        }
      );
        setLogin(true);
        navigate(state?.from ? state.from : "/products");
        localStorage.setItem("login", login);
        return data;
    } catch (err) {
      //show loader and error
      const errorResponse = JSON.stringify(err.response.data);
      console.error(errorResponse);
      return err.response.data;
    }
  };

  const logOutUser = () => {
    setLogin(false);
    navigate("/");
    localStorage.removeItem("login");
  };

  return (
    <AuthContext.Provider value={{ login, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
