import { getRolesFromApi } from "../actions/globalActions";
import { axiosInstance } from "../../api/api";

export const getRoles = () => {
  return (dispath, getState) => {
    axiosInstance
      .get("/roles")
      .then((res) => dispath(getRolesFromApi(res.data)))
      .catch((err) => toast.error(err.message));
  };
};

export const getCategories = () => {};
