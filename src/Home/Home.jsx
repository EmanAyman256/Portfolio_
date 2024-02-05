import React from 'react'
import avatar from "../images/avataaars.svg"

export default function Home() 
{

  return <>
  <div className='main text-center p-5'>
    <img src={avatar} className='m-2 w-25' alt="" />
    <h1 className='text-white fw-bolder '>START FRAMEWORK</h1>
    <div className='pt-4 text-center d-flex justify-content-center align-items-center '>
    <div className="line me-3  "></div>
    <i className='fa-solid fa-star fs-3 text-white '></i>
    <div className="line ms-3 "></div>
    </div>
    <div className='text-white fs-3'>Graphic Artist - Web Designer - Illustrator</div>
  </div>
  
  </>


}
  