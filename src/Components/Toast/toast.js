import { useEffect } from "react";
import { useDataContext } from "../../Context";

export const Toast = () => {
  const {state:{toastMsg}, dispatch} = useDataContext();

  const  closeToast = () => {
    dispatch({type:"SHOW_TOAST", payload:null});
  }

  useEffect(() => {
    const timeID = setTimeout(closeToast ,2000);
    return () => clearTimeout(timeID);  
  })

  return (
    <div className="toast-container">
      <h3 className="toast-message">{toastMsg}</h3>
      <i onClick={closeToast} className="fa fa-times wish-remove"></i>
    </div>
  );
};
