import { Navigate, Route } from "react-router";
import { useAuthContext } from "../../Context"

export const PrivateRoute = ({path, ...props}) => {
    const {login} = useAuthContext();
    return login ? (
        <Route {...props} path={path} />
      ) : (
        <Navigate replace state={{ from: path }} to={"/login"} />
      );
}