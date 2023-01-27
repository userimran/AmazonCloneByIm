import { combineReducers } from "redux";
import getProductReducers from "./reducer";
import AuthReducers from "./AuthReducer";



const rootReduser = combineReducers({
    Product:getProductReducers,
    Auth:AuthReducers,
})
export default rootReduser;