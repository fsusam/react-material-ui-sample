import axios from "axios";
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST";
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS";
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE";
export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE";
export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";


export const signInRequest = () => {
  return {
    type: SIGN_IN_REQUEST
  };
};

export const signInSuccess = vehicles => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: vehicles
  };
};

export const signInFailure = error => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error
  };
};

export const signUpRequest = () => {
  return {
    type: SIGN_UP_REQUEST
  };
};

export const signUpSuccess = vehicles => {
  return {
    type: SIGN_UP_SUCCESS,
    payload: vehicles
  };
};

export const signUpFailure = error => {
  return {
    type: SIGN_UP_FAILURE,
    payload: error
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST
  };
};

export const updateUserSuccess = vehicles => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: vehicles
  };
};

export const updateUserFailure = error => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error
  };
};

export const signIn = (user, history) => {
  return function(dispatch) {
    dispatch(signInRequest());
    axios
      .post("/user-access/sign-in", user)
      .then(response => {
        //response.data
        dispatch(signInSuccess(response.data));
        history.push("/");
      })
      .catch(error => {
        // error.message
        dispatch(signInFailure(error.message));
      });
  };
};

export const signUp = (user, history) => {
  return function(dispatch) {
    dispatch(signUpRequest());
    axios
      .post("/user-access/sign-up", user)
      .then(response => {
        //response.data
        dispatch(signUpSuccess(response.data));
        history.push("/sign-in");
      })
      .catch(error => {
        // error.message
        dispatch(signUpFailure(error.message));
      });
  };
};

export const updateUser = user => {
  return function(dispatch) {
    console.log("UserUpdate:",user)
    dispatch(updateUserRequest());
    axios
      .put("/users", user)
      .then(response => {
        //response.data
        dispatch(updateUserSuccess(response.data));        
      })
      .catch(error => {
        // error.message
        dispatch(updateUserFailure(error.message));
      });
  };
};