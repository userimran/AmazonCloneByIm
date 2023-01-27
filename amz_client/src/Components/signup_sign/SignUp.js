import React, { useState } from 'react'
import './sign.css'
import amzon from "../amazon_PNG9.png";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const URL = "http://localhost:8000"

const SignUp = () => {
const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: ""
  })
  // console.log(user)
  const addUser = (e) => {
    const { name, value } = e.target
    setUser(() => {
      return {
        ...user,
        [name]: value
      }
    })
  }

  // const sendData = async (e) => {
  //   e.preventDefault()
  //   const { name, email, phone, password, cpassword } = user;
  //   const res = await fetch("ragister", {
  //     method:"POST",
  //     headers: {
  //       "content-Type":"application/json"
  //     },
  //     body:JSON.stringify({
  //       name, email, phone, password, cpassword
  //     })
  //   });
  //   const data = await res.json()
  //   console.log(data)
  // }

  const sendData = (e) => {
    e.preventDefault()
    const { name, email, phone, password, cpassword } = user;
   

    axios.post(`${URL}/ragister`, {
      name, email, phone, password, cpassword 
    })
    .then((res) =>{
      // let result = res.json()
      console.log("api response datas---->",res)
      if(res.status === 422 ){
        toast.warning("No data")
      }else{
        toast.success("Ragistration has been SuccessFully!!! Plz login")
        setUser({...user ,name:"",email:"",phone:"",password:"",cpassword:""})
      }
    })
    

  

  }

    return (
      <>
        <section>
          <div className='sign_container'>

            <div className='sign_header'>
              <img src={amzon} alt='amzon_logo' />
            </div>
            <div className='sign_form'>
              <form method='POST'>
                <h1>Sign Up</h1>
                <div form_data>
                  <label htmlFor='name'>Your Name</label>
                  <input type="text" onChange={addUser} value={user.name} name='name' placeholder='Enter Your Name' id='fname' />
                </div>
                <div form_data>
                  <label htmlFor='email'>Email</label>
                  <input type="text" name='email' onChange={addUser} value={user.email} placeholder='Enter Your Email' id='email' />
                </div>
                <div form_data>
                  <label htmlFor='phone'>Phone</label>
                  <input type="number" name='phone' onChange={addUser} value={user.phone} placeholder='Enter Your Phone' id='phone' />
                </div>
                <div form_data>
                  <label htmlFor='password'>Password</label>
                  <input type="password" name='password' onChange={addUser} value={user.password} placeholder='At least char' id='password' />
                </div>
                <div form_data>
                  <label htmlFor='cpassword'>Confirm Password</label>
                  <input type="password" name='cpassword' onChange={addUser} value={user.cpassword} placeholder='Confirm your password' id='cpassword' />
                </div>
                <div>
                  <button className='signin_btn' onClick={sendData}>Continue</button>
                  <div className='signin_info'>
                    <p>Already Have an account?</p>
                    <NavLink to="/login">sign In</NavLink>
                  </div>
                </div>
              </form>
            </div>
            <ToastContainer />

          </div>

        </section>


      </>
    )
  }

  export default SignUp;