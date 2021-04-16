import Loader from "react-loader-spinner";
import { useReducer, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context";
import { Password } from "./password";

export const Login = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const { loginUser } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();
   const [{ username, password }, userDispatch] = useReducer(userCredReducer, {
    username: "",
    password: "",
  });

  const loginHandler = async (e) => {
      setShowLoader(true);
      e.preventDefault();
      const res = await loginUser(username, password, state);
      setShowLoader(false);
      if(!res.success){
        setErrorMsg(res.message);
      }
  }
  return (
    <>
      <h2 className="txt-header-2">
        Login to <span className="secondary-txt">continue!</span>
      </h2>
      <form
        className="login-container"
        onSubmit={loginHandler}
      >
        <div className="txt-box">
          <span className="txt-icon">
            <i className="fas fa-at fa-lg"></i>
          </span>
          <input
            required
            className="txt-input"
            type="text"
            value={username}
            onChange={(e) =>
              userDispatch({ type: "SET_USERNAME", payload: e.target.value })
            }
            placeholder="Username"
          />
        </div>
        <Password userValue={password} dispatch={userDispatch} />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
        {ErrorMsg && <p className="txt-desc primaryBg-txt">{ErrorMsg}</p>}
      </form>

      <div className="signup-container">
        <b className="primaryBg-txt">Not a member? </b>
        <button
          className="btn btn-secondary"
          onClick={() => navigate("/signup")}
        >
          Sign Up
        </button>
      </div>
      {showLoader && <Loader type="Oval" color="#00BFFF" height={80} width={80} /> }
    </>
  );
};

export const userCredReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_USERNAME":
      return { ...state, username: payload };

    case "SET_PASSWORD":
      return { ...state, password: payload };

    default:
      return { ...state };
  }
};
