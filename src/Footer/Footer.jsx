import React from 'react'

export default function Footer() {
  return <>
  <div className='footer p-5 '>
    <div className="container p-5 text-white ">
      <div className="row">

        <div className='col-md-4'>
          <div className="card1 mt-3 text-white ">

            <h3 className='text-uppercase fs-2 '>Location</h3>
            <p className='fs-4'>2215 John Daniel Drive</p>
            <p className='fs-4'>Clark, MO 65243</p>
          </div>

        </div>
        <div className='col-md-4'>
          <div className='card2 mt-3 text-center '>
            <h3 className='text-uppercase fs-2'>Around The Web</h3>
            <div className='icons'>
              <i className='fa-brands fa-facebook mx-1 '></i>
              <i className='fa-brands fa-twitter mx-1'></i>
              <i className='fa-brands fa-linkedin mx-1'></i>
              <i className='fa-solid fa-globe mx-1'></i>



            </div>
          </div>
        </div>
        <div className='col-md-4'>
          <div className='card3 mt-3'>
          <h3 className='text-uppercase fs-2'>About freelancer</h3>
          <p className='fs-4'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>


          </div>

        </div>
      </div>



    </div>
  </div>
  <div className='cpr text-center text-white fs-4 '>
    <p>Copyright © Your Website 2021</p>

  </div>
  
  </>
}
