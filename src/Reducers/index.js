import finderReducer from "./FinderReducer";
import myAccountReducer from "./MyAccountReducer"
import userReducer from "./UserReducer"
import offersReducer from "./OffersReducer"
import { combineReducers } from "redux";

const allReducers = combineReducers({
  finderReducer,
  myAccountReducer,
  userReducer,
  offersReducer
});

export default allReducers;
