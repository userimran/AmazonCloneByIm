import React, { useState ,useContext} from 'react'
import './sign.css';
import amzon from "../amazon_PNG9.png";
import { NavLink } from 'react-router-dom';

// import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginContext } from '../Context/ContextProvider'
// import SignInAction from '../redux/actions/AuthAction';
const SignIn = () => {
  // const dispatch = useDispatch();
  const {account, setAccount} = useContext(LoginContext) 
  const [logdata, setData] = useState({
    email: "",
    password: ""
  })
  console.log(logdata)

  const adddata = (e) => {
    const { name, value } = e.target
    setData(() => {
      return {
        ...logdata,
        [name]: value
      }
    })
  }

  const sendData = async (e) => {
    e.preventDefault()
    const { email, password } = logdata
    const res = await fetch("http://localhost:8000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })
    })

    const data = await res.json()
    console.log("data-----------> ", data)
    

  
  
    if (res.status === 400 ||!data)  {
      console.log("Invalid details")
      // alert(data.error)
      toast.error(data.error)
    } else {
      console.log("data valid")
      // alert("user Login successfully")
      const token = data.userLogin.tokens[0].token
      localStorage.setItem("token", token);

      toast.success("User Login SuccesFully")
      setAccount(data)
      setData({ email: "", password: "" })
    }
  }

// =========== sign_In using redux (work in process) ===============>
// const sendData = (e) => {
//   e.preventDefault();
//   dispatch(SignInAction(logdata));
// }


  return (
    <>
      <section>
        <div className='sign_container'>

          <div className='sign_header'>
            <img src={amzon} alt='amzon_logo' />
          </div>
          <div className='sign_form'>
            <form method='POST'>
              <h1>Sign In</h1>
              <div form_data>
                <label htmlFor='email'>Email</label>
                <input type="text" onChange={adddata} value={logdata.email} name='email' placeholder='Enter Your Email' id='email' />
              </div>
              <div form_data>
                <label htmlFor='password'>Password</label>
                <input type="password" onChange={adddata} value={logdata.password} name='password' placeholder='At least char' id='password' />
              </div>
              <div>
                <button className='signin_btn' onClick={sendData} >Continue</button>
              </div>
            </form>
          </div>
          <ToastContainer />
          <div className='create_accountInfo'>
            <p>New To Amazon</p>
            <NavLink to="/ragister"><button>Create Your Amazon Account </button></NavLink>
          </div>

        </div>

      </section>

    </>
  )
}
export default SignIn