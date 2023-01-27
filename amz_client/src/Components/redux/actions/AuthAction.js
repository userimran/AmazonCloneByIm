import { SIGN_IN_FAIL,SIGN_IN_SUCCESS } from "../Constant/AuthConstant";
import  axios  from "axios";
import { toast } from "react-toastify";
const SignInAction = (data) => {
    return function (dispatch) {
        axios.post("http://localhost:8000/login", {
        
        })
            .then((response) => {
                // console.log("ddddddddd",response)
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: response.data,
                });
                toast.success("Login Successfully!");
            })
            .catch((error) => {
                dispatch({
                    type: SIGN_IN_FAIL,
                    payload: error,
                });
                toast.warning(error);
            });
    };
}
export default SignInAction;