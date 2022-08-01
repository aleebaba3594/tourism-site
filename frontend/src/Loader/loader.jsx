
import React from 'react'
import { ThreeDots } from  'react-loader-spinner'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center'>
        <ThreeDots
    height = "180"
    width = "180"
    radius = "30"
    color = '#76C0FA'
    ariaLabel = 'three-dots-loading'     
    // wrapperStyle
    // wrapperClass
  />
    </div>
  )
}

export default Loader