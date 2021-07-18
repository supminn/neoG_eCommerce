import Loader from "react-loader-spinner";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../Context";
import { Password } from "./Password";

export const Login = () => {
  const [ErrorMsg, setErrorMsg] = useState("");
  const {
    loginUser,
    userDispatch,
    userState: { username, password },
    showLoader,
    setShowLoader,
  } = useAuthContext();
  const { state } = useLocation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    const res = await loginUser(username, password, state);
    setShowLoader(false);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      navigate(state?.from ? state.from : "/products");
    }
  };
  return (
    <>
      <h2 className="txt-header-2">
        Login to <span className="secondary-txt">continue!</span>
      </h2>
      <form className="div-container" onSubmit={loginHandler}>
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
        <p
          className="btn-link"
          onClick={() => {
            userDispatch({ type: "SET_USERNAME", payload: "tester" });
            userDispatch({ type: "SET_PASSWORD", payload: "Testing1" });
          }}
        >
          Use test credentials
        </p>
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
      {showLoader && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
    </>
  );
};
