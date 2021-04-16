import { useState } from "react";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../Context/auth-context";
import { Password } from "./password";

export const Signup = () => {
  const [showLoader, setShowLoader] = useState(false);
  const [ErrorMsg, setErrorMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const {
    userState: { username, password, email },
    userDispatch,
    registerUser,
    userName
  } = useAuthContext();

  const signupHandler = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    const res = await registerUser(username, password, email);
    setShowLoader(false);
    if (!res.success) {
      setErrorMsg(res.message);
    } else {
      setShowMsg(true);
    }
  };
  return (
    <>
      <h2 className="txt-header-2">
        Sign <span className="secondary-txt">up</span>
      </h2>
      {!showMsg && (
        <form className="div-container" onSubmit={signupHandler}>
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
          <div className="txt-box">
            <span className="txt-icon">
              <i className="fas fa-envelope fa-lg"></i>
            </span>
            <input
              required
              className="txt-input"
              type="email"
              value={email}
              onChange={(e) =>
                userDispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
              placeholder="Email address"
            />
          </div>
          <Password userValue={password} dispatch={userDispatch} />
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          {ErrorMsg && <p className="txt-desc primaryBg-txt">{ErrorMsg}</p>}
        </form>
      )}
      {showLoader && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
      {showMsg && (
        <div className="div-container">
          <p className="txt-desc primaryBg-txt">Hi <b className="secondary-txt">{userName.toUpperCase()}</b>, thank you for signing up with <b>SupMart</b>.</p>
          <p className="txt-desc primaryBg-txt">You can now avail <em>express delivery</em> on select products</p>
          <NavLink to="/products">
            <button className="btn btn-primary">Start shopping!</button>
          </NavLink>
        </div>
      )}
    </>
  );
};
