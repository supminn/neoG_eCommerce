import axios from "axios";

export const serverRequest = async (url, requestType, postData = null) => {
  switch (requestType) {
    case "GET":
      try {
        //setLoading is true
        const { data, status } = await axios.get(url);
        if (status === 200) {
          return { response: data, error: false }; //return isloading as false too
        } else {
          throw new Error("Data not found");
        }
      } 
      catch (error) {
        return { response: error, error: true };
      }
      finally{
          //set loading to false
      }
    case "POST":
      try {
          //set loading to true
        const { data, status } = await axios.post(url, postData);
        if (status === 201) {
          return { response: data, error: false };
        } else {
          throw new Error("Problem occured while adding data.");
        }
      } 
      catch (error) {
        return { response: error, error: true };
      }
      finally{
        //set loading to false
    }
    default:
      return null;
  }
};
