import { React, useContext, useEffect, useState } from 'react'
import "./navbar.css"
import amzon from "../amazon_PNG9.png";
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import { LoginContext } from '../Context/ContextProvider'
import Dropdown from 'react-bootstrap/Dropdown';
import  RightHeader  from './RightHeader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import GetAllProduct from '../redux/actions/actions';

function Navbar() {
    const token = localStorage.getItem("token")
// for searching Products state define here 
const [text,setText] = useState("")
// console.log(text)
const [liopen,setLiopen] = useState(true)
const {result}  = useSelector((state) => state.Product)



    const [anchorEl, setAnchorEl] =useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
   
const [dropen,setDroprn]= useState(false);
const handleDROpen = () => {
    setDroprn(true)
}
const handleDRClose = () => {
    setDroprn(false)
}

    const { account, setAccount } = useContext(LoginContext)
    console.log("navvvvvvv======>", account);
    // valid user = already login user
    const getdatabuy = async () => {
        const res = await fetch('http://localhost:8000/validUser', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
        })

        const data = await res.json()
        console.log("api valid user===============>", data);

        if (res.status !== 201) {
            console.log("error")
        } else {
            setAccount(data)
        }
    }

//    const LogOut = async() =>{
//         const res = await fetch("/logout", {
//             method: "GET",
//             headers: {
//                 Accept: "application/json",
//                 "Content-type": "application/json",
//                 "Authorization": localStorage.getItem("token")
//             },
//         })
    
//         const data3 = await res.json()
//         console.log("Logout ===============>", data3);
    
//         if (res.status !== 201) {
//             console.log("error")
//         } else {
//             setAccount(false)
//             toast.success("User LogOut")

//             localStorage.removeItem("token")
//         }
        
//    }

const LogOut = () => {
   
    localStorage.removeItem("token")
    setAccount(false)
    toast.success("User LogOut")
  
}

  const getText = (items) => {
    setText(items)
    setLiopen(false)
  }

    useEffect(() => {
        getdatabuy()
    }, [])
    
    return (
        <>
            <header>
                <nav>

                    <div className='left'>
                        <IconButton  className='hamburgur' onClick={handleDROpen}>
                            <MenuIcon  style={{ 'color': '#fff' }}  />
                         
                        </IconButton>
                        <Drawer open={dropen} onClose={handleDRClose} > 
                            <RightHeader logclose={handleDRClose} />
                        </Drawer>
                        <div className='navlogo'>
                            <NavLink to="/" ><img src={amzon} alt="azn" /></NavLink>
                        </div>

                        <div className="nav_searchbaar">
                            <input type="text" name="" id="" 
                            placeholder='Search Your Products'
                            onChange={(e)=>getText(e.target.value)}
                            />
                            <div className='search_icon'>
                                <SearchIcon id="search" />
                            </div>
                             {/*search filter */}
                            {
                                text &&
                                <>
                                <List className="extrasearch" hidden={liopen}>
                                {
                                     result.filter((product)=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product)=>(
                                     <ListItem>
                                     <NavLink to={`/getproductsById/${product.id}`} onClick={()=>setLiopen(true)}>
                                     {product.title.longTitle}
                                     </NavLink>
                                     </ListItem>
                                        // console.log("productData-------->",product.title.longTitle)
                                     ))

                                }
                                </List>
                                </>

                                //   <ListGroup className="extrasearch" hidden={liopen}>
                                //   {
                                //          result.filter((product)=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map((product)=>{
                                //             <ListGroup.Item>{product.title.longTitle}</ListGroup.Item>
                                //             // console.log("productData-------->",product.title.longTitle)
                                //          })
    
                                //     }
                                  
                                //   </ListGroup>

                            }
                            
                        </div>

                    </div>
                    <div className='right'>
                        <div className='nav_btn'>
                            <NavLink to='/login'>sign in</NavLink>
                        </div>

                        {
                            account ?
                                <NavLink to="/buynow">
                                    <div className="cart_btn">
                                  
                                        <Badge badgeContent={account?.userLogin?.carts?.length} color="primary">
                                        <i class="fa-solid fa-cart-shopping" id="icon"></i>
                                        </Badge>
                                        <p>Cart</p>
                                    </div>
                                </NavLink> :
                                <NavLink to="/login">
                                    <div className="cart_btn">
                                        <Badge badgeContent={0} color="primary">
                                            <i className="fas fa-shopping-cart" id="icon"></i>
                                        </Badge>
                                        <p>Cart</p>
                                    </div>
                                </NavLink>
                        }


                        {
                            account ? <Avatar className='avtar2'
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            >{account?.userLogin?.name[0].toUpperCase()}


                            </Avatar> :
                                <Avatar className='avtar'
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                                ></Avatar>
                        }
                    
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={()=>{LogOut();handleClose()}}>Logout</MenuItem>
                      </Menu>

                    </div>
                    <ToastContainer />
                </nav>

            </header>
        </>
    )
}

export default Navbar