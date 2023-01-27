import React, { useEffect, useState } from 'react'

 const Right = ({item}) => {
  const [price,setprice] = useState(0);

  useEffect(()=>{
    totalAmount()
  },[item])

  const totalAmount = () => {
    var price = 0;
    item.forEach(element => {
      price+= element!==null ? element?.price?.cost : 0;
    });
    setprice(price) 
  }



  return (
    <div className='right_buy'>
        <img src='' alt=''/>
        <div className='cost_right'>
            <p>Your Order is Eligible for Free Deleivery.</p><br/>
            <span style={{ color:"#565959"}}>Select this option at checkout.Details</span>
            <h3>Subtotal({item.length}): <span style={{fontWeight:700}}>₹ {price}</span></h3>
            <button className='rightbuy_btn'>Process To Buy</button>
            <div className='emi'>
                Emi Availble
            </div>
        </div>

    </div>
  )
}
export default Right