import React from 'react'
import './footer.css'


const Footr = () => {
  return (
    <>
    <footer>


    <div className='footer_container'>
        <div className='footer_details_one'>
            <h3>Get To Know Us</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Press Releases</p>
            <p>Amazon Cares</p>
        </div>
        <div className='footer_details_one'>
            <h3>Connect Wit Us</h3>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>instagram</p>
            
        </div>
        <div className='footer_details_one forres'>
            <h3>Make Money With Us</h3>
            <p>About</p>
            <p>Careers</p>
            <p>Careers</p>
        </div>
    </div>
    <div className='lastdetails'>
        <img src="./amazon_PMG25.png" alt=''/>
        <p>Condition of Use  sale       Privacy Notice          interest-based Ads           1996-2022</p>
    </div>
    </footer>
    </>
  )
}

export default Footr