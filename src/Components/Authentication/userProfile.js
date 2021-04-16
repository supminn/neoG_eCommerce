import { useAuthContext, useDataContext } from "../../Context"

export const UserProfile = () => {
    const {logOutUser, userName} = useAuthContext();
    const {dispatch} = useDataContext();
    
    const logOutHandler = () => {
        dispatch({ type: "CLEAR_CART" });
        logOutUser();
    }
    return(
        <>
        <h2 className="txt-header-2">User <span className="secondary-txt">Profile</span></h2>
        <h3 className="txt-header-3">{userName}</h3>
        <button className="btn btn-primary" onClick={logOutHandler}>Logout</button>
        </>
    )
}