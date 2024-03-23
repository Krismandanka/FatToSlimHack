// import { courseEndpoints } from "../apis"
import { courseEndpoints } from "../apis"
import {apiConnector} from "../apiconnector"
import { toast } from "react-hot-toast"

import { setLoading} from "../../slices/authSlice"
import {setProgress} from "../../slices/loadingBarSlice"
const {GET_ALL_COURSE_API} = courseEndpoints

// const {GET_ALL_COURSE_API } = courseEndpoints;




export const getAllProducts = async (dispatch) => {
    const toastId = toast.loading("Loading...")
    let result = []
    // dispatch(setLoading(true));
    dispatch(setProgress(50));

    
    try {
        // console.log("mmmmmmmmmmmmmmmmmmm")
      const response = await apiConnector("GET", GET_ALL_COURSE_API)
    //   console.log("first",GET_ALL_COURSE_API)
      console.log("all products",response.data.data)
      if (!response?.data?.success) {
        dispatch(setLoading(false));
        throw new Error("Could Not Fetch Course Categories")
      }
      result = response?.data?.data
      console.log("resu;",result)

    } catch (error) {
      console.log("GET_ALL_COURSE_API API ERROR............", error)
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    // dispatch(setLoading(false));
    dispatch(setProgress(100));


    // console.log("result",result)
    
    return result
  }



