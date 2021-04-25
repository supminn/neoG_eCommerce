import { useState } from "react";
import { AddNewAddress } from "./addNewAddress";
import { ShowAddresses } from "./showAddresses";

export const Address = () => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className="address-container">
      <h3 className="txt-header-3">
        Address <span className="secondary-txt">Managament</span>
      </h3>
      <button
        className="btn btn-light"
        onClick={() => setEditMode((val) => !val)}
      >
        {editMode ? "Show saved address" : "Add new address"}
      </button>
      {!editMode && (
        <ShowAddresses editMode={editMode} setEditMode={setEditMode} />
      )}
      {editMode && <AddNewAddress setEditMode={setEditMode} />}
    </div>
  );
};
