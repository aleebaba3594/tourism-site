
import {Link} from "react-router-dom";
import React from 'react'

const ForgotPassword = () => {
  return (
    <div>
      <input type="text" placeholder="Enter your email" className='bg-green-400'/>
      <Link to="/checkResetOtp">
      <button className='px-4 py-2 bg-red-200 ml-4'>submit</button>
      </Link>
    </div>
  )
}

export default ForgotPassword
