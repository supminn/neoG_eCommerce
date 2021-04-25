import { useState } from "react";
import { useDataContext } from "../../../Context";

const defaultData = {
  name: "",
  streetLocality: "",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
  mobileNo: "",
};

export const AddNewAddress = ({setEditMode, editAddress = defaultData}) => {
  const {dispatch} = useDataContext();
  const [address, setAddress] = useState(editAddress);
  const [errorMsg, setErrorMsg] = useState({});

  const dataValidation = () => {
    let status = true;
    if(!/^[6-9][0-9]{9}$/.test(address.mobileNo)){
      setErrorMsg(msg => ({...msg, mobileNo:"Please provide a valid mobile number"}));
      status = false;
    }
    if(!/^[1-9][0-9]{5}$/.test(address.pinCode)){
      setErrorMsg(msg => ({...msg, pinCode:"Please provide a valid area code"}));
      status = false;
    }
    return status;
  }
  const addNewAddress = (e) => {
    e.preventDefault();
    if(dataValidation()){
      if(editAddress.id){
        dispatch({type:"UPDATE_ADDRESS",payload: address})
      }
      else{
        dispatch({type:"ADD_ADDRESS", payload: address});
      }
      setEditMode(val => !val);
    }

  };

  return (
    <div className="edit-address-container">
      <form className="form-address" onSubmit={addNewAddress}>
        <input className="txt-input"
          required
          type="text"
          placeholder="Full name"
          value={address.name}
          onChange={(e) =>
            setAddress((address) => ({ ...address, name: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          type="number"
          placeholder="10 digit Mobile number"
          minLength="10"
          value={address.mobileNo}
          onChange={(e) =>
            setAddress((address) => ({ ...address, mobileNo: e.target.value }))
          }
        />
        <p className="txt-error">{errorMsg.mobileNo}</p>
        <input className="txt-input"
          required
          type="text"
          placeholder="House/Flat No., Street, Colony, Area/Locality"
          value={address.streetLocality}
          onChange={(e) =>
            setAddress((address) => ({
              ...address,
              streetLocality: e.target.value,
            }))
          }
        />
        <input className="txt-input"
          required
          type="text"
          placeholder="City/Town"
          value={address.city}
          onChange={(e) =>
            setAddress((address) => ({ ...address, city: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          type="text"
          placeholder="State/Province/Region"
          value={address.state}
          onChange={(e) =>
            setAddress((address) => ({ ...address, state: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          type="text"
          placeholder="Country/Region"
          value={address.country}
          onChange={(e) =>
            setAddress((address) => ({ ...address, country: e.target.value }))
          }
        />
          <input className="txt-input"
          required
          type="number"
          placeholder="Pincode"
          minLength="6"
          maxLength="8"
          value={address.pinCode}
          onChange={(e) =>
            setAddress((address) => ({ ...address, pinCode: e.target.value }))
          }
        />
        <p className="txt-error">{errorMsg.pinCode}</p>
        <button type="submit" className="btn btn-solid">Save and Continue</button>
        <button typ="button" className="btn btn-secondary" onClick={() => setEditMode(val => !val)}>Cancel</button>
      </form>
    </div>
  );
};
