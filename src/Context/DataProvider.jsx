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
  addresses:[JSON.parse(localStorage.getItem("addresses")) || {
    id:1, 
    name: "Supminn",
    streetLocality: "Banashankari",
    city: "Bengaluru",
    state: "Karnataka",
    country: "India",
    pinCode: "567082",
    mobileNo: "8856214578"}]
};

export const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(dataReducer,initialArg);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};
