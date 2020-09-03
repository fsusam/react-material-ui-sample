import axios from "axios";
export const FETCH_OFFERS_OF_VEHICLE_REQUEST = "FETCH_OFFERS_OF_VEHICLE_REQUEST";
export const FETCH_OFFERS_OF_VEHICLE_SUCCESS = "FETCH_OFFERS_OF_VEHICLE_SUCCESS";
export const FETCH_OFFERS_OF_VEHICLE_FAILURE = "FETCH_OFFERS_OF_VEHICLE_FAILURE";
export const DELETE_OFFER_REQUEST = "DELETE_OFFER_REQUEST";
export const DELETE_OFFER_SUCCESS = "DELETE_OFFER_SUCCESS";
export const DELETE_OFFER_FAILURE = "DELETE_OFFER_FAILURE";
export const SEND_OFFER_REQUEST = "SEND_OFFER_REQUEST";
export const SEND_OFFER_SUCCESS = "SEND_OFFER_SUCCESS";
export const SEND_OFFER_FAILURE = "SEND_OFFER_FAILURE";



export const fetchOffersOfVehicleRequest = () => {
  return {
    type: FETCH_OFFERS_OF_VEHICLE_REQUEST
  };
};

export const fetchOffersOfVehicleSuccess = offers => {
  return {
    type: FETCH_OFFERS_OF_VEHICLE_SUCCESS,
    payload: offers
  };
};

export const fetchOffersOfVehicleFailure = error => {
  return {
    type: FETCH_OFFERS_OF_VEHICLE_FAILURE,
    payload: error
  };
};

export const deleteOfferRequest = () => {
  return {
    type: DELETE_OFFER_REQUEST
  };
};

export const deleteOfferSuccess = offerId => {
  return {
    type: DELETE_OFFER_SUCCESS
  };
};

export const deleteOfferFailure = error => {
  return {
    type: DELETE_OFFER_FAILURE,
    payload: error
  };
};

export const sendOfferRequest = () => {
  return {
    type: SEND_OFFER_REQUEST
  };
};

export const sendOfferSuccess = offerId => {
  return {
    type: SEND_OFFER_SUCCESS
  };
};

export const sendOfferFailure = error => {
  return {
    type: SEND_OFFER_FAILURE,
    payload: error
  };
};


export const fetchOffersByVechileId = (vehicleId,history) => {
  return function(dispatch) {
    dispatch(fetchOffersOfVehicleRequest());
    axios
      .get("/offers/vehicle/"+vehicleId)
      .then(response => {
        //response.data        
        console.log("offers:",response.data)
        dispatch(fetchOffersOfVehicleSuccess(response.data));
        if(history)
          history.push("/offers")
      })
      .catch(error => {
        // error.message
        dispatch(fetchOffersOfVehicleFailure(error.message));
      });
  };
};


export const deleteOfferByOfferId = (offerId,vehicleId) => {
  return function(dispatch) {
    console.log("vehicle id:",vehicleId)
    dispatch(deleteOfferRequest());
    axios
      .delete("/offers/"+offerId)
      .then(response => {
        //response.data        
        dispatch(deleteOfferSuccess(response.data));
        dispatch(fetchOffersByVechileId(vehicleId,null))
      })
      .catch(error => {
        // error.message
        dispatch(deleteOfferFailure(error.message));
      });
  };
};

export const sendOffer = offer => {
  return function(dispatch) {
    dispatch(sendOfferRequest());
    axios
      .post("/offers/",offer)
      .then(response => {
        //response.data        
        dispatch(sendOfferSuccess(response.data));
        dispatch(fetchOffersByVechileId(offer.vehicleId,null))
      })
      .catch(error => {
        // error.message
        dispatch(sendOfferFailure(error.message));
      });
  };
};