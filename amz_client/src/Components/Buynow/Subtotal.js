import React, { useEffect, useState } from 'react'

 const Subtotal = ({item}) => {
const [price,setPrice] = useState(0)
// console.log("item value ========>",item)
useEffect(()=>{
  totalAmound()
},[item])

  const totalAmound = () => {
    var price = 0;
    // item.map((e)=> {
    //    price += e?.price?.cost
    // })
    item.forEach(element => {
      // console.log('--------------cst', element.price.cost);
      price += element!==null ? element?.price?.cost : 0;
    });
    // console.log('----------------price', price);
    setPrice(price)
  }
  return (

    <div className='sub_item'>
        <h3>Subtotal ({item.length}): <strong style={{fontWeight:700,color:"#111"}}>₹ {price}</strong></h3>
    </div>
    
  )
}
export default Subtotal;  
