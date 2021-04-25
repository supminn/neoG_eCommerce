import { useState } from "react";
import { Link } from "react-router-dom";
import { useDataContext } from "../../../Context";
import { AddNewAddress } from "./addNewAddress";

export const AddressCard = ({
  id,
  name,
  streetLocality,
  city,
  state,
  country,
  pinCode,
  mobileNo,
}) => {
  const [editMode, setEditMode] = useState(false);
  const { dispatch } = useDataContext();
  return (
    <>
      {!editMode && (
        <div className="card-address">
          <h3>{name}</h3>
          <p>{streetLocality}</p>
          <span>
            {city}, {state}
          </span>
          <p>
            {country} - {pinCode}
          </p>
          <h5>{mobileNo}</h5>
          <div className="btn-section">
            <Link
              className="no-line fas fa-lg btn btn-secondary fa-truck"
              to="/order-summary"
              state={{
                address: {
                  name,
                  streetLocality,
                  city,
                  state,
                  country,
                  pinCode,
                },
              }}
            > {" "}
              Deliver to this address
            </Link>
            <i
              className="fas fa-lg btn btn-light fa-edit"
              onClick={() => setEditMode((val) => !val)}
            >
              {" "}
              Edit
            </i>
            <i
              className="fas fa-lg btn btn-dark fa-trash-alt"
              onClick={() => dispatch({ type: "REMOVE_ADDRESS", payload: id })}
            >
              {" "}
              Delete
            </i>
          </div>
        </div>
      )}
      {editMode && (
        <AddNewAddress
          setEditMode={setEditMode}
          editAddress={{
            id,
            name,
            streetLocality,
            city,
            state,
            country,
            pinCode,
            mobileNo,
          }}
        />
      )}
    </>
  );
};
