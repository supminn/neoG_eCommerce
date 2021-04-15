import { useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/auth-context";
import { Password } from "./password";

export const Login = () => {
  const { loginUser } = useAuth();
  const [{username, password}, userDispatch] = useReducer(userCredReducer, {
    username: "",
    password: "",
  });
  const { state } = useLocation();
  const navigate = useNavigate();


  return (
    <>
      <h3 className="txt-header-3">Login to <span className="secondary-txt">continue!</span></h3>
      <form className="login-container">
        <div className="txt-box">
          <span className="txt-icon">
            <i className="fas fa-at fa-lg"></i>
          </span>
          <input required
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
        <button type="submit"
          className="btn btn-primary"
          onClick={async () => await loginUser(username, password, state)}
        >
          Login
        </button>
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
