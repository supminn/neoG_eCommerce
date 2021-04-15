import { Navigate, Route } from "react-router";
import { useAuthContext } from "../Context/auth-context"

export const PrivateRoute = ({path, ...props}) => {
    const {login} = useAuthContext();
    return login ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate state={{ from: path }} replace to={"/login"} />
      );
}