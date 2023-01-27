import { SIGN_IN_FAIL, SIGN_IN_REQUEST, SIGN_IN_SUCCESS } from "../Constant/AuthConstant";


const initialState = {
    loading: false,
    action: "Product",
    result: [],
    msg: "",
    error: "",
  };
  
  const AuthReducers = (state = initialState, action) => {
    switch (action.type) {
      case SIGN_IN_REQUEST:
        return {
          ...state,
          loading: action.payload,
        };
      case SIGN_IN_SUCCESS:
        return {
          ...state,
          result:action.payload,
          // loading: action.payload,
          msg: action.msg,
        };
      case SIGN_IN_FAIL:
        return {
          ...state,
          error: action.error,
          loading: action.payload,
          msg: action.msg,
        };
        default:
            return state;
        }
      
      };
export default AuthReducers;