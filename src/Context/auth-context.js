import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(localStorage.getItem("login") || false);

  const loginUser = async (name, pwd, state) => {
    try {
      const { status } = await axios.post(
        "https://supminn-api.herokuapp.com/login",
        {
          username: name,
          password: pwd
        }
      );
        setLogin(true);
        navigate(state?.from ? state.from : "/products");
        // localStorage.setItem("login", login);
        return status;
    } catch (err) {
      //show loader and error
      const errorResponse = JSON.stringify(err.response.data);
      console.error(errorResponse);
    }
  };

  const logOutUser = () => {
    setLogin(false);
    navigate("/");
    // localStorage.removeItem("login");
  };

  return (
    <AuthContext.Provider value={{ login, loginUser, logOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
