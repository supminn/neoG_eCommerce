import { useDataContext } from "../../../Context";

export const Address = () => {
    const {dispatch} = useDataContext();
    return(
        <>
        <h3 className="txt-header-3">Address <span className="secondary-txt">Managament</span></h3>
        <p className="txt-desc">Functionality coming soon 🙂</p>
        <button className="btn btn-solid" onClick={() => dispatch({type:"SHOW_TOAST",payload:"Functionality comming soon!"})}>Order now</button>
        </>
    )
}