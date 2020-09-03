import axios from "axios";

export const FETCH_VEHICLES_REQUEST = "FETCH_VEHICLES_REQUEST";
export const FETCH_VEHICLES_SUCCESS = "FETCH_VEHICLES_SUCCESS";
export const FETCH_VEHICLES_FAILURE = "FETCH_VEHICLES_FAILURE";

export const fetchVehiclesRequest = () => {
  return {
    type: FETCH_VEHICLES_REQUEST
  };
};

export const fetchVehiclesSuccess = vehicles => {
  return {
    type: FETCH_VEHICLES_SUCCESS,
    payload: vehicles
  };
};

export const fetchVehiclesFailure = error => {
  return {
    type: FETCH_VEHICLES_FAILURE,
    payload: error
  };
};

export const fetchVehicles = () => {
  return function(dispatch) {
    dispatch(fetchVehiclesRequest());
    axios
      .get("/vehicles")
      .then(response => {
        //response.data    
        console.log("fetchVehicles calling...")
        dispatch(fetchVehiclesSuccess(response.data));
      })
      .catch(error => {
        // error.message
        dispatch(fetchVehiclesFailure(error.message));
      });
  };
};
