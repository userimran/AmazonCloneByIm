import { GETALL_PRODUCT_FAIL, GETALL_PRODUCT_REQUEST, GETALL_PRODUCT_SUCCESS } from "../Constant/ProductConstant";

const initialState = {
    loading: false,
    action: "Product",
    result: [],
    msg: "",
    error: "",
  };
  
  const getProductReducers = (state = initialState, action) => {
    switch (action.type) {
      case GETALL_PRODUCT_REQUEST:
        return {
          ...state,
          loading: action.payload,
        };
      case GETALL_PRODUCT_SUCCESS:
        return {
          ...state,
          result:action.payload,
          // loading: action.payload,
          msg: action.msg,
        };
      case GETALL_PRODUCT_FAIL:
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
export default getProductReducers;