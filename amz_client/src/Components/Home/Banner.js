import React from 'react'
// import Carousel from 'react-material-
import Carousel from 'react-bootstrap/Carousel'
import './banner.css';

const data = [
  "https://rukminim1.flixcart.com/flap/1680/280/image/1defb861e409319b.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/8d4150cc4f3f967d.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/1680/280/image/685712c6cefb3c02.jpg?q=50"
]

const Banner = () => {
  return (
    <>
      <Carousel className='carasousel'>
        {
          data.map((img, i) => (
            <Carousel.Item interval={1000}>
              <img
                className="banner_img"
                src={img}
                alt="First slide" />
            </Carousel.Item>
          ))
        }
      </Carousel>
    </>
  )
}

export default Banner