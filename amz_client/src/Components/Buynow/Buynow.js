import { Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './buynow.css'
import Option from "./Option"
import Right from './Right'
import Subtotal from './Subtotal'

const Buynow = () => {
    const [cartdata, setCartdata] = useState([])
    console.log("cartdata ============>", cartdata);
    // console.log(cartdata[3].discount);
    console.log(cartdata.url);
    // console.log(cartdata.title.longTitle);


    const getdatabuy = async () => {
        const res = await fetch('http://localhost:8000/buynow', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-type": "application/json",
                "Authorization": localStorage.getItem("token")
            },
        })

        const data = await res.json()
        console.log("api data===============>", data);

        if (res.status !== 201) {
            console.log("error")
        } else {
            setCartdata(data.carts)
        }
    }

    useEffect(() => {
        getdatabuy()
    }, [])

    return (
        <>
            {
                cartdata.length ?
                    <div className="buynow_section">
                        <div className="buynow_container">
                            <div className="left_buy">
                                <h1>Shopping Cart</h1>
                                <p>Select all items</p>
                                <span className="leftbuyprice">Price</span>
                                <Divider />
                                {
                                    cartdata.map((e, key) => (
                                        e !== null ?
                                        <>
                                        <div key={key} className="item_containert">
                                            <img src={e?.url} alt="imgitem" />
                                            <div className="item_details">
                                                <h3>{e?.title?.longTitle}</h3>
                                                <h3>{e?.title?.shortTitle}</h3>
                                                <h3 className="diffrentprice">₹ 4049.00</h3>
                                                <p className="unusuall">Usually dispatched in 8 days.</p>
                                                <p>Eligible for FREE Shipping</p>
                                                <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="logo" />
                                                <Option id={e?.id}/>
                                            </div>
                                            <h3 className="item_price">cost Price:{e?.price?.cost}</h3>
                                        </div>
                                        <Divider />
                                        </>
                                        :<h1>No item in your cart</h1>
                                    ))
                                }
                                <Divider />
                                <Subtotal  item={cartdata} getdatabuy={getdatabuy}/>
                            </div>
                            <Right item={cartdata} />
                        </div>
                    </div> : ""
            }

        </>
    )
}
export default Buynow;
