import React from 'react'

export default function Contact() {
  return <>
  <div className="contact mt-4 p-5 ">
  <h1 className=' fw-bolder text-center '>CONTACT SECTION</h1>
  <div className='pt-4 text-center d-flex justify-content-center align-items-center '>
    <div className="line me-3 bg-black mt-1"></div>
    <i className='fa-solid fa-star fs-3  text-black'></i>
    <div className="line ms-3 bg-black  mt-1"></div>
  </div>
    <div className="container mt-5 p-5">
    <input type="text" className="form-control shadow-none " placeholder=" User Name" aria-label="First name"/>
    <input type="number" className="form-control shadow-none " placeholder=" User Age" aria-label="First name"/>
    <input type="email" className="form-control shadow-none " placeholder=" User Email" aria-label="First name"/>
    <input type="password" className="form-control shadow-none " placeholder=" User Password" aria-label="First name"/>
    <button className='btn mt-4 text-white '>Send Message</button>
    </div>
  </div>
  </>
}
