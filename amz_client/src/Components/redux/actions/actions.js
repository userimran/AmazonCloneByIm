import { GETALL_PRODUCT_FAIL, GETALL_PRODUCT_REQUEST, GETALL_PRODUCT_SUCCESS } from "../Constant/ProductConstant";
import axios from "axios";

// const url = "http://localhost:8000/getproducts";

const GetAllProduct = () => {
    return function (dispatch) {
        axios.get("http://localhost:8000/getproducts", {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                // Authorization: 'Bearer '+ LS_SERVICE.get('HEADER_TOKEN'),
            },
        })
            .then((response) => {
                // console.log("ddddddddd",response)
                dispatch({
                    type: GETALL_PRODUCT_SUCCESS,
                    payload: response.data,
                });
            })
            .catch((error) => {
                dispatch({
                    type: GETALL_PRODUCT_FAIL,
                    payload: error,
                });
            });
    };
}



//     return function (dispatch) {
//         dispatch({
//             type:GETALL_PRODUCT_REQUEST,
//             payload:true,
//         })

//         let OPTION = {
//             url: `http://localhost:8000/getproducts`,
//             method: "GET",
//             headers: {
//               "content-type": "application/json",
//             },
//           };

//         axios(OPTION)
//         .then((res)=>{
//             console.log('res------', res );
//             dispatch(GetAllProductPre(res.data))
//         })
//         .catch((error)=>{
//             dispatch({
//                 type:GETALL_PRODUCT_FAIL,
//                 payload:false,
//                 error:error,
//                 msg:"failed to load information",
//             });
//         });
    
//     };
// };

// export const GetAllProductPre = (data) => {
//     return {
//         type:GETALL_PRODUCT_SUCCESS,
//         result:data,
//         payload:false,
//         msg:"SUCCESS",
//     }
// }

export default GetAllProduct;