import { Navigate, Route } from "react-router";
import { useAuth } from "../Context/auth-context"

export const PrivateRoute = ({path, ...props}) => {
    const {login} = useAuth();
    return login ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate state={{ from: path }} replace to={"/login"} />
      );
}