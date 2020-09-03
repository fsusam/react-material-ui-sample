import axios from "axios";
export const CREATE_VEHICLE_REQUEST = "CREATE_VEHICLE_REQUEST";
export const CREATE_VEHICLE_SUCCESS = "CREATE_VEHICLE_SUCCESS";
export const CREATE_VEHICLE_FAILURE = "CREATE_VEHICLE_FAILURE";
export const FETCH_VEHICLES_OF_USER_REQUEST = "FETCH_VEHICLES_OF_USER_REQUEST";
export const FETCH_VEHICLES_OF_USER_SUCCESS = "FETCH_VEHICLES_OF_USER_SUCCESS";
export const FETCH_VEHICLES_OF_USER_FAILURE = "FETCH_VEHICLES_OF_USER_FAILURE";
export const UPDATE_VEHICLE_REQUEST = "UPDATE_VEHICLE_REQUEST";
export const UPDATE_VEHICLE_SUCCESS = "UPDATE_VEHICLE_SUCCESS";
export const UPDATE_VEHICLE_FAILURE = "UPDATE_VEHICLE_FAILURE";
export const DELETE_VEHICLES_REQUEST = "DELETE_VEHICLES_REQUEST";
export const DELETE_VEHICLES_SUCCESS = "DELETE_VEHICLES_SUCCESS";
export const DELETE_VEHICLES_FAILURE = "DELETE_VEHICLES_FAILURE";
export const FILL_OUT_VEHICLE_FORM = "FILL_OUT_VEHICLE_FORM";

export const createVehicleRequest = () => {
  return {
    type: CREATE_VEHICLE_REQUEST
  };
};

export const createVehicleSuccess = vehicle => {
  return {
    type: CREATE_VEHICLE_SUCCESS,
    payload: vehicle
  };
};

export const createVehicleFailure = error => {
  return {
    type: CREATE_VEHICLE_FAILURE,
    payload: error
  };
};

export const fetchVehiclesOfUserRequest = () => {
  return {
    type: FETCH_VEHICLES_OF_USER_REQUEST
  };
};

export const fetchVehiclesOfUserSuccess = vehicles => {
  return {
    type: FETCH_VEHICLES_OF_USER_SUCCESS,
    payload: vehicles
  };
};

export const fetchVehiclesOfUserFailure = error => {
  return {
    type: FETCH_VEHICLES_OF_USER_FAILURE,
    payload: error
  };
};

export const updateVehicleRequest = () => {
  return {
    type: UPDATE_VEHICLE_REQUEST
  };
};

export const updateVehicleSuccess = vehicles => {
  return {
    type: UPDATE_VEHICLE_SUCCESS,
    payload: vehicles
  };
};

export const updateVehicleFailure = error => {
  return {
    type: UPDATE_VEHICLE_FAILURE,
    payload: error
  };
};

export const deleteVehiclesRequest = () => {
  return {
    type: DELETE_VEHICLES_REQUEST
  };
};

export const deleteVehicleSuccess = vehicles => {
  return {
    type: DELETE_VEHICLES_SUCCESS
  };
};

export const deleteVehiclesFailure = error => {
  return {
    type: DELETE_VEHICLES_FAILURE,
    payload: error
  };
};

export const fillOutVehicleForm = row => {
  return {
    type: FILL_OUT_VEHICLE_FORM,
    payload: row
  };
};

export const fetchVehiclesByUsername = username => {
  return function(dispatch) {
    dispatch(fetchVehiclesOfUserRequest());
    axios
      .get("/vehicles")
      .then(response => {
        //response.data
        console.log("fetchVehiclesByUsername calling...");
        dispatch(fetchVehiclesOfUserSuccess(response.data));
      })
      .catch(error => {
        // error.message
        dispatch(fetchVehiclesOfUserFailure(error.message));
      });
  };
};

export const createVehicle = requestBody => {
  return function(dispatch) {
    dispatch(createVehicleRequest());
    axios
      .post("/vehicles", requestBody)
      .then(response => {
        //response.data
        console.log("createVehicle calling...");
        dispatch(createVehicleSuccess(response.data));
        dispatch(fetchVehiclesByUsername(""));
      })
      .catch(error => {
        // error.message
        dispatch(createVehicleFailure(error.message));
      });
  };
};

export const updateVehicle = requestBody => {
  return function(dispatch) {
    dispatch(updateVehicleRequest());
    axios
      .put("/vehicles", requestBody)
      .then(response => {
        //response.data
        console.log("createVehicle calling...");
        dispatch(updateVehicleSuccess(response.data));
        dispatch(fetchVehiclesByUsername(""));
      })
      .catch(error => {
        // error.message
        dispatch(updateVehicleFailure(error.message));
      });
  };
};

export const deleteVehicles = id => {
  console.log("requestBody:",id);
  return function(dispatch) {
    dispatch(deleteVehiclesRequest());
    axios
      .delete("/vehicles/"+id)
      .then(response => {
        //response.data
        console.log("createVehicle calling...");
        dispatch(deleteVehicleSuccess());
        dispatch(fetchVehiclesByUsername(""));
      })
      .catch(error => {
        // error.message
        dispatch(deleteVehiclesFailure(error.message));
      });
  };
};