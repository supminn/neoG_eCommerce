import { createContext, useContext, useReducer } from "react";
import {products} from '../Components/products';
import { dataReducer } from "../Reducer/data-reducer";
export const DataContext = createContext();
export const useDataContext = () => useContext(DataContext);


const initialArg = {
  products:products,
  itemsInCart:[],
  itemsInWishList:[]
};

export const DataProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(dataReducer,initialArg);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};