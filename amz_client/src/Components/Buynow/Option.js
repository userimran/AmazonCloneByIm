import axios from 'axios';
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// get props from Buynow
 const Option = ({id,getdatabuy}) => {
  
  const RemoveItem = async(req,res) => {
    // alert(id)
    try {
      
      const res = await fetch(`/removeItem/${id}`,{
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Authorization": localStorage.getItem("token")
        },
      })
     
      const data = await res.json() 
      console.log("delete data =====>",data)
      
      if(res.status === 400 || !data){
        alert("Remove Item error")
      }else{
        console.log("Item deleted")
       getdatabuy();
        toast.success("Delete Item  SuccesFully")
      }
    } catch (error) {
      console.log("RemoveItem Error=======>",error)
    }
  }
  





  

  return (
    <div className='add_remove_select' >
        <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        </select>
        <p style={{cursor:"pointer"}} onClick={()=>RemoveItem(id)} >Delete</p><span>|</span>
        <p className='forremovemedia'>Save Or Later </p><span>|</span>
        <p className='forremovemedia'>See More Like</p>
        <ToastContainer />
    </div>

  )
}
export default Option
