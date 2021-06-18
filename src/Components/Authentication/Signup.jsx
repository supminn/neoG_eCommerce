import { useState } from "react";
import Loader from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../Context";
import { Password } from "./Password";

export const Signup = () => {
  const [ErrorMsg, setErrorMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);
  const {
    userState: { name, username, password, email },
    userDispatch,
    registerUser,
    showLoader,
    setShowLoader,
  } = useAuthContext();

  const signupHandler = async (e) => {
    setShowLoader(true);
    e.preventDefault();
    if (!isPasswordValid()) {
      setErrorMsg("Password must contain at least 8 characters, at least 1 number and both lower and uppercase letters.");
    } else {
      const res = await registerUser(name, username, password, email);
      if (!res.success) {
        setErrorMsg(res.message);
      } else {
        setShowMsg(true);
      }
    }
    setShowLoader(false);
  };

  const isPasswordValid = () => {
    if (
      password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/) ==
      null
    )
      return false;
    else return true;
  };

  return (
    <>
      <h2 className="txt-header-2">
        Sign <span className="secondary-txt">up</span>
      </h2>
      {!showMsg && (
        <>
          <form className="div-container" onSubmit={signupHandler}>
            <div className="txt-box">
              <input
                required
                className="txt-input"
                type="text"
                value={name}
                onChange={(e) =>
                  userDispatch({ type: "SET_NAME", payload: e.target.value })
                }
                placeholder="Name"
              />
              <span className="txt-icon">
                <i className="fas fa-address-card fa-lg"></i>
              </span>
            </div>
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
                  userDispatch({
                    type: "SET_USERNAME",
                    payload: e.target.value,
                  })
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
          <b className="txt-desc primaryBg-txt">
            Already a member?{" "}
            <NavLink to="/login">
              <button className="btn btn-secondary">Login</button>
            </NavLink>
          </b>
        </>
      )}
      {showLoader && (
        <Loader type="Oval" color="#00BFFF" height={80} width={80} />
      )}
      {showMsg && (
        <div className="div-container">
          <p className="txt-desc primaryBg-txt">
            Thank you for signing up with <b>SupMart</b>.
          </p>
          <p className="txt-desc primaryBg-txt">
            You can now avail <em>express delivery</em> on select products
          </p>
          <NavLink to="/login">
            <button className="btn btn-primary">
              Login to start shopping!
            </button>
          </NavLink>
        </div>
      )}
    </>
  );
};
