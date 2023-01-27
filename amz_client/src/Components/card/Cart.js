import { Divider } from '@mui/material'
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './card.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../Context/ContextProvider'


const Cart = () => {
const naviagte = useNavigate()
  const [indData, setindData] = useState([])
  const {account, setAccount} = useContext(LoginContext) 

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { id } = useParams()
  // console.log(id);

  useEffect(() => {
    getData()
  }, [id])

  const getData = async () => {
    return await axios.get(`http://localhost:8000/getproductsById/${id}`)
      .then((res) => {
        setindData(res.data)
      })


  }
  console.log("getProductById datas---->", indData)


  // add cart function 

  const addcarts = async (id) => {

    // console.log('-------------------------calling add card api');
    // console.log(`http://localhost:8000/addcart/${id}`)
    // let apiRes = await axios.get(`http://localhost:8000/addcart/${id}`, {
    //   Accept: "application/json",
    //   "Content-type": "application/json"
    // })
    // console.log(apiRes)

  
    const checkres = await fetch(`http://localhost:8000/addcart/${id}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        "Authorization": localStorage.getItem("token")
      },
      body: JSON.stringify(indData),
    })

    const data1 = await checkres.json()
    console.log("data1===============>", data1);

    if (checkres.status === 401 || !data1) {
      console.log("invalid User,and please login")
    } else {
     
      toast.success("Data added in your cart")
      setAccount(data1)
      // alert("data added in your cart")
    }
  }

  const BuyNow = ()=>{
    naviagte("/buynow")
  }
  return (
    <>
      <div className='cart_section' >
        {indData && Object.keys(indData).length &&
          <div className='cart_container'>
            <div className='left_cart'>
              <img src={indData.url} alt="cart_img" />
              <div className='cart_btn'>
                <button className='cart_btn1' onClick={() => addcarts(indData.id)}> Add To cart</button>
                <button className='cart_btn2' onClick={BuyNow}>Buy Now</button>
              </div>
            </div>
            <div className='right_cart'>
              <h3>{indData.title.shortTitle}</h3>
              <h4>{indData.title.longTitle}</h4>
              <Divider />
              <p className='mrp'> M.R.P : ₹ {indData.price.mrp}</p>
              <p>Deal of the Day: <span style={{ color: "#812704" }}> ₹ {indData.price.cost} </span> </p>
              <p>You Save: <span style={{ color: "#812704" }}> ₹ {indData.price.mrp - indData.price.cost}({indData.price.discount}) </span> </p>
              <div className='discount_box' >
                <h5>Discount :<span style={{ color: "#111" }} > {indData.discount
                }</span></h5>
                <h4>Free Delivary : <span style={{ color: "#111", fontWeight: 700 }}>Oct 8 - 21</span> Details</h4>
                <p>Fatest Delivary <span style={{ color: "#111", fontWeight: 700 }}>Tomorrow 11AM</span></p>
              </div>
              <p className='description' >About the iteam:<span style={{ color: "#565959", fontSize: 15, fontWeight: 600, letterSpacing: "0.5px" }}> This elsctric kettlen from Pigeon will soooon become a travelers best frient a hostellic saviour and an answer to all the midnight cravings .With this handy applience, you can boil water and use it to make instant noodle,pakets soup coffe and green tea </span></p>
            </div>
          </div>
        }
      </div>
      <ToastContainer />
    </>
  )
}

export default Cart
