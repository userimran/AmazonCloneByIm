
import { React, useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import { LoginContext } from '../Context/ContextProvider'
import "./rightHeader.css"
import { NavLink } from 'react-router-dom';
import { Divider } from '@mui/material';

const RightHeader = ({logclose}) => {
    const { account, setAccount } = useContext(LoginContext)

    return (
        <>
            <div className="rightheader">
                <div className='right_nav'>
                    {
                        account ? <Avatar className='avtar2'>{account?.userLogin?.name[0].toUpperCase()}

                        </Avatar> :
                            <Avatar className='avtar'></Avatar>
                    }
                    {account?.userLogin?.name.toUpperCase()}
                  
                </div>
                <div className="nav_btn" onClick={()=>logclose()} >
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/">Shop By Category</NavLink>
                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />
                    <NavLink to="/">today's Deal</NavLink>
                    {
                        account ? <NavLink to="/buynow">Your Orders</NavLink> : <NavLink to="/login">Your Orders</NavLink>
                    }
                    <Divider style={{ width: "100%", marginLeft: "-20px" }} />
                    <NavLink to="/">Setting</NavLink>
                    <NavLink to="/">today's Deal</NavLink>
                </div>
            </div>
        </>
    )
}
export default RightHeader