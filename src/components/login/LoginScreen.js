import React, { useContext } from "react";
import { AuthContext } from "../../authentication/AuthContext";
import { types } from "../../types/types";

export const LoginScreen = ({ history }) => {
  const { dispatch } = useContext(AuthContext);
  const handleLogin = () => {
    const lastPath = localStorage.getItem("lastpath") || "/";
    dispatch({
      type: types.login,
      payload: {
        name: "Valentina",
      },
    });
    history.replace(lastPath);
  };
  return (
    <div className="container mt-5">
      <h1>Login Screen</h1>
      <hr />
      <button className="btn btn-info" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
