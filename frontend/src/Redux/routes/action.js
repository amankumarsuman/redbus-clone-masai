import * as actionTypes from "./actionTypes";
import axios from "axios";

const baseURL = "http://localhost:8000/api";
const getRoutesRequest = () => {
  return {
    type: actionTypes.GET_ROUTES_REQUEST,
  };
};
const getRoutesSuccess = (routes) => {
  return {
    type: actionTypes.GET_ROUTES_SUCCESS,
    payload: routes,
  };
};
const getRoutesFailure = () => {
  return {
    type: actionTypes.GET_ROUTES_FAILURE,
  };
};
const getRoutes = (departure, arrival, date) => {
  return async (dispatch) => {
    dispatch(getRoutesRequest());
    try {
      const res = await axios.get(
        `${baseURL}/routes/${departure}/${arrival}/${date}`
      );
      dispatch(getRoutesSuccess(res.data));
    } catch (err) {
      dispatch(getRoutesFailure());
    }
  };
};

const getRoutesWithFilter = (departure, arrival, date, params) => {
  return async (dispatch) => {
    dispatch(getRoutesRequest());
    try {
      const res = await axios.get(
        `${baseURL}/routes/${departure}/${arrival}/${date}`,
        {
          params: params,
        }
      );
      dispatch(getRoutesSuccess(res.data));
    } catch (err) {
      dispatch(getRoutesFailure());
    }
  };
};

export { getRoutes, getRoutesWithFilter };
