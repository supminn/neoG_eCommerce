import { useState } from "react";

export const Password = ({ userValue, dispatch }) => {
  const [viewPwd, setViewPwd] = useState(false);
  
  return (
    <div className="txt-box">
      <input
        required
        className="txt-input"
        type={viewPwd ? "text" : "password"}
        value={userValue}
        onChange={(e) =>
          dispatch({ type: "SET_PASSWORD", payload: e.target.value })
        }
        placeholder="Password"
      />
      <span className="txt-icon" onClick={() => setViewPwd((val) => !val)}>
        <i className="fas fa-eye fa-lg"></i>
      </span>
    </div>
  );
};
