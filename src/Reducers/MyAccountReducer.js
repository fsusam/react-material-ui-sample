import {
  CREATE_VEHICLE_REQUEST,
  CREATE_VEHICLE_SUCCESS,
  CREATE_VEHICLE_FAILURE,
  FETCH_VEHICLES_OF_USER_REQUEST,
  FETCH_VEHICLES_OF_USER_SUCCESS,
  FETCH_VEHICLES_OF_USER_FAILURE,
  UPDATE_VEHICLE_REQUEST,
  UPDATE_VEHICLE_SUCCESS,
  UPDATE_VEHICLE_FAILURE,
  DELETE_VEHICLES_REQUEST,
  DELETE_VEHICLES_SUCCESS,
  DELETE_VEHICLES_FAILURE,
  FILL_OUT_VEHICLE_FORM
} from "../Actions/MyAccountAction";

const initialState = {
  loading: false,
  vehicle: { make: "", model: "", year: "", price: "" },
  vehicles: [],
  error: "",
  isCompleted: false
};

const myAccountReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_VEHICLE_REQUEST:
      return { ...state, loading: true };
    case CREATE_VEHICLE_SUCCESS:
      return { ...state, loading: false, error: "" };
    case CREATE_VEHICLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FETCH_VEHICLES_OF_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_VEHICLES_OF_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        vehicle: { make: "", model: "", year: "", price: "" },
        vehicles: action.payload,
        error: ""
      };
    case FETCH_VEHICLES_OF_USER_FAILURE:
      return { ...state, loading: false, vehicles: [], error: action.payload };
    case UPDATE_VEHICLE_REQUEST:
      return { ...state, loading: true };
    case UPDATE_VEHICLE_SUCCESS:
      return { ...state, loading: false, error: "" };
    case UPDATE_VEHICLE_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case FILL_OUT_VEHICLE_FORM:
      if (action.payload) {
        return {
          ...state,
          vehicle: action.payload
        };
      } else {
        return {
          ...state,
          vehicle: { make: "", model: "", year: "", price: "" }
        };
      }
    case DELETE_VEHICLES_REQUEST:
      return { ...state, loading: true };
    case DELETE_VEHICLES_SUCCESS:
      return { ...state, loading: false, error: "" };
    case DELETE_VEHICLES_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default myAccountReducer;
