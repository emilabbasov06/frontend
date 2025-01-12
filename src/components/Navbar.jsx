import React from 'react'
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="mp-top mp-box-shadow">
      <div>
        <FaUserAlt />
      </div>

      <div>
        <h2>Emil Abbasov</h2>
        <span className='user-id'>User ID: #3094289409834</span>
      </div>
    </div>
  )
}

export default Navbar