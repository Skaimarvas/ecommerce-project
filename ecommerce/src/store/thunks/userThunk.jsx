import { axiosInstance } from "../../api/api";
import { toast } from "react-toastify";
import { FETCH_STATES } from "../actions/globalActions";
import { postSignupDataToApi } from "../actions/userActions";

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
