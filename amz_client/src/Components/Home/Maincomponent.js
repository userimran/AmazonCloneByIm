import React, { useEffect } from 'react';
import Banner from './Banner';
import './home.css'
import Slide from './Slide';
import { useDispatch, useSelector } from 'react-redux';
import GetAllProduct from '../redux/actions/actions';

function Maincomponent() {
    const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(GetAllProduct())
  },[dispatch])

  const {result}  = useSelector((state) => state.Product)
   console.log("get product",result)

//   const { result,loading,error}  = getProduct
//   console.log("api se data aa rha h ",result)
    return (
        <>
            <div className='home_section' >
                <div className='banner_part'>
                    <Banner />
                </div>
                <Slide title="Deal of the day" products={result} />
                <Slide title="Today's Deal" products={result} />
                <Slide title="Best Seller" products={result} />
                <Slide title="Upto 80% off" products={result}  />
                
            </div>
        </>

    )
}

export default Maincomponent