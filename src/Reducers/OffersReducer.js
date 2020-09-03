import {
  FETCH_OFFERS_OF_VEHICLE_FAILURE,
  FETCH_OFFERS_OF_VEHICLE_SUCCESS,
  FETCH_OFFERS_OF_VEHICLE_REQUEST,
  DELETE_OFFER_FAILURE,
  DELETE_OFFER_SUCCESS,
  DELETE_OFFER_REQUEST
} from "../Actions/OffersActions";

const initialState = {
  loading: false,
  vehicleId: "",  
  offers: [],
  error: ""
};

const offersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_OFFERS_OF_VEHICLE_REQUEST:
      return { ...state, loading: true };
    case FETCH_OFFERS_OF_VEHICLE_SUCCESS:
      return {
        ...state,
        loading: false,        
        offers: action.payload.offers,
        vehicleId: action.payload.vehicleId,
        error: ""
      };
    case FETCH_OFFERS_OF_VEHICLE_FAILURE:
      return { ...state, loading: false, offers: [],vehicleId:"", error: action.payload };
    case DELETE_OFFER_REQUEST:
      return { ...state, loading: true };
    case DELETE_OFFER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: ""
      };
    case DELETE_OFFER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default offersReducer;
