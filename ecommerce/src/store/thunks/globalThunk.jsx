import {
  getRolesFromApi,
  FETCH_STATES,
  getCategoriesFromApi,
  setCategoriesFetchState,
} from "../actions/globalActions";
import { axiosInstance } from "../../api/api";

export const getRoles = () => {
  return (dispath, getState) => {
    axiosInstance
      .get("/roles")
      .then((res) => dispath(getRolesFromApi(res.data)))
      .catch((err) => toast.error(err.message));
  };
};

export const getCategories = () => {
  return (dispatch, getState) => {
    dispatch(setCategoriesFetchState(FETCH_STATES.fetching));
    axiosInstance
      .get("/categories")
      .then((res) => {
        dispatch(setCategoriesFetchState(FETCH_STATES.fetched));
        dispatch(getCategoriesFromApi(res.data));
      })
      .catch((err) => {
        dispatch(setCategoriesFetchState(FETCH_STATES.failed));
        toast.error(err.message);
      });
  };
};
