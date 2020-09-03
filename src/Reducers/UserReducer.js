import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE
} from "../Actions/UserActions";

const initialState = {
  loading: false,
  user: { username: "", password: "", email: "", token: "" },
  isLoggedIn: false,
  error: ""
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_REQUEST:
      return { ...state, loading: true };
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
        error: ""
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
        user: { username: "", password: "", email: "", token: "" },
        error: action.payload
      };
      case SIGN_UP_REQUEST:
        return { ...state, loading: true };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: false,
          error: ""
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          loading: false,
          isLoggedIn: false,
          user: { username: "", password: "", email: "", token: "" },
          error: action.payload
        };  
      case UPDATE_USER_REQUEST:
        return { ...state, loading: true };
      case UPDATE_USER_SUCCESS:
        return {
          ...state,
          user: action.payload,
          isLoggedIn: false,
          error: ""
        };
      case UPDATE_USER_FAILURE:
        return {
          ...state,
          loading: false,
          isLoggedIn: false,          
          error: action.payload
        };
    default:
      return state;
  }
};

export default userReducer;
