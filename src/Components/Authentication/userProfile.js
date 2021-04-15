import { useAuthContext } from "../../Context"

export const UserProfile = () => {
    const {logOutUser} = useAuthContext();
    return(
        <>
        <h3 className="txt-header-3">User <span className="secondary-txt">Profile</span></h3>
        <button className="btn btn-primary" onClick={logOutUser}>Logout</button>
        </>
    )
}