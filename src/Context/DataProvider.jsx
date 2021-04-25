import { createContext, useContext, useReducer } from "react";
import { dataReducer } from "../Reducer/data-reducer";

export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);


const initialArg = {
  products:[],
  itemsInCart:[],
  itemsInWishlist:[],
  sortBy: null,
  inStock:false,
  fastDelivery: false,
  priceRange: 30000,
  toastMsg: "",
  searchValue:"",
  addresses:[]
};

export const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(dataReducer,initialArg);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

/*
JSON.parse(localStorage.getItem("addresses")) || {
    _id:1, 
    name: "Supminn",
    street:"2nd stage",
    locality: "Banashankari",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pinCode: "567082",
    mobileNo: "8856214578"}
*/