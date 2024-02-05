import React, { useEffect, useState } from 'react'
import img1 from "../images/poert1.png"
import img2 from "../images/port2.png"
import img3 from "../images/port3.png"


export default function Portfolio() {
  return <>
  <div className='port-page p-5'>
  <h1 className=' fw-bolder text-center '>PORTOFOLIO COMPONENT</h1>
  <div className='pt-4 text-center d-flex justify-content-center align-items-center '>
    <div className="line me-3 bg-black mt-1"></div>
    <i className='fa-solid fa-star fs-3  text-black'></i>
    <div className="line ms-3 bg-black  mt-1"></div>
  </div>
    <div className="container p-1">
        <div className="row gy-3 mt-2">

            <div className="col-md-4">
          <div  className="item position-relative "  data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <img src={img1} className='w-100 rounded-3 '  alt=""  />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item position-relative "  data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <img src={img2} className='w-100 rounded-3 ' alt="" />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item position-relative "  data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <img src={img3} className='w-100 rounded-3 ' alt="" />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item position-relative "  data-bs-toggle="modal" data-bs-target="#exampleModal1">
            <img src={img1} className='w-100 rounded-3 ' alt="" />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal2">
            <img src={img2} className='w-100 rounded-3 ' alt="" />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>

            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="item position-relative " data-bs-toggle="modal" data-bs-target="#exampleModal3">
            <img src={img3} className='w-100 rounded-3 ' alt="" />
            <div className="layer position-absolute  w-100 h-100 top-0 start-0 d-flex justify-content-center align-items-center ">
              <i className='fa-solid fa-plus fa-6x text-white '></i>
            </div>
          </div>
        </div>

<div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <img src={img1} className='w-100' alt="" />
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <img src={img2} className='w-100' alt="" />
    </div>
  </div>
</div>
<div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <img src={img3} className='w-100' alt="" />
    </div>
  </div>
</div>
        </div>
 
      </div>
    </div>  
  
  </>
}
