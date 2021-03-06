import { useState } from "react";
import { useAuthContext, useDataContext } from "../../../Context";
import { updateUserAddress } from "../../../services";

const defaultData = {
  name: "",
  street: "",
  locality:"",
  city: "",
  state: "",
  country: "India",
  pinCode: "",
  mobileNo: "",
};

export const AddNewAddress = ({setEditMode, editAddress = defaultData}) => {
  const {dispatch} = useDataContext();
  const {showLoader, setShowLoader} = useAuthContext();
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
      updateUserAddress(address,dispatch, setShowLoader);
      setEditMode(val => !val);
    }
  };

  return (
    <div className="edit-address-container">
      <form className="form-address" onSubmit={addNewAddress}>
        <input className="txt-input"
          required
          disabled={showLoader}
          type="text"
          placeholder="Full name"
          value={address.name}
          onChange={(e) =>
            setAddress((address) => ({ ...address, name: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          disabled={showLoader}
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
          disabled={showLoader}
          type="text"
          placeholder="House/Flat No., Street, Colony"
          value={address.street}
          onChange={(e) =>
            setAddress((address) => ({
              ...address,
              street: e.target.value,
            }))
          }
        />
        <input className="txt-input"
          required
          disabled={showLoader}
          type="text"
          placeholder="Area/Locality"
          value={address.locality}
          onChange={(e) =>
            setAddress((address) => ({
              ...address,
              locality: e.target.value,
            }))
          }
        />
        <input className="txt-input"
          required
          disabled={showLoader}
          type="text"
          placeholder="City/Town"
          value={address.city}
          onChange={(e) =>
            setAddress((address) => ({ ...address, city: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          disabled={showLoader}
          type="text"
          placeholder="State/Province/Region"
          value={address.state}
          onChange={(e) =>
            setAddress((address) => ({ ...address, state: e.target.value }))
          }
        />
        <input className="txt-input"
          required
          disabled={showLoader}
          type="text"
          placeholder="Country/Region"
          value={address.country}
          onChange={(e) =>
            setAddress((address) => ({ ...address, country: e.target.value }))
          }
        />
          <input className="txt-input"
          required
          disabled={showLoader}
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
        <button disabled={showLoader}
        type="submit" className="btn btn-solid">Save and Continue</button>
        <button disabled={showLoader}
        type="button" className="btn btn-secondary" onClick={() => setEditMode(val => !val)}>Cancel</button>
      </form>
    </div>
  );
};
