import React from 'react'

const About = () => {
  return (
    <div className='container my-5 py-5'>
      <div className='row'>
        <div className='col-md-6'>
          <h1 className='display-5 fw-bold mb-4'>About The Aura</h1>
          <p className='lead'>
            Welcome to The Aura, your premier destination for curated
            fashion and high-quality goods. We believe that every item you wear
            should tell a story and reflect your unique personality.
          </p>
          <p>
            Founded in 2025, we have sourced the finest products from across the
            globe to ensure that our collection meets the highest standards of
            style, durability, and comfort. Whether you are looking for casual
            wear or sophisticated accessories, we have something special for
            you.
          </p>
          <div className='mt-4'>
            <h5 className='fw-bold'>Our Mission</h5>
            <p>
              To provide high-quality, sustainable fashion that makes everyone
              feel confident in their own skin.
            </p>
          </div>
        </div>
        <div className='col-md-6'>
          <img
            src='https://images.unsplash.com/photo-1441986300917-64674bd600d8'
            alt='Storefront'
            className='img-fluid rounded shadow'
          />
        </div>
      </div>
    </div>
  )
}

export default About
