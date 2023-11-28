import * as AuthApi from "../api/AuthRequests";
import { toast } from "react-toastify";

export const logIn = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.logIn(formData);
    dispatch({ type: "AUTH_SUCCESS", data: data });
    toast.success("Logged in successfully.");
    navigate("../home", { replace: true });
  } catch (error) {
    //console.log(error.response.data);
    throw new Error(error.response.data);
  }
};

export const signUp = (formData, navigate) => async (dispatch) => {
  dispatch({ type: "AUTH_START" });
  try {
    const { data } = await AuthApi.signUp(formData);
    dispatch({ type: "AUTH_FAIL", data: data });
    toast.success("Please verify your email. Verification mail sent.");
    navigate("../", { replace: true });
  } catch (error) {
    // console.log(error);
    toast.error("Error. Account may already exist.");
    dispatch({ type: "AUTH_FAIL" });
  }
};


export const logout = ()=> async(dispatch)=> {
  dispatch({type: "LOG_OUT"})
}
