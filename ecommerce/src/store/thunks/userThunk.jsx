import { axiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import { FETCH_STATES } from "../actions/globalActions";
import {
  postSignupDataToApi,
  postLoginDataToApi,
  setUserFetchState,
} from "../actions/userActions";

export const postSignup = (data) => {
  return (dispatch, getState) => {
    axiosInstance
      .post("/signup", data)
      .then((res) => {
        dispatch(postSignupDataToApi(data));
        toast.success(res.data.message);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
};
export const postLogin = (data) => {
  return (dispatch, getState) => {
    dispatch(setUserFetchState(FETCH_STATES.fetching));
    return axiosInstance
      .post("/login", data)
      .then((res) => {
        dispatch(postLoginDataToApi(res.data));
        dispatch(setUserFetchState(FETCH_STATES.fetched));
        toast.success("You successfully logged in!");
      })
      .catch((err) => {
        toast.error("Your password or email is wrong!");
        dispatch(setUserFetchState(FETCH_STATES.failed));
        localStorage.removeItem("token");
        throw err;
      });
  };
};
